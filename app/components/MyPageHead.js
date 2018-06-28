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
                    style={[styles.head_image,{marginLeft:UtilScreen.getWidth(15)}]}
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
                            <Text style={{fontSize: 14, color: '#333'}}>{this.props.itemInfo.nickname}</Text>
                            <Image
                                style={{marginLeft: UtilScreen.getWidth(70),width:UtilScreen.getWidth(50),height:this.state.isLogin?UtilScreen.getWidth(50):0}}
                                source={require('../res/images/nan.png')}
                                resizeMode='stretch'
                            />
                        </View>
                        <ImageBackground style={[styles.levelImage,{width:this.state.isLogin?UtilScreen.getWidth(179):0}]} source={this.props.itemInfo.imageLevel}>
                            <Text style={[styles.user_type,{height:this.state.isLogin?UtilScreen.getHeight(55):0}]}>{this.props.itemInfo.textLevel}</Text>
                        </ImageBackground>

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
        color: '#fff',
        textAlign:'right',
        width: UtilScreen.getWidth(170),
        lineHeight:UtilScreen.getHeight(60)
    },
    levelImage:{
        marginTop: UtilScreen.getHeight(14),
        width: UtilScreen.getWidth(179),
        height: UtilScreen.getHeight(66),
        alignItems: 'center',
        justifyContent: 'center',
    },
    head_image: {
        width: UtilScreen.getWidth(120),
        height: UtilScreen.getWidth(120),
        borderRadius: UtilScreen.getWidth(120),
        overflow: 'hidden'
    }
});