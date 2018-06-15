import React, {Component} from 'react';
import {View, StyleSheet, Image,Text,TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';
export default class IndexPageItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{paddingTop:UtilScreen.getHeight(30)}}>
                <Image
                    style={{width: '100%',height:UtilScreen.getHeight(375)}}
                    source={this.props.item.imageURL}
                    resizeMode='stretch'
                />
                <View style={{flexDirection:'row'}}>
                    <View style={{width:UtilScreen.getWidth(560),backgroundColor:'#fff',height:UtilScreen.getHeight(200)}}>
                        <Text numberOfLines={4} style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(20),marginLeft:UtilScreen.getWidth(20)}}>{this.props.item.article.content}</Text>
                    </View>
                    <View style={{flex:1,backgroundColor:'#fff',height:UtilScreen.getHeight(200)}}>

                        <Image
                            style={{width:UtilScreen.getWidth(120),height:UtilScreen.getWidth(120),alignSelf:'center',marginTop:UtilScreen.getHeight(20),borderRadius:UtilScreen.getWidth(60)}}
                            source={this.props.item.userInfo.headImagePath}
                        />
                        <Text style={{marginTop:UtilScreen.getHeight(10),borderRadius:5,alignSelf:'center',paddingRight:UtilScreen.getWidth(20),paddingLeft:UtilScreen.getWidth(20),color:'#fff',fontSize:14,backgroundColor:'#ff9d00'}}>{this.props.item.userInfo.userLevel}</Text>
                    </View>
                </View>
                <View style={{width:'100%',height:UtilScreen.getHeight(2),backgroundColor:'#efeff4',marginTop:UtilScreen.getHeight(20)}}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({});