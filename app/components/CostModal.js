import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image,TouchableHighlight,TextInput} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class CostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isState:true,
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isPay){
            this.setState({
                isState:true,
            })
        } else {
            this.setState({
                isState:false,
            })
        }

    }
    render() {
        return (
            <Modal style={styles.container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.props.modalVisible}
                   onRequestClose={this.props.setModalVisible}>
                <View style={styles.content}>
                    <Text style={styles.titleStyle}>人均费用</Text>
                    <TouchableHighlight style={styles.clossImage} onPress={this.props.setModalVisible}>
                        <Image source={require('../res/images/closs_pay.png')}/>
                    </TouchableHighlight>
                    <View style={{marginTop:UtilScreen.getHeight(20),height:UtilScreen.getHeight(56),flexDirection:'row',}}>
                        <Text style={[styles.stateStyle,{color:this.state.isState?'#f71f1f':'#888888',borderColor:this.state.isState?'#f71f1f':'#888888'}]}>参考展示</Text>
                        <Text style={[styles.stateStyle,{marginLeft:UtilScreen.getWidth(60),color:this.state.isState?'#888888':'#f71f1f',borderColor:this.state.isState?'#888888':'#f71f1f'}]}>我请客</Text>
                    </View>
                    <Text style={{color:'#333333',fontSize:10,marginTop:UtilScreen.getHeight(20)}}>{this.state.isState?'活动费用现场实际收取':'活动费用由你支付，其他成员免费参与活动'}</Text>
                    <Text style={styles.titleStyle}>输入金额</Text>
                    <View style={styles.viewStyle}>
                        <Text style={{marginLeft:UtilScreen.getWidth(40),lineHeight:UtilScreen.getHeight(54),fontSize:16,textAlign:'center'}}>￥</Text>
                        <TextInput placeholder='00.00' underlineColorAndroid='transparent' style={{padding:0,fontSize:15,lineHeight:UtilScreen.getHeight(54),width:UtilScreen.getWidth(300),}}/>
                    </View>
                    <Text style={styles.titleStyle}>费用说明</Text>
                    <View style={styles.viewStyle}>
                        <TextInput placeholder='请输入说明(选填)' underlineColorAndroid='transparent' style={{padding:0,fontSize:12,lineHeight:UtilScreen.getHeight(54),width:UtilScreen.getWidth(400),marginLeft:UtilScreen.getWidth(40)}}/>
                    </View>
                    <Text style={Stylecss.styles.btnStyle}>确定</Text>
                </View>
            </Modal>
        )
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        content: {
            paddingTop:UtilScreen.getHeight(10),
            paddingLeft:UtilScreen.getWidth(40),
            height: UtilScreen.getHeight(652),
            width:UtilScreen.getWidth(600),
            alignSelf:'center',
            backgroundColor: '#ffffff',
        },
        titleStyle:{
            color:'#333333',
            fontSize:14,
            marginTop:UtilScreen.getHeight(30),
        },
        clossImage:{
            position:'absolute',
            right:UtilScreen.getWidth(20),
            marginTop:UtilScreen.getHeight(20),
            width:UtilScreen.getWidth(20),
        },
        stateStyle:{
            fontSize:12,
            height:UtilScreen.getHeight(54),
            lineHeight:UtilScreen.getHeight(54),
            textAlign:'center',
            width:UtilScreen.getWidth(158),
            borderWidth:UtilScreen.getHeight(1),
            borderRadius:UtilScreen.getHeight(6),
        },
        viewStyle:{
            marginTop:UtilScreen.getHeight(20),
            width:UtilScreen.getWidth(520),
            height:UtilScreen.getHeight(54),
            borderWidth:UtilScreen.getHeight(1),
            borderColor:'#888888',
            borderRadius:UtilScreen.getHeight(6),
            flexDirection:'row',
        },
    })