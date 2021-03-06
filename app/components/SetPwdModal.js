import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image,TouchableHighlight,TextInput} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class SetPwdModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isState: false,
            itemInfo:{
                pwd:'',
            }

        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isSet){
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
            <Modal style={Stylecss.styles.modal_container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.props.isSetPwdModal}
                   onRequestClose={this.props.setModalVisible}>
                <View style={Stylecss.styles.mark}>
                    <View style={styles.content}>
                        <Text style={styles.titleStyle}>设置密码</Text>
                        <TouchableHighlight style={styles.clossImage} onPress={this.props.setModalVisible}>
                            <Image source={require('../res/images/closs_pay.png')}/>
                        </TouchableHighlight>
                        <Text style={{color:'#333333',fontSize:10,marginTop:UtilScreen.getHeight(20),marginLeft:UtilScreen.getWidth(20)}}>分享、邀请好友加入活动时，会直接附上密码</Text>
                        <Text style={[styles.titleStyle,{marginLeft:UtilScreen.getWidth(20),marginTop:UtilScreen.getHeight(30)}]}>输入密码</Text>
                        <View style={{height:UtilScreen.getHeight(60),flexDirection:'row',}}>
                            <TextInput style={Stylecss.styles.modal_textStyle} placeholder='  请输入密码' secureTextEntry={this.state.isState} underlineColorAndroid='transparent' onChangeText={(text)=>{
                                this.state.itemInfo.pwd = text;
                            }}/>
                            <TouchableHighlight style={{width:UtilScreen.getWidth(32),height:UtilScreen.getHeight(30),alignSelf:'center',marginLeft:UtilScreen.getWidth(12)}} onPress={this.props.setPwd_isShow}>
                            <Image resizeMode='contain' style={{width:UtilScreen.getWidth(32),height:UtilScreen.getHeight(30),alignSelf:'center'}}
                                   source={this.state.isState?require('../res/images/eye-b-false.png'):require('../res/images/eye-b-true.png')}/>
                            </TouchableHighlight>
                        </View>
                        <Text style={Stylecss.styles.modal_btnStyle} onPress={this.props.setPwd_callBack.bind(this,this.state.itemInfo)}>确定</Text>
                    </View>
                </View>
            </Modal>
        )
    }
}

const
    styles = StyleSheet.create({
        content: {
            paddingTop: UtilScreen.getHeight(20),
            paddingLeft: UtilScreen.getWidth(40),
            height: UtilScreen.getHeight(434),
            width: UtilScreen.getWidth(600),
            alignSelf: 'center',
            backgroundColor: '#ffffff',
        },
        titleStyle:{
            color:'#333333',
            fontSize:14,
            marginTop:UtilScreen.getHeight(40),
        },
        clossImage:{
            position:'absolute',
            right:UtilScreen.getWidth(20),
            marginTop:UtilScreen.getHeight(20),
            width:UtilScreen.getWidth(20),
        },

    })