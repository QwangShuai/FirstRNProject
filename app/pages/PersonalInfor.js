import React, { Component } from 'react';
import {AppRegistry,View, StyleSheet,ImageBackground} from 'react-native';
import ToolBar from '../components/ToolBar';
export default class PersonalInfo extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <View style={styles.container}>
            <ToolBar  title={'热映榜'} router={'no'}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:600,
        backgroundColor:'red'
    }
});
//AppRegistry.registerComponent('FirstRNProject', () => PersonalInfo);