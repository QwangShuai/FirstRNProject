import React, {Component} from 'react';
import {View, StyleSheet, Image,Text,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
export default class FriendRememberItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{paddingTop:UtilScreen.getHeight(30)}}>
                <Image
                    style={{width: '100%',height:UtilScreen.getHeight(375)}}
                    source={this.props.item.imageURL}
                    resizeMode='stretch'
                />
                <View style={{flexDirection:'row'}}>
                    <View style={{width:UtilScreen.getWidth(560),backgroundColor:'#fff',height:UtilScreen.getHeight(320)}}>
                        <Text style={{color:'#333',fontSize:15,fontWeight:'800',marginTop:UtilScreen.getHeight(20),marginLeft:UtilScreen.getWidth(20)}}>{this.props.item.article.title}</Text>
                        <Text numberOfLines={4} style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(20),marginLeft:UtilScreen.getWidth(20)}}>{this.props.item.article.content}</Text>
                        <View style={{flexDirection:'row',marginLeft:UtilScreen.getWidth(20),marginTop:UtilScreen.getHeight(10)}}>
                            <Text style={{color:'#333',fontSize:12}}>{this.props.item.article.date}</Text>
                            <Image
                                style={{marginLeft:UtilScreen.getWidth(20),marginTop:UtilScreen.getHeight(8)}}
                                source={require('../res/images/visitors_num_icon.png')}
                            />
                            <Text style={{color:'#ff9d00',fontSize:12,marginLeft:UtilScreen.getWidth(10)}}>{this.props.item.article.visitorsNum}</Text>
                            <Image
                                style={{marginLeft:UtilScreen.getWidth(20),marginTop:UtilScreen.getHeight(8)}}
                                source={require('../res/images/message_num_icon.png')}
                            />
                            <Text style={{color:'#ff9d00',fontSize:12,marginLeft:UtilScreen.getWidth(10)}}>{this.props.item.article.messageNum}</Text>
                            <TouchableHighlight  underlayColor={'#fff'} onPress={this.props.clickAttention.bind(this,this.props.index)} style={{marginLeft:UtilScreen.getWidth(20),marginTop:UtilScreen.getHeight(0)}}>
                                <View style={{flexDirection:'row'}}
                                >
                                    <Image
                                        style={{width:UtilScreen.getWidth(24)}} source={this.props.item.isAttention?require('../res/images/unattentioned.png'):require('../res/images/attentioned.png')} resizeMode='contain'
                                    />
                                    <Text style={{color:'#333',fontSize:12,marginLeft:UtilScreen.getWidth(10)}}>{this.props.item.isAttention?'取关':'关注'}</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{flex:1,backgroundColor:'#fff',height:UtilScreen.getHeight(320)}}>
                        <Image
                            style={{width:UtilScreen.getWidth(120),height:UtilScreen.getWidth(120),alignSelf:'center',marginTop:UtilScreen.getHeight(20),borderRadius:UtilScreen.getWidth(60)}}
                            source={this.props.item.userInfo.headImagePath}
                        />
                        <Text numberOfLines={1} style={{marginLeft:UtilScreen.getWidth(10),color:'#333',fontSize:12}}>{this.props.item.userInfo.userName}</Text>
                        <Text style={{marginTop:UtilScreen.getHeight(10),borderRadius:5,alignSelf:'center',paddingRight:UtilScreen.getWidth(20),paddingLeft:UtilScreen.getWidth(20),color:'#fff',fontSize:14,backgroundColor:'#ff9d00'}}>{this.props.item.userInfo.userLevel}</Text>
                    </View>
                </View>
                <View style={{width:'100%',height:UtilScreen.getHeight(20),backgroundColor:'#efeff4',marginTop:UtilScreen.getHeight(20)}}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({});