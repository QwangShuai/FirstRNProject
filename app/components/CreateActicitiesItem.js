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
            lUrl:require('../res/images/time-start.png'),
            lTitle: '左边主标题',
            rTitle: '右边文字',
        },
    }

    render(){
        return(
            <View style={Stylecss.styles.container}>
               <View style={Stylecss.styles.set_label_view} >
                   <Image style={[Stylecss.styles.order_imageView,{position:'absolute',left:UtilScreen.getWidth(20)}]} source={this.props.itemInfo.lUrl} />
                    <Text style={[Stylecss.styles.set_label_text,{left:UtilScreen.getWidth(63)}]}>{this.props.itemInfo.lTitle}</Text>
                   <Text style={Stylecss.styles.rightText}>{this.props.itemInfo.rTitle}</Text>
                 <TouchableHighlight style={Stylecss.styles.set_label_enter}>
                     <Image source={require('../res/images/chevron-left2.png')}/>
                 </TouchableHighlight>
               </View>
            </View>
        )
    }
}