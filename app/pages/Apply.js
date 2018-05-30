import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight,Modal} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import ApplyInfoItem from '../components/ApplyInfoItem';
const Stylecss = require('../common/Stylecss');
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
            modalVisible: true,
        }
    }
    backClick(){

    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <ApplyInfoItem itemInfo={item}/></TouchableHighlight>
                                <View style={Stylecss.styles.line}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                <View style={Stylecss.styles.payView}>
                    <Text style={Stylecss.styles.leftText}>支付方式:</Text>
                    <View style={Stylecss.styles.selectView}>
                        <Image style={Stylecss.styles.payImage} source={require('../res/images/apply_wechat.png')}/>
                        <Text style={Stylecss.styles.payText}>微信支付</Text>
                        <Image style={Stylecss.styles.selectImage} source={require('../res/images/apply_true.png')}/>
                    </View>
                    <View style={Stylecss.styles.selectView}>
                        <Image style={Stylecss.styles.payImage} source={require('../res/images/apply_alipay.png')}/>
                        <Text style={Stylecss.styles.payText}>支付宝</Text>
                        <Image style={Stylecss.styles.selectImage} source={require('../res/images/apply_true.png')}/>
                    </View>
                </View>
                <View style={Stylecss.styles.paymentView}>
                    <Text style={Stylecss.styles.paymentText}>支付</Text>
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
    });