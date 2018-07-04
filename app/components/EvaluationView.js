import React, {Component} from 'react';

import {View, StyleSheet, Image, TextInput, Text, FlatList, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';

const Stylecss = require('../common/Stylecss');
let count = 0;
export default class EvaluationView extends Component {
    static defaultProps = {
        itemInfo: {
            headUrl: require('../res/images/1.jpg'),
            nickname: '昵称：帅气的小迷糊',
            contentText: '我爱旅游我爱旅游我爱旅游我爱旅游我 我爱旅游我爱旅游我爱旅游我爱旅游爱 旅游',
            commentsInfo: [
                {
                    key: 0,
                    user: '葫芦娃：大娃',
                    comments: '妖怪快放了我的爷爷',
                },
                {
                    key: 1,
                    user: '葫芦娃：二娃',
                    comments: '妖怪快放了我的爷爷',
                },
                {
                    key: 2,
                    user: '葫芦娃：三娃',
                    comments: '妖怪快放了我的爷爷',
                },
                {
                    key: 3,
                    user: '蛇精',
                    comments: '日你爷爷个象拔蚌，瓜皮葫芦娃，你皮任你皮，专打你瓜皮！！！',
                },
                {
                    key: 4,
                    user: '蛇精2',
                    comments: '日你爷爷个象拔蚌，瓜皮葫芦娃，你皮任你皮，专打你瓜皮！！！',
                },
            ]
        }

    }

    componentWillMount() {
        count = 0;
        // let data = this.props.itemInfo.commentsInfo.concat();
        // this.setState({
        //     commentsInfo:data
        // })
    }

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            // commentsInfo:[
            //
            // ]
        }
    }

    itemClick(item) {
        alert(item.comments)
    }

    userClick(item) {
        alert(item.user)
    }

    showMore() {
        this.setState({
            isShow: true,
        })
        count = 0
    }

    packUp() {
        this.setState({
            isShow: false,
        })
        count = 0
    }

    showView() {
        if (this.state.isShow && count === item.length) {
            return (
                <View>
                    <Text style={{color: '#333333', fontSize: 12, marginTop: UtilScreen.getHeight(6)}}
                          onPress={this.packUp.bind(this)}>收起</Text>
                </View>
            )
        }
    }
    componentWillReceiveProps(){
        count=0;
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <View style={styles.viewStyle}>
                    <View style={{
                        width: UtilScreen.getWidth(140),
                        marginLeft: UtilScreen.getWidth(20),
                        height: UtilScreen.getHeight(140)
                    }}>
                        <Image style={styles.headStyle} source={this.props.itemInfo.headUrl} resizeMode='cover'/>
                    </View>
                    <View style={{
                        // height: UtilScreen.getHeight(100),
                        width: UtilScreen.getWidth(532),
                        flexDirection: 'column',
                        marginLeft: UtilScreen.getWidth(20)
                    }}>
                        <Text style={{
                            color: '#333333',
                            fontSize: 14,
                            marginTop: UtilScreen.getHeight(15)
                        }}>{this.props.itemInfo.nickname}</Text>
                        <Text style={{
                            color: '#333333',
                            fontSize: 14,
                            width: UtilScreen.getWidth(510),
                            marginTop: UtilScreen.getHeight(20)
                        }}>{this.props.itemInfo.contentText}</Text>
                        <View stye={{
                            height: UtilScreen.getHeight(40),
                            width: '100%',
                            marginTop: UtilScreen.getHeight(24)
                        }}>
                            <TouchableHighlight
                                onPress={this.props.deleteItem}
                                style={{position: 'absolute', right: 0, height: UtilScreen.getHeight(40)}}>
                                <View style={{height: UtilScreen.getHeight(40), flexDirection: 'row'}}>
                                    <Image style={{
                                        width: UtilScreen.getWidth(25),
                                        height: UtilScreen.getHeight(24),
                                        alignSelf: 'center',
                                        resizeMode: 'contain'
                                    }} source={require('../res/images/delete-b.png')}/>
                                    <Text
                                        style={{color: '#333333', fontSize: 12, marginLeft:UtilScreen.getWidth(10)}}>删除</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>

                <FlatList
                    style={{
                        marginTop: UtilScreen.getHeight(64),
                        width: UtilScreen.getWidth(550),
                        marginLeft: UtilScreen.getWidth(160),
                        padding: UtilScreen.getWidth(20),
                        backgroundColor: '#e5e5e5',
                    }}
                    data={this.props.itemInfo.commentsInfo}
                    renderItem={({item}) => {
                        count++
                        if (count < 4 || this.state.isShow) {
                            return (
                                <View>
                                    <TouchableHighlight
                                        underlayColor={'#f8f8f8'}
                                        onPress={this.itemClick.bind(this, item)}>
                                        <View style={{marginTop: UtilScreen.getHeight(4), flexDirection: 'row'}}>
                                            <Text style={{color: '#333333', fontSize: 14}}>
                                                <Text style={{color: '#0277EE', fontSize: 14, textAlign: 'center'}}
                                                      onPress={this.userClick.bind(this, item)}>{item.user}</Text>
                                                ： {item.comments}
                                            </Text>

                                        </View>
                                    </TouchableHighlight>
                                    <Text style={{
                                        color: '#333333',
                                        fontSize: 12,
                                        marginTop: UtilScreen.getHeight(6),
                                        height: (count == this.props.itemInfo.commentsInfo.length) ? UtilScreen.getHeight(33) : 0
                                    }} onPress={this.packUp.bind(this)}>收起</Text>
                                </View>
                            );
                        } else if (count === 4 && count < 5) {
                            return (
                                <View>
                                    <Text style={{color: '#333333', fontSize: 12, marginTop: UtilScreen.getHeight(6)}}
                                          onPress={this.showMore.bind(this)}>查看更多</Text>
                                </View>
                            )
                        }

                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        marginTop: UtilScreen.getHeight(24),
        // height: UtilScreen.getHeight(100),
        width: '100%',
        flexDirection: 'row',
    },
    headStyle: {
        width: UtilScreen.getHeight(140),
        height: UtilScreen.getHeight(140),
        borderRadius: UtilScreen.getHeight(140),
    },
    sexStyle: {
        height: UtilScreen.getHeight(34),
        width: UtilScreen.getWidth(34),
        position: 'absolute',
        right: 3,
        bottom: 0,
    },
})