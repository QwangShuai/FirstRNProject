import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image,TouchableHighlight,TextInput} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class CostModal extends Component {
    constructor(props,mContext) {
        super(props);
        this.mContext=mContext;
        this.state = {
            isState0:true,
            isState1:false,
            isState2:false,
            text:'',
            itemInfo:{
                money:0,
                costsThat:'',
            }
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isCostState==0){
            this.setState({
                isState0:true,
                isState1:false,
                isState2:false,
                text:'活动费用现场实际收取',
            })
            this.state.itemInfo.payment=0;
        } else if(nextProps.isCostState==1) {
            this.setState({
                isState0:false,
                isState1:true,
                isState2:false,
                text:'活动费用由你支付，其他成员免费参与活动',
            })
            this.state.itemInfo.payment=1;
        } else {
            this.setState({
                isState0: false,
                isState1: false,
                isState2: true,
                text:'活动费用队员可选微信或支付宝支付。',
            })
            this.state.itemInfo.payment=2;
        }

    }

    render() {
        return (
            <Modal style={Stylecss.styles.modal_container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.props.isCost}
                   onRequestClose={this.props.setModalVisible}>
                <View style={Stylecss.styles.mark}>
                    <View style={styles.content}>
                        <Text style={Stylecss.styles.modal_titleStyle}>人均费用</Text>
                        <TouchableHighlight style={Stylecss.styles.clossImage} onPress={this.props.setModalVisible}>
                            <Image source={require('../res/images/closs_pay.png')}/>
                        </TouchableHighlight>
                        <View style={{marginTop:UtilScreen.getHeight(20),height:UtilScreen.getHeight(56),flexDirection:'row',}}>
                            <Text style={[Stylecss.styles.modal_stateStyle,{color:this.state.isState0?'#f71f1f':'#888888',borderColor:this.state.isState0?'#f71f1f':'#888888'}]} onPress={this.props.paymentReference}>参考展示</Text>
                            <Text style={[Stylecss.styles.modal_stateStyle,{marginLeft:UtilScreen.getWidth(30),color:this.state.isState1?'#f71f1f':'#888888',borderColor:this.state.isState1?'#f71f1f':'#888888'}]} onPress={this.props.paymentNow}>我请客</Text>
                            <Text style={[Stylecss.styles.modal_stateStyle,{marginLeft:UtilScreen.getWidth(30),color:this.state.isState2?'#f71f1f':'#888888',borderColor:this.state.isState2?'#f71f1f':'#888888'}]} onPress={this.props.paymentOnline}>线上支付</Text>
                        </View>
                        <Text style={{color:'#333333',fontSize:10,marginTop:UtilScreen.getHeight(20)}}>{this.state.text}</Text>
                        <Text style={Stylecss.styles.modal_titleStyle}>输入金额</Text>
                        <View style={styles.viewStyle}>
                            <Text style={{marginLeft:UtilScreen.getWidth(40),lineHeight:UtilScreen.getHeight(54),fontSize:16,textAlign:'center'}}>￥</Text>
                            <TextInput placeholder='00.00' underlineColorAndroid='transparent' style={{padding:0,fontSize:15,lineHeight:UtilScreen.getHeight(54),width:UtilScreen.getWidth(300),}} onChangeText={(text)=>{
                                this.state.itemInfo.money = text;
                                // let data = this.state.itemInfo.concat();
                                // this.setState({itemInfo:data});

                            }}/>
                        </View>
                        <Text style={Stylecss.styles.modal_titleStyle}>费用说明</Text>
                        <View style={styles.viewStyle}>
                            <TextInput placeholder='请输入说明(选填)' underlineColorAndroid='transparent' style={{padding:0,fontSize:12,lineHeight:UtilScreen.getHeight(54),width:UtilScreen.getWidth(400),marginLeft:UtilScreen.getWidth(40)}} onChangeText={(text)=>{
                                this.state.itemInfo.costsThat = text;
                                // let data = this.state.itemInfo.concat();
                                // this.setState({itemInfo:data});
                            } }/>
                        </View>
                        <Text style={Stylecss.styles.modal_btnStyle} onPress={this.props.callbackCost.bind(this,this.state.itemInfo)}>确定</Text>
                    </View>
                </View>
            </Modal>
        )
    }
}

const
    styles = StyleSheet.create({
        content: {
            paddingTop:UtilScreen.getHeight(10),
            paddingLeft:UtilScreen.getWidth(40),
            height: UtilScreen.getHeight(652),
            width:UtilScreen.getWidth(600),
            alignSelf:'center',
            backgroundColor: '#ffffff',
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