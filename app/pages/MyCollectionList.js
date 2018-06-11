import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import UtilScreen from "../util/UtilScreen";
import SlideDeleteListItem from '../components/SlideDeleteListItem';
import ToolBar from '../components/ToolBar';

export default class MyCollectionList extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    key: 0,
                    title: '上海上海去上那大拉杆的飒飒发送高档大股东三',
                    imagePath: require('../res/images/shanghai.jpg'),
                    date: '2018-03-11 12:30:56'
                },
                {key: 1, title: '上海上海1', imagePath: require('../res/images/shanghai.jpg'), date: '2018-03-11 12:30:56'},
                {key: 2, title: '上海上海2', imagePath: require('../res/images/shanghai.jpg'), date: '2018-03-11 12:30:56'},
                {key: 3, title: '上海上海3', imagePath: require('../res/images/shanghai.jpg'), date: '2018-03-11 12:30:56'},
                {key: 4, title: '上海上海4', imagePath: require('../res/images/shanghai.jpg'), date: '2018-03-11 12:30:56'},
                {key: 5, title: '上海上海5', imagePath: require('../res/images/shanghai.jpg'), date: '2018-03-11 12:30:56'},
                {key: 6, title: '上海上海6', imagePath: require('../res/images/shanghai.jpg'), date: '2018-03-11 12:30:56'},
                {
                    key: 7,
                    title: '上海上海0321',
                    imagePath: require('../res/images/shanghai.jpg'),
                    date: '2018-03-11 12:30:56'
                },
            ]
        };
    }


    itemDelete(position) {
        this.state.items.splice(position, 1);
        let data = this.state.items.concat();
        this.setState({
            items: data,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'我的收藏'} isShowBack={true}/>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.items}
                    renderItem={({item, index}) => {
                        return (
                            <View>
                                <SlideDeleteListItem
                                    deleteCallBack={this.itemDelete.bind(this)} position={index}>
                                    <View style={styles.item}>
                                        <Image
                                            style={{
                                                width: UtilScreen.getWidth(300),
                                                height: UtilScreen.getHeight(200),
                                                alignSelf: 'center',
                                                marginLeft: UtilScreen.getWidth(30)
                                            }}
                                            source={item.imagePath}
                                        />
                                        <View style={styles.right}>
                                            <Text numberOfLines={3} style={{
                                                fontSize: 15,
                                                color: '#333',
                                                top: 0,
                                                position: 'absolute',
                                                left: UtilScreen.getWidth(30),
                                                right: UtilScreen.getWidth(30)
                                            }}>{item.title}</Text>
                                            <Text numberOfLines={1} style={{
                                                fontSize: 12,
                                                color: '#333',
                                                bottom: 0,
                                                position: 'absolute',
                                                left: UtilScreen.getWidth(30)
                                            }}>创建时间:{item.date}</Text>
                                        </View>
                                    </View>
                                </SlideDeleteListItem>
                                <View style={{
                                    width: UtilScreen.getWidth(690),
                                    height: 1,
                                    backgroundColor: '#efeff4',
                                    alignSelf: 'center',
                                }}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flexDirection: 'row',
        width: UtilScreen.getWidth(750),
        height: UtilScreen.getHeight(260),
        backgroundColor: '#fff',
    },
    right: {
        alignSelf: 'center',
        height: UtilScreen.getHeight(200),
        flex: 1,
        backgroundColor: '#fff',
    }
});