import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import UploadImageGridView from '../components/UploadImageGridView';
const Stylecss = require('../common/Stylecss');


export default class AddContent extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            textCount:0
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
                <ToolBar title={'补充内容'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.titleText}>标题标题标题标题标题标题标题标题标题标题标题标 题标题标题标题</Text>
                <View style={Stylecss.styles.light_F8F8F8} />
                <View style={styles.contentView}>
                    <Text style={styles.titleContext}>具体内容</Text>
                    <Text style={styles.promptText}>{this.state.textCount}/2000</Text>
                    <TextInput style={styles.inputStyle} maxLengh={2000} placeholder={'请输入内容'} underlineColorAndroid="transparent"
                               onChangeText={(text)=>{
                                   this.setState({
                                       textCount:text.length,
                                   });
                               }} />
                </View>
                <UploadImageGridView maxNumber={9} selectImages={this.selectImages.bind(this)}/>
                <View style={Stylecss.styles.light_F8F8F8} />
                <Text style={Stylecss.styles.set_logout}>确认提交</Text>
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
    },
    titleText:{
        marginTop:UtilScreen.getHeight(25),
        marginLeft:UtilScreen.getWidth(40),
        textAlign:'left',
        fontSize:14,
        height:UtilScreen.getHeight(80),
        width:UtilScreen.getWidth(644),
        color:'#333333',
    },
    contentView:{
        height:UtilScreen.getHeight(231),
        marginLeft:UtilScreen.getWidth(40),
        marginRight:UtilScreen.getWidth(40),
    },
    titleContext:{
        color:'#333333',
        fontSize:14,
    },
    promptText:{
        position:'absolute',
        right:0,
        color:'#333333',
        fontSize:14,
    },
    inputStyle:{
        flex:1,
        textAlignVertical:'top',
    },
})