import React, {Component} from 'react';

import {View, StyleSheet, Image, TextInput, Text, TouchableOpacity} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class InfoItem extends Component {
    static defaultProps = {
        InfoItem: {
            lImg: require('../res/images/user-1.png'),
            rTitie: '消息标题',
            rContent: '内容',
            rTime: '时间',
            rPice: '几条消息',

        },
    }

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.InfoItem.rPice != 0) {
            return (
                <View style={[styles.container,{paddingLeft: UtilScreen.getWidth(26)}]}>
                    <TouchableOpacity style={styles.container} onPress={this.props.myJump}>
                        <Image resizeMode='contain' style={styles.lImg} source={this.props.InfoItem.lImg}></Image>
                        <View style={styles.rContainer}>
                            <Text style={styles.leftText}>{this.props.InfoItem.rTitie}</Text>
                            <Text style={styles.rContent}>{this.props.InfoItem.rContent}</Text>
                        </View>
                        <View style={styles.lContainer}>
                            <Text style={styles.rTime}>{this.props.InfoItem.rTime}</Text>
                            <Text style={styles.rPice}>{this.props.InfoItem.rPice}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else if (this.props.InfoItem.rPice == 0) {
            return (
                <View style={[styles.container,{paddingLeft: UtilScreen.getWidth(26)}]}>
                    <TouchableOpacity style={styles.container} onPress={this.props.myJump}>
                        <Image resizeMode='contain' style={styles.lImg} source={this.props.InfoItem.lImg}></Image>
                        <View style={styles.rContainer}>
                            <Text style={styles.leftText}>{this.props.InfoItem.rTitie}</Text>
                            <Text numberOfLines={1} style={styles.rContent}>{this.props.InfoItem.rContent}</Text>
                        </View>
                        <View style={styles.lContainer}>
                            <Text style={styles.rTime}>{this.props.InfoItem.rTime}</Text>
                            <Text style={styles.rPiceOne}></Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        height: UtilScreen.getHeight(170),
        flexDirection: 'row',
        paddingRight: UtilScreen.getWidth(24),


    },
    lImg: {
        width: UtilScreen.getWidth(120),
        height: UtilScreen.getHeight(120),
        borderRadius: 50,
        marginRight: UtilScreen.getWidth(30),
        marginTop: UtilScreen.getWidth(26),
    },
    rContainer: {
        width: UtilScreen.getWidth(444),

    },
    leftText: {
        fontSize: 14,
        marginTop: UtilScreen.getWidth(41),
        marginBottom: UtilScreen.getWidth(15),
        // width:'100%',

    },
    rContent: {
        fontSize: 12,

    },
    lContainer: {
        width: UtilScreen.getWidth(106),

    },
    rTime: {
        fontSize: 12,
        marginTop: UtilScreen.getWidth(45),

    },
    rPice: {
        width: UtilScreen.getWidth(34),
        width: UtilScreen.getHeight(34),
        borderRadius: 50,
        fontSize: 12,
        color: '#fff',
        backgroundColor: 'red',
        textAlign: 'center',
        position: 'absolute',
        right: UtilScreen.getWidth(15),
        top: UtilScreen.getHeight(94),
    },
    rPiceOne: {
        width: UtilScreen.getWidth(16),
        width: UtilScreen.getHeight(16),
        borderRadius: 50,
        backgroundColor: 'red',
        position: 'absolute',
        right: UtilScreen.getWidth(15),
        top: UtilScreen.getHeight(114),
    }
})