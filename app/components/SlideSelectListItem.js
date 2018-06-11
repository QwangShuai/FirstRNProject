import React, {Component, Date} from 'react';
import {View, StyleSheet, TouchableHighlight, PanResponder, Text, Animated, CheckBox} from 'react-native';
import UtilScreen from "../util/UtilScreen";
import moment from 'moment';
//···
export default class SlideSelectListItem extends View {
    static defaultProps = {
        showSelect: false,
    }
    constructor(props) {
        super(props);
        this.state = {
            left: props.showSelect?UtilScreen.getWidth(120):0,
            isChecked: false,
        }

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            left:nextProps.showSelect?UtilScreen.getWidth(120):0,
        });
    }
    render() {
        return (
            <View>
                <View style={styles.left}>
                    <CheckBox value={this.state.isChecked}
                              onValueChange={(check) => {
                                  this.setState({
                                      isChecked:check,
                                  });
                              }}
                    />
                </View>

                <View style={[styles.container, {
                    transform: [
                        {translateX: this.state.left}
                    ]
                }]}>
                    <View>
                        {this.props.children}
                    </View>

                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        height: UtilScreen.getHeight(100),
        flexDirection: 'row',
        width: UtilScreen.getWidth(750),
    },
    left: {
        height: '100%',
        width: UtilScreen.getWidth(120),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: '#fff',
        left: 0,
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