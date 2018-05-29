import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,Dimensions,PixelRatio,TextInput,Alert} from 'react-native';
// import App from './App';
import ToolBar from '../components/ToolBar';
let widthOfMargin = Dimensions.get('window').width * 0.05;
const {height,width} = Dimensions.get('window');
const Stylecss = require('../common/Stylecss');
const pixelRatio = PixelRatio.get();
export default class Registered extends   Component {
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
    }
    backClick(){
        this.props.navigation.navigate('Home');
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
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar  title={'注册'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Image source={require('../res/images/head.png')} style={Stylecss.styles.login_head_image}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={this.updateNum} keybordType={'number-pad'}/>
                <View style={Stylecss.styles.other_view}>
                    <TextInput style={Stylecss.styles.register_getcode} />
                    <Text style={Stylecss.styles.register_getcode_text}>获取验证码</Text>
                </View>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'设置密码'} secureTextEntry={true}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'确认密码'} secureTextEntry={true}/>
                <Text style={Stylecss.styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>注册</Text>
            </View>
        )
    }
    userPressConfirm(){
        Alert.alert(
            '提示',
            '确定使用'+this.state.inputedNum+'号码注册嘛',
            [
                {text:'取消',onPress:(()=>{}),style:'cancel'},
                {text:'确定',onPress:this.jumpToWaiting}
            ]

        );
    }
    jumpToWaiting(){
        this.props.navigation.navigate('Set');
    }
    userPressAddressBook(){
        var {NativeModules} = require('react-native');
        let ExampleInterface = NativeModules.ExampleInterface;
        NativeModules.ExampleInterface.HandleMessage('testMessage');
    }
};

// AppRegistry.registerComponent('FirstRNProject', () => Registered);

