import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class FriendPartyItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{paddingTop: this.props.index===0?0:UtilScreen.getHeight(30)}}>
                <Image
                    style={{width: '100%', height: UtilScreen.getHeight(375)}}
                    source={this.props.item.imageURL}
                    resizeMode='stretch'
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        width: UtilScreen.getWidth(560),
                        backgroundColor: '#fff',
                        height: UtilScreen.getHeight(320)
                    }}>
                        <Text style={{
                            color: '#333',
                            fontSize: 15,
                            fontWeight: '800',
                            marginTop: UtilScreen.getHeight(20),
                            marginLeft: UtilScreen.getWidth(20)
                        }}>{this.props.item.article.title}</Text>
                        <Text numberOfLines={4} style={{
                            color: '#333',
                            fontSize: 14,
                            marginTop: UtilScreen.getHeight(20),
                            marginLeft: UtilScreen.getWidth(20)
                        }}>{this.props.item.article.content}</Text>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: UtilScreen.getWidth(20),
                            flex: 1,
                            backgroundColor: '#fff',
                            alignItems: 'center'
                        }}>{
                            this.props.item.attentionUser.map((item, index) => {
                                //cover: 等比例放大; center:不变; contain:不变; stretch:填充;
                                if (index <= 7) {
                                    return (<Image
                                        style={{
                                            width: UtilScreen.getWidth(50),
                                            height: UtilScreen.getWidth(50),
                                            marginRight: UtilScreen.getWidth(10),
                                            borderRadius: UtilScreen.getWidth(25),
                                        }}
                                        key={index}
                                        resizeMode='stretch'
                                        source={item}/>);
                                }else if (index===8){
                                    return (<Text  key={index} style={{backgroundColor:'#fff',fontSize:18,color:'#333',height:UtilScreen.getHeight(50),lineHeight:UtilScreen.getHeight(50)}}>···</Text>);
                                }
                            })

                        }
                        </View>
                    </View>
                    <View style={{flex: 1, backgroundColor: '#fff', height: UtilScreen.getHeight(320)}}>
                        <Image
                            style={{
                                width: UtilScreen.getWidth(120),
                                height: UtilScreen.getWidth(120),
                                alignSelf: 'center',
                                marginTop: UtilScreen.getHeight(20),
                                borderRadius: UtilScreen.getWidth(60)
                            }}
                            source={this.props.item.userInfo.headImagePath}
                        />
                        <Text numberOfLines={1} style={{
                            marginLeft: UtilScreen.getWidth(10),
                            color: '#333',
                            fontSize: 12
                        }}>{this.props.item.userInfo.userName}</Text>
                        <Text style={{
                            marginTop: UtilScreen.getHeight(10),
                            borderRadius: 5,
                            alignSelf: 'center',
                            paddingRight: UtilScreen.getWidth(20),
                            paddingLeft: UtilScreen.getWidth(20),
                            color: '#fff',
                            fontSize: 14,
                            backgroundColor: '#ff9d00'
                        }}>{this.props.item.userInfo.userLevel}</Text>
                        <Text style={{
                            fontSize: 10,
                            color: '#333',
                            marginTop: UtilScreen.getHeight(30)
                        }}>参与人数：{this.props.item.joinNum + '/' + this.props.item.totalNum}</Text>
                    </View>
                </View>
                <View style={{width:'100%',height:UtilScreen.getHeight(110)}}>
                    <View style={{width:UtilScreen.getWidth(710),height:UtilScreen.getHeight(1),backgroundColor:'#efeff4',marginTop:UtilScreen.getHeight(30),alignSelf:'center'}}/>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                        <TouchableHighlight>
                        <View style={{flexDirection:'row'}}>
                            <Image
                                source={ require('../res/images/review_comments.png')}
                            />
                            <Text style={{color:'#333',marginLeft:UtilScreen.getWidth(10),fontSize:12}}>查看评论</Text>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={ require('../res/images/consult.png')}
                                />
                                <Text style={{color:'#333',marginLeft:UtilScreen.getWidth(10),fontSize:12}}>咨询领队</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight>
                            <View style={{flexDirection:'row'}}>
                                <Image
                                    source={ require('../res/images/attentioned.png')}
                                />
                                <Text style={{color:'#333',marginLeft:UtilScreen.getWidth(10),fontSize:12}}>关注活动</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: UtilScreen.getHeight(20),
                    backgroundColor: '#efeff4',
                }}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({});