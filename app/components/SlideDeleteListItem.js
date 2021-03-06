import React, {Component, Date} from 'react';
import {View, StyleSheet, TouchableHighlight, PanResponder, Text, Animated} from 'react-native';
import UtilScreen from "../util/UtilScreen";
import moment from 'moment';
//···
export default class SlideDeleteListItem extends View {

    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            deleteWidth: 0,
        }
        this.startLeft = 0;
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: this._handleMoveShouldSetPanResponderCapture.bind(this),
            //onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
            // onMoveShouldSetResponderCapture: () => false,
            //  onStartShouldSetPanResponder: this._handleMoveShouldSetPanResponderCapture.bind(this),
            // onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gs) => {

            },
            onPanResponderMove: (evt, gs) => {
                let left = this.startLeft + gs.dx;
                if (left >= -UtilScreen.getWidth(150) && left <= 0) {
                    if (gs.dx < 0 && (left < -UtilScreen.getWidth(130) && left >= -UtilScreen.getWidth(150))) {
                        left = -UtilScreen.getWidth(150);
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
                    });
                }
            },
            onPanResponderRelease: (evt, gs) => {
                if (this.state.left >= -UtilScreen.getWidth(75) && this.state.left <= 0) {
                    this.setState({
                        left: 0,
                        deleteWidth: 0,
                    });
                    this.startLeft = 0;
                } else if (this.state.left <= -UtilScreen.getWidth(75)) {
                    this.setState({
                        left: -UtilScreen.getWidth(150),
                        deleteWidth: UtilScreen.getWidth(150),
                    });
                    this.startLeft = -UtilScreen.getWidth(150);
                }
            }
        })
    }


    _handleMoveShouldSetPanResponderCapture(event: Object, gestureState: Object,) {
        return Math.abs(gestureState.dy) < Math.abs(5) && Math.abs(gestureState.dx) > Math.abs(5);
    }


    render() {
        return (
            <View style={{height:UtilScreen.getHeight(this.props.myHeight)}}>
                <View style={styles.right}>
                    <TouchableHighlight
                        onPress={() => {
                            this.setState({
                                left: 0,
                            });
                            this.props.editCallBack.call(this, this.props.position)
                        }}
                        style={[styles.edit, {width: this.state.editWidth}]}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            height: UtilScreen.getHeight(50),
                            lineHeight: UtilScreen.getHeight(50)
                        }}>编辑</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => {
                            this.setState({
                                left: 0,
                            });
                            this.props.deleteCallBack.call(this, this.props.position)
                        }}
                        style={[styles.delete, {width: this.state.deleteWidth}]}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 15,
                            height: UtilScreen.getHeight(50),
                            lineHeight: UtilScreen.getHeight(50)
                        }}>删除</Text>
                    </TouchableHighlight>
                </View>

                <View style={[styles.container, {
                    transform: [
                        {translateX: this.state.left}
                    ]
                }]}>
                    <View {...this._panResponder.panHandlers}>
                        {this.props.children}
                    </View>

                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        height: UtilScreen.getHeight(260),
        flexDirection: 'row',
        width: UtilScreen.getWidth(750),
    },
    right: {
        height: '100%',
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
    },
    edit: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#F71F1F',
    },
    delete: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#CACACA',
    }


});