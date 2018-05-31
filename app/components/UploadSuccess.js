import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text, TouchableHighlight, Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class UploadSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: props.isShow,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isShow: nextProps.isShow,
        });
    }


    /**
     * 0回调不需要更新数据1需要更新数据
     * @param type
     */
    btClick() {
        this.props.callBack && this.props.callBack();
        this.setState({
            isShow: false,
        });
    }

    render() {
        return (
            <Modal style={styles.container}
                   animationType={"slide"}
                   transparent={true}
                   visible={this.state.isShow}
                   onRequestClose={this.btClick.bind(this)}
            >
                <View style={styles.mark}>
                    <View style={styles.content}>
                        <Image
                            style={styles.image}
                            resizeMode='stretch'
                            source={require('../res/images/apply_pay_true.png')}
                        />
                        <Text style={styles.text} onPress={this.btClick.bind(this)}>提交成功</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mark: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: UtilScreen.getWidth(606),
        height: UtilScreen.getHeight(400),
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        width:UtilScreen.getWidth(143),
        height:UtilScreen.getWidth(143),
    },
    text:{
        marginTop:UtilScreen.getHeight(60),
        width:UtilScreen.getWidth(262),
        height:UtilScreen.getHeight(59),
        backgroundColor:'#ff9d00',
        lineHeight:UtilScreen.getHeight(59),
        textAlign:'center',
        borderRadius:5,
        color:'#fff',
        fontSize:15,
    }
});