import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import HeadView from '../components/HeadView';
const Styless = require('../common/Stylecss');

export default class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow:true,
        }
    }

    render() {
        if(this.props.itemInfo.state==='待支付'){
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <HeadView itemInfo={this.props.itemInfo} isShow={this.state.isShow}/>
                    <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                        <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(340)}]} onPress={this.props.inviteShow}>邀请</Text>
                        <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]} onPress={this.props.cancleShow}>取消行程</Text>
                        <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]} onPress={this.props.payShow}>待支付</Text>
                    </View>
                </View>
            )
        } else if(this.props.itemInfo.state==='待行程'){
            if (this.props.itemInfo.payState==='自费') {
                return (
                    <View style={{backgroundColor: '#fff'}}>
                        <HeadView itemInfo={this.props.itemInfo} isShow={this.state.isShow} />
                        <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                            <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]} onPress={this.props.inviteShow}>邀请</Text>
                            <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]}>待行程</Text>
                        </View>
                    </View>
                )
            } else {
                return (
                    <View style={{backgroundColor: '#fff'}}>
                        <HeadView itemInfo={this.props.itemInfo} isShow={this.state.isShow}/>
                        <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                            <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(340)}]} onPress={this.props.inviteShow}>邀请</Text>
                            <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]} onPress={this.props.cancleShow}>取消行程</Text>
                            <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]}>待行程</Text>
                        </View>
                    </View>
                )
            }
        } else if(this.props.itemInfo.state==='待评价'){
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <HeadView itemInfo={this.props.itemInfo} isShow={this.state.isShow} />
                    <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                        <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]}>删除行程</Text>
                        <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]}>评价</Text>
                    </View>
                </View>
            )
        } else if(this.props.itemInfo.state==='退款'){
            return(
                <View style={{backgroundColor: '#fff'}}>
                <HeadView itemInfo={this.props.itemInfo} isShow={this.state.isShow} />
                <View style={{height:UtilScreen.getHeight(44),marginBottom:UtilScreen.getHeight(20),flexDirection:'row',}}>
                    <Text style={[Styless.styles.travel_textView,{position:'absolute',right:UtilScreen.getWidth(190)}]}>删除行程</Text>
                    <Text style={[Styless.styles.travel_textStyle,{position:'absolute',right:UtilScreen.getWidth(40)}]}>退款</Text>
                </View>
            </View>
            )

        }
    }
}

