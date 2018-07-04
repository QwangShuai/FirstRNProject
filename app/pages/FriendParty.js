import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, PixelRatio, TextInput, FlatList,RefreshControl} from 'react-native';
import FriendPartySwiperBanner from '../components/FriendPartySwiperBanner';
import FriendPartyItem from '../components/FriendPartyItem';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
let pageNo = 1;//当前第几页
let totalPage=5;//总的页数
let itemNo=0;//item的个数
let key = null;
let app = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530529649183&di=fac6809726ec7cac3905ce1dc6480831&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png";
export default class FriendParty extends Component {
    constructor(props) {
        super(props);
        this.state={
            items: [
                /*{
                    key: 0,
                    imageURL: require('../res/images/guangzhou.jpg'),
                    totalNum:10,
                    joinNum:4,
                    article: {
                        title: '标题1',
                        content: '当地时间12日上午，朝鲜最高领导人金正恩与美国总统特朗普在新加坡嘉佩乐酒店举行首次会晤，双方握手致意。这是在任的朝美领导人数十年来首次会晤及握手。',
                        date: '2018-6-14',
                        visitorsNum: 15600,
                        messageNum: 1200,
                    },
                    userInfo: {
                        userName: '爱吃土豆的西瓜',
                        userLevel: 'LV 1',
                        headImagePath: require('../res/images/head_image.png'),
                        isAttention:false,
                    },
                    attentionUser:[
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png')
                    ],
                },
                {
                    key: 1,
                    imageURL: require('../res/images/4.jpg'),
                    totalNum:100,
                    joinNum:40,
                    article: {
                        title: '标题',
                        content: '当地时间12日上午，朝鲜最高领导人金正恩与美国总统特朗普在新加坡嘉佩乐酒店举行首次会晤，双方握手致意。这是在任的朝美领导人数十年来首次会晤及握手。',
                        date: '2018-6-14',
                        visitorsNum: 15600,
                        messageNum: 1200,
                    },
                    userInfo: {
                        userName: '爱吃土豆的西瓜',
                        userLevel: 'LV 1',
                        headImagePath: require('../res/images/head_image.png'),
                        isAttention:false,
                    },
                    attentionUser:[
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/article.png'),
                        require('../res/images/article.png'),
                        require('../res/images/head_image.png'),
                    ],
                },{
                    key: 2,
                    imageURL: require('../res/images/shanghai.jpg'),
                    totalNum:10,
                    joinNum:4,
                    article: {
                        title: '标题',
                        content: '当地时间12日上午，朝鲜最高领导人金正恩与美国总统特朗普在新加坡嘉佩乐酒店举行首次会晤，双方握手致意。这是在任的朝美领导人数十年来首次会晤及握手。',
                        date: '2018-6-14',
                        visitorsNum: 15600,
                        messageNum: 1200,
                    },
                    userInfo: {
                        userName: '爱吃土豆的西瓜',
                        userLevel: 'LV 1',
                        headImagePath: require('../res/images/head_image.png'),
                        isAttention:false,
                    },
                    attentionUser:[
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png'),
                        require('../res/images/head_image.png')
                    ],
                }*/

            ],
            refreshing: false,
            showFoot:0, // 控制foot， 0：隐藏footer  1：已加载完成,没有更多数据   2 ：显示加载中
        }

    }
//网络请求——获取第pageNo页数据
    fetchData(pageNo) {
        let formData = new FormData();
        formData.append("page", pageNo);
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_activity/activity_all_list');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_activity/activity_all_list',{
            method:'POST',
            body:formData,
        })
            .then((response) => response.text() )
            .then((responseData)=>{
                var bf = new Buffer(responseData , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                let data = result.obj;
                let dataBlob = [];
                let attentionUser=null;
                if (key===null){
                    var j = -1;
                }else{
                    var j = key;
                }
                console.log('responseData',data);
                for(var i = 0;i<data.length;i++){
                    for(var a = 0;a<data[i].all_u_pic.length;a++){
                        data[i].all_u_pic[a] = {uri:data[i].all_u_pic[a]};
                    }
                    attentionUser = data[i].all_u_pic;
                    j++;
                    this.state.items.push(
                        {
                            key: j,
                            imageURL: {uri:data[i].pfpic},
                            totalNum:data[i].pfpeople,
                            joinNum:data[i].have_num,
                            article: {
                                title: data[i].pftitle,
                                content: data[i].pfcontent,
                                date: '2018-6-14',
                                visitorsNum: 15600,
                                messageNum: 1200,
                            },
                            userInfo: {
                                userName: data[i].username===''?"暂无***领队":data[i].username,
                                userLevel: data[i].usergrade===null?"LV0":"LV"+data[i].usergrade,
                                headImagePath: {uri:data[i].upicurl===''?app:data[i].upicurl},
                                isAttention:false,
                            },
                            attentionUser
                        }
                        );
                }
                console.log('responseData',this.state.items);
                if(data.length===0){
                    this.setState({
                        showFoot:1,
                    });
                }
                if(key===null){
                    key = j;
                }
                let DateInfo = this.state.items.concat();
                this.setState({
                    items: DateInfo
                });

            })
            .catch((error)=>{console.error('error',error)});
    }
    componentDidMount() {
        //请求数据
        this.fetchData( pageNo );
    }
    queryDate() {

    }
    _onEndReached(){
        pageNo++;
        //底部显示正在加载更多数据
        this.setState({showFoot:2});
        //获取数据
        this.fetchData( pageNo );
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
           /* return (
                <View style={{height:UtilScreen.getHeight(110),width:'100%',backgroundColor:"#efeff4"}}>
                    <ActivityIndicator
                        size={"large"}
                        color={'#6435c9'}
                    />
                </View>);*/
        }else if(this.state.showFoot===0){
            return (
                <View>
                    <Text></Text>
                </View>
            );
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'友聚'} isShowBack={false} />
                <View style={{backgroundColor: '#fff', flex:1}}>
                    <FlatList
                        ListHeaderComponent={<FriendPartySwiperBanner/>}
                        data={this.state.items}
                        renderItem={({item,index}) => {
                            return (
                                <FriendPartyItem item={item}  index={index}/>
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
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})


