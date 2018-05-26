import React, {Component} from 'react';

import {View, StyleSheet, Image, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class PersonalInfoItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
            imageURL: require('../res/images/user-1.png'),
            lTitle: '左边主标题',
            rValue: '右边的值',
        },

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.itemLeft}>
                    <Image
                        style={styles.itemImage}
                        source={this.props.itemInfo.imageURL}
                        resizeMode='contain'
                    />
                    <Text style={styles.leftText}>{this.props.itemInfo.lTitle}</Text>
                </View>
                <Text style={styles.rightValue}>{this.props.itemInfo.rValue}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: UtilScreen.getHeight(86),
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    itemLeft: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: UtilScreen.getWidth(35),
    },
    leftText: {
        color: '#333',
        fontSize: 14,
        marginLeft: UtilScreen.getWidth(15),
    },
    itemImage: {
        width: UtilScreen.getWidth(52),
        height: UtilScreen.getWidth(52),
    },
    rightValue: {
        lineHeight: UtilScreen.getHeight(86),
        color: '#333',
        fontSize: 14,
        marginRight: UtilScreen.getWidth(40),
    }
});