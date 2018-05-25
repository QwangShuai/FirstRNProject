import React, { Component } from 'react';
import {AppRegistry,View,Text,Image} from 'react-native';
const Stylecss = require('../common/Stylecss');
export default class Set extends   Component{
    static navigationOptions = {
        // title:'登录',
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <View style={Stylecss.styles.top_title_view}>
                    <Image source={require('../../asstes/chevron-left.png')} style={Stylecss.styles.top_title_back}></Image>
                    <Text style={Stylecss.styles.top_title_text}>设置</Text>
                </View>
            </View>
        )
    }
};
AppRegistry.registerComponent('FirstRNProject', () => Set);