import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import HeadView from '../components/HeadView';
const Styless = require('../common/Stylecss');

export default class TravelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true,
        }
    }

    render() {
        if (this.props.payState) {
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <HeadView />
                    <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                        <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]}>邀请</Text>
                        <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]}>待行程</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <HeadView itemInfo={this.props.itemInfo} isShow={this.state.isShow}/>
                    <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                        <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(340)}]}>发邀请</Text>
                        <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]}>取消行程</Text>
                        <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]}>待行程</Text>
                    </View>
                </View>
            )
        }
    }
}

