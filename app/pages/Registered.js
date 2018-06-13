import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, Dimensions, PixelRatio, TextInput, Alert} from 'react-native';
// import App from './App';
import ToolBar from '../components/ToolBar';
import md5 from "react-native-md5";
let widthOfMargin = Dimensions.get('window').width * 0.05;
const {height, width} = Dimensions.get('window');
const Stylecss = require('../common/Stylecss');
const pixelRatio = PixelRatio.get();
const Buffer = require('buffer').Buffer;
export default class Registered extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPW: '',
            idenCode: '获取验证码',
            isDisabled:true,
            timer:60,
        };
        this.updatePW = this.updatePW.bind(this);
        this.updateNum = this.updateNum.bind(this);
        this.jumpToWaiting = this.jumpToWaiting.bind(this);
    }

    backClick() {
        this.props.navigation.navigate('Home');
    }

    shouldCompontUpdate() {
        if (this.state.inputedNum.length < 3)
            return false;
        return true;
    }

    updateNum(inputedNum) {
        this.setState({inputedNum});
    }

    updatePW(inputedPW) {
        this.setState({inputedNum});
    }
    //计时器
    jishi(time) {
        if (time > 0) {
            this.setState({
                idenCode: '重新获取（'+ time + "s）"
            });
            time--;
            setTimeout(
                () => {
                    this.jishi(time);
                },
                1000
            );
        } else {
            this.setState({
                timer: 60,
                idenCode: "重新获取",
            });
            this.setState({
                isDisabled:true,
            });
        }
    }
    getCode() {
        if(this.state.isDisabled){
            this.setState({
                isDisabled:false,
            });
            this.jishi(60)
            let formData = new FormData();
            let phone = this.state.inputedNum;
            formData.append("phone", phone);
            let param=md5.hex_md5('http://47.92.136.19/index.php/action/ac_login/SendCode');
            let params=md5.hex_md5(param);
            formData.append('app_key',params);
            fetch('http://47.92.136.19/index.php/action/ac_login/SendCode', {
                method: 'POST',
                body:formData,

            }).then(response => response.text())
                .then(responseStr => {
                    var bf = new Buffer(responseStr , 'base64')
                    // var  str= bf.toString();
                    // let result=JSON.parse(str);
                    console.log(JSON.parse(responseStr));
                })
                .catch(e => {
                    console.log(e);
                })
                .done();
        }

    }
    register(){

    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'注册'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Image source={require('../res/images/head.png')} style={Stylecss.styles.login_head_image}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'请输入手机号'} onChangeText={this.updateNum}
                           keybordType={'number-pad'}/>
                <View style={Stylecss.styles.other_view}>
                    <TextInput style={Stylecss.styles.register_getcode} maxLength={11}/>
                    <Text style={[Stylecss.styles.register_getcode_text,{color:this.state.isDisabled?'#FF9D00':'#5FABFC'}]} onPress={this.getCode.bind(this)}>{this.state.idenCode}</Text>
                </View>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'设置密码'} secureTextEntry={true}/>
                <TextInput style={Stylecss.styles.textInputStyle} placeholder={'确认密码'} secureTextEntry={true}/>
                <Text style={Stylecss.styles.bigTextPrompt} onPress={this.userPressConfirm.bind(this)}>注册</Text>
            </View>
        )
    }

    userPressConfirm() {
        Alert.alert(
            '提示',
            '确定使用' + this.state.inputedNum + '号码注册嘛',
            [
                {
                    text: '取消', onPress: (() => {
                }), style: 'cancel'
                },
                {text: '确定', onPress: this.jumpToWaiting}
            ]
        );
    }

    jumpToWaiting() {
        this.props.navigation.navigate('Set');
    }

    userPressAddressBook() {
        var {NativeModules} = require('react-native');
        let ExampleInterface = NativeModules.ExampleInterface;
        NativeModules.ExampleInterface.HandleMessage('testMessage');
    }
};

// AppRegistry.registerComponent('FirstRNProject', () => Registered);

