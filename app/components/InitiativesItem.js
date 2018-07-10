import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');

export default class InitiativesItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:'',
        }
    }

    static defaultProps = {
        itemInfo: {
            pftitle: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
            pfpic: 'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg',
            pfgotime:'2018.01.01',
            pfendtime:'2018.04.20',
            pfspend:' ￥888.88',
            pflook:'1234',
            join_num:'25',
            focusOn:'10000',
        },
    }
    componentWillMount() {
        this.setState({
            images:this.props.itemInfo.pfpic.toString()
        })
    }
    render(){
        return(
            <View style={{backgroundColor:'#ffffff'}}>
                <Text style={styles.titleStyle}>{this.props.itemInfo.pftitle}</Text>
                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle} source={{uri:this.state.images}}/>
                    <View style={styles.rightView}>
                        <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(20)}]}>开始时间  :  {this.props.itemInfo.pfgotime}</Text>
                        <Text style={[styles.startTime,{marginTop:UtilScreen.getHeight(4)}]}>结束时间  :  {this.props.itemInfo.pfendtime}</Text>
                        <Text style={[styles.startTime,{marginTop:UtilScreen.getWidth(4)}]}>人均费用  : {this.props.itemInfo.pfspend}</Text>
                        <Text style={[styles.startTime,{marginTop:UtilScreen.getWidth(4)}]}>报名人数  :  {this.props.itemInfo.join_num}</Text>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Image style={styles.imageSmall} source={require('../res/images/eyes.png')} resizeMode='contain'/>
                    <Text style={[styles.startTime,{marginLeft:UtilScreen.getHeight(4)}]}>浏览:{this.props.itemInfo.pflook}</Text>
                    <Image style={[styles.imageSmall,{marginLeft:UtilScreen.getWidth(40)}]} source={require('../res/images/heart-y.png')} resizeMode='contain'/>
                    <Text style={[styles.startTime,{marginLeft:UtilScreen.getHeight(4)}]}>关注:{this.props.itemInfo.focusOn}</Text>
                </View>
                <View style={{marginTop:UtilScreen.getHeight(22),height:UtilScreen.getHeight(2),backgroundColor:'#e5e5e5',
                    marginLeft:UtilScreen.getWidth(40),width:UtilScreen.getWidth(670)}} />
                <View style={styles.myView}>
                    <TouchableHighlight style={{width:UtilScreen.getWidth(186),height:UtilScreen.getHeight(46),position:'absolute',left:0}} onPress={this.props.jump.bind(this,this.props.itemInfo.pfID)}>
                    <View style={[styles.itemView,{position:'absolute',left:0}]}>
                        <Image style={styles.imageItem} source={require('../res/images/editor.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>编辑</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{width:UtilScreen.getWidth(186),height:UtilScreen.getHeight(46)}} onPress={this.props.enterChat}>
                    <View style={styles.itemView}>
                        <Image style={[styles.imageItem,{alignSelf:'center'}]} source={require('../res/images/enter-chat.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>进入聊天室</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={{width:UtilScreen.getWidth(186),height:UtilScreen.getHeight(46),position:'absolute',right:0}} onPress={this.props.cancleActivities.bind(this,this.props.itemInfo.pfID,this.props.position)}>
                    <View style={[styles.itemView,{position:'absolute',right:0}]}>
                        <Image style={styles.imageItem} source={require('../res/images/delete.png')} resizeMode='contain'/>
                        <Text style={[styles.startTime,{marginLeft:UtilScreen.getWidth(4)}]}>取消活动</Text>
                    </View>
                    </TouchableHighlight>
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
        justifyContent:'center',
        alignItems:'center',
        marginTop:UtilScreen.getHeight(20),
        height:UtilScreen.getHeight(46),
        width:UtilScreen.getWidth(670),
        marginLeft:UtilScreen.getWidth(40),
        flexDirection:'row',
    },
    itemView:{
        alignItems:'center',
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
})
