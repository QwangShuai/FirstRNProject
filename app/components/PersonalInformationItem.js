import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');

export default class PersonalInformationItem extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        itemInfo: {
            imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
            title:'云南快乐之旅 感受慢节奏云南快乐之旅 感受慢 节云南快乐之旅 感受慢节奏云南快乐之旅 感受',
            views:'浏览：3678',
            comments:'评论：12',
            collection:'收藏 5',
            praise:'赞 10',
        }
    }

    render(){
        return(
            <View style={{backgroundColor:'#1f212d'}}>
                <Image style={styles.imageStyle} source={this.props.itemInfo.imageUrl}></Image>
                <Text style={styles.titleStyle}>{this.props.itemInfo.title}</Text>
                <View style={styles.b_View}>
                    <Image style={styles.imageView} source={require('../res/images/eyes.png')}/>
                    <Text style={styles.textView}>{this.props.itemInfo.views}</Text>
                    <Image style={[styles.imageView,{height:UtilScreen.getHeight(28)}]} source={require('../res/images/message_num_icon.png')}/>
                    <Text style={styles.textView}>{this.props.itemInfo.comments}</Text>
                    <Image style={styles.imageView} source={require('../res/images/collection.png')}/>
                    <Text style={styles.textView}>{this.props.itemInfo.collection}</Text>
                    <Image style={styles.imageView} source={require('../res/images/parse.png')}/>
                    <Text style={styles.textView}>{this.props.itemInfo.praise}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageStyle:{
        height:UtilScreen.getHeight(372),
        width:'100%',
    },
    titleStyle:{
        marginTop:UtilScreen.getHeight(21),
        marginLeft:UtilScreen.getWidth(35),
        marginRight:UtilScreen.getWidth(53),
        color:'#fff',
        fontSize:16,
    },
    b_View:{
        marginTop:UtilScreen.getHeight(20),
        marginLeft:UtilScreen.getWidth(33),
        height:UtilScreen.getHeight(40),
        flexDirection:'row',
    },
    imageView:{
        alignSelf:'center',
        width:UtilScreen.getWidth(35),
        height:UtilScreen.getHeight(35),
        resizeMode:'contain',
        marginRight:UtilScreen.getWidth(5),
    },
    textView:{
        alignSelf:'center',
        fontSize:13,
        color:'#fff',
        textAlign:'center',
        marginRight:UtilScreen.getWidth(20),
    },
})