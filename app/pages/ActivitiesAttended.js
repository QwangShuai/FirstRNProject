import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import ActivitiesAttendedItem from '../components/ActivitiesAttendedItem';

const Stylecss = require('../common/Stylecss');

export default class ActivitiesAttended extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    title: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
                    imageUrl: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    startTime:'开始时间  :  2018.01.01',
                    endTime:'结束时间  :  2018.04.20',
                    cost:'人均费用  :  ￥888.88',
                    views:'浏览:1234',
                    participants:'报名人数  :  25',
                    focusOn:'关注:10000',
                    countdown:'0',
                },
                {
                    key:1,
                    title: '云南旅游活动云南旅游活动云南旅游活动云 南旅游活动云南旅游活动云南旅游活动',
                    imageUrl: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    startTime:'开始时间  :  2018.01.01',
                    endTime:'结束时间  :  2018.04.20',
                    cost:'人均费用  :  ￥888.88',
                    views:'浏览:1234',
                    participants:'报名人数  :  25',
                    focusOn:'关注:10000',
                    countdown:'取消倒计时：2天14时40分56秒',
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
                <ToolBar title={'参加的活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <ActivitiesAttendedItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}