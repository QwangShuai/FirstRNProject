'use strict';
import React, {Component} from 'react';
import {
    Alert,
    View,
    Text,
    TextInput,
    StyleSheet,
    Platform,
    NavigatorIOS,
    TouchableOpacity,
    StatusBar,
}from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ToolBar from '../components/ToolBar';

export default  class Header extends Component {
    _onBackBtn(e) {
        this.props.nav.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.cellfixed]}>
                    <TouchableOpacity onPress={e=>this._onBackBtn(e)}>
                        <FontAwesomeIcon name="chevron-left" color="#ffffff" size={20}/>
                    </TouchableOpacity>
                </View>
                {/*<ToolBar title={'哈尔滨'} isShowBack={true} backClick={e=>this._onBackBtn(e)}/>*/}
                <View style={styles.cell}>
                    <Text style={[styles.title]}>{this.props.title}</Text>
                </View>
                <View style={[styles.cellfixed]}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ff9d00',
        paddingTop: Platform.OS === 'ios' ? 20 : 0,  // 处理iOS状态栏
        height: Platform.OS === 'ios' ? 50 : 35,   // 处理iOS状态栏
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    },
    cell: {
        flex: 1,
        marginTop: 5,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        marginLeft: 5,
        marginRight: 5,
        color: '#ffffff',
    },
    cellfixed: {
        marginTop: 5,
        width: 80,
    },
});