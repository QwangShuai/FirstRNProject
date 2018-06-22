import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class ApplyPaymentState extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Modal style={styles.container}
                    animationType={"slide"}
                    transparent={true}
                    visible={this.props.modalVisible}
                    onRequestClose={this.props.setModalVisible}>
                <View style={styles.content}>
                    <Text style={styles.payfailureText}>支付失败</Text>
                    <TouchableHighlight style={styles.clossImage} onPress={this.props.setModalVisible}>
                        <Image source={require('../res/images/closs_pay.png')}/>
                    </TouchableHighlight>
                    <Image style={styles.failureImage} source={require('../res/images/apply_pay_false.png')} resizeMode='contain'/>
                    <Text style={styles.promptText}>余额不足了!</Text>
                    <Text style={styles.promptText}>订单号:123456789012</Text>
                    <Text style={styles.paymentText}>支付方式:微信支付</Text>
                    <View style={styles.btnView}>
                        <Text style={styles.repayText} onPress={this.props.setModalVisible}>重新支付</Text>
                        <Text style={styles.orderText} onPress={this.props.jump} >查看订单</Text>
                    </View>
                </View>

            </Modal>
        )
    }
}
const
    styles = StyleSheet.create({
        container: {
            flex:1,
        },
        content: {
            height:UtilScreen.getHeight(589),
            position:'absolute',
            bottom:0,
            width:'100%',
            backgroundColor:'#ffffff',
        },
        payfailureText:{
            marginTop:UtilScreen.getHeight(30),
            alignSelf:'center',
            fontSize:18,
            color:'#333333',
        },
        clossImage:{
            position:'absolute',
            right:UtilScreen.getWidth(20),
            marginTop:UtilScreen.getHeight(20),
            width:UtilScreen.getWidth(20),
        },
        failureImage:{
            alignSelf:'center',
            height:UtilScreen.getHeight(140),
            width:UtilScreen.getWidth(140),
            marginTop:UtilScreen.getHeight(30),
        },
        promptText:{
            marginTop:UtilScreen.getHeight(24),
            alignSelf:'center',
            fontSize:12,
            color:'#333333',
        },
        paymentText:{
            marginTop:UtilScreen.getHeight(10),
            alignSelf:'center',
            fontSize:12,
            color:'#333333',
        },
        btnView:{
            marginTop:UtilScreen.getHeight(60),
            height:UtilScreen.getHeight(66),
        },
        repayText:{
            position:'absolute',
            left:UtilScreen.getWidth(60),
            lineHeight:UtilScreen.getHeight(66),
            alignSelf:'center',
            backgroundColor:'#ff9d00',
            color:'#ffffff',
            fontSize:12,
            width:UtilScreen.getWidth(248),
            borderRadius:UtilScreen.getWidth(6),
            textAlign:'center',
        },
        orderText:{
            position:'absolute',
            right:UtilScreen.getWidth(60),
            lineHeight:UtilScreen.getHeight(66),
            alignSelf:'center',
            backgroundColor:'#d1d1d1',
            color:'#ffffff',
            fontSize:12,
            width:UtilScreen.getWidth(248),
            borderRadius:UtilScreen.getWidth(6),
            textAlign:'center',
        },
    });