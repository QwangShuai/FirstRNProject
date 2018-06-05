import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ToolBar from '../components/ToolBar';


const Stylecss = require('../common/Stylecss');

export default class FocusOnActivities extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    backClick() {
        this.props.navigation.navigate('Set');
    }

    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'关注的活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
            </View>
        )
    }
}