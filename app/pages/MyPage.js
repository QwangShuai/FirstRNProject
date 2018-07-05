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
    FlatList,
    AsyncStorage
} from 'react-native';
import ToolBar from '../components/ToolBar';
import MyPageHead from '../components/MyPageHead';
import MyPageMenu from '../components/MyPageMenu';
import MyPageItem from '../components/MyPageItem';
import UtilScreen from "../util/UtilScreen";
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
let app = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530529649183&di=fac6809726ec7cac3905ce1dc6480831&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png";
export default class MyPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_login:false,
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
                headUrl:{uri:app},
                nickname:'********',
                sex:require('../res/images/nan.png'),
                imageLevel:require('../res/images/level-1.png'),
                textLevel:'签约艺人',
            }
        }
        this.jumpToOrder = this.jumpToOrder.bind(this);
        this.Sign_in = this.Sign_in.bind(this);
        this.clickCallBack = this.clickCallBack.bind(this);
        this.JumpPage = this.JumpPage.bind(this);
    }

    itemClick(item) {
        switch (item.key){
            case 0:

                break;
            case 1:
                this.JumpPage('MyAlbum');
                break;
            case 2:

                break;
            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:

                break;
        }

    }
    //跳转相应页面
    JumpPage(Router){
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    this.props.navigation.navigate(Router,{routeName:'IndexPage'});
                } else {
                    this.props.navigation.navigate('Home',{routeName:'IndexPage'});
                }
            } else {
                this.props.navigation.navigate('Home',{routeName:'IndexPage'});
            }
        })
    }
    clickCallBack(){
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    this.props.navigation.navigate('PersonalInfo',{routeName:'IndexPage'});
                } else {
                    this.props.navigation.navigate('Home',{routeName:'IndexPage'});
                }
            } else {
                this.props.navigation.navigate('Home',{routeName:'IndexPage'});
            }
        })
    }
    jumpToOrder(){
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    this.props.navigation.navigate('Order',{routeName:'IndexPage'})
                } else {
                    this.props.navigation.navigate('Home',{routeName:'IndexPage'});
                }
            } else {
                this.props.navigation.navigate('Home',{routeName:'IndexPage'});
            }
        })

    }
    Sign_in(){
        this.props.navigation.navigate('Home');
    }
    componentWillMount() {
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    console.log(result);
                    this.setState({
                        is_login:true,
                    });
                    this.UserInfo(result);
                } else {
                    this.setState({
                        is_login:false,
                    });
                }
            } else {

                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }
    //根据服务端获取用户信息
    UserInfo(uid){
        let formData = new FormData();
        formData.append("uid", uid);
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/UserInformation');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_user/UserInformation', {
            method: "POST",
            body: formData
        }).then(response => response.text())
            .then(responseJson => {
                var bf = new Buffer(responseJson , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                let sex = null;
                if(result.obj.sex==='男'){
                    sex = require('../res/images/nan.png');
                }else{
                    sex = require('../res/images/nv.png');
                }
                this.setState({
                    myInfo:{
                        headUrl:{uri:result.obj.headeimg},
                        nickname:result.obj.username,
                        sex:sex,
                        imageLevel:require('../res/images/level-1.png'),
                        textLevel:'LV'+result.obj.usergrade,
                    }
                });
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }
    header(myInfo) {
        return (
            <View>
                <MyPageHead imageSource={this.state.myInfo.headUrl} itemInfo={this.state.myInfo} jumplogin={this.Sign_in} is_login={this.state.is_login} clickCallBack={this.clickCallBack}></MyPageHead>
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


