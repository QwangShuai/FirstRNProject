import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');

export default class TeamInsertTextItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            insertText:'队友的插文，想说什么就说什么呗！',
            imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/20 1408240241206330.jpg'},
            state:'待审核',
            headUrl:require('../res/images/head.png'),
            nickname:'昵称',
            releaseTime:'发布时间：2018-03-30',
        }
    }
    render(){
        return(
            <View style={Styless.styles.container}>
                <Text style={Styless.styles.it_insertTextStyle}>{this.props.itemInfo.insertText}</Text>
                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl}/>
                    <View style={{flexDirection:'column'}}>
                        <View style={styles.myView}>
                            <Image style={styles.headStyle} source={this.props.itemInfo.headUrl}/>
                            <Text style={[styles.timeStyle,{marginLeft:UtilScreen.getWidth(4)}]}>{this.props.itemInfo.nickname}</Text>
                        </View>
                        <Text style={[styles.timeStyle,{marginLeft:UtilScreen.getWidth(40)}]}>{this.props.itemInfo.releaseTime}</Text>
                    </View>
                </View>
                <Text style={styles.stateStyle}>{this.props.itemInfo.state}</Text>
                <View style={styles.tit_myView}>
                    <TouchableHighlight style={[Styless.styles.it_smallImageStyle,{right:UtilScreen.getWidth(235)}]} onPress={this.props.toastResult}>
                        <Image style={Styless.styles.it_smallImageStyle} source={require('../res/images/show.png')} resizeMode='contain'/>
                    </TouchableHighlight>
                    <Text style={[Styless.styles.it_textStyle,{right:UtilScreen.getWidth(130)}]} onPress={this.props.toastResult}>允许展示</Text>
                    <TouchableHighlight style={[Styless.styles.it_smallImageStyle,{right:UtilScreen.getWidth(52)}]} onPress={this.props.toastResult}>
                        <Image style={Styless.styles.it_smallImageStyle} source={require('../res/images/shield.png')} resizeMode='contain'/>
                    </TouchableHighlight>
                    <Text style={[Styless.styles.it_textStyle,{right:0}]} onPress={this.props.toastResult}>屏蔽</Text>
                </View>
                <View style={Styless.styles.light_F8F8F8} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        marginTop:UtilScreen.getHeight(30),
        alignSelf:'center',
        width:UtilScreen.getWidth(670),
        height:UtilScreen.getHeight(200),
    },
    imageStyle:{
        width:UtilScreen.getWidth(300),
        height:UtilScreen.getHeight(200),
    },
    headStyle:{
        width:UtilScreen.getWidth(80),
        height:UtilScreen.getHeight(80),
        borderRadius:UtilScreen.getWidth(120),
    },
    myView:{
        marginTop:UtilScreen.getHeight(30),
        marginLeft:UtilScreen.getWidth(30),
        marginBottom:UtilScreen.getHeight(20),
        height:UtilScreen.getHeight(80),
        flexDirection:'row',
    },
    timeStyle:{
        alignSelf:'center',
        fontSize:14,
        color:'#333333',
    },
    stateStyle:{
        marginTop:UtilScreen.getHeight(30),
        marginLeft:UtilScreen.getWidth(40),
        width:UtilScreen.getWidth(172),
        height:UtilScreen.getHeight(64),
        borderRadius:UtilScreen.getWidth(10),
        borderWidth:UtilScreen.getWidth(2),
        borderColor:'#f71f1f',
        textAlign:'center',
        lineHeight:UtilScreen.getHeight(64),
    },
    tit_myView:{
        height:UtilScreen.getHeight(20),
        width:UtilScreen.getWidth(670),
        alignSelf:'center',
        flexDirection:'row',
    },
})