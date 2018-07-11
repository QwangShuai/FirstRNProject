import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import ToolBar from '../components/ToolBar';
import OrderHeadDetailsItem from '../components/OrderHeadDetailsItem';
const Styless = require('../common/Stylecss');
import PaymentMethodModal from '../components/PaymentMethodModal';
import InviteModal from '../components/InviteModal';
import UploadSuccess from '../components/UploadSuccess';

export default class WaitEvaluationDetails extends Component {
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
            isShowSuccess:false,
        }
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
    toEvaluation(){

    }
    backClick(){
        this.props.navigation.goBack();
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor: '#ffffff',flexDirection:'column',}} >
                <ToolBar title={'待评价'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <OrderHeadDetailsItem itemInfo={this.props.itemInfo} isShow={this.state.isShow}/>
                <Text style={[Styless.styles.order_Text,{marginTop:UtilScreen.getHeight(20)}]}>{this.props.orderInfo.orderNum}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.payNum}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.createTime}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.payTime}</Text>
                <Text style={Styless.styles.order_Text}>{this.props.orderInfo.successTime}</Text>
                <View style={Styless.styles.order_light_F1F1F1} />
                <View style={{height:UtilScreen.getHeight(98),position:'absolute',bottom:0,flexDirection:'row',width:'100%',borderColor:'#e5e5e5',borderTopWidth:UtilScreen.getHeight(2)}}>
                    <Text style={[Styless.styles.travel_textView,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(190)}]} onPress={this.cancleShow.bind(this)}>删除行程</Text>
                    <Text style={[Styless.styles.travel_textStyle,{alignSelf:'center',position:'absolute',right:UtilScreen.getWidth(40)}]} onPress={this.toEvaluation.bind(this)}>评价</Text>
                </View>
                <UploadSuccess isShow={this.state.isShowSuccess} callBack={this.uploadSuccess.bind(this)} title='删除成功'/>
            </View>
        )
    }
}