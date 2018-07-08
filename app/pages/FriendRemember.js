import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
    TextInput,
    Alert,
    ActivityIndicator,
    FlatList,
    RefreshControl,
    AsyncStorage
} from 'react-native';

import UtilScreen from '../util/UtilScreen';
import ToolBar from '../components/ToolBar';
import FriendRememberItem from '../components/FriendRememberItem';
import FriendRemenberSwiperBanner from '../components/FriendRemenberSwiperBanner';
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
let pageNo = 1;//当前第几页
let key = null;
let app = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530529649183&di=fac6809726ec7cac3905ce1dc6480831&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png";
export default class FriendRemember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            refreshing: false,
            showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
        }


    }
    componentWillMount(){
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    console.log(result);
                    this.ListInfo(result,pageNo);
                } else {
                    this.ListInfo(0,pageNo);
                }
            } else {
                this.ListInfo(0,pageNo);
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }
    ListInfo(uid,pageNo){
        let formData = new FormData();
        formData.append('userId',uid);
        formData.append('page',pageNo);
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_article/article_list');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_article/article_list', {
            method: "POST",
            body: formData
        }).then(response => response.text())
            .then(responseJson => {
                var bf = new Buffer(responseJson , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                if(result.obj.length===0){
                    this.setState({
                        showFoot:1,
                    });
                }
                if (key===null){
                    var j = -1;
                }else{
                    var j = key;
                }
                for(var i = 0;i<result.obj.length;i++){
                    j++;
                    this.state.items.push(
                        {
                            key: j,
                            imageURL: {uri:result.obj[i].fmpic},
                            article: {
                                title: result.obj[i].fmtitle,
                                content: result.obj[i].fmcontent,
                                date: result.obj[i].fmtime,
                                visitorsNum: result.obj[i].fmlook,
                                messageNum: result.obj[i].fmcomment,
                            },
                            userInfo: {
                                userName: result.obj[i].username,
                                userLevel: 'LV '+result.obj[i].usergrade,
                                headImagePath: {uri:result.obj[i].upicurl===''?app:result.obj[i].upicurl},
                                isAttention:true,
                            }
                        }
                    );
                    if(key===null){
                        key = j;
                    }
                    let DateInfo = this.state.items.concat();
                    this.setState({
                        items: DateInfo
                    });
                }
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    _onEndReached(){
        pageNo++;
        //底部显示正在加载更多数据
        this.setState({showFoot:2});
        //获取数据
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    console.log(result);
                    this.ListInfo(result,pageNo);
                } else {
                    this.ListInfo(0,pageNo);
                }
            } else {
                this.ListInfo(0,pageNo);
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })

    }
    _renderFooter() {
        if (this.state.showFoot===1) {
            return (
                <View style={{height:UtilScreen.getHeight(130),width:'100%',backgroundColor:"#efeff4",justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:UtilScreen.getWidth(600),height:1,backgroundColor:'#c8c8c8'}}/>
                    <Text style={{position:'absolute',color:'#666',fontSize:15,backgroundColor:'#efeff4',paddingLeft:UtilScreen.getWidth(20),paddingRight:UtilScreen.getWidth(20)}}>{'已经到底了'}</Text>
                </View>);
        } else if(this.state.showFoot===2){
            return (
                <View style={{height:UtilScreen.getHeight(130),width:'100%',backgroundColor:"#efeff4",justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:UtilScreen.getWidth(600),height:1,backgroundColor:'#c8c8c8'}}/>
                    <Text style={{position:'absolute',color:'#666',fontSize:15,backgroundColor:'#efeff4',paddingLeft:UtilScreen.getWidth(20),paddingRight:UtilScreen.getWidth(20)}}>{'正在加载数据...'}</Text>
                </View>);
        }else if(this.state.showFoot===0){
            return (
                <View>
                    <Text></Text>
                </View>
            );
        }
    }

    queryDate() {

    }
    clickAttention(index){
        this.state.items[index].isAttention =  !this.state.items[index].isAttention;
        let data = this.state.items.concat();
        this.setState({items: data});
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'友记'} isShowBack={false}/>
                <View style={{backgroundColor: '#fff', flex:1}}>
                    <FlatList
                        ListHeaderComponent={<FriendRemenberSwiperBanner/>}
                        data={this.state.items}
                        renderItem={({item,index}) => {
                            return (
                                <FriendRememberItem item={item} clickAttention={this.clickAttention.bind(this)} index={index}/>
                            );
                        }}
                        keyExtractor={item => item.key.toString()}
                        refreshControl={
                            <RefreshControl
                                tintColor={'red'}
                                refreshing={this.state.refreshing}
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                onRefresh={this.queryDate.bind(this, 0)}
                            />}
                        ListFooterComponent={this._renderFooter.bind(this)}
                        onEndReached={this._onEndReached.bind(this)}
                        onEndReachedThreshold={0.1}
                    ></FlatList>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


