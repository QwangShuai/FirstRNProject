import React, {Component} from 'react';
import {View, Text, StyleSheet,Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');
export default class OrderHeadDetailsItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        itemInfo: {
            title: '云南旅游',
            state: '待行程',
            imageTitile: '云南旅游活动云南旅游活 动云南旅游活动云南',
            imageUrl: require('../res/images/1.jpg'),
            content: '行程时间：2018.1.3-2018.1.5',
            peoples: '参加人数：122',
            payState: '自费',
            cost: ' 合计费用：¥8888',
        }
    }
    render(){
        if(this.props.isShow){
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{this.props.itemInfo.title}</Text>
                        <Text style={styles.stateText}>{this.props.itemInfo.state}</Text>
                    </View>
                    <View style={{
                        height: UtilScreen.getHeight(210),
                        flexDirection: 'row',
                        backgroundColor: '#f1f1f1',
                    }}>
                        <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl}/>
                        <View style={{
                            marginTop: UtilScreen.getHeight(16),
                            width: UtilScreen.getWidth(330),
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#333333',
                            }}>{this.props.itemInfo.imageTitile}</Text>
                            <Text style={styles.textStyle}>{this.props.itemInfo.content}</Text>
                            <Text style={styles.textStyle}>{this.props.itemInfo.peoples}</Text>
                        </View>
                    </View>
                    <View style={{height: UtilScreen.getHeight(80), flexDirection: 'row'}}>
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            color: '#333333',
                            marginLeft: UtilScreen.getWidth(40)
                        }}>
                            {this.props.itemInfo.payState}</Text>
                        <Text style={styles.costText}>{this.props.itemInfo.cost}</Text>
                    </View>
                    <View style={{height: UtilScreen.getHeight(2), marginLeft:UtilScreen.getHeight(40),
                        marginRight:UtilScreen.getHeight(40),
                        marginBottom:UtilScreen.getHeight(20),
                        backgroundColor:'#e5e5e5',}}/>
                </View>
            )
        } else {
            return (
                <View style={{backgroundColor: '#fff'}}>
                    <View style={styles.titleView}>
                        <Text style={styles.titleText}>{this.props.itemInfo.title}</Text>
                        <Text style={styles.stateText}></Text>
                    </View>
                    <View style={{
                        height: UtilScreen.getHeight(210),
                        flexDirection: 'row',
                        backgroundColor: '#f1f1f1',
                    }}>
                        <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl}/>
                        <View style={{
                            marginTop: UtilScreen.getHeight(16),
                            width: UtilScreen.getWidth(330),
                            flexDirection: 'column',
                        }}>
                            <Text style={{
                                fontSize: 14,
                                color: '#333333',
                            }}>{this.props.itemInfo.imageTitile}</Text>
                            <Text style={styles.textStyle}>{this.props.itemInfo.content}</Text>
                            <Text style={styles.textStyle}>{this.props.itemInfo.peoples}</Text>
                        </View>
                    </View>
                    <View style={{height: UtilScreen.getHeight(80), flexDirection: 'row'}}>
                        <Text style={{
                            alignSelf: 'center',
                            fontSize: 14,
                            color: '#333333',
                            marginLeft: UtilScreen.getWidth(40)
                        }}>
                            {this.props.itemInfo.payState}</Text>
                        <Text style={styles.costText}>{this.props.itemInfo.cost}</Text>
                    </View>
                    <View style={{height: UtilScreen.getHeight(2), marginLeft:UtilScreen.getHeight(40),
                        backgroundColor:'#e0e0e0',}}/>
                </View>
            )
        }

    }
}
const styles = StyleSheet.create({
    titleView: {
        height: UtilScreen.getHeight(80),
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    titleText: {
        lineHeight: UtilScreen.getHeight(80),
        textAlign: 'center',
        fontSize: 15,
        color: '#333333',
        marginLeft: UtilScreen.getWidth(40),
    },
    stateText: {
        position: 'absolute',
        lineHeight: UtilScreen.getHeight(80),
        textAlign: 'center',
        fontSize: 14,
        color: '#333333',
        right: 0,
        marginRight: UtilScreen.getWidth(49),
    },
    imageStyle: {
        marginLeft: UtilScreen.getWidth(40),
        marginTop: UtilScreen.getHeight(20),
        marginBottom: UtilScreen.getHeight(20),
        marginRight: UtilScreen.getWidth(20),
        height: UtilScreen.getHeight(172),
        width: UtilScreen.getWidth(262),
        resizeMode: 'stretch',
    },
    textStyle: {
        marginTop: UtilScreen.getHeight(10),
        fontSize: 12,
        color: '#333333',
    },
    costText: {
        alignSelf: 'center',
        position: 'absolute',
        right: UtilScreen.getWidth(40),
        color: '#ff9d00',
    },

})
