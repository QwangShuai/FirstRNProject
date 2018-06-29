import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, Image, TouchableHighlight,Linking} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');

export default class RefundModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal
                animationType={"slide"}
                transparent={true}
                visible={this.props.isRefundModal}
                onRequestClose={this.props.clossModal}>
                <View style={styles.content}>
                    <Text style={Stylecss.styles.order_title}>退款方式</Text>
                    <TouchableHighlight style={Stylecss.styles.order_clossImage} onPress={this.props.clossModal}>
                        <Image source={require('../res/images/closs_pay.png')}/>
                    </TouchableHighlight>
                    <View style={{ backgroundColor:'#e5e5e5',height:UtilScreen.getHeight(2),}}/>
                    <Text style={styles.textStyle}>暂不支持退款，请联系客服电话：400220097</Text>
                    <Text style={Stylecss.styles.OrderBtn}  onPress={()=>{Linking.openURL('tel:400220097')}}>拨打</Text>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        backgroundColor: '#ffffff',
        height: UtilScreen.getHeight(336),
        position: 'absolute',
        bottom: 0,
    },
    textStyle:{
        marginTop:UtilScreen.getHeight(24),
        color:'#333333',
        fontSize:15,
        marginLeft:UtilScreen.getWidth(30),
        marginBottom:UtilScreen.getHeight(40),
    },
})