import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class ApplyPaymentSuccess extends Component {
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
                    <Image style={styles.failureImage} source={require('../res/images/apply_pay_true.png')} resizeMode='contain'/>
                    <Text style={styles.successText}>支付成功</Text>
                    <Text style={styles.promptText}>订单号:123456789012</Text>
                    <Text style={styles.paymentText}>支付方式:微信支付</Text>
                    <Text style={styles.btnText} onPress={this.props.jump}>完成</Text>
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
            marginTop:UtilScreen.getHeight(88),
            // width:'100%',
            // height:UtilScreen.getHeight(589),
            flex:1,
            backgroundColor:'#ffffff',
        },
        payfailureText:{
            marginTop:UtilScreen.getHeight(30),
            alignSelf:'center',
            fontSize:18,
            color:'#333333',
        },
        failureImage:{
            alignSelf:'center',
            height:UtilScreen.getHeight(140),
            width:UtilScreen.getWidth(140),
            marginTop:UtilScreen.getHeight(100),
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
        btnText:{
            marginTop:UtilScreen.getHeight(80),
            lineHeight:UtilScreen.getHeight(88),
            alignSelf:'center',
            backgroundColor:'#ff9d00',
            color:'#ffffff',
            fontSize:18,
            width:UtilScreen.getWidth(670),
            borderRadius:UtilScreen.getWidth(6),
            textAlign:'center',
        },
        successText:{
           marginTop:UtilScreen.getHeight(40),
           fontSize:18,
           color:'#ffd900',
           textAlign:'center',
        },
    });