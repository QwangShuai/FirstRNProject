import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class SetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: props.isShow,
        }
    }

    setModalVisible() {
        this.setState({isShow: false});
    }

    sureBtn() {
        // alert('nanguo ','nanguo',),
        this.setState({isShow: false});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isShow: nextProps.isShow,
        });
    }

    render() {
        return (
            <Modal style={styles.container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.state.isShow}
                   onRequestClose={this.setModalVisible.bind(this)}
            >
                <View style={styles.content}>
                    <Text style={styles.titleText}>确定要清楚缓存吗？</Text>
                    <View style={styles.btnView}>
                        <Text style={styles.cancelText} onPress={this.setModalVisible.bind(this)}>取消</Text>
                        <Text style={styles.sureText} onPress={this.sureBtn.bind(this)}>确认</Text>
                        <Text style={styles.dividerText}>|</Text>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        backgroundColor: 'red',
        width: UtilScreen.getWidth(460),
        height: UtilScreen.getHeight(350),
        borderRadius: UtilScreen.getWidth(10),
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        marginTop: UtilScreen.getHeight(123),
        fontSize: 15,
        alignSelf: 'center',
        color: '#333333',
    },
    btnView: {
        alignItems: 'center',
        flexDirection: 'row',
        height: UtilScreen.getHeight(60),
        marginTop: UtilScreen.getHeight(114),
        borderTopColor: '#e5e5e5',
        width: UtilScreen.getWidth(460),
        borderTopWidth: UtilScreen.getHeight(1),
        justifyContent: 'center',
    },
    sureText: {
        marginTop: UtilScreen.getHeight(11),
        lineHeight: UtilScreen.getHeight(60),
        position: 'absolute',
        right: UtilScreen.getWidth(81),
        fontSize: 15,
        color: '#333333',
        alignSelf: 'center',
    },
    cancelText: {
        marginTop: UtilScreen.getHeight(11),
        lineHeight: UtilScreen.getHeight(60),
        position: 'absolute',
        left: UtilScreen.getWidth(81),
        fontSize: 15,
        color: '#333333',
        alignSelf: 'center',
    },
    dividerText: {
        fontSize: 28,
        color: '#979797',
    },
})