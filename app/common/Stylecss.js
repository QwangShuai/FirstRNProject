import React, {
    Component
} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Image,
} from 'react-native';

const Dimensions = require('Dimensions');
const {
    width,
    height
} = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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
    },
    top_title_text:{
        marginLeft:154,
        // alignContent:'center',
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
        alignItems:'center',
        color:'#cacaca',
        bottom:88,
        alignSelf:'center',
    },
    login_otherlogin_view:{
        height:102,
        position:'absolute',
        bottom:0,
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
        marginLeft:20,
        fontSize:14,
    },
    set_label_view:{
      flexDirection:'row',
      height:44,
      backgroundColor:'#fff',
    },

});