import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import TeamInsertTextItem from '../components/TeamInsertTextItem';

const Stylecss = require('../common/Stylecss');

export default class TeamInsertText extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    insertText:'队友的插文，想说什么就说什么呗！',
                    imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    state:'待审核',
                    headUrl:require('../res/images/head.png'),
                    nickname:'昵称',
                    releaseTime:'发布时间：2018-03-30',
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
                <ToolBar title={'队友插文'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <TeamInsertTextItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}