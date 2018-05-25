import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,Dimensions,PixelRatio,TextInput,Alert} from 'react-native';
// import App from './App';
import {StackNavigator} from 'react-navigation';
import Registered from './Registered';
const Stylecss = require('../common/Stylecss');
let widthOfMargin = Dimensions.get('window').width * 0.05;
const {height,width} = Dimensions.get('window');
const pixelRatio = PixelRatio.get();
import UtilScree from '../util/UtilScreen'
export default class LoginLeaf extends Component {
    static navigationOptions = {
        // title:'登录',
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
                <View style={Stylecss.styles.top_title_view}>
                    <Image source={require('../../asstes/chevron-left.png')} style={Stylecss.styles.top_title_back}></Image>
                    <Text style={Stylecss.styles.top_title_text}>登录</Text>
                </View>
                <Image source={require('../../asstes/head.png')} style={Stylecss.styles.login_head_image}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={this.updateNum}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入你的密码'} secureTextEntry={true}/>
                <Text style={Stylecss.styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>确定</Text>
                <View style={Stylecss.styles.other_view}>
                    <Text style={Stylecss.styles.login_register} onPress={this.register.bind(this)}>注册</Text>
                    <Image source={require('../../asstes/80.png')} style={Stylecss.styles.login_divider}/>
                    <Text style={Stylecss.styles.login_get_pw}>忘记密码</Text>
                </View>
                    <Text style={Stylecss.styles.login_otherlogin_view}>常用第三方登录</Text>

            </View>
        )
    }
    userPressConfirm(){
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
        this.props.navigation.navigate('Register');
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


AppRegistry.registerComponent('FirstRNProject', () => LoginLeaf);

