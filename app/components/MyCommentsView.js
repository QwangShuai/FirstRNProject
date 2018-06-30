import React, {Component} from 'react';

import {View, StyleSheet, Image, TextInput, Text, FlatList, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';

const Stylecss = require('../common/Stylecss');
let count = 0;
export default class MyCommentsView extends Component {
    static defaultProps = {
        itemInfo: {
            headUrl: require('../res/images/1.jpg'),
            sex: require('../res/images/nan.png'),
            nickname: '昵称：帅气的小迷糊',
            praise: '110',
            contentText: '我爱旅游我爱旅游我爱旅游我爱旅游我 我爱旅游我爱旅游我爱旅游我爱旅游爱 旅游',
            time: '2018-02-04 12：41',
            title: '张三丰',
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
        count=0;
    }
    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
        }
    }

    itemClick(item) {
        alert(item.comments)
    }

    userClick(item) {
        alert(item.user)
    }
    showMore(){
        this.setState({
            isShow:true,
        })
        count=0
    }
    packUp(){
        this.setState({
            isShow:false,
        })
        count=0
    }
    showView(){
        if(this.state.isShow&&count===item.length){
            return(
                <View>
                    <Text style={{color: '#333333', fontSize: 12, marginTop: UtilScreen.getHeight(6)}} onPress={this.packUp.bind(this)}>收起</Text>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <View style={styles.viewStyle}>
                    <View style={{
                        width: UtilScreen.getWidth(100),
                        marginLeft: UtilScreen.getWidth(40),
                        height: UtilScreen.getHeight(100)
                    }}>
                        <Image style={styles.headStyle} source={this.props.itemInfo.headUrl} resizeMode='cover'/>
                        <Image style={styles.sexStyle} source={this.props.itemInfo.sex} resizeMode='contain'/>
                    </View>
                    <View style={{
                        height: UtilScreen.getHeight(100),
                        width: UtilScreen.getWidth(455),
                        flexDirection: 'column',
                        marginLeft: UtilScreen.getWidth(20)
                    }}>
                        <Text style={{
                            color: '#333333',
                            fontSize: 15,
                            marginTop: UtilScreen.getHeight(15)
                        }}>{this.props.itemInfo.nickname}</Text>
                        <Text style={{
                            fontSize: 12,
                            lineHeight: UtilScreen.getHeight(33),
                            marginTop: UtilScreen.getHeight(4),
                            color: '#626262'
                        }}>
                            {this.props.itemInfo.title}</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        right: UtilScreen.getWidth(40),
                        top: UtilScreen.getHeight(32),
                        flexDirection: 'row',
                    }}>
                        <Image style={{
                            width: UtilScreen.getWidth(35),
                            height: UtilScreen.getHeight(35),
                            resizeMode: 'contain'
                        }} source={require('../res/images/thumbs-up.png')}/>
                        <Text style={{
                            color: '#cacaca',
                            fontSize: 15,
                            lineHeight: UtilScreen.getHeight(35),
                            marginLeft: UtilScreen.getWidth(6),
                            marginTop:UtilScreen.getHeight(2)
                        }}>{this.props.itemInfo.praise}</Text>
                    </View>
                </View>
                <Text style={{
                    color: '#333333',
                    fontSize: 14,
                    width: UtilScreen.getWidth(510),
                    marginLeft: UtilScreen.getWidth(160),
                    marginTop: UtilScreen.getHeight(20)
                }}>{this.props.itemInfo.contentText}</Text>
                <Text style={{
                    marginLeft: UtilScreen.getWidth(160),
                    marginTop: UtilScreen.getHeight(10),
                    color: '#cacaca',
                    fontSize: 12
                }}>{this.props.itemInfo.time}</Text>
                <FlatList
                    style={{
                        marginTop: UtilScreen.getHeight(20),
                        width: UtilScreen.getWidth(550),
                        marginLeft: UtilScreen.getWidth(160),
                        padding: UtilScreen.getWidth(20),
                        backgroundColor: '#e5e5e5',
                    }}
                    data={this.props.itemInfo.commentsInfo}
                    renderItem={({item}) => {
                        count++
                        if (count < 4||this.state.isShow) {
                                return (
                                    <View>
                                        <TouchableHighlight
                                            underlayColor={'#f8f8f8'}
                                            onPress={this.itemClick.bind(this, item)}>
                                            <View style={{marginTop: UtilScreen.getHeight(4), flexDirection: 'row'}}>
                                                <Text style={{color: '#0277EE', fontSize: 14}}
                                                      onPress={this.userClick.bind(this, item)}>{item.user}</Text>
                                                <Text style={{color: '#333333', fontSize: 14,textAlign:'center'}}> ： {item.comments}</Text>
                                            </View>
                                        </TouchableHighlight>
                                        <Text style={{color: '#333333', fontSize: 12, marginTop: UtilScreen.getHeight(6),height:(count==this.props.itemInfo.commentsInfo.length)?UtilScreen.getHeight(33):0}} onPress={this.packUp.bind(this)}>收起</Text>
                                    </View>
                                );
                        } else if (count === 4&&count<5) {
                            return (
                                <View>
                                    <Text style={{color: '#333333', fontSize: 12, marginTop: UtilScreen.getHeight(6)}} onPress={this.showMore.bind(this)}>查看更多</Text>
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
        height: UtilScreen.getHeight(100),
        width: '100%',
        flexDirection: 'row',
    },
    headStyle: {
        width: UtilScreen.getHeight(100),
        height: UtilScreen.getHeight(100),
        borderRadius: UtilScreen.getHeight(100),
    },
    sexStyle: {
        height: UtilScreen.getHeight(34),
        width: UtilScreen.getWidth(34),
        position: 'absolute',
        right: 0,
        bottom: 0,
    },
})