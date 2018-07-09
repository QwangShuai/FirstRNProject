import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight,AsyncStorage} from 'react-native';
import ToolBar from '../components/ToolBar';
import InitiativesItem from '../components/InitiativesItem';
import md5 from "react-native-md5";
const Buffer = require('buffer').Buffer;

const Stylecss = require('../common/Stylecss');

export default class Initiatives extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    pftitle: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
                    pfpic: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    pfgotime:'开始时间  :  2018.01.01',
                    pfendtime:'结束时间  :  2018.04.20',
                    pfspend:'人均费用  :  ￥888.88',
                    pflook:'浏览:1234',
                    join_num:'报名人数  :  25',
                    focusOn:'关注:10000',
                },
            ],
        };
    }
    backClick() {
        this.props.navigation.navigate('Set');
    }
    itemClick(item) {
        switch (item.key) {
            case 0:

                break;
        }
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'发起的活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <InitiativesItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}