import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import MyAlbumGridView from '../components/MyAlbumGridView';
const Stylecss = require('../common/Stylecss');


export default class MyAlbum extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    date: '2017年2月1日',
                },
                {
                    key:21,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    date: '2017年2月1日',
                },
                {
                    key:2,
                    url:{uri:'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                    date: '2017年2月1日',
                }
            ],
        }
    }

    backClick(){
        this.props.navigation.navigate('Set');
    }
    selectImages(images){
        console.log(images)
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