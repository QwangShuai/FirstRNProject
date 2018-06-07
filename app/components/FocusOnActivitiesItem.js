import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');

export default class FocusOnActivitiesItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            title: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
            imageUrl: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
            startTime:'开始时间',
            views:'浏览量  :  12293',
            participants:'参加人数  :  25',
        },
    }

    render(){
        return(
            <View style={{backgroundColor:'#ffffff'}}>
                <Text style={styles.titleStyle}>{this.props.itemInfo.title}</Text>
                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle} source={require('../res/images/delete.png')}/>
                    <View style={styles.rightView}>
                        <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(20)}]}>开始时间：2018-1-1</Text>
                        <View style={styles.textView}>
                            <Image style={styles.minImageStyle} source={require('../res/images/eyes.png')} resizeMode='contain'/>
                            <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.views}</Text>
                        </View>
                        <View style={styles.textView}>
                            <Image style={styles.minImageStyle} source={require('../res/images/profile-normal1.png')} resizeMode='contain'/>
                            <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.participants}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:UtilScreen.getHeight(22),height:UtilScreen.getHeight(2),backgroundColor:'#e5e5e5',
                    marginLeft:UtilScreen.getWidth(40),width:UtilScreen.getWidth(670)}} />
                <View style={styles.myView}>
                    <View style={styles.itemView}>
                        <Image style={styles.imageItem} source={require('../res/images/enter-chat.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>进入聊天室</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Image style={styles.imageItem} source={require('../res/images/consel.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>咨询领队</Text>
                    </View>
                    <View style={styles.itemView}>
                        <Image style={styles.imageItem} source={require('../res/images/heart-fill2.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>取消关注</Text>
                    </View>
                </View>
                <View style={[Styless.styles.light_F8F8F8,{height:UtilScreen.getHeight(20)}]}/>
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
    imageStyle:{
        width:UtilScreen.getWidth(300),
        height:UtilScreen.getHeight(200),
    },
    startTime:{
        fontSize:14,
        color:'#333333',
    },
    viewStyle:{
        flexDirection:'row',
        marginTop:UtilScreen.getHeight(24),
        marginLeft:UtilScreen.getWidth(40),
        width:'100%',
        height:UtilScreen.getHeight(200),
        // borderBottomWidth:UtilScreen.getHeight(2),
        // borderBottomColor:'#e5e5e5',
    },
    rightView:{
        flex:1,
        marginLeft:UtilScreen.getWidth(20),
    },
    textView:{
        marginTop:UtilScreen.getHeight(20),
        marginLeft:UtilScreen.getWidth(4),
        alignItems:'center',
        flexDirection:'row',
        height:UtilScreen.getHeight(40),
        width:UtilScreen.getWidth(260),
    },
    minImageStyle:{
        width:UtilScreen.getWidth(30),
        height:UtilScreen.getHeight(32),
    },
    myView:{
        marginTop:UtilScreen.getHeight(20),
      height:UtilScreen.getHeight(46),
        width:UtilScreen.getWidth(670),
        marginLeft:UtilScreen.getWidth(40),
        flexDirection:'row',
    },
    itemView:{
        alignItems:'center',
        flex:1,
        flexDirection:'row',
    },
    imageItem:{
        width:UtilScreen.getWidth(46),
        height:UtilScreen.getHeight(46),
    },
})
