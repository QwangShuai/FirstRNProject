import React, {Component} from 'react';
import {Text, StyleSheet, ImageBackground, Image} from 'react-native';
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
                <Image
                    style={styles.head_image}
                    source={require('../res/images/head_image.png')}
                    resizeMode='stretch'
                />
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
    }
});