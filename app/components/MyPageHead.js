import React, {Component} from 'react';
import {Text, StyleSheet, ImageBackground, Image, TouchableHighlight, View} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class MyPageHead extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogin:true,
        };
    }

    render() {
        return (
            <ImageBackground style={styles.container}
                             source={require('../res/images/head_background.png')}
                             resizeMode='stretch'
            >
                <TouchableHighlight
                    style={styles.head_image}
                    onPress={this.props.clickCallBack}
                >
                    <Image
                        style={styles.head_image}
                        source={Object.keys(this.props.imageSource).length > 0 ? this.props.imageSource : require('../res/images/head_image.png')}
                        resizeMode='stretch'
                    />
                </TouchableHighlight>
                <View style={{marginLeft: UtilScreen.getWidth(35)}}>
                    <Text style={{color: '#333', fontSize: 15, fontWeight: '800', height: this.state.isLogin?0:UtilScreen.getHeight(50)}}>未登录</Text>
                    <View style={{height:this.state.isLogin?UtilScreen.getHeight(245):0,overflow:'hidden',justifyContent:'center'}}>
                        <View style={{flexDirection: 'row',overflow:'hidden'}}>
                            <Text style={{fontSize: 14, color: '#333'}}>昵称：爱吃土豆的西瓜</Text>
                            <Image
                                style={{marginLeft: UtilScreen.getWidth(70),width:UtilScreen.getWidth(50),height:this.state.isLogin?UtilScreen.getWidth(50):0}}
                                source={require('../res/images/nan.png')}
                                resizeMode='stretch'
                            />
                        </View>
                        <Text style={[styles.user_type,{height:this.state.isLogin?UtilScreen.getHeight(55):0}]}>签约艺人</Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: UtilScreen.getHeight(245),
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row'
    },
    head_title: {
        fontSize: 15,
        fontWeight: '800',
        color: '#000',
        marginLeft: UtilScreen.getWidth(40),
    },
    user_type: {
        fontSize: 14,
        marginTop:UtilScreen.getHeight(10),
        color: '#fff',
        textAlign:'center',
        backgroundColor: '#1ba297',
        alignSelf:'flex-start',
        borderRadius:5,
        paddingLeft:UtilScreen.getWidth(5),
        paddingRight:UtilScreen.getWidth(5),
    }

});