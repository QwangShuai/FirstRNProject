import React, {Component} from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

const Stylecss = require('../common/Stylecss');
export default class MyAlbumitem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            imageURL:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
            date: '2017年2月1日',
        },

    }

    render(){
        return(
            <View style={Stylecss.styles.container}>
                <Image style={styles.imageStyle} source={this.props.itemInfo.imageURL}/>
                <Text style={styles.dataStyle}>{this.props.itemInfo.data}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        width:UtilScreen.getWidth(300),
        height:UtilScreen.getHeight(200),
        borderRadius:UtilScreen.getWidth(10),
    },
    dataStyle:{
        marginTop:UtilScreen.getHeight(15),
        fontSize:12,
        color:'#333333',
    },
})