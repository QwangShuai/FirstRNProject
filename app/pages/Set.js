import React, { Component } from 'react';
import {AppRegistry,View,Text,Image,TouchableHighlight,AsyncStorage,Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import SetModal from '../components/SetModal';
const Stylecss = require('../common/Stylecss');
import ToastComponent from '../components/pickerview/view/ToastComponent';
export default class Set extends   Component{
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this. state = {
            isShowClearCache:false,
        }

    }
    backClick(){
        this.props.navigation.navigate('Register');
    }
    jumpToUpdate(){
        this.props.navigation.navigate('Update');
    }
    jumpToAgreement(){
        this.props.navigation.navigate('Agreement');
    }
    jumpToFeedback(){
        this.props.navigation.navigate('Feedback');
    }

    updateToast(){
        this.ToastComponent.show('已是最新版本，暂无更新！~')
    }
    LoginOut(){
            AsyncStorage.removeItem('uid', (error) => {
                if (!error) {
                    this.props.navigation.navigate('Home');
                } else {
                    alert('退出失败!');
                }
            })
    }
    clearCache(){
        this. setState({
            isShowClearCache:true,
        });
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar  title={'设置'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <View style={Stylecss.styles.set_label_view} >
                    <Text style={Stylecss.styles.set_label_text}>检查更新</Text>
                    <TouchableHighlight onPress={this.jumpToUpdate.bind(this)} style={Stylecss.styles.set_label_enter}>
                        <Image source={require('../res/images/chevron-left2.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>意见反馈</Text>
                    <TouchableHighlight onPress={this.jumpToFeedback.bind(this)} style={Stylecss.styles.set_label_enter}>
                        <Image source={require('../res/images/chevron-left2.png')}/>
                    </TouchableHighlight>
                </View>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>清除缓存</Text>
                    <Text style={Stylecss.styles.set_cache_text} onPress={this.clearCache.bind(this)}>236MB</Text>
                </View>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>用户协议</Text>
                    <TouchableHighlight onPress={this.jumpToAgreement.bind(this)} style={Stylecss.styles.set_label_enter}>
                        <Image source={require('../res/images/chevron-left2.png')}/>
                    </TouchableHighlight>
                </View>
                <Text style={Stylecss.styles.set_logout} onPress={this.LoginOut.bind(this)}>注销登录</Text>
                <SetModal isShow={this.state.isShowClearCache}/>
                <ToastComponent ref={ref => this.ToastComponent = ref} />
            </View>
        )
    }
};