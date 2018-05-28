import React, {Component} from 'react';

import {View, StyleSheet, TextInput, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class ApplyInfoItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        itemInfo: {
            lTitle: '左边主标题',
            rHint: '提示文字',
        },
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.leftText}>{this.props.lTitle}</Text>
                <TextInput style={styles.rightHint} placeholder={this.props.rHint} underlineColorAndroid={'transparent'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: UtilScreen.getHeight(86),
        flexDirection: 'row',

    },
    leftText: {
        // lineHeight:UtilScreen.getHeight(86),
        alignSelf:'center',
        color: '#333',
        fontSize: 14,
        width:UtilScreen.getWidth(140),
        marginLeft: UtilScreen.getWidth(38),
    },
    rightHint:{
      // lineHeight:UtilScreen.getHeight(86),
      fontSize:14,
        width:'100%',
      alignSelf:'center',
        // borderBottomColor:'#fff',

    },
})