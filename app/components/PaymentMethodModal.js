import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, Image, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');

export default class PaymentMethodModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isImage:true,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isPay){
            this.setState({
                isImage:true,
            })
        } else {
            this.setState({
                isImage:false,
            })
        }

    }
    render() {
        return (
            <Modal
                   animationType={"slide"}
                   transparent={true}
                   visible={this.props.isPaymentMethod}
                   onRequestClose={this.props.clossModal}>
                <View style={Stylecss.styles.order_content}>
                    <Text style={Stylecss.styles.order_title}>选择支付方式</Text>
                    <TouchableHighlight style={Stylecss.styles.order_clossImage} onPress={this.props.clossModal}>
                        <Image source={require('../res/images/closs_pay.png')}/>
                    </TouchableHighlight>
                    <View style={Stylecss.styles.order_light_E5E5E5}/>
                    <View style={Stylecss.styles.order_itemView}>
                        <Image style={Stylecss.styles.order_imageView} source={require('../res/images/apply_wechat.png')}/>
                        <Text style={Stylecss.styles.order_itemText}>微信支付</Text>
                        <Text style={Stylecss.styles.order_recommend}>推荐</Text>
                        <TouchableHighlight
                              style={Stylecss.styles.selectImage}
                             onPress={this.props.wx_pay}
                        >
                            <Image style={{width: UtilScreen.getWidth(30),}} source={this.state.isImage?require('../res/images/apply_true.png'):require('../res/images/apply_false.png')}
                                   resizeMode='contain'/>
                        </TouchableHighlight>
                    </View>
                    <View style={Stylecss.styles.order_light_E5E5E5}/>
                    <View style={Stylecss.styles.order_itemView}>
                        <Image style={Stylecss.styles.order_imageView} source={require('../res/images/apply_alipay.png')}/>
                        <Text style={Stylecss.styles.order_itemText}>支付宝</Text>
                        <TouchableHighlight
                              style={Stylecss.styles.selectImage}
                             onPress={this.props.alipay_pay}
                        >
                            <Image style={{width: UtilScreen.getWidth(30),}} source={this.state.isImage?require('../res/images/apply_false.png'):require('../res/images/apply_true.png')}
                                   resizeMode='contain'/>
                        </TouchableHighlight>
                    </View>
                    <Text style={Stylecss.styles.OrderBtn} onPress={this.props.pay}>立即支付</Text>
                </View>
            </Modal>
        )
    }
}