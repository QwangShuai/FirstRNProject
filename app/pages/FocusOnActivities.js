import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import FocusOnActivitiesItem from '../components/FocusOnActivitiesItem';

const Stylecss = require('../common/Stylecss');

export default class FocusOnActivities extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    title:'云南旅游活动云南旅游活动云南旅游活动云 云南旅游活动云南旅游活动云南旅游活动云',
                    imageUrl: {uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    startTime:'开始时间',
                    views:'浏览量  :  12293',
                    participants:'参加人数  :  25',
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
                <ToolBar title={'关注的活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <FocusOnActivitiesItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}