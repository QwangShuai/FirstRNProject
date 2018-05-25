import React, {Component} from 'react';
import {AppRegistry, View, StyleSheet, ImageBackground, Image, Text, TouchableHighlight} from 'react-native';
import UtilScree from '../util/UtilScreen';

export default class ToolBar extends Component {
    static defaultProps = {
        title: '标题',
        router: 'no0',
    }

    constructor(props) {
        super(props);
        this.state = {
            backW: 0,
            backH: 0,
        };
    }


    componentWillMount() {
        if (this.props.router === 'no') {
            this.setState({
                backW: 0,
                backH: 0,
            });
        } else {
            this.setState({
                backW: UtilScree.getWidth(80),
                backH: UtilScree.getHeight(80),
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.backClick && this.props.backClick.bind(this)}
                                    underlayColor={'#333333'}
                                    style={[styles.back, {height: this.state.backH, width: this.state.backW}]}>
                    <Image source={require('../../asstes/chevron-left.png')}
                    ></Image>
                </TouchableHighlight>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: UtilScree.getHeight(140),
        backgroundColor: '#000'
    },
    back: {
        position: 'absolute',
        left: 0,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:UtilScree.getWidth(80),
    },
    text: {
        fontSize: 16,
        color: '#fff',
    },
});
// AppRegistry.registerComponent('FirstRNProject', () => ToolBar);