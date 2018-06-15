import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class Search extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <View style={Stylecss.styles.container}>
                <View style={{height:UtilScreen.getHeight(134)}}>
                    <TextInput style={styles.searchStyle} placeholder='搜索文章/景点' underlineColorAndroid='transparent'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchStyle:{
        margin:UtilScreen.getWidth(20),
        fontSize:14,
        borderRadius:UtilScreen.getWidth(57),
        width:UtilScreen.getWidth(634),
        borderWidth:UtilScreen.getWidth(2),
        borderColor:'#FEA81F',
        alignSelf:'center',
        textAlign:'left',
    }
})