import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class ApplyRealName extends Component {
    constructor(props){
        super(props);
        this.state ={
            modalVisible: true,
        }
    }
    setModalVisible() {
        this.setState({modalVisible: false});
    }

    render(){
        return(
            <Modal style={styles.container}
                   animationType={"slide"}
                   transparent={false}
                   visible={this.state.modalVisible}
                   onRequestClose={this.setModalVisible.bind(this)}>
                <Text style={styles.payfailureText}>支付失败</Text>
                <Image style={styles.clossImage} source={require('../res/images/closs_pay.png')}/>
                <Image style={styles.failureImage} source={require('../res/images/apply_pay_false.png')} resizeMode='contain'/>
                <Text style={styles.promptText}>余额不足了!</Text>
                <Text style={styles.promptText}>订单号:123456789012</Text>
                <Text style={styles.paymentText}>支付方式:微信支付</Text>
                <Text style={styles.btnText}>实名设置</Text>
            </Modal>
        )
    }
}
const
    styles = StyleSheet.create({
        container: {
            height:UtilScreen.getHeight(589),
            position:'absolute',
            bottom:0,
            flexDirection:'row',
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
        btnText:{
            marginTop:UtilScreen.getHeight(60),
            lineHeight:UtilScreen.getHeight(66),
            alignSelf:'center',
            backgroundColor:'#ff9d00',
            color:'#ffffff',
            fontSize:12,
            width:UtilScreen.getWidth(248),
            borderRadius:UtilScreen.getWidth(6),
            textAlign:'center',
        },
    });