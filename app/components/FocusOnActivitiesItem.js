import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class FocusOnActivitiesItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            title: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
            imageUrl: '图片路径',
            startTime:'开始时间',
            views:'浏览量',
            participants:'参加人数',
        },
    }

    render(){
        return(
            <View>
                <Text style={styles.titleStyle}>云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        marginLeft:UtilScreen.getWidth(40),
        marginTop:UtilScreen.getHeight(24),
        width:UtilScreen.getWidth(608),
        height:UtilScreen.getHeight(90),
        textAlign:'left',
        fontSize:16,
        color:'#333333',
    },
})
