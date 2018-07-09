import React, {Component} from 'react';
import {AppRegistry, View, Text, Image, StyleSheet, TextInput,Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import ImageGridView from '../components/ImageGridView';
import MyInputDialog from '../components/MyInputDialog';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');

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
        }
    }
    inputImageDescResult(str) {
        // this.state.itemInfo[0].rValue = name;
        // let data = this.state.itemInfo.concat();
        this.setState({
            isShowInputImageDesc: false,
        });
        this.ImageGridView.setImageDesc(this.state.index, str);
    }
    inputDialogDismissBack() {
        this.setState({isShowInputImageDesc: false});
    }
    btnClick(){//完成返回主页
        this.props.navigation.navigate('MainTabPage');
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
                <ImageGridView editImage={this.editImage.bind(this)} inputImageDescResult={this.inputImageDescResult.bind(this)} ref={ref=>this.ImageGridView=ref} />
                <View style={Stylecss.styles.line}/>
                <Text style={Stylecss.styles.set_logout} onPress={this.addContent.bind(this)}>继续添加</Text>
                <MyInputDialog isShow={this.state.isShowInputImageDesc} callBack={this.inputImageDescResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputImageDescProps}/>
            </View>
        )
    }
}