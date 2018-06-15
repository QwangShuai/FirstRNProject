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
                <View style={styles.searchStyle}>
                    <Image style={styles.imageStyle} source={require('../res/images/6F.png')} resizeMode='contain'/>
                    <TextInput style={{flex:1,fontSize:14,padding:0}} placeholder='搜索文章/景点' underlineColorAndroid='transparent'/>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    searchStyle:{
        flexDirection:'row',
        margin:UtilScreen.getWidth(20),
        fontSize:14,
        borderRadius:UtilScreen.getWidth(34),
        width:UtilScreen.getWidth(634),
        height:UtilScreen.getHeight(64),
        borderWidth:UtilScreen.getWidth(2),
        borderColor:'#FEA81F',
        alignSelf:'center',
        justifyContent:'center',
    },
    imageStyle:{
        margin:UtilScreen.getWidth(24),
        alignSelf:'center',
        width:UtilScreen.getWidth(24),
        height:UtilScreen.getHeight(24),
    },
})