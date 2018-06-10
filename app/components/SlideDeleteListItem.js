import React, {Component, Date} from 'react';
import {View, StyleSheet, TouchableHighlight, PanResponder, Text} from 'react-native';
import UtilScreen from "../util/UtilScreen";
import moment from 'moment';
//···
export default class SlideDeleteListItem extends View {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            editWidth: 0,
            deleteWidth: 0,
        }
        this.startLeft = 0;
        this.firstApplyFn=true;
        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponderCapture: this._handleMoveShouldSetPanResponderCapture.bind(this),
            onPanResponderTerminate: this._handlePanResponderEnd.bind(this),
            // onMoveShouldSetResponderCapture: () => false,
           //  onStartShouldSetPanResponder: this._handleMoveShouldSetPanResponderCapture.bind(this),
            // onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gs) => {

            },
            onPanResponderMove: (evt, gs) => {
                let dTime = moment().valueOf() - this.startTouchTime;
                if (dTime > 200 && dTime < 300 && this.onlyTouch && (gs.dx > -UtilScreen.getWidth(5) && gs.dx < UtilScreen.getWidth(5))) {
                    this.onlyTouch = false;
                    alert('09')
                }else{
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
                }}
            },
            onPanResponderRelease: (evt, gs) => {
                console.log('onPanResponderRelease');
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
    _handlePanResponderEnd(event: Object, gestureState: Object) {
        console.log('_handlePanResponderEnd');
    }
    _handleMoveShouldSetPanResponderCapture(event: Object, gestureState: Object,) {
        console.log('_handleMoveShouldSetPanResponderCapture');
        if(this.firstApplyFn){
            this.firstApplyFn=false;
            this.startTouchTime = moment().valueOf();

        }
        this.onlyLongPress = true;
        let dTime = moment().valueOf() - this.startTouchTime;
        console.log('dTime:'+dTime);
        if (dTime > 200 && dTime < 600 && this.onlyLongPress && gestureState.dy < -UtilScreen.getWidth(10) && gestureState.dx < UtilScreen.getWidth(10)) {
            this.onlyLongPress = false;
            this.firstApplyFn=true;
            alert('09')
        }
        return Math.abs(gestureState.dy) < Math.abs(5) && Math.abs(gestureState.dx) > Math.abs(5);
    }


    render() {
        return (
            <View>
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
                        onPress={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            alert('deleteww')
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

                <View style={[styles.container, {left: this.state.left}]}>
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
        height: UtilScreen.getHeight(200),
        flexDirection: 'row',
        width: UtilScreen.getWidth(750),
    },
    right: {
        height:'100%',
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