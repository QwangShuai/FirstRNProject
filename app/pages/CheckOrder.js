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
import MyAlbum from './MyAlbum';
import UtilScreen from '../util/UtilScreen';

//Tab
const CheckOrder = TabNavigator({
        //每一个页面的配置
        IndexPage: {
            screen: IndexPage,
            navigationOptions: {
                tabBarLabel: '全部',
            },
        },
        FriendParty: {
            screen: FriendParty,
            navigationOptions: {
                tabBarLabel: '待支付',
            }
        },
        FriendRemember: {
            screen: FriendRemember,
            navigationOptions: {
                tabBarLabel: '进行中',
            }
        },
        MainChatPage: {
            screen: MainChatPage,
            navigationOptions: {
                tabBarLabel: '已完成',
            }
        },
        MyAlbum: {
            screen: MyAlbum,
            navigationOptions: {
                tabBarLabel: '待评价',
            }
        },
        MyPage: {
            screen: MyPage,
            navigationOptions: {
                tabBarLabel: '退款',
            }
        },

    },
    {
        //设置初始化显示界面
        initialRouteName:'MyPage',
        //设置TabNavigator的位置
        tabBarPosition: 'top',
        //是否在更改标签时显示动画
        animationEnabled: false,
        //是否允许在标签之间进行滑动
        swipeEnabled: true,
        //按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        backBehavior: "none",
        //设置Tab标签的属性
        lazy: true, // 是否懒加载
        tabBarOptions: {
            //Android属性
            upperCaseLabel: false,//是否使标签大写，默认为true
            //共有属性
            showIcon: false,//是否显示图标，默认关闭
            showLabel: true,//是否显示label，默认开启
            activeTintColor: '#000',//label和icon的前景色 活跃状态下（选中）
            inactiveTintColor: '#000',//label和icon的前景色 活跃状态下（未选中）
            style: { //TabNavigator 的背景颜色
                backgroundColor: '#fff',
                height: UtilScreen.getHeight(82),
            },
            indicatorStyle: {//标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题
                height: UtilScreen.getHeight(4),
                backgroundColor:'#ff9d00'
            },
            labelStyle: {//文字的样式
                alignSelf:'center',
                fontSize: 16,
                marginTop: -UtilScreen.getHeight(12),
                marginBottom: UtilScreen.getHeight(10),
                width:UtilScreen.getWidth(150),
            },
        },

    });
export default CheckOrder;