import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image,TouchableHighlight,TextInput} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class ActivitiesRequireModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMarriage: true,
            isNone: true,
            isBoy: false,
            isGirl:false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSex === 0) {
            this.setState({
                isNone: true,
                isBoy: false,
                isGirl:false,
            })
        } else if (nextProps.isPay === 1) {
            this.setState({
                isNone: false,
                isBoy: true,
                isGirl:false,
            })
        } else {
            this.setState({
                isNone: false,
                isBoy: false,
                isGirl:true,
            })
        }

        if(nextProps.isMarriage){
            this.setState({
                isMarriage: true,
            })
        } else {
            this.setState({
                isMarriage: false,
            })
        }
    }

    render() {
        return (
            <Modal style={Stylecss.styles.modal_container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.props.modalVisible}
                   onRequestClose={this.props.setModalVisible}>
                <View style={Stylecss.styles.mark}>
                    <View style={styles.content}>
                        <Text style={[Stylecss.styles.modal_titleStyle,{marginLeft:UtilScreen.getWidth(10)}]}>活动要求</Text>
                        <TouchableHighlight style={Stylecss.styles.modal_clossImage} onPress={this.props.setModalVisible}>
                            <Image source={require('../res/images/closs_pay.png')}/>
                        </TouchableHighlight>
                        <View style={{height:UtilScreen.getHeight(50),flexDirection:'row',marginTop:UtilScreen.getHeight(30)}}>
                            <Text style={styles.smallTitle}>年龄：</Text>
                            <TextInput style={[styles.additionalStyle,{fontSize:10}]} placeholder='请输入年龄' underlineColorAndroid='transparent'/>
                            <Text style={{lineHeight:UtilScreen.getHeight(50),fontSize:16,color:'#333333',textAlign:'center',marginLeft:UtilScreen.getWidth(20)}}>~</Text>
                            <TextInput style={[styles.additionalStyle,{fontSize:10}]} placeholder='请输入年龄' underlineColorAndroid='transparent'/>
                        </View>
                        <View style={{height:UtilScreen.getHeight(50),flexDirection:'row',marginTop:UtilScreen.getHeight(40)}}>
                            <Text style={styles.smallTitle}>性别：</Text>
                            <Text style={this.state.isNone?[styles.additionalStyle,{marginLeft:UtilScreen.getWidth(16),color:'#f71f1f',borderColor:'#f71f1f'}]
                                :[styles.additionalStyle,{marginLeft:UtilScreen.getWidth(16)}]}>无</Text>
                            <Text style={this.state.isBoy?[styles.additionalStyle,{color:'#f71f1f',borderColor:'#f71f1f'}]
                                :styles.additionalStyle}>男</Text>
                            <Text style={this.state.isGirl?[styles.additionalStyle,{color:'#f71f1f',borderColor:'#f71f1f'}]
                                :styles.additionalStyle}>女</Text>
                        </View>
                        <View style={{marginTop:UtilScreen.getHeight(40),height:UtilScreen.getHeight(56),flexDirection:'row',}}>
                            <Text style={styles.smallTitle}>婚姻状况：</Text>
                            <Text style={[Stylecss.styles.modal_stateStyle,{marginLeft:UtilScreen.getWidth(10),color:this.state.isMarriage?'#f71f1f':'#888888',borderColor:this.state.isMarriage?'#f71f1f':'#888888'}]}>参考展示</Text>
                            <Text style={[Stylecss.styles.modal_stateStyle,{marginLeft:UtilScreen.getWidth(20),color:this.state.isMarriage?'#888888':'#f71f1f',borderColor:this.state.isMarriage?'#888888':'#f71f1f'}]}>我请客</Text>
                        </View>
                        <View style={{marginTop:UtilScreen.getHeight(40),height:UtilScreen.getHeight(56),flexDirection:'row',}}>
                            <Text style={styles.smallTitle}>其他要求：</Text>
                            <TextInput style={[styles.additionalStyle,{marginLeft:UtilScreen.getWidth(10),textAlign:'left',width:UtilScreen.getWidth(350),height:UtilScreen.getHeight(60),lineHeight:UtilScreen.getHeight(60)}]} placeholder='  请输入要求(选填)' underlineColorAndroid='transparent'/>
                        </View>
                        <Text style={Stylecss.styles.modal_btnStyle}>确定</Text>
                    </View>
                </View>
            </Modal>
        )
    }

}
const
    styles = StyleSheet.create({

        content: {
            paddingTop: UtilScreen.getHeight(10),
            paddingLeft: UtilScreen.getWidth(40),
            height: UtilScreen.getHeight(624),
            width: UtilScreen.getWidth(600),
            alignSelf: 'center',
            backgroundColor: '#ffffff',
        },
        additionalStyle:{
            padding:0,
            height:UtilScreen.getHeight(48),
            width:UtilScreen.getWidth(118),
            marginLeft:UtilScreen.getWidth(20),
            lineHeight:UtilScreen.getHeight(48),
            borderColor:'#888888',
            borderWidth:UtilScreen.getHeight(1),
            borderRadius:UtilScreen.getHeight(6),
            fontSize:12,
            textAlign:'center',
            color:'#333333',
        },
        smallTitle:{
          fontSize:14,
            marginLeft:UtilScreen.getWidth(10),
            color:'#333333',
            lineHeight:UtilScreen.getHeight(50),
            textAlign:'center',
        },
    })