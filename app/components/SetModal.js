import React, {Component} from 'react';
import {View, StyleSheet, Modal, Text,Image} from 'react-native';
import UtilScreen from '../util/UtilScreen';

export default class SetModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true,
        }
    }

    setModalVisible() {
        this.setState({modalVisible: false});
    }

    render(){
        return(
            <Modal style={styles.container}>
                <Text style={styles.titleText}>确定要清楚缓存吗？</Text>
                <View style={styles.btnView}>
                    <Text style={styles.cancelText}>取消</Text>
                    <Text style={styles.sureText}>确认</Text>
                    <Text style={styles.dividerText}>|</Text>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      width:UtilScreen.getWidth(460),
        height:UtilScreen.getHeight(350),
        borderRadius:UtilScreen.getWidth(10),
        flexDirection:'row',
    },
    titleText:{
        marginTop:UtilScreen.getHeight(123),
        fontSize:15,
        alignSelf:'center',
        color:'#333333',
    },
    btnView:{
        alignItems:'center',
        flexDirection:'row',
        height:UtilScreen.getHeight(60),
      marginTop:UtilScreen.getHeight(114),
        borderTopColor:'#e5e5e5',
        width:'100%',
        borderTopWidth:UtilScreen.getHeight(1),
        justifyContent:'center',
    },
    sureText:{
        marginTop:UtilScreen.getHeight(11),
        lineHeight:UtilScreen.getHeight(60),
        position:'absolute',
        right:UtilScreen.getWidth(81),
        fontSize:15,
        color:'#333333',
        alignSelf:'center',
    },
    cancelText:{
        marginTop:UtilScreen.getHeight(11),
        lineHeight:UtilScreen.getHeight(60),
        position:'absolute',
        left:UtilScreen.getWidth(81),
        fontSize:15,
        color:'#333333',
        alignSelf:'center',
    },
    dividerText:{
      fontSize:28,
        color:'#979797',
    },
})