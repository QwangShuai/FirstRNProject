import React, { Component } from 'react';
import { AppRegistry ,View,Text,StyleSheet,TextInput,FlatList,TouchableHighlight,AsyncStorage,Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import FeedbackItem from '../components/FeedbackItem';
const Stylecss = require('../common/Stylecss');
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
export default class Feedback extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[],
            content:''
        }
    }
    _onChangecontent(inputData){
        //把获取到的内容，设置给showValue
        this.setState({content:inputData});
    }
    backClick(){
        this.props.navigation.navigate('Set');
    };
    Onsubmit(){
        if (this.state.content===''){
            alert('请填写反馈内容在提交!');
            return false;
        }else{
            AsyncStorage.getItem('uid', (error, result) => {
                if (!error) {
                    if (result !== '' && result !== null) {
                        console.log(result);
                        let formData = new FormData();
                        formData.append("uid", result);
                        formData.append("content", this.state.content);
                        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/feedback');
                        let params=md5.hex_md5(param);
                        formData.append('app_key',params);
                        fetch(global.commons.baseurl+'action/ac_user/feedback', {
                            method: "POST",
                            body: formData
                        }).then(response => response.text())
                            .then(responseJson => {
                                var bf = new Buffer(responseJson , 'base64')
                                var  str= bf.toString();
                                let result=JSON.parse(str);
                                if (result.code===200){
                                    alert('提交成功!');
                                    this.setState({content:null});
                                }

                                console.log(result);
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    } else {
                        this.login();
                    }
                } else {
                    //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
                }
            })
        }
    }
    login(){
        this.props.navigation.navigate('Home');
    }
    asQuery() {
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    console.log(result);
                    this.UserInfo(result);
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }
    componentWillMount() {
        this.asQuery();
    }
    //根据服务端获取反馈列表
    UserInfo(uid){
        let formData = new FormData();
        formData.append("uid", uid);
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/feedbackList');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_user/feedbackList', {
            method: "POST",
            body: formData
        }).then(response => response.text())
            .then(responseJson => {
                var bf = new Buffer(responseJson , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                for(var i = 0;i<result.obj.length;i++){
                    this.state.itemInfo.push({key: i, tText: result.obj[i].ftitle, bText: result.obj[i].backtitle,});
                }

                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'意见反馈'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.feedbackText}>意见反馈</Text>
                <View style={styles.infoView}>
                    <TextInput style={styles.infoText} placeholder='请填写你的建议，感谢你的支持' underlineColorAndroid='transparent'
                               multiline={true} onChangeText={this._onChangecontent.bind(this)} defaultValue={this.state.content}/>
                    <Text style={styles.submitText} onPress={this.Onsubmit.bind(this)}>提交</Text>
                </View>
                <View style={styles.dividerView}/>
                <Text style={styles.feedbackText}>历史意见</Text>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <FeedbackItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedbackText:{
      fontSize:18,
      marginTop:UtilScreen.getHeight(20),
        marginLeft:UtilScreen.getWidth(32),
        color:'#333333',
    },
    infoView:{
        backgroundColor:'#ffffff',
        width:'100%',
        height: UtilScreen.getHeight(180),
        padding:UtilScreen.getWidth(22),
        // paddingTop:UtilScreen.getWidth(20),
    },
    infoText:{
        textAlignVertical:'top',
        fontSize:13,
        width:'100%',
        height: UtilScreen.getHeight(180),
    },
    submitText:{
        position:'absolute',
        bottom:UtilScreen.getHeight(20),
        right:UtilScreen.getWidth(32),
        width:UtilScreen.getWidth(130),
        height:UtilScreen.getHeight(60),
        backgroundColor:'#ffd900',
        fontSize:13,
        textAlign:'center',
        alignSelf:'center',
        color:'#ffffff',
        borderRadius:UtilScreen.getWidth(10),
        lineHeight:UtilScreen.getHeight(60),
    },
    dividerView:{
      width:'100%',
      height:UtilScreen.getHeight(20),
      backgroundColor:'#f8f8f8',
    },
})