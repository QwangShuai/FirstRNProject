import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Styless = require('../common/Stylecss');
import OrderItem from '../components/OrderItem';
import PaymentMethodModal from '../components/PaymentMethodModal';
import InviteModal from '../components/InviteModal';
import UploadSuccess from '../components/UploadSuccess';
export default class UnpaidItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    title: '云南旅游',
                    state: '待支付',
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
                    state: '待支付',
                    imageTitile: '云南旅游活动云南旅游活 动云南旅游活动云南',
                    imageUrl: require('../res/images/1.jpg'),
                    content: '行程时间：2018.1.3-2018.1.5',
                    peoples: '参加人数：122',
                    payState: '某某某请客',
                    cost: ' 合计费用：¥8888',
                },
            ],
            isPaymentMethod:false,
            isInvite:false,
            isPay:true,
            isShowSuccess:false,
        }
    }
    payShow(item){
        this.setState({
            isPaymentMethod:true,
        })
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
    pay(){

    }
    itemClick(item){
      this.props.screenProps.rootNavigation.navigate('UnpaidDetails',{});
    }
    uploadSuccess(){
        this.setState({
            isShowSuccess:false,
        })
    }
    render() {
        return(
            <View style={Styless.styles.container}>
            <FlatList
                data={this.state.itemInfo}
                renderItem={({item}) => {
                    return (
                        <View>
                            <TouchableHighlight
                                underlayColor={'#f8f8f8'}
                                onPress={this.itemClick.bind(this,item)}
                                ItemSeparatorComponent={() => <View
                                    style={{height: UtilScreen.getHeight(10), backgroundColor: '#f1f1f1',}}/>}>
                                <OrderItem payShow={this.payShow.bind(this,item)} cancleShow={this.cancleShow.bind(this,item)} inviteShow={this.inviteShow.bind(this,item)} itemInfo={item}/>
                            </TouchableHighlight>
                            <View style={Styless.styles.order_line}/>
                        </View>
                    );
                }}
                keyExtractor={item => item.key.toString()}
            ></FlatList>
                <PaymentMethodModal isPaymentMethod={this.state.isPaymentMethod} isPay={this.state.isPay} clossModal={this.clossModal.bind(this)}
                                    payShow={this.payShow.bind(this)} wx_pay={this.wx_pay.bind(this)} alipay_pay={this.alipay_pay.bind(this)}
                                    pay={this.pay.bind(this)}/>
                <InviteModal isInvite={this.state.isInvite} isPay={this.state.isPay} clossModal={this.clossModal.bind(this)}
                                    inviteShow={this.inviteShow.bind(this)} wx_pay={this.wx_pay.bind(this)} alipay_pay={this.alipay_pay.bind(this)}
                                    pay={this.pay.bind(this)}/>
                <UploadSuccess isShow={this.state.isShowSuccess} callBack={this.uploadSuccess.bind(this)} title='取消成功'/>
            </View>
        )
    }
}

