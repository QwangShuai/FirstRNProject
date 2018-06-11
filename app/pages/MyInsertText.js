import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import MyInsertTextItem from '../components/MyInsertTextItem';

const Stylecss = require('../common/Stylecss');

export default class MyInsertText extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    insertText:'队友的插文，想说什么就说什么呗！111',
                    state:'待审核',
                    imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    location:'插文位置：03/士大夫',
                    title:'参与的活动：标题标题标题标题标题标题标题标 题标题标题标题标题',
                    lastTime:'上次编辑时间：2018-04-12 14:33:33',
                },
                {
                    key:1,
                    insertText:'队友的插文，想说什么就说什么呗！222',
                    state:'待审核',
                    imageUrl:{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
                    location:'插文位置：03/士大夫',
                    title:'参与的活动：标题标题标题标题标题标题标题标 题标题标题标题标题',
                    lastTime:'上次编辑时间：2018-04-12 14:33:33',
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
                <ToolBar title={'我的插文'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <MyInsertTextItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}