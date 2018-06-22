import React, {Component} from 'react';
import {View,StyleSheet,Text,Image,TouchableHighlight} from 'react-native';
import UtilScreen from "../util/UtilScreen";

export default class MyPageMenu extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={{width:'100%',height:UtilScreen.getHeight(105),backgroundColor:'#fff'}}>
                    <Text style={{position:'absolute',fontSize:15,color:'#333',left:UtilScreen.getWidth(40),bottom:UtilScreen.getHeight(25)}}>我的订单</Text>
                    <Text style={{position:'absolute',fontSize:15,color:'#333',right:UtilScreen.getWidth(65),bottom:UtilScreen.getHeight(25)}} onPress={this.props.jump}>查看更多订单</Text>
                    <TouchableHighlight style={{position:'absolute',bottom:UtilScreen.getHeight(40),right:UtilScreen.getWidth(35)}} onPress={this.props.jump}>
                    <Image style={{alignSelf:'center',}}
                        source={require('../res/images/chevron-left2.png')}
                        resizeMode='contain'
                    />
                    </TouchableHighlight>
                </View>
                <View style={{width:'100%',height:1,backgroundColor:'#efeff4'}}/>
                <View style={{width:'100%',height:UtilScreen.getHeight(165),backgroundColor:'#fff',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                   <TouchableHighlight>
                    <View style={{alignItems:'center'}}>
                        <Image
                            style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                            source={require('../res/images/unpay.png')}
                            resizeMode='contain'
                        />
                        <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                            待支付
                        </Text>
                    </View>
                   </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/unfinished.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                未完成
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/finished.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                已完成
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/refund.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                退款
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{width:'100%',height:UtilScreen.getHeight(105),backgroundColor:'#fff'}}>
                    <Text style={{position:'absolute',fontSize:15,color:'#333',left:UtilScreen.getWidth(40),bottom:UtilScreen.getHeight(25)}}>我的友记</Text>
                </View>
                <View style={{width:'100%',height:1,backgroundColor:'#efeff4'}}/>
                <View style={{width:'100%',height:UtilScreen.getHeight(165),backgroundColor:'#fff',alignItems:'center',justifyContent:'space-around',flexDirection:'row'}}>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/draft.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                草稿
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/article.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                插文
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/report.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                发表
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight>
                        <View style={{alignItems:'center'}}>
                            <Image
                                style={{width:UtilScreen.getWidth(50),height:UtilScreen.getHeight(50)}}
                                source={require('../res/images/youji.png')}
                                resizeMode='contain'
                            />
                            <Text style={{color:'#333',fontSize:14,marginTop:UtilScreen.getHeight(15)}}>
                                友记
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{width:'100%',height:UtilScreen.getHeight(10),backgroundColor:'#efeff4'}}/>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        width:'100%',
    }
})