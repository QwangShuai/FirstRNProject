import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');


export default class MyInsertTextItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            insertText:'队友的插文，想说什么就说什么呗！',
            state:'待审核',
            imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
            location:'插文位置：03/士大夫',
            title:'参与的活动：标题标题标题标题标题标题标题标 题标题标题标题标题',
            lastTime:'上次编辑时间：2018-04-12 14:33:33',
        }
    }

    render(){
        return(
            <View style={Styless.styles.container}>
                <Text style={styles.insertTextStyle}>{this.props.itemInfo.insertText}</Text>
                <Text style={[styles.stateStyle,{color:'#f71f1f',marginTop:UtilScreen.getHeight(20),}]}>{this.props.itemInfo.state}</Text>
                <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl} />
                <Text style={[styles.stateStyle,{marginTop:UtilScreen.getHeight(30)}]}>{this.props.itemInfo.location}</Text>
                <Text style={[styles.stateStyle,{width:UtilScreen.getWidth(588)}]}>{this.props.itemInfo.title}</Text>
                <Text style={styles.stateStyle}>{this.props.itemInfo.lastTime}</Text>
                <View style={Styless.styles.light_E5E5E5} />
                <View style={styles.myView}>
                    <Image style={[styles.smallImageStyle,{right:UtilScreen.getWidth(188)}]} source={require('../res/images/editor-b.png')} resizeMode='contain'/>
                    <Text style={[styles.textStyle,{right:UtilScreen.getWidth(130)}]}>编辑</Text>
                    <Image style={[styles.smallImageStyle,{right:UtilScreen.getWidth(71)}]} source={require('../res/images/delete-b.png')} resizeMode='contain'/>
                    <Text style={[styles.textStyle,{right:0}]}>删除</Text>
                </View>
                <View style={Styless.styles.light_F8F8F8} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    insertTextStyle:{
        fontSize:16,
        marginTop:UtilScreen.getHeight(40),
        marginLeft:UtilScreen.getWidth(40),
        color:'#333333',
    },
    stateStyle:{
        fontSize:14,
        marginTop:UtilScreen.getHeight(10),
        marginLeft:UtilScreen.getWidth(40),
        color:'#333333',
    },
    imageStyle:{
        alignSelf:'center',
        marginTop:UtilScreen.getHeight(20),
        width:UtilScreen.getWidth(680),
        height:UtilScreen.getHeight(453),
    },
    myView:{
        height:UtilScreen.getHeight(28),
        width:UtilScreen.getWidth(680),
        alignSelf:'center',
        flexDirection:'row',
    },
    smallImageStyle:{
        width:UtilScreen.getWidth(28),
        height:UtilScreen.getHeight(28),
        position:'absolute',
    },
    textStyle:{
        fontSize:12,
        color:'#333333',
        alignSelf:'center',
        position:'absolute',
    },
})