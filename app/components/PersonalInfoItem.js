import React, { Component } from 'react';

import {View, StyleSheet,Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
export default class PersonalInfoItem extends Component{
    constructor(props){
        super(props);
    }
    static defaultProps = {
        itemInfo:{
            imageURL:"require('../res/images/user-1.png')",
            lTitle:'左边主标题',
            rValue:'右边的值',
        },
        imageURL:"require('../res/images/user-1.png')",


    }
    render(){
        return (
            <View style={styles.container}>
                <Image
                    source={this.props.imageURL}
                    resizeMode='stretch'
                />
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:UtilScreen.getHeight(86),
        backgroundColor:'red',
    }
});