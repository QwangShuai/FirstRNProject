import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight,AsyncStorage} from 'react-native';
import ToolBar from '../components/ToolBar';
import MyFriendsRememberItem from '../components/MyFriendsRememberItem';
import md5 from "react-native-md5";
const Buffer = require('buffer').Buffer;
import MyInputDialog from "../components/MyInputDialog";
const Stylecss = require('../common/Stylecss');
import UploadSuccess from '../components/UploadSuccess';
export default class Initiatives extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    pfID:0,
                    pftitle: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
                    pfpic: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    pfgotime:'开始时间  :  2018.01.01',
                    pfendtime:'结束时间  :  2018.04.20',
                    pfspend:'人均费用  :  ￥888.88',
                    pflook:'浏览:1234',
                    join_num:'报名人数  :  25',
                    focusOn:'关注:10000',
                },
            ],
            itemID:0,
            isShowSuccess:false,
            position:0,
        };
    }
    backClick() {
        this.props.navigation.goBack()
    }
    itemClick(item) {
        switch (item.key) {
            case 0:

                break;
        }
    }
    jump(pfID,index){
        console.log('活动ID：',pfID);
        this.props.navigation.navigate('InitiativesDetails',{pfID:pfID});
    }
    componentWillMount() {
        console.log('是否执行','------');
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_activity/activity_list');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("user_id", 7);
                    fetch(global.commons.baseurl+'action/ac_activity/activity_list',{
                        method:'POST',
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            console.log('responseData',responseData);
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            if (result.code===200){
                                console.log('数据呢',result.obj[0].pfpic);
                                this.setState({
                                    itemInfo:result.obj
                                })
                            } else{
                                console.log('responseData',result.message);
                            }

                            console.log('responseData',result);
                        })
                    // .catch((error)=>{console.error('error',error)});
                } else {
                    this.props.navigation.navigate('Home',{position:'Initiatives'});
                }
            } else {
                this.props.navigation.navigate('Home',{position:'Initiatives'});
            }
        })
    }
    inputSignResult(sign) {
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_activity/activity_cancel');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        formData.append('pfID',this.state.itemID);
        formData.append('info',sign);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("user_id", 7);
                    fetch(global.commons.baseurl+'action/ac_activity/activity_cancel',{
                        method:'POST',
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            if (result.code===200){
                                this.setState({
                                    isShowSuccess:true,
                                    isInputShow:false,
                                });
                            }
                            console.log('responseData',result);
                        })
                } else {
                    this.props.navigation.navigate('Home',{position:'Initiatives'});
                }
            } else {
                this.props.navigation.navigate('Home',{position:'Initiatives'});
            }
        })
    }
    deleteItem(){

    }
    teamInsertText(){

    }
    uploadSuccess(){
        this.state.itemInfo.splice(this.state.position, 1);
        let data = this.state.itemInfo.concat();
        this.setState({
            itemInfo: data,
            isShowSuccess:false,
        });
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'我的友记'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item,index}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <MyFriendsRememberItem position={index} deleteItem={this.deleteItem.bind(this)} teamInsertText={this.teamInsertText.bind(this)} jump={this.jump.bind(this)} itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    // keyExtractor={item => item.key.toString()}
                ></FlatList>
                <UploadSuccess isShow={this.state.isShowSuccess} callBack={this.uploadSuccess.bind(this)} title='删除友记成功'/>
            </View>
        )
    }
}