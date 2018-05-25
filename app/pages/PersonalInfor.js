import React, { Component } from 'react';
import {AppRegistry,View, StyleSheet,ImageBackground} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
export default class PersonalInfo extends Component{
    constructor(props) {
        super(props);
        this.test='回上个页面';
    }

    /**
     * ToolBar 点击按钮回调
     */
    backClick(){
        alert(this.test)
    }
    render(){
        return (
            <View style={styles.container}>
            <ToolBar  title={'个人中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
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
//AppRegistry.registerComponent('FirstRNProject', () => PersonalInfo);