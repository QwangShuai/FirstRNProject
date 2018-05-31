import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
} from 'react-native';
import UtilScreen from "../util/UtilScreen";

const Dimensions = require('Dimensions');
const {
    width,
    height
} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        // backgroundColor:'white',
    },
    other_view:{
        marginTop:11,
        flexDirection:'row',
    },
    login_head_image:{
        marginTop:35,
        width:100,
        height:100,
        // marginLeft:138,
        alignSelf:'center',
        borderRadius:200,
        resizeMode: Image.resizeMode.stretch
    },
    textInputStyle:{
        fontSize:16,
        marginTop:8,
        color:'#cacaca',
        marginLeft:35,
        marginRight:35,
    },
    bigTextPrompt:{
        lineHeight:40,
        marginTop:33,
        marginLeft:25,
        marginRight:25,
        backgroundColor:'#ff9d00',
        color:'white',
        textAlign:'center',
        fontSize:16,
        height:40,
        borderRadius:6,
    },
    top_title_view:{
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:44,
        backgroundColor:'#000'
    },
    top_title_back:{
        marginLeft:10,
        width:8,
        height:13,
        marginTop:3,
        position:'absolute',
        left:0,
    },
    top_title_text:{
        fontSize:16,
        color:'#fff',
    },
    login_register:{
        marginLeft:116,
        // marginRight:28,
        fontSize:16,
        color:'#f5a623',
    },
    login_divider:{
        marginLeft:28,
        height:19,
        alignSelf:'center',
        width:2,
    },
    login_get_pw:{
        marginLeft:28,
        fontSize:16,
    },
    login_wxlogin:{
        position:'absolute',
        bottom:0,
        fontSize:14,
        alignSelf:'center',
        color:'#cacaca',
    },
    login_otherlogin_view:{
        height:102,
        position:'absolute',
        bottom:0,
        alignSelf:'center',
    },
    register_getcode:{
        flex:2,
        width:200,
        fontSize:16,
        color:'#cacaca',
        marginLeft:35,
    },
    register_getcode_text:{
        flex:1,
        fontSize:16,
        color:'#ff9d00',
        textAlign:'right',
        marginRight:42,
        marginTop:16,
    },
    set_label_text:{
        position:'absolute',
        left:0,
        color:'#333333',
        marginLeft:20,
        fontSize:14,
        lineHeight:UtilScreen.getHeight(88),
        alignItems:'center',
    },
    set_label_view:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:UtilScreen.getHeight(12),
        flexDirection:'row',
        height:UtilScreen.getHeight(88),
        backgroundColor:'#fff',
    },
    set_label_enter:{
        position:'absolute',
        right:0,
        marginRight:UtilScreen.getWidth(40),
    },
    set_cache_text:{
        position:'absolute',
        right:0,
        marginRight:18,
        fontSize:14,
        color:'#333333',
    },
    set_logout:{
        textAlign:'center',
        position:'absolute',
        bottom:0,
        height:UtilScreen.getHeight(98),
        fontSize:15,
        backgroundColor:'#ff9d00',
        color:'#ffffff',
        width:width,
        lineHeight:UtilScreen.getHeight(98),
    },
    update_message:{
        alignItems:'center',
        marginTop:UtilScreen.getHeight(40),
        marginLeft:UtilScreen.getWidth(25),
        marginRight:UtilScreen.getWidth(25),
        height:UtilScreen.getHeight(80),
    },
    update_message_text:{
        lineHeight:UtilScreen.getHeight(80),
        fontSize:14,
        color:'#333333',
    },
    lightitem: {
        backgroundColor: '#fff'
    },
    line: {
        width: '100%',
        height: UtilScreen.getHeight(15),
        backgroundColor: '#f8f8f8',
    },
    paymentView:{
        width:UtilScreen.getWidth(700),
        marginLeft:UtilScreen.getWidth(24),
        marginRight:UtilScreen.getWidth(24),
        height:UtilScreen.getHeight(88),
        position:'absolute',
        bottom:UtilScreen.getHeight(40),
        backgroundColor:'#ff9d00',
        borderRadius:UtilScreen.getWidth(12),
        justifyContent:'center',
        alignItems:'center',
    },
    paymentText:{
        alignSelf:'center',
        color:'#ffffff',
        fontSize:18,
    },
    payView:{
        width:'100%',
        left:UtilScreen.getWidth(38),
        position:'absolute',
        bottom:UtilScreen.getHeight(140),
        height:UtilScreen.getHeight(242),
        flexDirection:'column',
    },
    payImage:{
        backgroundColor:'#fff',
        resizeMode:'contain',
        width:UtilScreen.getWidth(36),
        height:UtilScreen.getWidth(36),
        alignSelf:'center',
    },
    payText:{
        lineHeight:UtilScreen.getHeight(88),
        marginLeft:UtilScreen.getWidth(10),
        fontSize:14,
        color:'#333333',
        alignSelf:'center',
    },
    selectImage:{
        width:UtilScreen.getWidth(30),
        resizeMode:'contain',
        alignSelf:'center',
        position:'absolute',
        right:UtilScreen.getWidth(80),
    },
    selectView:{
        flexDirection:'row',
        height:UtilScreen.getHeight(76),
    },
    leftText: {
        color: '#333',
        fontSize: 14,
        width:UtilScreen.getWidth(140),
        textAlign:'justify',
    },
    rightText:{
        position:'absolute',
        right:0,
        marginRight:UtilScreen.getWidth(64),
        color:'#333333',
    }

});