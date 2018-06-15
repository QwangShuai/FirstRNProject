import React, {Component} from 'react';
import {View, ImageBackground, Text, Image, TouchableHighlight} from 'react-native';
import UtilScreen from "../util/UtilScreen";

export default class HotFriendRemember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotFriendRemeber: {
                key: 0,
                imageURL: require('../res/images/guangzhou.jpg'),
                article: {
                    title: '朝美首脑首次会晤 金正恩特朗普历史性握手',
                    content: '当地时间12日上午，朝鲜最高领导人金正恩与美国总统特朗普在新加坡嘉佩乐酒店举行首次会晤，双方握手致意。这是在任的朝美领导人数十年来首次会晤及握手。',
                    date: '2018-6-14',
                    visitorsNum: 15600,
                    messageNum: 1200,
                },
                userInfo: {
                    userName: '爱吃土豆的西瓜',
                    userLevel: 'LV 1',
                    headImagePath: require('../res/images/head_image.png'),
                }
            }
        };
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff'}}>
                <View style={{
                    backgroundColor: '#fff',
                    width: '100%',
                    height: UtilScreen.getHeight(100),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <ImageBackground
                        style={{
                            marginLeft: UtilScreen.getWidth(20),
                            width: UtilScreen.getWidth(220),
                            height: UtilScreen.getHeight(65),
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        source={require('../res/images/rectangle.png')}
                        resizeMode='stretch'
                    >
                        <Text style={{fontSize: 15, color: '#fff'}}>推荐作品</Text>
                    </ImageBackground>
                    <TouchableHighlight style={{marginRight: UtilScreen.getWidth(35)}}>
                        <Image
                            source={require('../res/images/more.png')}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                    <View style={{
                        width: '100%',
                        height: UtilScreen.getHeight(90),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: '#333',
                                fontSize: 15,
                                fontWeight: '800',
                                marginLeft: UtilScreen.getWidth(20),
                                width: UtilScreen.getWidth(500)
                            }}>{this.state.hotFriendRemeber.article.title}</Text>
                        <Text style={{
                            marginRight: UtilScreen.getWidth(20),
                            fontSize: 14,
                            color: '#fff',
                            lineHeight: UtilScreen.getHeight(60),
                            borderRadius: 5,
                            textAlign: 'center',
                            backgroundColor: '#ff9d00',
                            width: UtilScreen.getWidth(90),
                            height: UtilScreen.getHeight(60)
                        }}>热门</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text numberOfLines={4} style={{
                        textAlign: 'justify',
                        backgroundColor: '#fff',
                        fontSize: 14,
                        color: '#333',
                        padding: UtilScreen.getWidth(20),
                        width: UtilScreen.getWidth(460),
                        height: UtilScreen.getHeight(190)
                    }}>{this.state.hotFriendRemeber.article.content}</Text>
                    <Image
                        style={{width: UtilScreen.getWidth(265), height: UtilScreen.getHeight(190)}}
                        source={this.state.hotFriendRemeber.imageURL}
                        resizeMode='stretch'
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: UtilScreen.getHeight(30),
                    paddingBottom: UtilScreen.getHeight(30)
                }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        marginLeft: UtilScreen.getWidth(20)
                    }}>
                        <Image
                            style={{
                                width: UtilScreen.getWidth(50),
                                height: UtilScreen.getWidth(50),
                                borderRadius: UtilScreen.getWidth(25)
                            }}
                            resizeMode='stretch'
                            source={this.state.hotFriendRemeber.userInfo.headImagePath}
                        />
                        <Text numberOfLines={1} style={{
                            lineHeight: UtilScreen.getWidth(50),
                            marginLeft: UtilScreen.getWidth(10),
                            color: '#333',
                            fontSize: 12
                        }}>{this.state.hotFriendRemeber.userInfo.userName}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginRight: UtilScreen.getWidth(20),
                    }}>
                        <Text style={{color: '#333', fontSize: 12}}>{this.state.hotFriendRemeber.article.date}</Text>
                        <Image
                            style={{marginLeft: UtilScreen.getWidth(20), marginTop: UtilScreen.getHeight(8)}}
                            source={require('../res/images/visitors_num_icon.png')}
                        />
                        <Text style={{
                            color: '#ff9d00',
                            fontSize: 12,
                            marginLeft: UtilScreen.getWidth(10)
                        }}>{this.state.hotFriendRemeber.article.visitorsNum}</Text>
                        <Image
                            style={{marginLeft: UtilScreen.getWidth(20), marginTop: UtilScreen.getHeight(8)}}
                            source={require('../res/images/message_num_icon.png')}
                        />
                        <Text style={{
                            color: '#ff9d00',
                            fontSize: 12,
                            marginLeft: UtilScreen.getWidth(10)
                        }}>{this.state.hotFriendRemeber.article.messageNum}</Text>
                    </View>
                </View>
            </View>
        );
    }
}