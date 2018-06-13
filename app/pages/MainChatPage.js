import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, PixelRatio, TextInput, Alert} from 'react-native';

export default class MainChatPage extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View style={styles.container}>
                <Text>聊天</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})


