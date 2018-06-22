import React, {Component} from 'react';

import {View, StyleSheet, TextInput, Text} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class SearchItem extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        itemInfo: {
        },
    }
    render(){
        return(
            <View>
                <Text>历史记录</Text>
            </View>
        )
    }

}