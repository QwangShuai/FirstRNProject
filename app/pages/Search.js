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

    backClick(){

    }
    search(){

    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <View style={styles.myView}>
                    <View style={styles.searchStyle}>
                        <Image style={styles.imageStyle} source={require('../res/images/6F.png')} resizeMode='contain'/>
                        <TextInput style={{flex:1,fontSize:14,padding:0}} placeholder='搜索文章/景点' underlineColorAndroid='transparent'
                                   onChangeText={this.search.bind(this)}/>
                    </View>
                    <Text style={styles.cancelStyle} onPress={this.backClick.bind(this)}>取消</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    myView:{
        marginTop:UtilScreen.getHeight(20),
        width:'100%',
        height:UtilScreen.getHeight(64),
        alignSelf:'center',
        backgroundColor:'#ffffff',
        flexDirection:'row',
    },
    searchStyle:{
        marginLeft:UtilScreen.getWidth(20),
        flexDirection:'row',
        borderRadius:UtilScreen.getWidth(34),
        width:UtilScreen.getWidth(634),
        height:UtilScreen.getHeight(64),
        borderWidth:UtilScreen.getWidth(2),
        borderColor:'#FEA81F',
    },
    imageStyle:{
        margin:UtilScreen.getWidth(24),
        alignSelf:'center',
        width:UtilScreen.getWidth(24),
        height:UtilScreen.getHeight(24),
    },
    cancelStyle:{
        marginLeft:UtilScreen.getHeight(20),
        lineHeight:UtilScreen.getHeight(64),
        textAlign:'center',
        fontSize:14,
        color:'#333333',
        alignSelf:'center',
    },
})