import React, {Component} from 'react';

import {View, StyleSheet,Image, TextInput, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class InfoSpeificItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        InfoItem: {
            rTitie: '消息标题',
            lImg: require('../res/images/1.jpg'),
            rContent:'内容',
        },
    }

    render(){
            return (
                <View style={styles.container}>
                    <Text style={styles.leftText}>{this.props.InfoItem.rTitie}</Text>
                    <Image style={styles.lImg} source={this.props.InfoItem.lImg}></Image>
                    <Text style={styles.rContent}>{this.props.InfoItem.rContent}</Text>
                    <View style={{height:UtilScreen.getHeight(1),backgroundColor:'#e5e5e5',}} />
                    <View style={{height:UtilScreen.getHeight(80),flexDirection:'row',}}>
                        <Text style={styles.rTime}>查看更多消息</Text>
                        <Image style={styles.rPice} source={require('../res/images/chevron-left2.png')} resizeMode='contain'/>
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:UtilScreen.getHeight(40),
        marginLeft:UtilScreen.getWidth(40),
        width: UtilScreen.getWidth(670),
        height: UtilScreen.getHeight(555),
        flexDirection: 'column',
        paddingLeft:UtilScreen.getWidth(20),
        paddingRight:UtilScreen.getWidth(20),
        borderRadius:UtilScreen.getHeight(10),
        backgroundColor:'#ffffff',
    },
    lImg: {
        width: UtilScreen.getWidth(630),
        height:UtilScreen.getHeight(312),
        marginTop:UtilScreen.getWidth(26),
    },
    leftText:{
        fontSize:14,
        marginTop:UtilScreen.getHeight(20),

    },
    rContent:{
        color:'#626262',
        fontSize:14,
        lineHeight:UtilScreen.getHeight(80),
    },
    rTime:{
        fontSize:14,
        color:'#333333',
        lineHeight:UtilScreen.getHeight(80),
    },
    rPice:{
        width:UtilScreen.getWidth(12),
        height:UtilScreen.getHeight(20),
        position:'absolute',
        alignSelf:'center',
        right:UtilScreen.getWidth(5),
    },
    rPiceOne:{
        width:UtilScreen.getWidth(16),
        width:UtilScreen.getHeight(16),
        borderRadius:50,
        backgroundColor:'red',
        position:'absolute',
        right:UtilScreen.getWidth(15),
        top:UtilScreen.getHeight(114),
    },
})