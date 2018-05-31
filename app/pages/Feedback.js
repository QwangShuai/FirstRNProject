import React, { Component } from 'react';
import { AppRegistry ,View,Text,StyleSheet,TextInput,FlatList} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class Feedback extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
    };
    backClick(){

    };

    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'意见反馈'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.feedbackText}>意见反馈</Text>
                <TextInput style={styles.infoText} placeholder='请填写你的建议，感谢你的支持' underlineColorAndroid='transparent'
                           multiline={true}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    feedbackText:{
      fontSize:18,
      marginTop:UtilScreen.getHeight(20),
        marginLeft:UtilScreen.getWidth(32),
        color:'#333333',
    },
    infoText:{
        padding:UtilScreen.getWidth(32),
        paddingTop:0,
        textAlignVertical:'top',
        fontSize:13,
        width:'100%',
        height: UtilScreen.getHeight(180),
    },
})