import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import ToolBar from '../components/ToolBar';
import OrderHeadDetailsItem from '../components/OrderHeadDetailsItem';
const Styless = require('../common/Stylecss');
import PaymentMethodModal from '../components/PaymentMethodModal';
import InviteModal from '../components/InviteModal';
import UploadSuccess from '../components/UploadSuccess';

export default class ToTravelDetails extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    static defaultProps = {
        orderInfo:{
            orderNum:'订单编号：28673575381969757',
            payNum:'支付宝交易号：28673575381969757',
            createTime:'创建时间：2018-04-02 12：12：31',
            payTime:'付款时间：2018-04-02 12：12：31',
            successTime:'成交时间：2018-04-02 12：12：31',
        },
    }
    constructor(props) {
        super(props);
        this.state = {
            isPaymentMethod:false,
            isInvite:false,
            isPay:true,
            isShowSuccess:false,
            isShow: true,
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
    uploadSuccess(){
        this.setState({
            isShowSuccess:false,
        })
    }
    backClick(){
        this.props.navigation.goBack();
    }
    setView(){
        if(true){
            return(
                <View style={{height:UtilScreen.getHeight(98),position:'absolute',bottom:0,flexDirection:'row',width:'100%',borderColor:'#e5e5e5',borderTopWidth:UtilScreen.getHeight(2)}}>
                    <Text style={[Styless.styles.travel_textView,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(340)}]} onPress={this.inviteShow.bind(this)}>邀请</Text>
                    <Text style={[Styless.styles.travel_textView,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(190)}]} onPress={this.cancleShow.bind(this)}>退款</Text>
                    <Text style={[Styless.styles.travel_textStyle,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(40)}]}>待行程</Text>
                </View>
            )
        } else {
            return(
                <View style={{height:UtilScreen.getHeight(98),position:'absolute',bottom:0,flexDirection:'row',width:'100%',borderColor:'#e5e5e5',borderTopWidth:UtilScreen.getHeight(2)}}>
                    <Text style={[Styless.styles.travel_textView,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(190)}]} onPress={this.cancleShow.bind(this)}>取消行程</Text>
                    <Text style={[Styless.styles.travel_textStyle,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(40)}]} onPress={this.payShow.bind(this)}>待行程</Text>
                </View>
            )
        }
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor: '#ffffff',flexDirection:'column',}} >
                <ToolBar title={'待行程'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <OrderHeadDetailsItem itemInfo={this.props.itemInfo} isShow={this.state.isShow}/>
                <Text style={[Styless.styles.order_Text,{marginTop:UtilScreen.getHeight(20)}]}>{this.props.orderInfo.orderNum}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.payNum}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.createTime}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.payTime}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.successTime}</Text>
                <View style={Styless.styles.order_light_F1F1F1} />
                {this.setView()}
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