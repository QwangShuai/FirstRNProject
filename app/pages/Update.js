import React, { Component } from 'react';
import {AppRegistry,View,Text,Image,ImageBackground} from 'react-native';
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
        this.props.navigation.navigate('Set');
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar  title={'更新'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <ImageBackground style={Stylecss.styles.update_message} source={require('../../asstes/rectangle25.png')} resizeMode='stretch'>
                    <Text style={Stylecss.styles.update_message_text}>已有新版本，友来友聚2.1</Text>
                </ImageBackground>
                <Text style={Stylecss.styles.set_logout}>更新</Text>
            </View>
        );
    }
}