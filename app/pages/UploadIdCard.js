import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Text, ImageBackground, Image, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';

export default class UploadIdCard extends Component {
    constructor(props) {
        super(props);

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
                <ImageBackground style={styles.idCardContainer}>
                    <TouchableHighlight
                        underlayColor='#fff'
                        onPress={() => {}}>
                        <View style={styles.takerPhoto}>
                            <Image
                                style={styles.photoImage}
                                source={require('../res/images/taker_photo.png')}
                                resizeMode='stretch'
                            />
                            <Text style={styles.photoText}>拍摄信息页</Text>
                        </View>
                    </TouchableHighlight>
                </ImageBackground>
                <ImageBackground style={styles.idCardContainer}>
                    <TouchableHighlight
                        underlayColor='#fff'
                        onPress={() => {}}
                    >
                        <View style={styles.takerPhoto}>
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
        elevation: 2,
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
        marginTop:UtilScreen.getHeight(20),
    }
});