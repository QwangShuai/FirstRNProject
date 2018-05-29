import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import ApplyInfoItem from '../components/ApplyInfoItem';
export default class Apply extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this.state = {
            itemInfo: [
                {key:0,lTitle:'活动标题:',rHint:'上海7日行',},
                {key:1,lTitle:'出发时间:',rHint:'2018-05-28',},
                {key:2,lTitle:`费        用:`,rHint:'￥888.00',},
                {key: 3, lTitle:`姓        名:`, rHint: '请输入姓名',},
                {key: 4, lTitle: '联系方式:', rHint: '请输入手机号',},
                {key: 5, lTitle:`性        别:`, rHint: '请输入性别',},
                {key: 6, lTitle:`年        龄:`, rHint: '请输入年龄',},
                {key: 7, lTitle: '婚姻状况:', rHint: '请输入婚姻状况',},
            ],
        }
    }
    backClick(){

    }
    render(){
        return(
            <View style={styles.container}>
                <ToolBar title={'报名'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <ApplyInfoItem itemInfo={item}/></TouchableHighlight>
                                <View style={styles.line}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                <View style={styles.payView}>
                    <Text style={styles.leftText}>支付方式:</Text>
                    <View style={styles.selectView}>
                        <Image style={styles.payImage} source={require('../res/images/apply_wechat.png')}/>
                        <Text style={styles.payText}>微信支付</Text>
                        <Image style={styles.selectImage} source={require('../res/images/apply_true.png')}/>
                    </View>
                    <View style={styles.selectView}>
                        <Image style={styles.payImage} source={require('../res/images/apply_alipay.png')}/>
                        <Text style={styles.payText}>支付宝</Text>
                        <Image style={styles.selectImage} source={require('../res/images/apply_false.png')}/>
                    </View>
                </View>
                <View style={styles.paymentView}>
                    <Text style={styles.paymentText}>支付</Text>
                </View>

            </View>
        );
    };
}
const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
        },
        lightitem: {
            backgroundColor: '#fff'
        },
        line: {
            width: '100%',
            height: UtilScreen.getHeight(15),
            backgroundColor: '#f8f8f8',
        },
        paymentView:{
            width:UtilScreen.getWidth(700),
            marginLeft:UtilScreen.getWidth(24),
            marginRight:UtilScreen.getWidth(24),
            height:UtilScreen.getHeight(88),
            position:'absolute',
            bottom:UtilScreen.getHeight(40),
            backgroundColor:'#ff9d00',
            borderRadius:UtilScreen.getWidth(12),
            justifyContent:'center',
            alignItems:'center',
        },
        paymentText:{
            alignSelf:'center',
            color:'#ffffff',
            fontSize:18,
        },
        payView:{
            position:'absolute',
            bottom:UtilScreen.getHeight(200),
          height:UtilScreen.getHeight(242),
          flexDirection:'column',
        },
        payImage:{
            alignSelf:'center',
            width:UtilScreen.getWidth(38),
            marginLeft:UtilScreen.getWidth(40),

        },
        payText:{
            lineHeight:UtilScreen.getHeight(88),
            marginLeft:UtilScreen.getWidth(10),
            fontSize:14,
            color:'#333333',
        },
        selectImage:{
            position:'absolute',
            right:UtilScreen.getWidth(46),
        },
        selectView:{
            flex:1,
          flexDirection:'row',
            height:UtilScreen.getHeight(76),
        },
        leftText: {
            alignSelf:'center',
            color: '#333',
            fontSize: 14,
            width:UtilScreen.getWidth(140),
            marginLeft: UtilScreen.getWidth(38),
            textAlign:'justify',
        },
    });