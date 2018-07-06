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
    ScrollView
} from 'react-native';
import ToolBar from '../components/ToolBar';
import FriendsRememberItem from '../components/FriendsRememberItem';
import ActivityView from '../components/ActivityView';
import UtilScreen from '../util/UtilScreen';
import PolyContentItem from '../components/PolyContentItem';

const Stylecss = require('../common/Stylecss');
export default class FrendRemeberDetails extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            item: {
                pic: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                title: '标题标题标题标题标题标题标题标 题标题标题标题标题标题标题标题',
                look: '123456',
                nickname: '盗将行',
                pffavorite: '123456',
                userpic: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                level: '123',
                begin_time: '2018.05.01',
                end_time: '2018.05.02',
                city: '上海',
                price: '￥1500.00',
                relatedActivities: {
                    context: '开头讲个段子。在决定下笔写游记之前，我在朋友圈征集和酒有关旅行故事，很多人问我，要和酒有关的故…',
                    time: '2018-04-04',
                    views: '1234',
                    comments: '1234',
                    url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                },
            },
            myItem: [
                {
                    key: 0,
                    contentTitle: '【第1天】 玉龙雪山 景色美呆了',
                    contentText: '玉龙雪山 景色美呆了 真的 我差点就信了  你别不信',
                    content: [
                        {
                            key: 0,
                            url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            text: '我也不知道该说些什么 绝望的一笔',
                            headUrl: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            nickname: '哎呀哟',
                        },
                        {
                            key: 1,
                            url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            text: '我也不知道该说些什么 五黑啊哈',
                            headUrl: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            nickname: '哎呀哟',
                        },
                    ],
                },
                {
                    key: 1,
                    contentTitle: '【第2天】 玉龙雪山 景色美呆了',
                    contentText: '玉龙雪山 景色美呆了 真的 我差点就信了  你别不信',
                    content: [
                        {
                            key: 0,
                            url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            text: '我也不知道该说些什么 绝望的一笔',
                            headUrl: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            nickname: '哎呀哟',
                        },
                        {
                            key: 1,
                            url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            text: '我也不知道该说些什么 五黑啊哈',
                            headUrl: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            nickname: '哎呀哟',
                        },
                        {
                            key: 2,
                            url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            text: '我也不知道该说些什么 lilili',
                            headUrl: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            nickname: '哎呀哟',
                        },
                        {
                            key: 3,
                            url: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            text: '我也不知道该说些什么 五黑啊哈',
                            headUrl: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                            nickname: '哎呀哟',
                        },
                    ],
                },
            ],
            isFocus:false,
            isParise:false,
            isCollection:false,
        }
    }

    activities() {
        alert('瞎JB点吧   弹出来了吧')
    }
    comments(){
        alert('你点评论上了啊')
    }
    backClick() {
        this.props.navigation.goBack();
    }
    insertText(){
        alert('这是一个插文')
    }
    share(){
        alert('可能是要分享了')
    }
    focus(){
          this.setState({
              isFocus:!this.state.isFocus
          })
    }
    parise(){
        this.setState({
            isParise:!this.state.isParise
        })
    }
    collection(){
        this.setState({
            isCollection:!this.state.isCollection
        })
    }
    render() {
        return (
            <ScrollView>
                <View style={Stylecss.styles.container}>
                    <ToolBar title={'友记详情'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                    <Image style={{height: UtilScreen.getHeight(372), width: '100%', resizeMode: 'stretch'}}
                           source={this.state.item.pic}/>
                    <Text style={styles.titleStyle}>{this.state.item.title}</Text>
                    <View style={{
                        marginTop: UtilScreen.getHeight(20),
                        // width: UtilScreen.getWidth(480),
                        height: UtilScreen.getHeight(40),
                        marginLeft: UtilScreen.getWidth(40),
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
                        height: UtilScreen.getHeight(3),
                        width: UtilScreen.getWidth(710),
                        backgroundColor: "#e5e5e5",
                        alignSelf: 'center',
                        marginTop: UtilScreen.getHeight(10),
                        marginBottom: UtilScreen.getHeight(30)
                    }}/>
                    <View style={styles.viewStyle}>
                        <View>
                            <View style={{marginTop: 0, flexDirection: 'row'}}>
                                <Image style={styles.imageView} source={require('../res/images/time-start.png')}/>
                                <Text style={styles.textView}>开始时间：{this.state.item.begin_time}</Text>
                            </View>
                            <View style={{marginTop: UtilScreen.getHeight(10), flexDirection: 'row'}}>
                                <Image style={styles.imageView} source={require('../res/images/time-end.png')}/>
                                <Text style={styles.textView}>结束时间：{this.state.item.end_time}</Text>
                            </View>
                            <View style={{marginTop: UtilScreen.getHeight(10), flexDirection: 'row'}}>
                                <Image style={styles.imageView} source={require('../res/images/price.png')}/>
                                <Text style={styles.textView}>人均费用：{this.state.item.price}</Text>
                            </View>
                            <View style={{marginTop: UtilScreen.getHeight(10), flexDirection: 'row'}}>
                                <Image style={styles.imageView} source={require('../res/images/place.png')}/>
                                <Text style={styles.textView}>活动地点：{this.state.item.city}</Text>
                            </View>
                        </View>
                        <View style={{position: 'absolute', right: UtilScreen.getWidth(32)}}>
                            <Image style={{
                                height: UtilScreen.getHeight(140),
                                width: UtilScreen.getHeight(140),
                                borderRadius: UtilScreen.getHeight(140)
                            }} source={this.state.item.userpic}/>
                            <Text style={{
                                color: '#333333',
                                fontSize: 12,
                                marginLeft: UtilScreen.getHeight(10),
                                alignSelf: 'center'
                            }}>{this.state.item.nickname}</Text>
                            <ImageBackground style={{marginTop:UtilScreen.getHeight(10),width:UtilScreen.getWidth(97),height:UtilScreen.getHeight(30),alignSelf:'center'}}
                                source={require('../res/images/level-v.png')} resizeMode='contain'>
                                <Text style={{color:'#fff',fontSize:9,marginLeft:UtilScreen.getWidth(41)}}>LV1</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <TouchableHighlight
                        style={{height: UtilScreen.getHeight(254), backgroundColor: '#F7F7F7', flexDirection: 'row'}}
                        onPress={this.activities.bind(this)} underlayColor="#F7F7F7">
                        <View style={{
                            height: UtilScreen.getHeight(254),
                            backgroundColor: '#F7F7F7',
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                marginTop: UtilScreen.getHeight(32),
                                width: UtilScreen.getWidth(391),
                                marginLeft: UtilScreen.getWidth(40)
                            }}>
                                <Text style={{color: '#5b5b5b', fontSize: 14, lineHeight: UtilScreen.getHeight(40)}}>相关活动</Text>
                                <Text style={{
                                    color: '#747474',
                                    fontSize: 12,
                                    height: UtilScreen.getHeight(98),
                                    marginTop: UtilScreen.getHeight(10)
                                }}>{this.state.item.relatedActivities.context}</Text>
                                <View style={{
                                    height: UtilScreen.getHeight(33),
                                    flexDirection: 'row',
                                    marginTop: UtilScreen.getHeight(10)
                                }}>
                                    <Text style={{
                                        color: '#5a5a5a',
                                        fontSize: 12,
                                        lineHeight: UtilScreen.getHeight(33)
                                    }}>{this.state.item.relatedActivities.time}</Text>
                                    <Image style={styles.imageStyle} source={require('../res/images/eyes.png')}/>
                                    <Text style={{
                                        color: '#ff9d00',
                                        fontSize: 12,
                                        lineHeight: UtilScreen.getHeight(33),
                                        marginLeft: UtilScreen.getWidth(6)
                                    }}>{this.state.item.relatedActivities.views}</Text>
                                    <Image style={styles.imageStyle} source={require('../res/images/message-y.png')}/>
                                    <Text style={{
                                        color: '#ff9d00',
                                        fontSize: 12,
                                        lineHeight: UtilScreen.getHeight(33),
                                        marginLeft: UtilScreen.getWidth(6)
                                    }}>{this.state.item.relatedActivities.comments}</Text>
                                </View>
                            </View>
                            <Image style={{
                                marginTop: UtilScreen.getHeight(40),
                                width: UtilScreen.getWidth(262),
                                height: UtilScreen.getHeight(176),
                                marginLeft: UtilScreen.getWidth(17),
                                resizeMode: 'stretch'
                            }} source={this.state.item.relatedActivities.url}/>
                        </View>
                    </TouchableHighlight>
                    <FlatList
                        data={this.state.myItem}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <FriendsRememberItem itemInfo={item}/>
                                </View>
                            )
                        }}
                        keyExtractor={item => item.key.toString()}
                    ></FlatList>
                    <View style={{backgroundColor: '#ededed', height: UtilScreen.getHeight(2),width:'100%'}}/>
                    <View style={{flexDirection: 'row', height: UtilScreen.getHeight(96)}}>
                        <TouchableHighlight style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(96),
                            marginLeft: UtilScreen.getWidth(80)
                        }}
                                            underlayColor="#fff" onPress={this.insertText.bind(this)}>
                            <View style={styles.myView}>
                                <Image style={styles.myImage} source={require('../res/images/details-article.png')}/>
                                <Text style={styles.myText}>插文</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(96),
                            marginLeft: UtilScreen.getWidth(70)
                        }}
                                            underlayColor="#fff" onPress={this.comments.bind(this)}>
                            <View style={styles.myView}>
                                <Image style={styles.myImage} source={require('../res/images/details-comments.png')}/>
                                <Text style={styles.myText}>评论</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(96),
                            marginLeft: UtilScreen.getWidth(70)
                        }}
                                            underlayColor="#fff" onPress={this.share.bind(this)}>
                            <View style={styles.myView}>
                                <Image style={styles.myImage} source={require('../res/images/details-share.png')}/>
                                <Text style={styles.myText}>分享</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(96),
                            marginLeft: UtilScreen.getWidth(70)
                        }}
                                            underlayColor="#fff" onPress={this.focus.bind(this)}>
                            <View style={styles.myView}>
                                <Image style={styles.myImage} source={this.state.isFocus?require('../res/images/unattentioned.png'):require('../res/images/details-focus.png')}/>
                                <Text style={[styles.myText,{color:this.state.isFocus?'#ff9d00':'#404040'}]}>关注</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(96),
                            marginLeft: UtilScreen.getWidth(70)
                        }}
                                            underlayColor="#fff" onPress={this.parise.bind(this)}>
                            <View style={styles.myView}>
                                <Image style={styles.myImage} source={this.state.isParise?require('../res/images/details-parise0.png'):require('../res/images/details-praise.png')}/>
                                <Text style={[styles.myText,{color:this.state.isParise?'#ff9d00':'#404040'}]}>点赞</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(96),
                            marginLeft: UtilScreen.getWidth(70)
                        }}
                                            underlayColor="#fff" onPress={this.collection.bind(this)}>
                            <View style={styles.myView}>
                                <Image style={styles.myImage} source={this.state.isCollection?require('../res/images/details-Star0.png'):require('../res/images/details-Star.png')}/>
                                <Text style={[styles.myText,{color:this.state.isCollection?'#ff9d00':'#404040'}]}>收藏</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        alignSelf: 'center',
        color: '#333333',
        fontSize: 18,
        width: UtilScreen.getWidth(670),
        height: UtilScreen.getHeight(100),
        marginTop: UtilScreen.getHeight(30),
    },
    viewStyle: {
        height: UtilScreen.getHeight(223),
        marginLeft: UtilScreen.getWidth(40),
        flexDirection: 'row',
    },
    imageView: {
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
        width: UtilScreen.getWidth(28),
        height: UtilScreen.getHeight(28),
        marginLeft: UtilScreen.getWidth(20),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    myView: {
        width: UtilScreen.getWidth(40),
        marginTop: UtilScreen.getHeight(14),
    },
    myImage: {
        width: UtilScreen.getWidth(36),
        height: UtilScreen.getHeight(36),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    myText: {
        color: '#404040',
        fontSize: 10,
        alignSelf: 'center',
        marginTop: UtilScreen.getHeight(6),
    },
})