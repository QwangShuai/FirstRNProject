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
    TouchableHighlight,
    FlatList
} from 'react-native';
import ToolBar from '../components/ToolBar';
import MyPageHead from '../components/MyPageHead';
import MyPageMenu from '../components/MyPageMenu';
import MyPageItem from '../components/MyPageItem';
import UtilScreen from "../util/UtilScreen";

export default class MyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            itemInfo: [
                {key: 0, imageURL: require('../res/images/my_attention.png'), title: '我的关注'},
                {key: 1, imageURL: require('../res/images/my_camera.png'), title: '我的相册'},
                {key: 2, imageURL: require('../res/images/friends.png'), title: '好友关注'},
                {key: 3, imageURL: require('../res/images/star.png'), title: '我的收藏'},
                {key: 4, imageURL: require('../res/images/comment.png'), title: '我的评论'},
                {key: 5, imageURL: require('../res/images/flag.png'), title: '参加活动',},
                {key: 6, imageURL: require('../res/images/basket.png'), title: '创建活动'},
                {key: 7, imageURL: require('../res/images/browse_records.png'), title: '浏览历史'},
            ],
            myInfo:{
                headUrl:require('../res/images/head.png'),
                nickname:'',
                sex:'',
                imageLevel:require('../res/images/level-1.png'),
                textLevel:'',
            }
        }

        this.jumpToOrder = this.jumpToOrder.bind(this);
    }

    itemClick() {

    }
    jumpToOrder(){
        console('点击了'),
        alert('点击了'),
        this.props.navigation.navigate('Order')
    }
    header(myInfo) {
        return (
            <View>
                <MyPageHead imageSource={{}} imageLevel={myInfo.imageLevel}></MyPageHead>
                <MyPageMenu jump={this.jumpToOrder}></MyPageMenu>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'我的'} isShowBack={false}/>
                <FlatList
                    ListHeaderComponent={this.header(this.state.myInfo)}//header头部组件
                    style={{flex: 1}}
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <MyPageItem itemInfo={item}/>
                                </TouchableHighlight>
                                <View style={{
                                    width: '100%',
                                    height: UtilScreen.getHeight(10),
                                    backgroundColor: '#efeff4'
                                }}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


