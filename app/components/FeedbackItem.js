import React, {Component} from 'react';

import {View, StyleSheet, TextInput, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class FeedbackItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        itemInfo: {
            tText: '上面建议内容',
            bText: '下面回复内容',
        },
    }

    render(){
        return(
            <View style={styles.itemView}>
                <Text style={styles.itemTextr}>{this.props.itemInfo.tText}</Text>
                <View style={styles.bottomView}>
                    <Text style={styles.btnText}>回复</Text>
                    <Text style={styles.repayText}>{this.props.itemInfo.bText}</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemView:{
        backgroundColor:'#ffffff',
        marginTop:UtilScreen.getHeight(20),
        marginLeft:UtilScreen.getWidth(40),
        marginRight:UtilScreen.getWidth(40),
        height:UtilScreen.getHeight(206),
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:UtilScreen.getHeight(2),
    },
    itemText:{
        fontSize:13,
        color:'#333333',
    },
    bottomView:{
        // justifyContent:'center',
        // alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        bottom:UtilScreen.getHeight(30),
        left:UtilScreen.getWidth(0),
        width:'100%',
    },
    btnText:{
        // position:'absolute',
        width:UtilScreen.getWidth(130),
        height:UtilScreen.getHeight(60),
        backgroundColor:'#ffd900',
        fontSize:13,
        textAlign:'center',
        alignSelf:'center',
        color:'#ffffff',
        borderRadius:UtilScreen.getWidth(10),
        lineHeight:UtilScreen.getHeight(60),
    },
    replyText:{
       // marginLeft:UtilScreen.getWidth(196),
        fontSize:13,
        color:'#626262',
        // alignSelf:'center',
        lineHeight:UtilScreen.getHeight(60),
    },
})