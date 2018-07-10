import React, {Component} from 'react';

import {View, StyleSheet, Image, TextInput, Text, FlatList, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';

const Stylecss = require('../common/Stylecss');
export default class ActivityView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            num_columns:5,
            textLong:1,
            showText:'展开',
            showImage:require('../res/images/chevron-down.png'),
        }
    }

    static defaultProps = {
        number:10,
        itemInfo:
            [
                {
                    key:0,
                    userpic: require('../res/images/1.jpg'),
                    username: '帅气的小迷糊',
                    num: 2,
                },
             ],


    }
    switchState() {
        if (this.state.isShow) {
            this.setState({
                isShow:false,
                showText:'收起',
                showImage:require('../res/images/chevron-up.png'),
                }
            )
        } else {
            this.setState({
                    isShow:true,
                    showText:'展开',
                    showImage:require('../res/images/chevron-down.png'),
                }
            )
        }
    }

    setListView(){
        if(this.state.isShow){
            return(
                <View>
                <FlatList
                    numColumns={6}
                    style={{marginLeft:UtilScreen.getWidth(10)}}
                    data={this.props.itemInfo}
                    renderItem={
                        ({item,index}) => {
                            if(index<this.state.num_columns){
                                return (
                                    <View style={{height:UtilScreen.getHeight(140),marginTop:UtilScreen.getHeight(30),width:UtilScreen.getWidth(80),marginLeft:UtilScreen.getWidth(30)}}>
                                        <Image style={{height:UtilScreen.getHeight(80),width:UtilScreen.getHeight(80),borderRadius:UtilScreen.getHeight(80),}}
                                               source={{uri:item.userpic.toString()}} resizeMode='cover'></Image>
                                        <Text style={styles.nicknameStyle} numberOfLines={this.state.textLong}>{item.username}</Text>
                                        <Text style={[styles.rPice,{width:(item.num==1)?0:UtilScreen.getWidth(34)}]}>{item.num}</Text>
                                    </View>
                                )
                            } else if(index==this.state.num_columns){
                                return(
                                    <View style={{height:UtilScreen.getHeight(140),marginTop:UtilScreen.getHeight(30),width:UtilScreen.getWidth(80),marginLeft:UtilScreen.getWidth(30)}}>
                                        <Text style={styles.nicknameStyle} numberOfLines={this.state.textLong}>. . .</Text>
                                    </View>
                                )
                            }
                        }
                    }
                    // keyExtractor={item => item.ket.toString()}
                ></FlatList>
                </View>
            )
        } else {
            return(
                <View>
            <FlatList
                style={{marginLeft:UtilScreen.getWidth(10)}}
                 numColumns={6}
                data={this.props.itemInfo}
                renderItem={
                    ({item}) => {
                        return (
                            <View style={{height:UtilScreen.getHeight(140),marginTop:UtilScreen.getHeight(30),width:UtilScreen.getWidth(80),marginLeft:UtilScreen.getWidth(30)}}>
                                <Image style={{
                                    height: UtilScreen.getHeight(80),
                                    width: UtilScreen.getHeight(80),
                                    borderRadius: UtilScreen.getHeight(80),
                                    resizeMode: 'cover'
                                }}
                                       source={{uri:item.userpic.toString()}}></Image>
                                <Text style={styles.nicknameStyle} numberOfLines={this.state.textLong}>{item.username}</Text>
                                <Text style={[styles.rPice,{width:(item.num==1)?0:UtilScreen.getWidth(34)}]}>{item.num}</Text>
                            </View>
                        )
                    }
                }
                // keyExtractor={item => item.ket.toString()}
            ></FlatList>
                </View>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    marginRight: UtilScreen.getWidth(40),
                    marginTop: UtilScreen.getHeight(20),
                    marginLeft: UtilScreen.getWidth(40),
                    flexDirection: 'row',
                    height: UtilScreen.getHeight(45)
                }}>
                    <Text style={{
                        color: '#333333',
                        fontSize: 16,
                        lineHeight: UtilScreen.getHeight(45),
                        textAlign: 'center'
                    }}>参加人员（{this.props.number}/{this.props.maxNum}）</Text>
                    <TouchableHighlight
                        underlayColor='#ffffff'
                        onPress={this.switchState.bind(this)}
                        style={{
                        position: 'absolute',
                        right: 0,
                        width: UtilScreen.getWidth(100),
                        height: UtilScreen.getHeight(40)
                    }}>
                        <View style={{position: 'absolute', right: 0, flexDirection: 'row'}}>
                            <Text style={{alignSelf: 'center', color: '#333333', fontSize: 14}}>{this.state.showText}</Text>
                            <Image style={{
                                width: UtilScreen.getWidth(24),
                                height: UtilScreen.getHeight(14),
                                marginLeft: UtilScreen.getWidth(4),
                                alignSelf: 'center',
                                resizeMode: 'contain'
                            }} source={require('../res/images/chevron-down.png')}/>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    {this.setListView()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
    },
    nicknameStyle:{
        color: '#333333',
        height:UtilScreen.getHeight(40),
        fontSize: 14,
        overflow:'hidden',
        lineHeight: UtilScreen.getHeight(40),
        marginTop: UtilScreen.getHeight(20),
        alignSelf:'center'
    },
    rPice: {
        width: UtilScreen.getWidth(34),
        height: UtilScreen.getWidth(34),
        borderRadius: UtilScreen.getWidth(34),
        fontSize: 12,
        color: '#fff',
        backgroundColor: 'red',
        textAlign: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
    },
})