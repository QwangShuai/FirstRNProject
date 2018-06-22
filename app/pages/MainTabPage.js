import React, {Component} from 'react';

import {Image} from 'react-native';

//引入react-navigation依赖库
import {TabNavigator} from 'react-navigation';

//展示的页面
import IndexPage from './IndexPage';
import FriendParty from './FriendParty';
import FriendRemember from './FriendRemember';
import MainChatPage from './MainChatPage';
import MyPage from './MyPage';
import UtilScreen from '../util/UtilScreen';

//Tab
const MainTabPage = TabNavigator({
        //每一个页面的配置
        IndexPage: {
            screen: IndexPage,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../res/images/index_icon.png')}
                        style={[{height: UtilScreen.getWidth(46), width: UtilScreen.getWidth(46),resizeMode:'contain'}, {tintColor: tintColor}]}
                    />
                ),
            },
        },
        FriendParty: {
            screen: FriendParty,
            navigationOptions: {
                tabBarLabel: '友聚',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../res/images/friend_party.png')}
                        style={[{height: UtilScreen.getWidth(46), width: UtilScreen.getWidth(46),resizeMode:'contain'}, {tintColor: tintColor}]}/>
                ),
            }
        },
        FriendRemember: {
            screen: FriendRemember,
            navigationOptions: {
                tabBarLabel: '友记',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../res/images/friend_remember.png')}
                        style={[{height: UtilScreen.getWidth(46), width: UtilScreen.getWidth(46),resizeMode:'contain'}, {tintColor: tintColor}]}/>
                ),
            }
        },
        MainChatPage: {
            screen: MainChatPage,
            navigationOptions: {
                tabBarLabel: '聊天',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../res/images/main_chat.png')}
                        style={[{height: UtilScreen.getWidth(46), width: UtilScreen.getWidth(46),resizeMode:'contain'}, {tintColor: tintColor}]}/>
                ),
            }
        },
        MyPage: {
            screen: MyPage,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../res/images/my_page.png')}
                        style={[{height: UtilScreen.getWidth(46), width: UtilScreen.getWidth(46),resizeMode:'contain'}, {tintColor: tintColor}]}/>
                ),
            }
        },
    },
    {
        //设置初始化显示界面
        // initialRouteName:'MyPage',
        //设置TabNavigator的位置
        tabBarPosition: 'bottom',
        //是否在更改标签时显示动画
        animationEnabled: false,
        //是否允许在标签之间进行滑动
        swipeEnabled: false,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //设置Tab标签的属性
        lazy: true, // 是否懒加载
        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: true,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: '#FF9D00',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: '#000',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
                backgroundColor: '#fff',
                height: UtilScreen.getHeight(100),
            },
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                height: 0,
                backgroundColor:'red'
            },
            labelStyle: {//文字的样式
                fontSize: 12,
                marginTop: -UtilScreen.getHeight(12),
                marginBottom: UtilScreen.getHeight(10),
            },
            iconStyle: {//图标的样式
                marginBottom: UtilScreen.getHeight(8),
                marginTop:-UtilScreen.getHeight(5),
            }
        },

    });
export default MainTabPage;