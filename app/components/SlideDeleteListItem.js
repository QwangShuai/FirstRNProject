import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, PanResponder, Text} from 'react-native';
import UtilScreen from "../util/UtilScreen";

export default class SlideDeleteListItem extends View {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            editWidth: 0,
            deleteWidth: 0,
        }
        this.startLeft = 0;

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gs) => {
            },
            onPanResponderMove: (evt, gs) => {
                let left = this.startLeft + gs.dx;
                if (left >= -UtilScreen.getWidth(300) && left <= 0) {
                    if (gs.dx < 0 && (left < -UtilScreen.getWidth(280) && left >= -UtilScreen.getWidth(300))) {
                        left = -UtilScreen.getWidth(300);
                    }
                    if (gs.dx > 0 && (left <= -UtilScreen.getWidth(0) && left >= -UtilScreen.getWidth(20))) {
                        left = 0;
                    }
                    this.setState({
                        left: left,
                    });
                }
                if (left >= -UtilScreen.getWidth(150) && left <= 0) {
                    this.setState({
                        deleteWidth: -left,
                        editWidth: 0,
                    });
                } else if (left >= -UtilScreen.getWidth(300)) {
                    this.setState({
                        editWidth: -left - UtilScreen.getWidth(150),
                        deleteWidth: UtilScreen.getWidth(150),
                    });
                }
            },
            onPanResponderRelease: (evt, gs) => {
                if (this.state.left >= -UtilScreen.getWidth(150) && this.state.left <= 0) {
                    this.setState({
                        left: 0,
                        editWidth: 0,
                        deleteWidth: 0,
                    });
                    this.startLeft = 0;
                } else if (this.state.left <= -UtilScreen.getWidth(150)) {
                    this.setState({
                        left: -UtilScreen.getWidth(300),
                        editWidth: UtilScreen.getWidth(150),
                        deleteWidth: UtilScreen.getWidth(150),
                    });
                    this.startLeft = -UtilScreen.getWidth(300);
                }
            }
        })
    }

    componentWillMount() {

    }


    render() {
        return (
            <View style={[styles.container, {left: this.state.left}]} {...this._panResponder.panHandlers}>
                {this.props.children}
                <View style={styles.right}>
                    <TouchableHighlight
                        onPress={this.props.editCallBack}
                        style={[styles.edit, {width: this.state.editWidth}]}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            height: UtilScreen.getHeight(50),
                            lineHeight: UtilScreen.getHeight(50)
                        }}>编辑</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.props.deleteCallBack.bind(this)}
                        style={[styles.delete, {width: this.state.deleteWidth}]}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            height: UtilScreen.getHeight(50),
                            lineHeight: UtilScreen.getHeight(50)
                        }}>删除</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        left: 0,
        position: 'absolute',
        flexDirection: 'row',
        width: UtilScreen.getWidth(750),
    },
    right: {
        flexDirection: 'row',
    },
    edit: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#F71F1F'
    },
    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#CACACA'
    }


});