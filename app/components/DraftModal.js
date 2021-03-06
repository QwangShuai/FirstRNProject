import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class DraftModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: props.isShow,
            selectIndex: 2,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isShow: nextProps.isShow,
        });
    }

    /**
     * 点击选择按钮调用
     * type 1是2否
     * @param type
     */
    itemClick(type) {
        this.setState({
            selectIndex: type,
        });
    }

    /**
     * 0回调不需要更新数据1需要更新数据
     * @param type
     */
    btClick(type) {
        this.props.yesOrNo && this.props.yesOrNo(type === 0 ? 0 : this.state.selectIndex);
        this.setState({
            isShow: false,
        });
    }

    render() {
        return (
            <Modal style={styles.container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.state.isShow}
                   onRequestClose={this.btClick.bind(this)}
            >
                <TouchableHighlight style={styles.mark}
                                    underlayColor='rgba(52, 52, 52, 0.5)'
                                    onPress={this.btClick.bind(this, 0)}
                >
                    <View style={styles.content}>
                        <Text
                            onPress={this.itemClick.bind(this, 0)}
                            style={[styles.text, {color: this.state.selectIndex === 0 ? '#f71f1f' : '#333333'}]}>{this.props.topTitle}</Text>
                        <Text
                            onPress={this.itemClick.bind(this, 1)}
                            style={[styles.text, {
                                color: this.state.selectIndex === 1 ? '#f71f1f' : '#333333',
                                marginTop: 1
                            }]}>{this.props.centerTitle}</Text>
                        <Text
                            onPress={this.itemClick.bind(this, 2)}
                            style={[styles.text, {
                                color: this.state.selectIndex === 2 ? '#f71f1f' : '#333333',
                                marginTop: 1
                            }]}>{this.props.bottomTitle}</Text>
                        <Text style={styles.submitBt} onPress={this.btClick.bind(this, 1)}
                        >确定</Text>
                    </View>
                </TouchableHighlight>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mark: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
    },
    content: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: UtilScreen.getHeight(411),
        backgroundColor: '#e5e5e5'
    },
    text: {
        fontSize: 15,
        lineHeight: UtilScreen.getHeight(96),
        textAlign: 'center',
        backgroundColor: '#fff',
        height: UtilScreen.getHeight(95),
    },
    submitBt: {
        width: '100%',
        position: 'absolute',
        left: 0,
        bottom: 0,
        color: '#fff',
        fontSize: 15,
        lineHeight: UtilScreen.getHeight(96),
        textAlign: 'center',
        backgroundColor: '#ff9d00',
        height: UtilScreen.getHeight(95),
    },
});