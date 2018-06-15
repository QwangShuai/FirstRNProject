import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, PixelRatio, TextInput, Alert} from 'react-native';
import IndexPageBanner from '../components/IndexPageBanner';
import IndexSerach from '../components/IndexSerach';
import HotFriendRemember from '../components/HotFriendRemember';
export default class IndexPage extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <View style={styles.container}>
                <IndexPageBanner/>
                <IndexSerach/>
                <HotFriendRemember/>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})


