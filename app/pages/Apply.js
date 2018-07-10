import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight,AsyncStorage} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import ApplyInfoItem from '../components/ApplyInfoItem';
const Stylecss = require('../common/Stylecss');
import ApplyRealName from '../components/ApplyRealName';
import ApplyPaymentSuccess from '../components/ApplyPaymentSuccess';
import ApplyPaymentState from '../components/ApplyPaymentState';
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
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
                {key: 4, lTitle:`报名人数:`, rHint: '请输入参加活动的人数',},
                {key: 5, lTitle: '联系方式:', rHint: '请输入手机号',},
                {key: 6, lTitle:`性        别:`, rHint: '请输入性别',},
                {key: 7, lTitle:`年        龄:`, rHint: '请输入年龄',},
                {key: 8, lTitle: '婚姻状况:', rHint: '请输入婚姻状况',},
                {key: 9,lTitle:'支付方式',rHint:'现场支付',},
            ],
            item:{
                num:0,
                pfid:8,
                pay_type:0,
                money:0,
                join_name:'',
                join_tel:'',
                join_sex:'',
                join_age:'',
                join_marry:'',
            },
            modalVisible: false,
            wxImage:require('../res/images/apply_true.png'),
            alipayImage:require('../res/images/apply_false.png'),
            isPay:true,
            isState:false,
            isFailure:false,
            orPay:false,
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
        this.state.item.pay_type = 0
    }
    alipay_pay(){
        this.setState({
            wxImage:require('../res/images/apply_false.png'),
            alipayImage:require('../res/images/apply_true.png'),
            isPay:false
        });
        this.state.item.pay_type = 1
    }
    myPay() {
        // if(this.state.isPay){//微信支付
        //     this.state.item.pay_type = 0
        // } else {//支付宝支付
        //     this.state.item.pay_type = 1
        // }
        let data = this.state.item;
        console.log('请求数据：',data);
        let formData = new FormData();
        let param = md5.hex_md5(global.commons.baseurl + 'action/ac_order/user_join');
        let params = md5.hex_md5(param);
        formData.append('app_key', params);
        formData.append('num', data.num);
        formData.append('pfid', 8);
        // formData.append('user_id', 7);
        formData.append('pay_type', data.pay_type);
        formData.append('money', data.money);
        formData.append('join_name', data.join_name);
        formData.append('join_tel', data.join_tel);
        formData.append('join_sex', data.join_sex);
        formData.append('join_age', data.join_age);
        formData.append('join_marry', data.join_marry);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("user_id", '7');
                    fetch(global.commons.baseurl+'action/ac_order/user_join',{
                        method:'POST',
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            if (result.code===200){
                                console.log('responseData',result);
                            }else{
                                console.log('responseData',result.message);
                            }
                            console.log('responseData',result);
                        })
                    // .catch((error)=>{console.error('error',error)});
                } else {
                    this.props.navigation.navigate('Home',{position:'Apply'});
                }
            } else {
                this.props.navigation.navigate('Home',{position:'Apply'});
            }
        })

    }
    setView(){
        if(this.state.orPay){
            return(
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
            )
        }
    }
    editText(text,key){
        console.log('myText',text)
        switch (key){
            case 3:
                this.state.item.join_name = text;
                break;
            case 4:
                this.state.item.num = text;
                break;
            case 5:
                this.state.item.join_tel = text;
                break;
            case 6:
                this.state.item.join_sex = text;
                break;
            case 7:
                this.state.item.join_age = text;
                break;
            case 8:
                this.state.item.join_marry = text;
                break;
        }
        let data = this.state.item;
        console.log('mydata',data)
        this.setState({
            item:data
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <ToolBar title={'报名'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    style={{flex:1}}
                    data={this.state.itemInfo}
                    renderItem={({item,index}) => {
                        if(index<9){
                            return (
                                <View>
                                        <ApplyInfoItem editText={this.editText.bind(this)} itemInfo={item}/>
                                    <View style={Stylecss.styles.line}/>
                                </View>
                            );
                        } else if(index==9&&!this.state.orPay){
                            return (
                                <View>
                                        <ApplyInfoItem editText={this.editText.bind(this)} itemInfo={item}/>
                                    <View style={Stylecss.styles.line}/>
                                </View>
                            );
                        }
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                {this.setView()}
                <View style={Stylecss.styles.paymentView}>
                    <Text style={Stylecss.styles.paymentText} onPress={this.myPay.bind(this)}>{this.state.orPay?'支付':'报名'}</Text>
                </View>
                <ApplyRealName modalVisible={this.state.modalVisible} setModalVisible={this.setModalVisible.bind(this)} jump={this.jumpToCard.bind(this)} />
                <ApplyPaymentSuccess modalVisible={this.state.isState} setModalVisible={this.setModalVisible.bind(this)} jump={()=>this.setState({isState:false})} />
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