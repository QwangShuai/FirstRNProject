import React, { Component } from 'react';
import { AppRegistry ,View,Text,StyleSheet,TextInput,FlatList,TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import FeedbackItem from '../components/FeedbackItem';
const Stylecss = require('../common/Stylecss');
export default class Feedback extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {key: 0, tText: '我的建议是开局5神兽:', bText: '好，乌龟，王八，蛋',},
            ]
        }
    }

    backClick(){
        this.props.navigation.navigate('Set');
    };

    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'意见反馈'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.feedbackText}>意见反馈</Text>
                <View style={styles.infoView}>
                    <TextInput style={styles.infoText} placeholder='请填写你的建议，感谢你的支持' underlineColorAndroid='transparent'
                               multiline={true}/>
                    <Text style={styles.submitText}>提交</Text>
                </View>
                <View style={styles.dividerView}/>
                <Text style={styles.feedbackText}>历史意见</Text>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <FeedbackItem itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
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
    infoView:{
        backgroundColor:'#ffffff',
        width:'100%',
        height: UtilScreen.getHeight(180),
        padding:UtilScreen.getWidth(22),
        // paddingTop:UtilScreen.getWidth(20),
    },
    infoText:{
        textAlignVertical:'top',
        fontSize:13,
        width:'100%',
        height: UtilScreen.getHeight(180),
    },
    submitText:{
        position:'absolute',
        bottom:UtilScreen.getHeight(20),
        right:UtilScreen.getWidth(32),
        width:UtilScreen.getWidth(130),
        height:UtilScreen.getHeight(60),
        backgroundColor:'#ffd900',
        fontSize:13,
        textAlign:'center',
        alignSelf:'center',
        color:'#ffffff',
        borderRadius:UtilScreen.getWidth(10),
        lineHeight:UtilScreen.getHeight(60),
    },
    dividerView:{
      width:'100%',
      height:UtilScreen.getHeight(20),
      backgroundColor:'#f8f8f8',
    },
})