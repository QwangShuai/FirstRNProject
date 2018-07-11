import React, {Component} from 'react';

import {View, StyleSheet, TextInput, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class ApplyInfoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myText: '',
        }
    }

    static defaultProps = {
        itemInfo: {
            lTitle: '左边主标题',
            rHint: '提示文字',
        },
    }

    render() {
        if (this.props.itemInfo.key >= 0 && this.props.itemInfo.key < 3 || this.props.itemInfo.key == 9) {
            return (
                <View style={styles.container}>
                    <Text style={styles.leftText}>{this.props.itemInfo.lTitle}</Text>
                    <Text style={styles.rightTitle}>{this.props.itemInfo.rHint}</Text>
                </View>
            )
        } else if (this.props.itemInfo.key >= 3 && this.props.itemInfo.key < 9) {
            return (
                <View style={styles.container}>
                    <Text style={styles.leftText}>{this.props.itemInfo.lTitle}</Text>
                    <TextInput autoCorrect={false} style={styles.rightHint} placeholder={this.props.itemInfo.rHint}
                               underlineColorAndroid={'transparent'}
                               //onChange={this.props.editText.bind(this, this.state.myText, this.props.itemInfo.key)}
                               onChangeText={(text) => {
                                   this.props.editText(text, this.props.itemInfo.key)
                               }
                               }/>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: UtilScreen.getHeight(86),
        flexDirection: 'row',

    },
    leftText: {
        alignSelf: 'center',
        color: '#333',
        fontSize: 14,
        width: UtilScreen.getWidth(140),
        marginLeft: UtilScreen.getWidth(38),
        textAlign: 'justify',

    },
    rightHint: {
        padding: 0,
        fontSize: 14,
        width: '100%',
        alignSelf: 'center',
        color: '#cacaca',
        // lineHeight:UtilScreen.getHeight(86),
    },
    rightTitle: {
        fontSize: 14,
        width: '100%',
        alignSelf: 'center',
        color: '#333',
        // lineHeight:UtilScreen.getHeight(86),
    },
})