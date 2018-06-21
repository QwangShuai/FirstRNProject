import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    TouchableHighlight,
    ScrollView
} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import PersonalInformationItem from '../components/PersonalInformationItem';

const Stylecss = require('../common/Stylecss');

export default class PersonalInformation extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            myItem: {
                headUrl: require('../res/images/head.png'),
                nickname: '帅气的小迷糊',
                level: 'Lv1',
                levelImage: require('../res/images/level-1.png'),
                signature: '个性签名：去过哪里不重要，感觉对了才重要',
                sex: require('../res/images/nan.png'),
                age: '20岁',
                area: '黑龙江',
                constellation: '天秤座',
                attention: '187关注',
                fans: '12387粉丝',
                parse: '182792获赞',
            },
            itemInfo: [
                {
                    key: '0',
                    imageUrl:{uri: 'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    title: '云南快乐之旅 感受慢节奏云南快乐之旅 感受慢 节云南快乐之旅 感受慢节奏云南快乐之旅 感受',
                    views: '浏览：3678',
                    comments: '评论：12',
                    collection: '收藏 5',
                    praise: '赞 10',
                },
                {
                    key: '1',
                    imageUrl: {uri: 'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    title: '云南快乐之旅 感受慢节奏云南快乐之旅 感受慢 节云南快乐之旅 感受慢节奏云南快乐之旅 感受',
                    views: '浏览：3678',
                    comments: '评论：12',
                    collection: '收藏 5',
                    praise: '赞 10',
                },
            ],
            worksColor:'#ff9d00',
            activityColor:'#000000',
        }
    }

    backClick() {
        this.props.navigation.navigate('Set');
    }

    itemClick(item) {

    }
    worksClick(){
        this.setState({
            worksColor:'#ff9d00',
            activityColor:'#000000',
        })
    }
    activityClick(){
        this.setState({
            worksColor:'#000000',
            activityColor:'#ff9d00',
        })
    }
    render() {
        return (
            <View style={[Stylecss.styles.container, {backgroundColor: '#1f212d',}]}>
                <ToolBar title={'个人信息'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <ScrollView>
                    <View style={styles.rView}>
                        <Text style={styles.sendStyle}>发消息</Text>
                        <View style={styles.imageView}>
                            <TouchableOpacity>
                                <Image style={styles.imageStyle} source={require('../res/images/add.png')}
                                       resizeMode='contain'></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.lView}>
                        <Image style={[styles.headStyle, {borderRadius: UtilScreen.getWidth(400)}]}
                               source={this.state.myItem.headUrl} resizeMode='contain'/>
                        <View style={[styles.headStyle, {marginLeft: UtilScreen.getWidth(20)}]}>
                            <Text style={styles.nicknameStyle}>{this.state.myItem.nickname}</Text>
                            <ImageBackground style={styles.levelStyle} source={this.state.myItem.levelImage}
                                             resizeMode='contain'>
                                <Text style={styles.levelText}>{this.state.myItem.level}</Text>
                            </ImageBackground>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <View style={[styles.albumView, {flexDirection: 'row'}]}>
                            <Image style={styles.cameraStyle} source={require('../res/images/camera.png')}
                                   resizeMode='contain'/>
                            <Text style={styles.cameraText}>我的相册</Text>
                            <Image style={styles.enterIntoStyle} source={require('../res/images/r_into.png')}
                                   resizeMode='contain'/>
                        </View>
                    </TouchableOpacity>

                    <View style={{
                        height: UtilScreen.getHeight(2),
                        marginLeft: UtilScreen.getWidth(40),
                        marginRight: UtilScreen.getWidth(40),
                        backgroundColor: '#fff',
                        marginTop: UtilScreen.getHeight(30)
                    }}/>
                    <Text style={styles.signatureText}>{this.state.myItem.signature}</Text>
                    <View style={styles.myView}>
                        <View style={[styles.backView, {flexDirection: 'row',}]}>
                            <Image style={{width: UtilScreen.getWidth(20), height: UtilScreen.getHeight(20)}}
                                   source={this.state.myItem.sex}
                                   resizeMode='contain'></Image>
                            <Text style={{fontSize:14}}>{this.state.myItem.age}</Text>
                        </View>
                        <Text style={styles.textView}>{this.state.myItem.area}</Text>
                        <Text style={styles.textView}>{this.state.myItem.constellation}</Text>
                    </View>
                    <View style={[styles.myView, {height: UtilScreen.getHeight(42)}]}>
                        <Text style={styles.smallText}>{this.state.myItem.attention}</Text>
                        <Text style={styles.smallText}>{this.state.myItem.fans}</Text>
                        <Text style={styles.smallText}>{this.state.myItem.parse}</Text>
                    </View>
                    <View style={{
                        height: UtilScreen.getHeight(88),
                        flexDirection: 'row',
                        marginTop: UtilScreen.getHeight(40)
                    }}>
                        <Text style={[styles.titleStyle, {backgroundColor:this.state.worksColor}]} onPress={this.worksClick.bind(this)}>作品</Text>
                        <Text style={[styles.titleStyle, {backgroundColor:this.state.activityColor}]} onPress={this.activityClick.bind(this)}>活动</Text>
                    </View>
                    <FlatList
                        data={this.state.itemInfo}
                        ItemSeparatorComponent={() => <View
                            style={{height: UtilScreen.getHeight(10), backgroundColor: '#fff',}}/>}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <TouchableHighlight
                                        underlayColor={'#f8f8f8'}
                                        onPress={this.itemClick.bind(this, item)}>
                                        <PersonalInformationItem itemInfo={item}/>
                                    </TouchableHighlight>
                                    <View style={styles.line}/>
                                </View>
                            );
                        }}
                        keyExtractor={item => item.key.toString()}
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rView: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        height: UtilScreen.getHeight(64),
        marginTop: UtilScreen.getHeight(40),
        marginRight: UtilScreen.getWidth(40),
        // position:'absolute',
        // right:UtilScreen.getWidth(40),
    },
    sendStyle: {
        textAlign: 'center',
        alignSelf: 'flex-end',
        borderRadius: UtilScreen.getWidth(8),
        color: '#fff',
        backgroundColor: '#ff9d00',
        width: UtilScreen.getWidth(188),
        lineHeight: UtilScreen.getHeight(64),
        marginRight: UtilScreen.getWidth(10),
    },
    imageView: {
        alignItems: 'center',
        borderRadius: UtilScreen.getWidth(8),
        backgroundColor: '#ff9d00',
        width: UtilScreen.getWidth(64),
        height: UtilScreen.getHeight(64),
    },
    imageStyle: {
        margin: UtilScreen.getHeight(5),
        width: UtilScreen.getWidth(54),
        height: UtilScreen.getHeight(54),
        alignSelf: 'center'
    },
    lView: {
        height: UtilScreen.getHeight(200),
        marginLeft: UtilScreen.getWidth(48),
        flexDirection: 'row',
    },
    headStyle: {
        height: UtilScreen.getHeight(200),
        width: UtilScreen.getWidth(200),
        alignItems: 'center',
        justifyContent: 'center',
    },
    nicknameStyle: {
        color: '#fff',
        fontSize: 15,
    },
    levelStyle: {
        marginTop: UtilScreen.getHeight(10),
        width: UtilScreen.getWidth(179),
        height: UtilScreen.getHeight(66),
        alignItems: 'center',
        justifyContent: 'center',
    },
    levelText: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 14,
    },
    albumView: {
        height: UtilScreen.getHeight(42),
        alignSelf: 'flex-end',
        marginRight: UtilScreen.getWidth(40),
    },
    cameraStyle: {
        alignSelf: 'center',
        height: UtilScreen.getHeight(40),
        width: UtilScreen.getWidth(40),
        marginRight: UtilScreen.getWidth(8),
    },
    cameraText: {
        alignSelf: 'center',
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        marginRight: UtilScreen.getWidth(14),
    },
    enterIntoStyle: {
        alignSelf: 'center',
        width: UtilScreen.getWidth(24),
        height: UtilScreen.getHeight(24),
    },
    signatureText: {
        fontSize: 12,
        color: '#fff',
        marginTop: UtilScreen.getHeight(40),
        marginLeft: UtilScreen.getWidth(40),
    },
    backView: {
        width: UtilScreen.getWidth(120),
        height: UtilScreen.getHeight(60),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: UtilScreen.getWidth(30),
        backgroundColor: '#F8F5F5',
        padding: 0,
    },
    textView: {
        // color:'#fff',
        textAlign: 'center',
        fontSize: 14,
        width: UtilScreen.getWidth(120),
        lineHeight: UtilScreen.getHeight(60),
        borderRadius: UtilScreen.getWidth(30),
        backgroundColor: '#F8F5F5',
        padding: 0,
        marginLeft: UtilScreen.getWidth(26),
    },
    myView: {
        height: UtilScreen.getHeight(60),
        marginLeft: UtilScreen.getWidth(40),
        flexDirection: 'row',
        marginTop: UtilScreen.getHeight(24),
    },
    smallText: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        marginRight: UtilScreen.getWidth(30),
    },
    titleStyle: {
        textAlign: 'center',
        flex: 1,
        lineHeight: UtilScreen.getHeight(88),
        fontSize: 18,
        color: '#fff',
    },
})