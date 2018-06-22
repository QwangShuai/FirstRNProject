import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import ApplyInfoItem from '../components/ApplyInfoItem';
const Stylecss = require('../common/Stylecss');
import ApplyRealName from '../components/ApplyRealName';
import ApplyPaymentSuccess from '../components/ApplyPaymentSuccess';
import ApplyPaymentState from '../components/ApplyPaymentState';
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
            modalVisible: false,
            wxImage:require('../res/images/apply_true.png'),
            alipayImage:require('../res/images/apply_false.png'),
            isPay:true,
            isState:false,
            isFailure:false,
        }
    }
    backClick(){
        this.props.navigation.goBack();
    }
    setModalVisible() {
            this.setState({
                modalVisible:false,
                isState:false,
                isFailure:false,
            });
    }
    jumpToCard(){
        this.props.navigation.navigate('UploadIdCard');
        this.setState({modalVisible: false});
    }
    jumpToOrder(){
        this.props.navigation.navigate('Order');
        this.setState({isFailure: false});
    }
    wx_pay(){
        this.setState({
            wxImage:require('../res/images/apply_true.png'),
            alipayImage:require('../res/images/apply_false.png'),
            isPay:true
        });
    }
    alipay_pay(){
        this.setState({
            wxImage:require('../res/images/apply_false.png'),
            alipayImage:require('../res/images/apply_true.png'),
            isPay:false
        });
    }
    myPay(){
        this.setState({isFailure: true});
        if(this.state.isPay){//微信支付

        } else {//支付宝支付

        }
    }
    render(){
        return(
            <View style={styles.container}>
                <ToolBar title={'报名'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    style={{flex:1}}
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
                    <View style={{height:UtilScreen.getHeight(2),width:UtilScreen.getWidth(670),backgroundColor:'#e5e5e5',marginTop:UtilScreen.getHeight(24),
                                                    marginLeft:UtilScreen.getWidth(38),marginRight:UtilScreen.getWidth(40),}} />
                    <View style={Stylecss.styles.selectView}>
                        <Image style={Stylecss.styles.payImage} source={require('../res/images/apply_wechat.png')}/>
                        <Text style={Stylecss.styles.payText}>微信支付</Text>
                        <TouchableHighlight style={Stylecss.styles.selectImage} onPress={this.wx_pay.bind(this)}>
                            <Image style={{width:UtilScreen.getWidth(30),}} source={this.state.wxImage} resizeMode='contain'/>
                        </TouchableHighlight>
                    </View>
                    <View style={Stylecss.styles.selectView}>
                        <Image style={Stylecss.styles.payImage} source={require('../res/images/apply_alipay.png')}/>
                        <Text style={Stylecss.styles.payText}>支付宝</Text>
                        <TouchableHighlight style={Stylecss.styles.selectImage} onPress={this.alipay_pay.bind(this)} >
                            <Image style={{width:UtilScreen.getWidth(30),}} source={this.state.alipayImage} resizeMode='contain'/>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:UtilScreen.getHeight(12),width:'100%',backgroundColor:'#f8f8f8',}} />
                </View>
                <View style={Stylecss.styles.paymentView}>
                    <Text style={Stylecss.styles.paymentText} onPress={this.myPay.bind(this)}>支付</Text>
                </View>
                {/*<ApplyRealName modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible.bind(this)} jump={this.jumpToCard.bind(this)} />*/}
                {/*<ApplyPaymentSuccess modalVisible={this.state.isState} setModalVisible={this.setModalVisible.bind(this)} jump={()=>this.setState({isState:false})} />*/}
                <ApplyPaymentState modalVisible={this.state.isFailure} setModalVisible={()=>this.setState({isFailure:false})} jump={this.jumpToOrder.bind(this)} />
            </View>
        );
    };
}
const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            height:UtilScreen.getHeight(1334),
            backgroundColor: '#fff'
        },
    });