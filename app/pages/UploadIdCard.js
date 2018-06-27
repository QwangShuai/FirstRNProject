import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableHighlight,AsyncStorage,Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import SelectYesOrNo from '../components/SelectYesOrNo';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
import UploadSuccess from '../components/UploadSuccess';
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
export default class UploadIdCard extends Component {
    constructor(props) {
        super(props);
        this._onChangeName = this._onChangeName.bind(this);
        this._onChangeTel = this._onChangeTel.bind(this);
        this._onChangeIdCard = this._onChangeIdCard.bind(this);
        this.state = {
            type: 1,
            isShowSelectPhoto: false,
            idCardTop: {},
            idCardBottom: {},
            uploadType: 1,
            isShowSuccess:false,
            UserName:"",
            UserTel:"",
            IdCard:"",
        }
    }
    _onChangeName(inputData){
        //把获取到的内容，设置给showValue
        this.setState({UserName:inputData});
    }
    _onChangeTel(inputData){
        //把获取到的内容，设置给showValue
        this.setState({UserTel:inputData});
    }
    _onChangeIdCard(inputData){
        //把获取到的内容，设置给showValue
        this.setState({IdCard:inputData});
    }
    static navigationOptions = {
        // title:'登录',
        headerStyle: {height: 0},
    };

    /**
     * 返回按钮回调
     */
    backClick() {
        this.props.navigation.navigate('PersonalInfo');
    }

    /**
     *1 是第一个，2是第二个框
     * @param type
     */
    selectPhoto(type) {
        this.setState({
            uploadType: type,
            isShowSelectPhoto: true,
        });
    }

    takerPhotoOrSelect(type) {
        this.setState({
            isShowSelectPhoto: false,
        });
        if (type!=0) {
            let getPhoto = new GetPhotoFromPhone(this);
            if (type === 1) {
                getPhoto.takerPhoto();
            } else {
                getPhoto.selectPhoto();
            }
        }
    }

    /**
     * 拍照或者选择照片回调，返回链接对象
     * @param obj
     */
    photoResult(obj) {
        if (this.state.uploadType === 1) {
            this.setState({
                idCardTop: {uri: obj}
            });
            console.log('responseData',this.state.idCardTop);
        } else {
            this.setState({
                idCardBottom: {uri: obj}
            });
            console.log('responseData',this.state.idCardBottom);
        }

    }
    uploadSuccess(){
        this.props.navigation.state.params.callBack();
        this.props.navigation.navigate('PersonalInfo');
    }
    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'实名认证'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <View style={[styles.inputContainer, {marginTop: UtilScreen.getHeight(15)}]}>
                    <Text style={styles.inputTitle}>姓名:</Text>
                    <TextInput style={styles.textInput} underlineColorAndroid="transparent" onChangeText={this._onChangeName}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>手机号:</Text>
                    <TextInput style={[styles.textInput, {paddingLeft: UtilScreen.getWidth(110)}]} underlineColorAndroid="transparent" onChangeText={this._onChangeTel}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>身份证号:</Text>
                    <TextInput style={[styles.textInput, {paddingLeft: UtilScreen.getWidth(140)}]} underlineColorAndroid="transparent" onChangeText={this._onChangeIdCard}></TextInput>
                </View>
                <Text style={styles.takerPhotoTitle}>拍摄/上传您的身份证</Text>
                <ImageBackground style={styles.idCardContainer}
                                 source={Object.keys(this.state.idCardTop).length > 0 ? this.state.idCardTop : require('../res/images/bg.png')}
                                 resizeMode='stretch'
                >
                    <TouchableHighlight
                        style={{flex:1}}
                        underlayColor='#fff'
                        onPress={this.selectPhoto.bind(this, 1)}>
                        <View style={[styles.takerPhoto,{height: Object.keys(this.state.idCardTop).length > 0 ? 0 : '100%'}]}>
                            <Image
                                style={styles.photoImage}
                                source={require('../res/images/taker_photo.png')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.photoText}>请上传你的身份证正面</Text>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
                <ImageBackground style={styles.idCardContainer}
                                 source={Object.keys(this.state.idCardBottom).length > 0 ? this.state.idCardBottom : require('../res/images/bg.png')}
                                 resizeMode='stretch'
                >
                    <TouchableHighlight
                        style={{flex:1}}
                        underlayColor='#fff'
                        onPress={this.selectPhoto.bind(this, 2)}
                    >
                        <View
                            style={[styles.takerPhoto, {height: Object.keys(this.state.idCardBottom).length > 0 ? 0 : '100%'}]}>
                            <Image
                                style={styles.photoImage}
                                source={require('../res/images/taker_photo.png')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.photoText}>请上传你的身份证背面</Text>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: UtilScreen.getHeight(10)}}><Text
                    style={{color: 'red', fontSize: 14}}>*</Text><Text
                    style={{color: '#999999', fontSize: 14}}>个人私密信息不对外公开</Text></View>
                <Text style={styles.submitBt} onPress={()=>{
                    if(this.state.UserName===''){
                        alert('请输入你的姓名');
                        return false;
                    }else if(this.state.UserTel===''){
                        alert('请输入你的电话号码');
                        return false;
                    }else if(this.state.IdCard===''){
                        alert('请输入你的身份证号码');
                        return false;
                    }else if(this.state.idCardTop===''){
                        alert('请选择照片一');
                        return false;
                    }else if(this.state.idCardBottom===''){
                        alert('请选择照片二');
                        return false;
                    }else{
                        let imgArr = new Array(this.state.idCardTop.uri,this.state.idCardBottom.uri);
                        let idCardTop = {uri: this.state.idCardTop.uri, type:'multipart/form-data', name: 'a.jpg'};
                        let idCardBottom = {uri: this.state.idCardBottom.uri,type:'multipart/form-data', name: 'b.jpg'};
                        let formData = new FormData();
                        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/Realnameauthentication');
                        let params=md5.hex_md5(param);
                        formData.append('app_key',params);
                        formData.append("usercode",idCardTop);
                        formData.append("usercodeback",idCardBottom);
                        formData.append("name",this.state.UserName);
                        formData.append("code",this.state.IdCard);
                        formData.append("tel",this.state.UserTel);
                        AsyncStorage.getItem('uid', (error, result) => {
                            if (!error) {
                                if (result !== '' && result !== null) {
                                    formData.append("uid", result);
                                    fetch(global.commons.baseurl+'action/ac_user/Realnameauthentication',{
                                        method:'POST',
                                        headers:{
                                            'Content-Type':'multipart/form-data',
                                        },
                                        body:formData,
                                    })
                                        .then((response) => response.text() )
                                        .then((responseData)=>{
                                            var bf = new Buffer(responseData , 'base64')
                                            var  str= bf.toString();
                                            let result=JSON.parse(str);
                                            if (result.code===200){
                                                this.setState({
                                                    isShowSuccess:true,
                                                });
                                            }
                                            console.log('responseData',result);
                                        })
                                        .catch((error)=>{console.error('error',error)});
                                } else {
                                    this.login();
                                }
                            } else {
                                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
                            }
                        })
                    }
                    /* this.setState({
                         isShowSuccess:true,
                     });*/

                }}>提交</Text>
                <SelectYesOrNo yesOrNo={this.takerPhotoOrSelect.bind(this)} isShow={this.state.isShowSelectPhoto}
                               topTitle={'拍照'} bottomTitle={'从相册中选择'}/>
                <UploadSuccess isShow={this.state.isShowSuccess} callBack={this.uploadSuccess.bind(this)} title='提交成功'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    inputTitle: {
        color: '#333333',
        fontSize: 15,
        position: 'absolute',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    inputContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        height: UtilScreen.getHeight(70),
    },
    textInput: {
        paddingBottom: 0,
        color: '#333333',
        fontSize: 14,
        paddingLeft: UtilScreen.getWidth(80),
        width: UtilScreen.getWidth(640),
        height: UtilScreen.getHeight(70),
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 1,
    },
    takerPhotoTitle: {
        marginTop: UtilScreen.getHeight(15),
        color: '#626262',
        fontSize: 16,
        alignSelf: 'center',
    },
    idCardContainer: {
        marginTop: UtilScreen.getHeight(15),
        width: UtilScreen.getWidth(606),
        height: UtilScreen.getHeight(353),
        alignSelf: 'center',
        borderRadius: 5,
        elevation: 4,
        overflow: 'hidden'
    },
    submitBt: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: UtilScreen.getHeight(100),
        width: '100%',
        height: UtilScreen.getHeight(100),
        backgroundColor: '#ff9d00',
    },
    takerPhoto: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    photoImage: {
        width: UtilScreen.getWidth(180),
        height: UtilScreen.getWidth(180),
    },
    photoText: {
        color: '#666666',
        fontSize: 16,
        marginTop: UtilScreen.getHeight(20),
    }
});