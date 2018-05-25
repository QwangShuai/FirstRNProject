import React, {Component} from 'react';
import {AppRegistry,View, StyleSheet,ImageBackground} from 'react-native';
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

            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:UtilScree.getHeight(200) ,
        backgroundColor:'red'
    }
});
// AppRegistry.registerComponent('FirstRNProject', () => PersonalInfoHead);