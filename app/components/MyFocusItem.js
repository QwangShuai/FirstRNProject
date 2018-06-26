import React, {Component} from 'react';
import {View, Text, StyleSheet,Image,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');
export default class MyFocusItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            headUrl:require('../res/images/head.png'),
            nickname:'昵称：帅气的小迷糊',
            sex:require('../res/images/nan.png'),
            article:'文章：45',
            fans:'粉丝：2989',
            state:'活动状态：活动中',
        }
    }

    render(){
        if(this.props.itemInfo.state==='活动中'){
            return(
                <View style={{flexDirection:'row',backgroundColor:'#ffffff',height:UtilScreen.getHeight(240)}}>
                    <Image style={styles.headStyle} source={this.props.itemInfo.headUrl}></Image>
                    <View style={{marginTop:UtilScreen.getHeight(20),marginLeft:UtilScreen.getWidth(20)}}>
                        <View style={{flexDirection:'row',marginTop:UtilScreen.getHeight(22),}}>
                            <Text style={styles.nameStyle}>{this.props.itemInfo.nickname}</Text>
                            <Image style={{marginLeft:UtilScreen.getWidth(5),width:UtilScreen.getWidth(30)}} source={this.props.itemInfo.sex} resizeMode='contain'/>
                        </View>
                        <View style={{flexDirection:'row',marginTop:UtilScreen.getHeight(22),}}>
                            <Image style={styles.imageStyle} source={require('../res/images/article-b.png')}></Image>
                            <Text style={styles.textStyle}>{this.props.itemInfo.article}</Text>
                            <Image style={[styles.imageStyle,{marginLeft:UtilScreen.getWidth(22)}]} source={require('../res/images/heart-b.png')}></Image>
                            <Text style={styles.textStyle}>{this.props.itemInfo.fans}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:UtilScreen.getHeight(22),}}>
                            <Image style={styles.imageStyle} source={require('../res/images/stopwatch.png')}></Image>
                            <Text style={styles.textStyle}>活动状态：{this.props.itemInfo.state}</Text>
                        </View>
                    </View>
                    <View style={{position:'absolute',right:UtilScreen.getWidth(20) ,width:UtilScreen.getWidth(140),marginTop:UtilScreen.getHeight(76),}}>
                        <Text style={styles.btnStyle} onPress={this.props.unfollow}>取消关注</Text>
                        <Text style={styles.btnStyle} onPress={this.props.join}>我要参加</Text>
                    </View>
                </View>
            )
        } else if(this.props.itemInfo.state==='已结束'){
            return(
                <View style={{flexDirection:'row',backgroundColor:'#ffffff',height:UtilScreen.getHeight(240)}}>
                    <Image style={styles.headStyle} source={this.props.itemInfo.headUrl}></Image>
                    <View style={{marginTop:UtilScreen.getHeight(20),marginLeft:UtilScreen.getWidth(20)}}>
                        <View style={{flexDirection:'row',marginTop:UtilScreen.getHeight(22),}}>
                            <Text style={styles.nameStyle}>{this.props.itemInfo.nickname}</Text>
                            <Image style={{marginLeft:UtilScreen.getWidth(5),width:UtilScreen.getWidth(30)}} source={this.props.itemInfo.sex} resizeMode='contain'/>
                        </View>
                        <View style={{flexDirection:'row',marginTop:UtilScreen.getHeight(22),}}>
                            <Image style={styles.imageStyle} source={require('../res/images/article-b.png')}></Image>
                            <Text style={styles.textStyle}>{this.props.itemInfo.article}</Text>
                            <Image style={[styles.imageStyle,{marginLeft:UtilScreen.getWidth(22)}]} source={require('../res/images/heart-b.png')}></Image>
                            <Text style={styles.textStyle}>{this.props.itemInfo.fans}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:UtilScreen.getHeight(22),}}>
                            <Image style={styles.imageStyle} source={require('../res/images/stopwatch.png')}></Image>
                            <Text style={styles.textStyle}>活动状态：{this.props.itemInfo.state}</Text>
                        </View>
                    </View>
                    <View style={{position:'absolute',right:UtilScreen.getWidth(20) ,width:UtilScreen.getWidth(140),marginTop:UtilScreen.getHeight(76),}}>
                        <Text style={styles.btnStyle} onPress={this.props.unfollow}>取消关注</Text>
                        <Text style={styles.btnStyle} onPress={this.props.invite}>邀请他</Text>
                    </View>
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    headStyle:{
        width:UtilScreen.getWidth(200),
        height:UtilScreen.getHeight(200),
        borderRadius:UtilScreen.getHeight(200),
        marginTop:UtilScreen.getHeight(20),
        marginLeft:UtilScreen.getWidth(24),
        resizeMode:'stretch',
    },
    nameStyle:{
        fontSize:14,
        color:'#333333',
    },
    imageStyle:{
        width:UtilScreen.getWidth(26),
        height:UtilScreen.getHeight(26),
        resizeMode:'contain',
        alignSelf:'center',
    },
    textStyle:{
        color:'#333333',
        fontSize:12,
        marginLeft:UtilScreen.getWidth(8),
    },
    btnStyle:{
        color:'#ffffff',
        backgroundColor:'#ff9d00',
        borderRadius:UtilScreen.getHeight(8),
        width:UtilScreen.getWidth(140),
        height:UtilScreen.getHeight(50),
        fontSize:12,
        marginTop:UtilScreen.getHeight(14),
        lineHeight:UtilScreen.getHeight(50),
        textAlign:'center',
    },
})