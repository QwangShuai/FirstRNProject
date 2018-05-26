import React, {Component} from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';
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
                <Text style={styles.head_title}>头像</Text>

            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: UtilScree.getHeight(160),
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    head_title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#000',
        marginLeft: UtilScree.getWidth(40),
    },
});