import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import SlideDeleteListItem from '../components/SlideDeleteListItem';
const Styless = require('../common/Stylecss');
import md5 from "react-native-md5";
const Buffer = require('buffer').Buffer;
import ToolBar from '../components/ToolBar';
const Stylecss = require('../common/Stylecss');
export default class InitiativesDetails extends Component {

    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:{
                pfID:0,
                pftitle: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
                pfpic: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                pfgotime:'开始时间  :  2018.01.01',
                pfendtime:'结束时间  :  2018.04.20',
                pfspend:'人均费用  :  ￥888.88',
                pflook:'浏览:1234',
                join_num:'报名人数  :  25',
                focusOn:'关注:10000',
            },
            pfTitles:[
                {
                    id:0,
                    title:'12345',
                },
                {
                    id:1,
                    title:'54321',
                },
                {
                    id:2,
                    title:'dsadsadsa',
                },
            ]
        }
    }
    itemDelete(position) {
        this.state.pfTitles.splice(position, 1);
        let data = this.state.pfTitles.concat();
        this.setState({
            pfTitles: data,
        });
    }
    backClick() {
        this.props.navigation.goBack()
    }
    itemClick(item){
        console.log('活动ID：',item.id);
        this.props.navigation.navigate('CreateContents',{pfTitleID:item.id});
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'发起的活动详情'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.titleStyle}>{this.state.itemInfo.pftitle}</Text>
                <View style={styles.viewStyle}>
                    <Image style={styles.imageStyle} source={this.state.itemInfo.pfpic}/>
                    <View style={styles.rightView}>
                        <Text
                            style={[styles.startTime, {marginTop: UtilScreen.getHeight(20)}]}>{this.state.itemInfo.pfgotime}</Text>
                        <Text
                            style={[styles.startTime, {marginTop: UtilScreen.getHeight(4)}]}>{this.state.itemInfo.pfendtime}</Text>
                        <Text
                            style={[styles.startTime, {marginTop: UtilScreen.getWidth(4)}]}>{this.state.itemInfo.pfspend}</Text>
                        <Text
                            style={[styles.startTime, {marginTop: UtilScreen.getWidth(4)}]}>{this.state.itemInfo.join_num}</Text>
                    </View>
                </View>
                <View style={styles.textView}>
                    <Image style={styles.imageSmall} source={require('../res/images/eyes.png')} resizeMode='contain'/>
                    <Text
                        style={[styles.startTime, {marginLeft: UtilScreen.getHeight(4)}]}>{this.state.itemInfo.pflook}</Text>
                    <Image style={[styles.imageSmall, {marginLeft: UtilScreen.getWidth(40)}]}
                           source={require('../res/images/heart-y.png')} resizeMode='contain'/>
                    <Text
                        style={[styles.startTime, {marginLeft: UtilScreen.getHeight(4)}]}>{this.state.itemInfo.focusOn}</Text>
                </View>
                <View style={{
                    marginTop:UtilScreen.getHeight(24),
                    width: '100%',
                    height: UtilScreen.getHeight(12),
                    backgroundColor: '#efeff4',
                    alignSelf: 'center',
                }}/>
                <FlatList
                    data={this.state.pfTitles}
                    renderItem={({item, index}) => {
                        return (
                            <View>
                                <SlideDeleteListItem
                                    myHeight={88}
                                    deleteCallBack={this.itemDelete.bind(this)} position={index}>
                                    <TouchableHighlight style={{height:UtilScreen.getHeight(88),width:UtilScreen.getWidth(750)}} onPress={this.itemClick.bind(this,item)}>
                                    <View style={[Stylecss.styles.set_label_view,{width:UtilScreen.getWidth(750),marginTop:0}]}>
                                        <Text style={Stylecss.styles.set_label_text}>{item.title}</Text>
                                        <Image style={Stylecss.styles.set_label_enter} source={require('../res/images/chevron-left2.png')}/>
                                    </View>
                                    </TouchableHighlight>
                                </SlideDeleteListItem>
                                <View style={{
                                    width: '100%',
                                    height: UtilScreen.getHeight(12),
                                    backgroundColor: '#efeff4',
                                    alignSelf: 'center',
                                }}/>
                            </View>
                        );
                    }}
                    // keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        marginLeft: UtilScreen.getWidth(40),
        marginTop: UtilScreen.getHeight(24),
        width: UtilScreen.getWidth(608),
        height: UtilScreen.getHeight(90),
        textAlign: 'left',
        fontSize: 16,
        color: '#333333',
    },
    imageStyle: {
        width: UtilScreen.getWidth(300),
        height: UtilScreen.getHeight(200),
    },
    startTime: {
        fontSize: 14,
        color: '#333333',
    },
    rightView:{
        flex:1,
        marginLeft:UtilScreen.getWidth(20),
    },
    viewStyle:{
        flexDirection:'row',
        marginTop:UtilScreen.getHeight(24),
        marginLeft:UtilScreen.getWidth(40),
        width:'100%',
        height:UtilScreen.getHeight(200),
        // borderBottomWidth:UtilScreen.getHeight(2),
        // borderBottomColor:'#e5e5e5',
    },
    textView:{
        marginTop:UtilScreen.getHeight(16),
        marginLeft:UtilScreen.getWidth(40),
        alignItems:'center',
        flexDirection:'row',
        height:UtilScreen.getHeight(40),
        width:UtilScreen.getWidth(400),
    },
})