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
                <View style={styles.content}>
                    <Text style={Stylecss.styles.modal_titleStyle}>活动要求</Text>
                    <TouchableHighlight style={Stylecss.styles.modal_clossImage} onPress={this.props.setModalVisible}>
                        <Image source={require('../res/images/closs_pay.png')}/>
                    </TouchableHighlight>
                    <View style={{}}>

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

    })