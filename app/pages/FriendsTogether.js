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
import UtilScreen from '../util/UtilScreen';
import PolyContentItem from '../components/PolyContentItem';

const Stylecss = require('../common/Stylecss');
export default class FriendsTogether extends Component {
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
                pffavorite: '123456',
                userpic: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                level: '123',
                begin_time:'2018.05.01',
                end_time:'2018.05.02',
                city:'上海',
                woman:'123',
                man:'123',
                price:'￥1500.00',
            }
        }
    }

    backClick() {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <ScrollView>
                <View style={Stylecss.styles.container}>
                    <ToolBar title={'友聚详情'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                    <Image style={{height: UtilScreen.getHeight(372), width: '100%', resizeMode: 'stretch'}}
                           source={this.state.item.pic}/>
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
                                width: UtilScreen.getWidth(120),
                                height: UtilScreen.getHeight(120),
                                borderRadius: UtilScreen.getHeight(120),
                                alignSelf: 'center',
                            }} source={this.state.item.userpic}/>
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
                        flexDirection:'row',
                    }} resizeMode='contain' source={require('../res/images/poly-box.png')}>
                        <View style={{flex:1}}>
                            <View style={{height:UtilScreen.getHeight(40),flexDirection:'row',marginTop:UtilScreen.getHeight(72)}}>
                                <Image style={styles.imageView} source={require('../res/images/time-start.png')}/>
                                <Text style={styles.textView}>开始时间：{this.state.item.begin_time}</Text>
                            </View>
                            <View style={{height:UtilScreen.getHeight(40),flexDirection:'row',marginTop:UtilScreen.getHeight(24)}}>
                                <Image style={styles.imageView} source={require('../res/images/time-end.png')}/>
                                <Text style={styles.textView}>结束时间：{this.state.item.end_time}</Text>
                            </View>
                            <View style={{height:UtilScreen.getHeight(40),flexDirection:'row',marginTop:UtilScreen.getHeight(24)}}>
                                <Image style={styles.imageView} source={require('../res/images/place.png')}/>
                                <Text style={styles.textView}>活动地点：{this.state.item.city}</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{height:UtilScreen.getHeight(40),flexDirection:'row',marginTop:UtilScreen.getHeight(72)}}>
                                <Image style={styles.imageView} source={require('../res/images/price.png')}/>
                                <Text style={styles.textView}>人均费用：{this.state.item.price}</Text>
                            </View>
                            <View style={{height:UtilScreen.getHeight(40),flexDirection:'row',marginTop:UtilScreen.getHeight(24)}}>
                                <Image style={styles.imageView} source={require('../res/images/nv.png')}/>
                                <Text style={styles.textView}>女生人数：{this.state.item.woman}</Text>
                            </View>
                            <View style={{height:UtilScreen.getHeight(40),flexDirection:'row',marginTop:UtilScreen.getHeight(24)}}>
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
        marginLeft:UtilScreen.getWidth(20),
        height: UtilScreen.getHeight(40),
        width: UtilScreen.getWidth(40),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    textView:{
        marginLeft:UtilScreen.getWidth(10),
        color:'#333333',
        fontSize:14,
        lineHeight:UtilScreen.getHeight(40),
        textAlign:'center',
    },
})