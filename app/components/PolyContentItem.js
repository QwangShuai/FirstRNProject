import React, {Component} from 'react';
/**
 * 友聚友记list封装
 */
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class PolyContentItem extends Component {
    static defaultProps = {

        itemInfo:{
            key:0,
            contentTitle:'【第二天】 玉龙雪山 景色美呆了',
            contentText:'玉龙雪山 景色美呆了 真的 我差点就信了  你别不信',
            content: [
                {
                    key:0,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    text:'我也不知道该说些什么 绝望的一笔',
                }
            ],

        }
    }
    constructor(props) {
        super(props);
        this.state = {
            content:[
                {
                    key:0,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    text:'我也不知道该说些什么 绝望的一笔',
                }
            ]


        }
    }
    render(){
        return(
            <View>
                <View style={{backgroundColor:'#e5e5e5',height:UtilScreen.getHeight(2),marginLeft:UtilScreen.getWidth(20),marginRight:UtilScreen.getWidth(20)}} />
                <Text style={{color:'#333333',fontSize:15,marginLeft:UtilScreen.getWidth(22),marginTop:UtilScreen.getHeight(24)}}>{this.props.itemInfo.contentTitle}</Text>
                <Text style={{color:'#333333',fontSize:14,paddingLeft:UtilScreen.getWidth(40),paddingTop:UtilScreen.getHeight(20),
                    paddingRight:UtilScreen.getWidth(40),paddingBottom:UtilScreen.getHeight(30)}}>{this.props.itemInfo.contentText}</Text>
                <FlatList
                    data={this.props.itemInfo.content}
                    renderItem={({item}) => {
                        return(
                            <View style={{height:UtilScreen.getHeight(472),width:UtilScreen.getWidth(750)}}>
                                <Image style={{width:'100%',height:UtilScreen.getHeight(372),resizeMode:'stretch'}} source={item.url}/>
                                <Text style={{color:'#333333',fontSize:14,marginLeft:UtilScreen.getWidth(40),lineHeight:UtilScreen.getHeight(100)}}>{item.text}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}