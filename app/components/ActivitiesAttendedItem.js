import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');

export default class ActivitiesAttendedItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            title: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
            imageUrl: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
            startTime:'开始时间  :  2018.01.01',
            endTime:'结束时间  :  2018.04.20',
            cost:'人均费用  :  ￥888.88',
            views:'浏览  ：  1234',
            participants:'报名人数  :  25',
            focusOn:'关注  ：  10000',
            countdown:'取消倒计时：2天14时40分56秒',
        },
    }

    render(){
        if(this.props.itemInfo.countdown=='0'){
            return(
                <View style={{backgroundColor:'#ffffff'}}>
                    <Text style={styles.titleStyle}>{this.props.itemInfo.title}</Text>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl}/>
                        <View style={styles.rightView}>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(20)}]}>{this.props.itemInfo.startTime}</Text>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(4)}]}>{this.props.itemInfo.endTime}</Text>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.views}</Text>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.participants}</Text>
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Image style={styles.imageSmall} source={require('../res/images/eyes.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getHeight(4)}]}>{this.props.itemInfo.views}</Text>
                        <Image style={[styles.imageSmall,{marginLeft:UtilScreen.getWidth(40)}]} source={require('../res/images/heart-y.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getHeight(4)}]}>{this.props.itemInfo.focusOn}</Text>
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
                            <Image style={styles.imageItem} source={require('../res/images/delete.png')} resizeMode='contain'/>
                            <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>取消活动</Text>
                        </View>
                    </View>
                    <View style={[Styless.styles.light_F8F8F8,{height:UtilScreen.getHeight(20)}]}/>
                </View>
            )
        } else {
            return(
                <View style={{backgroundColor:'#ffffff'}}>
                    <Text style={styles.titleStyle}>{this.props.itemInfo.title}</Text>
                    <View style={styles.viewStyle}>
                        <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl}/>
                        <View style={styles.rightView}>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(20)}]}>{this.props.itemInfo.startTime}</Text>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(4)}]}>{this.props.itemInfo.endTime}</Text>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.views}</Text>
                            <Text style={[styles.startTime,{marginTop:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.participants}</Text>
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Image style={styles.imageSmall} source={require('../res/images/eyes.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getHeight(4)}]}>{this.props.itemInfo.views}</Text>
                        <Image style={[styles.imageSmall,{marginLeft:UtilScreen.getWidth(40)}]} source={require('../res/images/heart-y.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getHeight(4)}]}>{this.props.itemInfo.focusOn}</Text>
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
                            <Image style={styles.imageItem} source={require('../res/images/delete.png')} resizeMode='contain'/>
                            <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>取消活动</Text>
                        </View>
                    </View>
                    <View style={styles.myView}>
                        <View style={styles.itemView}>
                            <Image style={styles.imageItem} source={require('../res/images/count-down.png')} resizeMode='contain'/>
                            <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.countdown}</Text>
                        </View>
                        <View style={styles.addView}>
                            <Image style={styles.imageItem} source={require('../res/images/leader.png')} resizeMode='contain'/>
                            <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>我当领队</Text>
                        </View>
                    </View>
                    <View style={[Styless.styles.light_F8F8F8,{height:UtilScreen.getHeight(20)}]}/>
                </View>
            )
        }

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
        marginTop:UtilScreen.getHeight(16),
        marginLeft:UtilScreen.getWidth(40),
        alignItems:'center',
        flexDirection:'row',
        height:UtilScreen.getHeight(40),
        width:UtilScreen.getWidth(400),
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
    imageSmall:{
        width:UtilScreen.getWidth(40),
        height:UtilScreen.getHeight(40),
    },
    addView:{
        alignItems:'center',
        flex:2/5,
        flexDirection:'row',
    },
})
