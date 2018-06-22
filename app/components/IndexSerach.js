import React, {Component} from 'react';
import {View, Image, Text, TouchableHighlight} from 'react-native';
import UtilScreen from "../util/UtilScreen";

export default class IndexSerach extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{
                width: '100%',
                height: UtilScreen.getHeight(115),
                backgroundColor: '#fff',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image
                    style={{marginLeft: UtilScreen.getWidth(20)}}
                    source={require('../res/images/index_location.png')}
                />
                <Text style={{marginLeft: UtilScreen.getWidth(10), color: '#333', fontSize: 15}} onPress={this.props.jumpToSelectCity}>哈尔滨</Text>
                <TouchableHighlight onPress={this.props.backClick}>
                    <View style={{
                        marginLeft: UtilScreen.getWidth(10),
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        width: UtilScreen.getWidth(470),
                        height: UtilScreen.getHeight(65),
                        borderWidth: 2,
                        borderColor: '#FF9D00',
                        borderRadius: 5
                    }}>
                        <Image
                            source={require('../res/images/serach_lead.png')}
                        />
                        <Text style={{
                            color: '#888888',
                            fontSize: 12,
                            marginLeft: UtilScreen.getWidth(10)
                        }}>搜索目的地/景点/酒店等</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.jumpToMessage}>
                    <Image
                        style={{marginLeft: UtilScreen.getWidth(40)}}
                        source={require('../res/images/index_message.png')}
                    />
                </TouchableHighlight>
            </View>
        );
    }
}