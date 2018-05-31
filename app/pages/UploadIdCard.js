import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import SelectYesOrNo from '../components/SelectYesOrNo';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';

export default class UploadIdCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 1,
            isShowSelectPhoto: false,
            idCardTop: {},
            idCardBottom: {},
            uploadType: 1,
        }
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
                idCardTop: obj
            });
        } else {
            this.setState({
                idCardBottom: obj
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'实名认证'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <View style={[styles.inputContainer, {marginTop: UtilScreen.getHeight(15)}]}>
                    <Text style={styles.inputTitle}>姓名:</Text>
                    <TextInput style={styles.textInput}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>手机号:</Text>
                    <TextInput style={[styles.textInput, {paddingLeft: UtilScreen.getWidth(110)}]}></TextInput>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputTitle}>身份证号:</Text>
                    <TextInput style={[styles.textInput, {paddingLeft: UtilScreen.getWidth(140)}]}></TextInput>
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
                            <Text style={styles.photoText}>拍摄信息页</Text>
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
                            <Text style={styles.photoText}>拍摄信息页</Text>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
                <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: UtilScreen.getHeight(10)}}><Text
                    style={{color: 'red', fontSize: 14}}>*</Text><Text
                    style={{color: '#999999', fontSize: 14}}>个人私密信息不对外公开</Text></View>
                <Text style={styles.submitBt}>提交</Text>
                <SelectYesOrNo yesOrNo={this.takerPhotoOrSelect.bind(this)} isShow={this.state.isShowSelectPhoto}
                               topTitle={'拍照'} bottomTitle={'从相册中选择'}/>
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