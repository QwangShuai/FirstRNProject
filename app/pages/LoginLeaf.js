import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,Alert,AsyncStorage,TouchableHighlight} from 'react-native';
// import App from './App';
import {StackNavigator} from 'react-navigation';
import Registered from './Registered';
import ToolBar from '../components/ToolBar';
const Stylecss = require('../common/Stylecss');
import UtilScree from '../util/UtilScreen';
import md5 from "react-native-md5";
import ComMon from '../util/ComMon';
import UtilScreen from '../util/UtilScreen';
const Buffer = require('buffer').Buffer;
export default class LoginLeaf extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this.state = {
            inputedNum:'',
            inputedPW:'',
        };
        this.updatePW = this.updatePW.bind(this);
        this.updateNum = this.updateNum.bind(this);
        this.jumpToWaiting = this.jumpToWaiting.bind(this);
        this.asQuery = this.asQuery.bind(this);
        UtilScree.getHeight(10);
    }
    backClick(){
        this.props.navigation.navigate('PersonalInfoHead');
    }

    shouldCompontUpdate(){
        if(this.state.inputedNum.length<3)
            return false;
        return true;
    }

    updateNum(inputedNum){
        this.setState({inputedNum});
    }

    updatePW(inputedPW){
        this.setState({inputedPW});
    }
    render() {
        const navigate = this.props.navigation;
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar  title={'登录'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Image source={require('../res/images/head.png')} style={Stylecss.styles.login_head_image}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={this.updateNum}
                           maxLengh='11' keybordType={'numeric'}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入你的密码'} secureTextEntry={true} onChangeText={this.updatePW}/>
                <Text style={Stylecss.styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>确定</Text>
                <View style={Stylecss.styles.other_view}>
                    <Text style={Stylecss.styles.login_register} onPress={this.register.bind(this)}>注册</Text>
                    <Image source={require('../res/images/80.png')} style={Stylecss.styles.login_divider}/>
                    <Text style={Stylecss.styles.login_get_pw} onPress={this.getPW.bind(this)}>忘记密码</Text>
                </View>
                <View style={Stylecss.styles.login_otherlogin_view}>
                    <View style={Stylecss.styles.login_otherlogin_background}/>
                    <Text style={Stylecss.styles.login_wx_btn}>常用第三方登录</Text>
                </View>
                <TouchableHighlight style={[Stylecss.styles.login_otherlogin_wx,{marginTop:UtilScreen.getHeight(43)}]}
                                    onPress={this.wx_login.bind(this)}>
                    <Image source={require('../res/images/apply_wechat.png')} style={Stylecss.styles.login_otherlogin_wx}/>
                </TouchableHighlight>
            </View>
        )
    }
    userPressConfirm(){
        if (this.state.inputedNum==='' || this.state.inputedPW===''){
            alert('对不起请输入账号或密码!');
            return false;
        }else{
            Alert.alert(
                '提示',
                '确定使用'+this.state.inputedNum+'号码登录嘛',
                [
                    {text:'取消',onPress:(()=>{}),style:'cancel'},
                    {text:'确定',onPress:this.jumpToWaiting}
                ]

            );
        }

    }
    register(){
        this.props.navigation.navigate('Registered',{mytitle:'注册',btn:'注册'});
    }
    getPW(){
        this.props.navigation.navigate('Registered',{mytitle:'找回密码',btn:'完成'});
    }
    wx_login(){
        this.asQuery();
    }

    jumpToWaiting(){
        let formData = new FormData();
        let phone = this.state.inputedNum;
        let password = this.state.inputedPW;
        formData.append("phone", phone);
        formData.append("password", password);
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_login/login');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_login/login', {
            method: "POST",
            body: formData
        }).then(response => response.text())
            .then(responseJson => {
                var bf = new Buffer(responseJson , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                console.log(result);
                if (result.code===400){
                    Alert.alert(
                        '提示',
                        ''+result.message+'',
                        [
                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                        ]

                    );
                    return false;
                }else {
                    this.asSave(result.obj.uid);
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }
    asQuery() {
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    alert(result);
                } else {
                    alert('未找到指定保存的内容');
                }
            } else {
                alert('查询数据失败');
            }
        })
    }
    asSave(uid) {
        AsyncStorage.setItem('uid',uid, (error) => {
            if (!error) {
                Alert.alert(
                    '提示',
                    '登录成功',
                    [
                        {text:'确定',onPress:(()=>{}),style:'cancel'}
                    ]
                );
            } else {
                Alert.alert(
                    '提示',
                    '登录失败',
                    [
                        {text:'确定',onPress:(()=>{}),style:'cancel'}
                    ]
                );
            }
        })
    }
};


//AppRegistry.registerComponent('FirstRNProject', () => LoginLeaf);

