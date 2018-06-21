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
        }
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