import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');
import OrderItem from '../components/OrderItem';
export default class EvaluateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    title: '云南旅游',
                    state: '待评价',
                    imageTitile: '云南旅游活动云南旅游活 动云南旅游活动云南',
                    imageUrl: require('../res/images/1.jpg'),
                    content: '行程时间：2018.1.3-2018.1.5',
                    peoples: '参加人数：122',
                    payState: '自费',
                    cost: ' 合计费用：¥8888',
                },
                {
                    key:1,
                    title: '云南旅游',
                    state: '待评价',
                    imageTitile: '云南旅游活动云南旅游活 动云南旅游活动云南',
                    imageUrl: require('../res/images/1.jpg'),
                    content: '行程时间：2018.1.3-2018.1.5',
                    peoples: '参加人数：122',
                    payState: '某某某请客',
                    cost: ' 合计费用：¥8888',
                },
            ],
        }
    }

    render() {
        return(
            <FlatList
                data={this.state.itemInfo}
                renderItem={({item}) => {
                    return (
                        <View>
                            <TouchableHighlight
                                underlayColor={'#f8f8f8'}
                                ItemSeparatorComponent={() => <View
                                    style={{height: UtilScreen.getHeight(10), backgroundColor: '#f1f1f1',}}/>}>
                                <OrderItem itemInfo={item}/>
                            </TouchableHighlight>
                            <View style={Styless.styles.order_line}/>
                        </View>
                    );
                }}
                keyExtractor={item => item.key.toString()}
            ></FlatList>
        )
    }
}

