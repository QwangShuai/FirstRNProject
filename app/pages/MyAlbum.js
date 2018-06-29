import React, { Component } from 'react';
import {View,Text,StyleSheet,AsyncStorage, Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import MyAlbumGridView from '../components/MyAlbumGridView';
const Stylecss = require('../common/Stylecss');
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
export default class MyAlbum extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[],
        }
    }

    backClick(){
        this.props.navigation.navigate('Set');
    }
    login(){
        this.props.navigation.navigate('Home');
    }
    selectImages(images){
        console.log(images)
    }
    componentWillMount() {

        console.log('responseData',this.state.itemInfo);
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'我的相册'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <MyAlbumGridView itemInfo={this.state.itemInfo} selectImages={this.selectImages.bind(this)}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    agreementText:{
        fontSize:16,
        width:'100%',
        color:'#333333',
        textAlign:'center',
        alignSelf:'center',
    },
    infoText:{
        fontSize:16,
        width:UtilScreen.getWidth(632),
        marginLeft:UtilScreen.getWidth(60),
        color:'#333333',
    }
})