import React, {Component} from 'react';
import {View, StyleSheet, Text,ScrollView} from 'react-native';
import SlideDeleteListItem from '../components/SlideDeleteListItem';
import UtilScreen from '../util/UtilScreen';

export default class SlideDelete extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        headerStyle: {height: 0},
    };

    editData() {
        console.log('edit');
        alert('edit');
    }

    deleteData() {
        console.log('deleteData');
        alert('edit');

    }

    render() {
        return (
            <SlideDeleteListItem editCallBack={this.editData.bind(this)} deleteCallBack={this.deleteData.bind(this)}>
                <View style={styles.item}>
                    <Text>123456789</Text>
                </View>
            </SlideDeleteListItem>
        );
    }

}
const styles = StyleSheet.create({
    item: {
        height: UtilScreen.getHeight(300),
        width: UtilScreen.getWidth(750),
        backgroundColor: 'blue'
    },
});