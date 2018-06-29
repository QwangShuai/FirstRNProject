import React, {Component} from 'react';

import {View, StyleSheet,Image, TextInput, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class InfoItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        InfoItem: {
            rTitie: '消息标题',
            lImg: require('../res/images/1.jpg'),
            rContent:'内容',
            rMore:'时间',
            rArrow:'几条消息',
        },
    }

    render(){
            return (
                <View style={styles.container}>
                    <Text style={styles.leftText}>{this.props.InfoItem.rTitie}</Text>
                    <Image style={styles.lImg} source={this.props.InfoItem.lImg}></Image>
                    <Text style={styles.rContent}>{this.props.InfoItem.rContent}</Text>
                    <View style={styles.lContainer}>
                        <Text style={styles.rTime}>{this.props.InfoItem.rTime}</Text>
                        <Text style={styles.rArrow}>{this.props.InfoItem.rArrow}</Text>
                    </View>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    container: {
        width: UtilScreen.getWidth(670),
        height: UtilScreen.getHeight(555),
        flexDirection: 'column',
        paddingLeft:UtilScreen.getWidth(20),
        paddingRight:UtilScreen.getWidth(20),


    },
    lImg: {
        width: UtilScreen.getWidth(630),
        height:UtilScreen.getHeight(312),
        marginTop:UtilScreen.getWidth(26),
    },
    leftText:{
        fontSize:14,
        marginTop:UtilScreen.getWidth(41),
        marginBottom:UtilScreen.getWidth(15),

    },
    rContent:{
        fontSize:12,

    },
    rTime:{
        fontSize:12,
        marginTop:UtilScreen.getWidth(45),

    },
    rPice:{
        width:UtilScreen.getWidth(34),
        width:UtilScreen.getHeight(34),
        borderRadius:UtilScreen.getHeight(34),
        fontSize:12,
        color:'#fff',
        backgroundColor:'red',
        textAlign:'center',
        position:'absolute',
        right:UtilScreen.getWidth(15),
        top:UtilScreen.getHeight(94),
    },
    rPiceOne:{
        width:UtilScreen.getWidth(16),
        width:UtilScreen.getHeight(16),
        borderRadius:50,
        backgroundColor:'red',
        position:'absolute',
        right:UtilScreen.getWidth(15),
        top:UtilScreen.getHeight(114),
    }
})