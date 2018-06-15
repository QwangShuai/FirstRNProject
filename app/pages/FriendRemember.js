import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
    TextInput,
    Alert,
    ActivityIndicator,
    FlatList,
    RefreshControl
} from 'react-native';

import UtilScreen from '../util/UtilScreen';
import ToolBar from '../components/ToolBar';
import FriendRememberItem from '../components/FriendRememberItem';
import FriendRemenberSwiperBanner from '../components/FriendRemenberSwiperBanner';

export default class FriendRemember extends Component {

    constructor(props) {
        super(props);
        this.state = {
            banners: [
                {key: 0, imageURL: require('../res/images/1.jpg')},
                {key: 1, imageURL: require('../res/images/2.jpg')},
                {key: 2, imageURL: require('../res/images/3.jpg')},
            ],
            items: [
                {
                    key: 0,
                    imageURL: require('../res/images/4.jpg'),
                    article: {
                        title: '标题',
                        content: '当地时间12日上午，朝鲜最高领导人金正恩与美国总统特朗普在新加坡嘉佩乐酒店举行首次会晤，双方握手致意。这是在任的朝美领导人数十年来首次会晤及握手。',
                        date: '2018-6-14',
                        visitorsNum: 15600,
                        messageNum: 1200,
                    },
                    userInfo: {
                        userName: '爱吃土豆的西瓜',
                        userLevel: 'LV 1',
                        headImagePath: require('../res/images/head_image.png'),
                        isAttention:false,
                    }
                },
                {
                    key: 0,
                    imageURL: require('../res/images/4.jpg'),
                    article: {
                        title: '标题',
                        content: '当地时间12日上午，朝鲜最高领导人金正恩与美国总统特朗普在新加坡嘉佩乐酒店举行首次会晤，双方握手致意。这是在任的朝美领导人数十年来首次会晤及握手。',
                        date: '2018-6-14',
                        visitorsNum: 15600,
                        messageNum: 1200,
                    },
                    userInfo: {
                        userName: '爱吃土豆的西瓜',
                        userLevel: 'LV 1',
                        headImagePath: require('../res/images/head_image.png'),
                        isAttention:false,
                    }
                }

            ],
            refreshing: false,
        }


    }

    _renderFooter() {
        //正在下拉就不显示上啦
        if (this.state.refreshing) {
            return null;
        }
        if (true/*this.currentPage > this.pageTotal*/) {
            return (
                <View style={{height:UtilScreen.getHeight(130),width:'100%',backgroundColor:"#efeff4",justifyContent:'center',alignItems:'center'}}>
                    <View style={{width:UtilScreen.getWidth(600),height:1,backgroundColor:'#c8c8c8'}}/>
                    <Text style={{position:'absolute',color:'#666',fontSize:15,backgroundColor:'#efeff4',paddingLeft:UtilScreen.getWidth(20),paddingRight:UtilScreen.getWidth(20)}}>{'已经到底了'}</Text>
                </View>);
        } else {
            return (
                <View style={{height:UtilScreen.getHeight(110),width:'100%',backgroundColor:"#efeff4"}}>
                    <ActivityIndicator
                        size={"large"}
                        color={'#6435c9'}
                    />
                </View>);
        }
    }

    queryDate() {

    }
    clickAttention(index){
        this.state.items[index].isAttention =  !this.state.items[index].isAttention;
        let data = this.state.items.concat();
        this.setState({items: data});
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'友记'} isShowBack={false}/>
                <View style={{backgroundColor: '#fff', flex:1}}>
                    <FlatList
                        ListHeaderComponent={<FriendRemenberSwiperBanner/>}
                        data={this.state.items}
                        renderItem={({item,index}) => {
                            return (
                                <FriendRememberItem item={item} clickAttention={this.clickAttention.bind(this)} index={index}/>
                            );
                        }}
                        keyExtractor={item => item.key.toString()}
                        refreshControl={
                            <RefreshControl
                                tintColor={'red'}
                                refreshing={this.state.refreshing}
                                colors={['#ff0000', '#00ff00', '#0000ff']}
                                onRefresh={this.queryDate.bind(this, 0)}
                            />}
                        ListFooterComponent={this._renderFooter.bind(this)}
                        onEndReached={this.queryDate.bind(this, 1)}
                        onEndReachedThreshold={0.1}
                    ></FlatList>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


