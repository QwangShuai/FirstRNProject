import React, {Component} from 'react';
import {Text, StyleSheet, ImageBackground, Image, TouchableHighlight} from 'react-native';
import UtilScree from '../util/UtilScreen';

export default class PersonalInfoHead extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                             source={require('../res/images/head_background.png')}
                             resizeMode='stretch'
            >
                <Text style={styles.head_title}>{this.props.nickname}</Text>
                <TouchableHighlight
                    style={styles.head_image}
                    onPress={this.props.clickCallBack}
                >
                    <Image
                        style={styles.head_image}
                        source={{uri: this.props.imageSource}}
                        resizeMode='stretch'
                    />
                </TouchableHighlight>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: UtilScree.getHeight(160),
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    head_title: {
        fontSize: 15,
        fontWeight: '800',
        color: '#000',
        marginLeft: UtilScree.getWidth(40),
    },
    head_image: {
        width: UtilScree.getWidth(120),
        height: UtilScree.getWidth(120),
        marginRight: UtilScree.getWidth(20),
        borderRadius: UtilScree.getWidth(120),
        overflow: 'hidden'
    }
});