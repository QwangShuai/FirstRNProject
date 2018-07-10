import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableHighlight,
    ImageBackground,
    ScrollView,
    AsyncStorage
} from 'react-native';
import ToolBar from '../components/ToolBar';
import ActivityView from '../components/ActivityView';
import UtilScreen from '../util/UtilScreen';
import PolyContentItem from '../components/PolyContentItem';

const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";

const Stylecss = require('../common/Stylecss');
export default class FriendsTogether extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            item: {
                captain: 0,
                capttain_name: 0,
                capttain_pic: 0,
                if_sign: 0,
                show_pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                title: '标题标题标题标题标题标题标题标 题标题标题标题标题标题标题标题',
                look: '123456',
                pffavorite: '123456',
                userpic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                level: '123',
                begin_time: '2018.05.01',
                end_time: '2018.05.02',
                city: '上海',
                woman: '123',
                man: '123',
                price: '￥1500.00',
                person_num: 10,
                have_num: 3,
                user_list: [
                    {
                        ket: 0,
                        userpic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                        username: '昵称：帅气的小迷糊',
                        num: 2,
                    },
                ],
                info_list: [
                    {
                        key: 0,
                        title: '【第1天】 玉龙雪山 景色美呆了',
                        content: '玉龙雪山 景色美呆了 真的 我差点就信了  你别不信',
                        image_list: [
                            {
                                key: 0,
                                pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                                text_info: '我也不知道该说些什么 绝望的一笔',
                            },
                            {
                                key: 1,
                                pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                                text_info: '我也不知道该说些什么 五黑啊哈',
                            },
                        ],
                    },
                    {
                        key: 1,
                        title: '【第2天】 玉龙雪山 景色美呆了',
                        content: '玉龙雪山 景色美呆了 真的 我差点就信了  你别不信',
                        image_list: [
                            {
                                key: 0,
                                pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                                text_info: '我也不知道该说些什么 绝望的一笔',
                            },
                            {
                                key: 1,
                                pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                                text_info: '我也不知道该说些什么 五黑啊哈',
                            },
                            {
                                key: 2,
                                pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                                text_info: '我也不知道该说些什么 lilili',
                            },
                            {
                                key: 3,
                                pic: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg',
                                text_info: '我也不知道该说些什么 五黑啊哈',
                            },
                        ],
                    },
                ],
            },
        }
    }

    backClick() {
        this.props.navigation.goBack();
    }

    //去报名
    jumpToApply() {
        // this.props.navigation.navigate('FriendsTogether',{pfID:this.props.navigation.state.params.pfID});
        this.props.navigation.navigate('Apply', {
            pfID: 8, title: this.state.item.title,
            price: this.state.item.price, begin_time: this.state.item.begin_time,
        });
    }

    //咨询队长
    consultLeader() {
        alert('咨询队长')
    }

    //分享
    share() {
        alert('分享')
    }

    focusOn() {
        alert('关注活动')
    }

    componentDidMount() {
        let formData = new FormData();
        // formData.append("pfID", this.props.navigation.state.params.pfID);
        formData.append("pfID", 8);
        let param = md5.hex_md5(global.commons.baseurl + 'action/ac_activity/activity_info');
        let params = md5.hex_md5(param);
        formData.append('app_key', params);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("userID", result);
                    fetch(global.commons.baseurl + 'action/ac_activity/activity_info', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => response.text())
                        .then((responseData) => {
                            var bf = new Buffer(responseData, 'base64')
                            var str = bf.toString();
                            let result = JSON.parse(str);
                            console.log('wode', result);
                            if (result.code === 200) {
                                this.setState({
                                    item: result.obj
                                })
                            }
                        })
                } else {
                    this.props.navigation.navigate('Home', {position: 'FriendsTogether'});
                }

            } else {
                this.props.navigation.navigate('Home', {position: 'FriendsTogether'});
            }
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={Stylecss.styles.container}>
                    <ToolBar title={'友聚详情'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                    <Image style={{height: UtilScreen.getHeight(372), width: '100%', resizeMode: 'stretch'}}
                           source={{uri: this.state.item.show_pic.toString()}}/>
                    <View style={styles.infoView}>
                        <Text style={styles.titleStyle}>{this.state.item.title}</Text>
                        <View style={{
                            marginTop: UtilScreen.getHeight(16),
                            width: UtilScreen.getWidth(480),
                            height: UtilScreen.getHeight(40),
                            flexDirection: 'row'
                        }}>
                            <Image style={{
                                width: UtilScreen.getWidth(40),
                                height: UtilScreen.getHeight(40),
                                resizeMode: 'contain'
                            }} source={require('../res/images/eyes.png')}/>
                            <Text style={styles.textStyle}>浏览：{this.state.item.look}</Text>
                            <Image style={{
                                width: UtilScreen.getWidth(26),
                                height: UtilScreen.getHeight(40),
                                resizeMode: 'contain',
                                marginLeft: UtilScreen.getWidth(20)
                            }} source={require('../res/images/heart-y.png')}/>
                            <Text style={styles.textStyle}>关注：{this.state.item.pffavorite}</Text>
                        </View>
                        <View style={{
                            position: 'absolute',
                            right: UtilScreen.getWidth(20),
                            width: UtilScreen.getWidth(183),
                            height: UtilScreen.getHeight(183)
                        }}>
                            <Image style={{
                                width: UtilScreen.getHeight(120),
                                height: UtilScreen.getHeight(120),
                                borderRadius: UtilScreen.getHeight(120),
                                alignSelf: 'center',
                            }} source={{uri: this.state.item.capttain_pic.toString()}}/>
                            <ImageBackground style={{width: UtilScreen.getWidth(183), height: UtilScreen.getHeight(63)}}
                                             source={require('../res/images/level-1.png')}>
                                <Text style={{
                                    color: '#fff',
                                    marginTop: UtilScreen.getHeight(14),
                                    marginLeft: UtilScreen.getWidth(48),
                                    fontSize: 15
                                }}>签约领队</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <ImageBackground style={{
                        height: UtilScreen.getHeight(270),
                        width: UtilScreen.getWidth(710),
                        alignSelf: 'center',
                        flexDirection: 'row',
                    }} resizeMode='contain' source={require('../res/images/poly-box.png')}>
                        <View style={{flex: 1}}>
                            <View style={{
                                height: UtilScreen.getHeight(40),
                                flexDirection: 'row',
                                marginTop: UtilScreen.getHeight(72)
                            }}>
                                <Image style={styles.imageView} source={require('../res/images/time-start.png')}/>
                                <Text style={styles.textView}>开始时间：{this.state.item.begin_time}</Text>
                            </View>
                            <View style={{
                                height: UtilScreen.getHeight(40),
                                flexDirection: 'row',
                                marginTop: UtilScreen.getHeight(24)
                            }}>
                                <Image style={styles.imageView} source={require('../res/images/time-end.png')}/>
                                <Text style={styles.textView}>结束时间：{this.state.item.end_time}</Text>
                            </View>
                            <View style={{
                                height: UtilScreen.getHeight(40),
                                flexDirection: 'row',
                                marginTop: UtilScreen.getHeight(24)
                            }}>
                                <Image style={styles.imageView} source={require('../res/images/place.png')}/>
                                <Text style={styles.textView}>活动地点：{this.state.item.city}</Text>
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <View style={{
                                height: UtilScreen.getHeight(40),
                                flexDirection: 'row',
                                marginTop: UtilScreen.getHeight(72)
                            }}>
                                <Image style={styles.imageView} source={require('../res/images/price.png')}/>
                                <Text style={styles.textView}>人均费用：{this.state.item.price}</Text>
                            </View>
                            <View style={{
                                height: UtilScreen.getHeight(40),
                                flexDirection: 'row',
                                marginTop: UtilScreen.getHeight(24)
                            }}>
                                <Image style={styles.imageView} source={require('../res/images/nv.png')}/>
                                <Text style={styles.textView}>女生人数：{this.state.item.woman}</Text>
                            </View>
                            <View style={{
                                height: UtilScreen.getHeight(40),
                                flexDirection: 'row',
                                marginTop: UtilScreen.getHeight(24)
                            }}>
                                <Image style={styles.imageView} source={require('../res/images/nan.png')}/>
                                <Text style={styles.textView}>男生人数：{this.state.item.man}</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <Text style={{
                        position: 'absolute',
                        left: UtilScreen.getWidth(68),
                        top: UtilScreen.getHeight(680),
                        color: '#333333',
                        fontSize: 14
                    }}>出行信息</Text>
                    <ActivityView itemInfo={this.state.item.user_list} number={this.state.item.have_num}
                                  maxNum={this.state.item.person_num}/>
                    <FlatList
                        data={this.state.item.info_list}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <PolyContentItem itemInfo={item}/>
                                </View>
                            )
                        }}
                        // keyExtractor={item => item.key.toString()}
                    ></FlatList>
                    <View style={{height: UtilScreen.getHeight(98), flexDirection: 'row', backgroundColor: '#fff'}}>
                        <View style={{
                            flex: 1,
                            borderWidth: UtilScreen.getHeight(1),
                            borderColor: '#ededed',
                            flexDirection: 'row'
                        }}>
                            <TouchableHighlight style={{flex: 1}} onPress={this.consultLeader.bind()}>
                                <View style={{
                                    flex: 1,
                                    borderRightWidth: UtilScreen.getHeight(1),
                                    borderRightColor: '#ededed'
                                }}>
                                    <Image style={styles.imageStyle} source={require('../res/images/message-y.png')}/>
                                    <Text style={{
                                        marginTop: UtilScreen.getHeight(4),
                                        alignSelf: 'center',
                                        color: '#333333',
                                        fontSize: 10
                                    }}>咨询队长</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{flex: 1}} onPress={this.share.bind(this)}>
                                <View style={{
                                    flex: 1,
                                    borderRightWidth: UtilScreen.getHeight(1),
                                    borderRightColor: '#ededed'
                                }}>
                                    <Image style={styles.imageStyle} source={require('../res/images/share-y.png')}/>
                                    <Text style={{
                                        marginTop: UtilScreen.getHeight(4),
                                        alignSelf: 'center',
                                        color: '#333333',
                                        fontSize: 10
                                    }}>分享</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight style={{flex: 1}} onPress={this.focusOn.bind(this)}>
                                <View style={{flex: 1}}>
                                    <Image style={styles.imageStyle} source={require('../res/images/heart-y.png')}/>
                                    <Text style={{
                                        marginTop: UtilScreen.getHeight(4),
                                        alignSelf: 'center',
                                        color: '#333333',
                                        fontSize: 10
                                    }}>关注</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={{flex: 1,}} onPress={this.jumpToApply.bind(this)}>
                            <Text style={{
                                backgroundColor: '#ff9d00',
                                color: '#fff',
                                fontSize: 14,
                                lineHeight: UtilScreen.getHeight(98),
                                textAlign: 'center'
                            }}>报名参加</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    infoView: {
        height: UtilScreen.getHeight(178),
        marginTop: UtilScreen.getHeight(30),
        width: UtilScreen.getWidth(710),
        marginLeft: UtilScreen.getWidth(40),
        // flexDirection:'row',
        position: 'relative',
    },
    titleStyle: {
        color: '#333333',
        fontSize: 16,
        width: UtilScreen.getWidth(480),
        height: UtilScreen.getHeight(90)
    },
    textStyle: {
        fontSize: 14,
        color: '#333333',
        lineHeight: UtilScreen.getHeight(40),
        textAlign: 'center',
        marginLeft: UtilScreen.getWidth(5),
    },
    imageView: {
        marginLeft: UtilScreen.getWidth(20),
        height: UtilScreen.getHeight(40),
        width: UtilScreen.getWidth(40),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    textView: {
        marginLeft: UtilScreen.getWidth(10),
        color: '#333333',
        fontSize: 14,
        lineHeight: UtilScreen.getHeight(40),
        textAlign: 'center',
    },
    imageStyle: {
        marginTop: UtilScreen.getHeight(20),
        height: UtilScreen.getHeight(40),
        width: UtilScreen.getWidth(40),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
})