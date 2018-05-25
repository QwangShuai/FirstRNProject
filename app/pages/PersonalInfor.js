import React, { Component } from 'react';
import {AppRegistry,View, StyleSheet,ImageBackground} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
export default class PersonalInfo extends Component{
    constructor(props) {
        super(props);
    }
    backClick(){
        alert('ooo')
    }
    render(){
        return (
            <View style={styles.container}>
            <ToolBar  title={'热映榜'} router={'noo'} backClick={this.backClick}/>
                <View style={styles.test}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'red'
    },
    test:{
        width:UtilScreen.getWidth(375),
        height:UtilScreen.getHeight(667),
        backgroundColor:'#fff'
    }
});
// AppRegistry.registerComponent('FirstRNProject', () => PersonalInfo);