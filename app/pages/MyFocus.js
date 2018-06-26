import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: [
                {
                    key:0,
                    headUrl:require('../res/images/head.png'),
                    nickname:'昵称：帅气的小迷糊',
                    sex:require('../res/images/nan.png'),
                    article:'文章：45',
                    fans:'粉丝：2989',
                    state:'活动状态：活动中',
                },
                {
                    key:1,
                    headUrl:require('../res/images/head.png'),
                    nickname:'昵称：我是什么啊',
                    sex:require('../res/images/nan.png'),
                    article:'文章：10086',
                    fans:'粉丝：8595',
                    state:'活动状态：已结束',
                },
            ],
        }
    }
}