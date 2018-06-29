import React, {Component} from 'react';

import {View, StyleSheet, Image, TextInput, Text} from 'react-native';
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
                    <View style={styles.imageContet}>
                        <Image resizeMode='cover' style={styles.lImg} source={this.props.InfoItem.lImg}></Image>
                    </View>
                        <View style={styles.rContainer}>
                            <Text style={styles.leftText}>{this.props.InfoItem.rTitie}</Text>
                            <Text style={styles.rContent}>{this.props.InfoItem.rContent}</Text>
                        </View>
                        <View style={styles.lContainer}>
                            <Text style={styles.rTime}>{this.props.InfoItem.rTime}</Text>
                            <Text style={styles.rPice}>{this.props.InfoItem.rPice}</Text>
                        </View>
                </View>
            )
        } else if (this.props.InfoItem.rPice == 0) {
            return (
                <View style={[styles.container,{paddingLeft: UtilScreen.getWidth(26)}]}>
                    <View style={styles.imageContet}>
                        <Image resizeMode='cover' style={styles.lImg} source={this.props.InfoItem.lImg}></Image>
                    </View>
                        <View style={styles.rContainer}>
                            <Text style={styles.leftText}>{this.props.InfoItem.rTitie}</Text>
                            <Text numberOfLines={1} style={styles.rContent}>{this.props.InfoItem.rContent}</Text>
                        </View>
                        <View style={styles.lContainer}>
                            <Text style={styles.rTime}>{this.props.InfoItem.rTime}</Text>
                            <Text style={styles.rPiceOne}></Text>
                        </View>
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
    imageContet: {
        backgroundColor:'#000',
        overflow:'hidden',
        width: UtilScreen.getWidth(120),
        height: UtilScreen.getWidth(120),
        borderRadius: UtilScreen.getWidth(120),
        marginTop:UtilScreen.getHeight(13)
    },
    lImg: {
        width: UtilScreen.getWidth(120),
        height: UtilScreen.getWidth(120),
    },
    rContainer: {
        width: UtilScreen.getWidth(444),
        marginLeft:UtilScreen.getWidth(30)
    },
    leftText: {
        fontSize: 14,
        marginTop: UtilScreen.getWidth(21),
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
        marginTop: UtilScreen.getWidth(21),

    },
    rPice: {
        width: UtilScreen.getWidth(34),
        height: UtilScreen.getWidth(34),
        borderRadius: UtilScreen.getWidth(34),
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
        height: UtilScreen.getWidth(16),
        borderRadius: UtilScreen.getWidth(16),
        backgroundColor: 'red',
        position: 'absolute',
        right: UtilScreen.getWidth(15),
        top: UtilScreen.getHeight(94),
    }
})