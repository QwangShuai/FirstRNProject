import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,Alert} from 'react-native';
// import App from './App';
import {StackNavigator} from 'react-navigation';
import Registered from './Registered';
import ToolBar from '../components/ToolBar';
const Stylecss = require('../common/Stylecss');
import UtilScree from '../util/UtilScreen'
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
        this.setState({inputedNum});
    }

    render() {
        const navigate = this.props.navigation;
        return (
            <View style={Stylecss.styles.container}>
                    <ToolBar  title={'登录'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Image source={require('../res/images/head.png')} style={Stylecss.styles.login_head_image}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={this.updateNum}
                        maxLengh='11' keybordType={'numeric'}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入你的密码'} secureTextEntry={true}/>
                <Text style={Stylecss.styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>确定</Text>
                <View style={Stylecss.styles.other_view}>
                    <Text style={Stylecss.styles.login_register} onPress={this.register.bind(this)}>注册</Text>
                    <Image source={require('../res/images/80.png')} style={Stylecss.styles.login_divider}/>
                    <Text style={Stylecss.styles.login_get_pw}>忘记密码</Text>
                </View>
                <View style={Stylecss.styles.login_otherlogin_background}/>
                <View style={Stylecss.styles.login_otherlogin_view}>
                    <Text style={Stylecss.styles.login_wx_btn}>常用第三方登录</Text>
                </View>
                <Image source={require('../res/images/apply_wechat.png')} style={Stylecss.styles.login_otherlogin_wx}/>

            </View>
        )
    }
    userPressConfirm(){
        console.log('tiaoshi');
        Alert.alert(
            '提示',
            '确定使用'+this.state.inputedNum+'号码登录嘛',
            [
                {text:'取消',onPress:(()=>{}),style:'cancel'},
                {text:'确定',onPress:this.jumpToWaiting}
            ]

        );
    }
    register(){
        this.props.navigation.navigate('Registered');
    }
    jumpToWaiting(){
        this.props.navigation.navigate({
            routeName:'Wait',
            params:{
                phoneNumber:55555555,
                userPW:5555,
            }
        });
    }
};


//AppRegistry.registerComponent('FirstRNProject', () => LoginLeaf);

