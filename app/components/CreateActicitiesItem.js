import React, {Component} from 'react';

import {View, StyleSheet, TextInput, Text,Image, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class CreateActicitiesItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        itemInfo: {
            lTitle: '左边主标题',
            rTitle: '右边文字',
        },
    }

    render(){
        return(
            <View style={Stylecss.styles.container}>
               <View style={Stylecss.styles.set_label_view} >
                    <Text style={Stylecss.styles.set_label_text}>{this.props.itemInfo.lTitle}</Text>
                   <Text style={Stylecss.styles.rightText}>{this.props.itemInfo.rTitle}</Text>
                 <TouchableHighlight style={Stylecss.styles.set_label_enter}>
                     <Image source={require('../res/images/chevron-left2.png')}/>
                 </TouchableHighlight>
               </View>
            </View>
        )
    }
}