import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight,AsyncStorage} from 'react-native';
import ToolBar from '../components/ToolBar';
import InitiativesItem from '../components/InitiativesItem';
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
            isInputShow:false,
            inputSignProps: {
                title: '取消原因',
                placeholder: '30个字符以内，仅可以输入汉字、字母、数字或下划线',
                maxSize: 30,
            },
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
    enterChat(){
        alert('点击了进入了聊天室')
    }
    cancleActivities(pfID,index){
        this.setState({
            isInputShow:true,
            itemID:pfID,
            position:index,
        })
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
                <ToolBar title={'发起的活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item,index}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <InitiativesItem position={index} enterChat={this.enterChat.bind(this)} cancleActivities={this.cancleActivities.bind(this)} jump={this.jump.bind(this)} itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    // keyExtractor={item => item.key.toString()}
                ></FlatList>
                <MyInputDialog isShow={this.state.isInputShow} callBack={this.inputSignResult.bind(this)}
                               onCoverPress={()=>this.setState({isInputShow: false})}
                               inputProps={this.state.inputSignProps}/>
                <UploadSuccess isShow={this.state.isShowSuccess} callBack={this.uploadSuccess.bind(this)} title='取消活动成功'/>
            </View>
        )
    }
}