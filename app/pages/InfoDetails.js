import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class InfoDetails extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            title:'消息标题标题标题标题标题标题标题标题标题标题 标题最多不能超过30个字',
            url:require('../res/images/1.jpg'),
            contentText:'消息内容内容内容内容内容内容内容内容内容内容内容 内容内容内容内容，内容内容内容内容内容，内容内容 内容内容内容。',
        }
    }
    backClick(){
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'消息中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.titleStyle}>{this.state.title}</Text>
                <Image style={{width:UtilScreen.getWidth(670),height:UtilScreen.getHeight(332),marginLeft:UtilScreen.getWidth(40),
                    marginTop:UtilScreen.getHeight(20),resizeMode:'stretch'}} source={this.state.url}/>
                <Text style={styles.contextStyle}>{this.state.contentText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        marginLeft:UtilScreen.getWidth(40),
        marginTop:UtilScreen.getHeight(30),
        width:UtilScreen.getWidth(660),
        height:UtilScreen.getHeight(84),
        color:'#333333',
        fontSize:15,
        lineHeight:UtilScreen.getHeight(84),
    },
    contextStyle:{
        marginTop:UtilScreen.getHeight(20),
        color:'#333333',
        fontSize:14,
        marginLeft:UtilScreen.getWidth(40),
        width:UtilScreen.getWidth(670),
    }
})