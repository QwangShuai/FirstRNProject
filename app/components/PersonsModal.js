import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image,TouchableHighlight,TextInput} from 'react-native';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class PersonsModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isState: true,
            isLess:false,
            isMany:false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isPay===0) {
            this.setState({
                isState: true,
                isLess:false,
                isMany:false,
            })
        } else if(nextProps.isPay===1) {
            this.setState({
                isState: false,
                isLess:true,
                isMany:false,
            })
        } else {
            this.setState({
                isState: false,
                isLess:false,
                isMany:true,
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
                        <Text style={Stylecss.styles.modal_titleStyle}>人数要求</Text>
                        <TouchableHighlight style={Stylecss.styles.modal_clossImage} onPress={this.props.setModalVisible}>
                            <Image source={require('../res/images/closs_pay.png')}/>
                        </TouchableHighlight>
                        <View style={{height:UtilScreen.getHeight(56),flexDirection:'row',marginTop:UtilScreen.getHeight(20)}}>
                            <Text style={this.state.isState?[Stylecss.styles.modal_stateStyle,{color:'#f71f1f',borderColor:'#f71f1f'}]:Stylecss.styles.modal_stateStyle}>无</Text>
                            <Text style={this.state.isLess?[Stylecss.styles.modal_stateStyle,{color:'#f71f1f',borderColor:'#f71f1f',marginLeft:UtilScreen.getWidth(20)}]:[Stylecss.styles.modal_stateStyle,{marginLeft:UtilScreen.getWidth(20)}]}>最少</Text>
                            <Text style={this.state.isMany?[Stylecss.styles.modal_stateStyle,{color:'#f71f1f',borderColor:'#f71f1f',marginLeft:UtilScreen.getWidth(20)}]:[Stylecss.styles.modal_stateStyle,{marginLeft:UtilScreen.getWidth(20)}]}>最多</Text>
                        </View>
                        <Text style={Stylecss.styles.modal_titleStyle}>输入人数</Text>
                        <TextInput style={Stylecss.styles.modal_textStyle} placeholder='  请输入人数' secureTextEntry={this.state.isState} underlineColorAndroid='transparent'/>
                        <Text style={Stylecss.styles.modal_titleStyle}>女生人数</Text>
                        <TextInput style={Stylecss.styles.modal_textStyle} placeholder='  请输入人数' secureTextEntry={this.state.isState} underlineColorAndroid='transparent'/>
                        <Text style={Stylecss.styles.modal_titleStyle}>男生人数</Text>
                        <TextInput style={Stylecss.styles.modal_textStyle} placeholder='  请输入人数' secureTextEntry={this.state.isState} underlineColorAndroid='transparent'/>
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
            height: UtilScreen.getHeight(782),
            width: UtilScreen.getWidth(600),
            alignSelf: 'center',
            backgroundColor: '#ffffff',
        },

    })