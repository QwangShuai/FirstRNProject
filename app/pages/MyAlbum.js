import React, { Component } from 'react';
import {View,Text,StyleSheet,AsyncStorage, Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import MyAlbumGridView from '../components/MyAlbumGridView';
const Stylecss = require('../common/Stylecss');
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
export default class MyAlbum extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
             /* {
                    key:4,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    date: '2017年2月1日',
                },
                {
                    key:5,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    date: '2017年2月1日',
                },
                {
                    key:2,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    date: '2017年2月1日',
                },*/
               /* {
                    key:0,
                    url:{uri:'http://47.92.136.19/uploads/header/2018/06/29/31b0b776274bcc59a72a6566bb53e79d15302364368.jpg'},
                    date: '2017年2月1日',
                }*/
            ],
        }
    }

    backClick(){
        this.props.navigation.navigate('Set');
    }
    login(){
        this.props.navigation.navigate('Home');
    }
    selectImages(images){
        console.log(images)
    }
    componentWillMount() {
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/AlbumList');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/AlbumList',{
                        method:'POST',
                        headers:{
                            'Content-Type':'multipart/form-data',
                        },
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            for(var i = 0;i<result.obj.length;i++){
                                this.state.itemInfo.push({key:i, url:{uri:result.obj[i].upicurl}, date: result.obj[i].utime,});
                            }
                            console.log('responseData',this.state.itemInfo);
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'我的相册'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <MyAlbumGridView itemInfo={this.state.itemInfo} selectImages={this.selectImages.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    agreementText:{
        fontSize:16,
        width:'100%',
        color:'#333333',
        textAlign:'center',
        alignSelf:'center',
    },
    infoText:{
        fontSize:16,
        width:UtilScreen.getWidth(632),
        marginLeft:UtilScreen.getWidth(60),
        color:'#333333',
    }
})