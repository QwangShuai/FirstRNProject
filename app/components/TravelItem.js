import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');

export default class TravelItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            title:'云南旅游',
            state:'待行程',
            imageTitile:'云南旅游活动云南旅游活 动云南旅游活动云南',
            content:'行程时间：2018.1.3-2018.1.5',
            peoples:'参加人数：122',
            payState:'自费',
        }
    }
    bottomView(){

    }
    render(){
        return(
            <View style={{backgroundColor:'#f1f1f1'}}>
               <View style={styles.titleView}>
                    <Text style={styles.titleText}>{this.props.itemInfo.title}</Text>
                   <Text style={styles.stateText}>待行程</Text>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleView:{
        height:UtilScreen.getHeight(80),
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    titleText:{
        lineHeight:UtilScreen.getHeight(80),
        textAlign:'center',
      fontSize:16,
      color:'#333333',
        marginLeft:UtilScreen.getWidth(40),
    },
    stateText:{
        position:'absolute',
        alignSelf:'flex-end',
        lineHeight:UtilScreen.getHeight(80),
        textAlign:'center',
        fontSize:16,
        color:'#333333',
        right:0,
        marginRight:UtilScreen.getWidth(49),
    },
})