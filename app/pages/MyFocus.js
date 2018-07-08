import React, {Component} from 'react';
import {View, StyleSheet, FlatList,TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import MyFocusItem from '../components/MyFocusItem';
import UtilScreen from '../util/UtilScreen'
const Stylecss = require('../common/Stylecss');
import InviteModal from '../components/InviteModal';
import UploadSuccess from '../components/UploadSuccess';
export default class MyFocus extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: [
                {
                    key:0,
                    headUrl:require('../res/images/head.png'),
                    nickname:'昵称：帅气的小迷糊',
                    sex:require('../res/images/nan.png'),
                    article:'文章：45',
                    fans:'粉丝：2989',
                    state:'活动中',
                },
                {
                    key:1,
                    headUrl:require('../res/images/head.png'),
                    nickname:'昵称：我是什么啊',
                    sex:require('../res/images/nan.png'),
                    article:'文章：10k',
                    fans:'粉丝：9k',
                    state:'已结束',
                },
            ],
            isPaymentMethod:false,
            isInvite:false,
            isPay:true,
            isShowSuccess:false,
            popTitle:'',
        }
    }
    wx_pay(){
        this.setState({
            isPay:true
        });
    }
    alipay_pay(){
        this.setState({
            isPay:false
        });
    }
    clossModal(){
        this.setState({
            isPaymentMethod:false,
            isInvite:false,
        })
    }
    pay(){

    }
    inviteShow(){
        this.setState({
            isInvite:true,
        })
    }
    cancleShow(){
        this.setState({
            isShowSuccess:true,
        })
    }
    itemClick(item){
        this.props.screenProps.rootNavigation.navigate('PersonalInfo',{});
    }
    uploadSuccess(){
        this.setState({
            isShowSuccess:false,
        })
    }
    backClick(){
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'我的关注'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <MyFocusItem unfollow={this.cancleShow.bind(this) } itemInfo={item}/>
                                </TouchableHighlight>
                                <View style={[Stylecss.styles.order_light_F1F1F1,{marginTop:0}]}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                <InviteModal isInvite={this.state.isInvite} isPay={this.state.isPay} clossModal={this.clossModal.bind(this)}
                             inviteShow={this.inviteShow.bind(this)} wx_pay={this.wx_pay.bind(this)} alipay_pay={this.alipay_pay.bind(this)}
                             pay={this.pay.bind(this)}/>
                <UploadSuccess isShow={this.state.isShowSuccess} callBack={this.uploadSuccess.bind(this)} title='已发送邀请'/>
            </View>
        )
    }
}