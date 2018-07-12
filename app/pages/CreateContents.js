import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, TextInput,Alert,AsyncStorage} from 'react-native';
import ToolBar from '../components/ToolBar';
import ImageGridView from '../components/ImageGridView';
import MyInputDialog from '../components/MyInputDialog';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
import md5 from "react-native-md5";
const Buffer = require('buffer').Buffer;

export default class CreateContents extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            titleText:'',
            context:'',
            itemInfo: {},
            isShowInputImageDesc:false,
            inputImageDescProps: {
                title: '请输入图片描述',
                placeholder: '30个字符以内，仅可以输入汉字、字母、数字或下划线',
                maxSize: 30,
            },
            textarea_img:[

            ],
            activity_files:[

            ],
        }
    }
    inputImageDescResult(str) {
        // this.state.itemInfo[0].rValue = name;
        // let data = this.state.itemInfo.concat();
        this.setState({
            isShowInputImageDesc: false,
        });
        this.ImageGridView.setImageDesc(this.state.index, str);
        if(this.state.textarea_img.length<this.state.index+1){
            for(let i=0;i<this.state.index+2-this.state.textarea_img.length;i++){
                this.state.textarea_img.push('');
            }
        }
        this.state.textarea_img.splice(this.state.index,1,str)
    }
    inputDialogDismissBack() {
        this.setState({isShowInputImageDesc: false});
    }
    btnClick(){
        console.log('是否执行','------');
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_activity/add_travel_info');
        let params=md5.hex_md5(param);
        formData.append('activity_id',8);
        formData.append('title',this.state.titleText);
        formData.append('textarea_img','这是一个测试|这是一个测试2');
        for(let i=0;i<this.state.activity_files;i++){
            formData.append('activity_files',this.state.activity_files[i]);
        }

        formData.append('content',this.state.context);
        formData.append('app_key',params);
        // AsyncStorage.getItem('uid', (error, result) => {
        //     if (!error) {
        //         if (result !== '' && result !== null) {
                    formData.append("user_id", 7);
                    console.log('什么几把万一',formData);
                    fetch(global.commons.baseurl+'action/ac_activity/add_travel_info',{
                        method:'POST',
                        headers:{
                            'Content-Type':'multipart/form-data',
                        },
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            console.log('responseData',responseData);
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            if (result.code===200){
                                this.setState({
                                    itemInfo:result.obj
                                })
                            } else{
                                console.log('responseData',result.message);
                            }

                            console.log('responseData',result);
                        // })
            //         // .catch((error)=>{console.error('error',error)});
            //     } else {
            //         this.props.navigation.navigate('Home',{position:'CreateContents'});
            //     }
            // } else {
            //     this.props.navigation.navigate('Home',{position:'CreateContents'});
            // }
        })

        // this.props.navigation.navigate('MainTabPage');
    }
    editImage(index) {
        this.setState({
            isShowInputImageDesc: true,
            index: index,
        });
    }
    backClick() {
        this.props.navigation.goBack();
    }
    addContent(){//继续添加  清空当前页面内容
        this.setState({
            titleText:'',
            context:'',
        })
        this.ImageGridView.clearImages();
    }
    returnImages(data){
        this.state.textarea_img.splice(0,this.state.textarea_img.length);
        this.state.activity_files.splice(0,this.state.activity_files.length);
        for(let i=0;i<data.length-1;i++){
            let source = {uri:data[i].url.uri,type: 'multipart/form-data', name: 'a.jpg'};
            this.state.textarea_img.push(data[i].desc);
            this.state.activity_files.push(source);
        }
        console.log('我的图片',this.state.activity_files);
        console.log('我的图片内容',this.state.textarea_img);
        console.log('我的数据',data);
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'创建内容'} isShowBack={true} backClick={this.backClick.bind(this)} btn='完成' btnClick={this.btnClick.bind(this)}/>
                <View style={{height:UtilScreen.getHeight(88),flexDirection:'row',marginLeft:UtilScreen.getWidth(40)}}>
                    <TextInput value={this.state.titleText} style={{marginLeft:UtilScreen.getWidth(10),height:UtilScreen.getHeight(88),color:'#333333',fontSize:14,alignSelf:'center',padding:0,width:UtilScreen.getWidth(580)}}
                               placeholder='请输入活动子标题' maxLength={30}  underlineColorAndroid='transparent'  onChangeText={(text)=>this.setState({titleText:text})}/>
                    <Text style={{color:'#333333',fontSize:14,position:'absolute',right:UtilScreen.getWidth(40),alignSelf:'center'}}>{this.state.titleText.length}/30</Text>
                </View>
                <View style={Stylecss.styles.line}/>
                <View style={{height:UtilScreen.getHeight(88),flexDirection:'row',marginLeft:UtilScreen.getWidth(40)}}>
                    <Text style={{color:'#333333',fontSize:14,lineHeight:UtilScreen.getHeight(88),textAlign:'center'}}>具体内容</Text>
                    <Text style={{color:'#333333',fontSize:14,position:'absolute',right:UtilScreen.getWidth(40),alignSelf:'center'}}>{this.state.context.length}/2000</Text>
                </View>
                <TextInput style={{width:UtilScreen.getWidth(672),height:UtilScreen.getHeight(211),color:'#333333',fontSize:14,padding:0,alignSelf:'center',textAlignVertical: 'top'}}
                    placeholder='请输入内容' maxLength={2000} underlineColorAndroid='transparent' value={this.state.context} multiline={true} onChangeText={(text)=>this.setState({context:text})} />
                <ImageGridView returnImages={this.returnImages.bind(this)} editImage={this.editImage.bind(this)} inputImageDescResult={this.inputImageDescResult.bind(this)} ref={ref=>this.ImageGridView=ref} />
                <View style={Stylecss.styles.line}/>
                <Text style={Stylecss.styles.set_logout} onPress={this.addContent.bind(this)}>继续添加</Text>
                <MyInputDialog isShow={this.state.isShowInputImageDesc} callBack={this.inputImageDescResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputImageDescProps}/>
            </View>
        )
    }
}