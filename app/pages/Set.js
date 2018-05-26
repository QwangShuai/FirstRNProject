import React, { Component } from 'react';
import {AppRegistry,View,Text,Image} from 'react-native';
import ToolBar from '../components/ToolBar';
const Stylecss = require('../common/Stylecss');
export default class Set extends   Component{
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
    }
    backClick(){
        this.props.navigation.navigate('Register');
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar  title={'设置'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>检查更新</Text>
                    <Image source={require('../../asstes/chevron-left2.png')} style={Stylecss.styles.set_label_enter}/>
                </View>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>意见反馈</Text>
                    <Image source={require('../../asstes/chevron-left2.png')} style={Stylecss.styles.set_label_enter}/>
                </View>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>清除缓存</Text>
                    <Text style={Stylecss.styles.set_cache_text}>236MB</Text>
                </View>
                <View style={Stylecss.styles.set_label_view}>
                    <Text style={Stylecss.styles.set_label_text}>用户协议</Text>
                    <Image source={require('../../asstes/chevron-left2.png')} style={Stylecss.styles.set_label_enter}/>
                </View>
                <Text style={Stylecss.styles.set_logout}>注销登录</Text>
            </View>
        )
    }
};
 //AppRegistry.registerComponent('FirstRNProject', () => Set);