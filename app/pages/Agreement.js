import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';

const Stylecss = require('../common/Stylecss');


export default class Agreement extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    backClick(){
        this.props.navigation.navigate('Set');
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'用户协议'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.agreementText}>友来友约用户协议</Text>
                <Text style={styles.infoText}>友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议友来有约用户协议</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    agreementText:{
        fontSize:16,
        width:'100%',
        color:'#333333',
        textAlign:'center',
        alignSelf:'center',
    },
    infoText:{
        fontSize:16,
        width:UtilScreen.getWidth(632),
        height:UtilScreen.getHeight(1042),
        marginLeft:UtilScreen.getWidth(60),
        marginTop:UtilScreen.getHeight(40),
        color:'#333333',
    }
})