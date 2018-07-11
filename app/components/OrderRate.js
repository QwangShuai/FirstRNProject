import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,TextInput} from 'react-native';
import UtilScreen from '../util/UtilScreen';
import ToolBar from './ToolBar';
import OrderHeadDetailsItem from './OrderHeadDetailsItem';
import ImageGridView from '../components/ImageGridView';
import MyInputDialog from '../components/MyInputDialog';
const Styless = require('../common/Stylecss');
import PaymentMethodModal from './PaymentMethodModal';
import InviteModal from './InviteModal';
import UploadSuccess from './UploadSuccess';

export default class OrderRate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowSuccess:false,
            context:'',
            isShowInputImageDesc:false,
            inputImageDescProps: {
                title: '请输入图片描述',
                placeholder: '30个字符以内，仅可以输入汉字、字母、数字或下划线',
                maxSize: 30,
            },
        }
    }
    static navigationOptions = {
        headerStyle:{height:0},
    };
    static defaultProps = {
        orderInfo:{

        },
    }
    editImage(index) {
        this.setState({
            isShowInputImageDesc: true,
            index: index,
        });
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
        this.props.navigation.goBack()
    }


    cancleShow(){
        this.setState({
            isShowSuccess:true,
        })
    }
    btnClick(){//完成返回主页
        this.props.navigation.navigate('MainTabPage');
    }
    uploadSuccess(){
        this.setState({
            isShowSuccess:false,
        })
    }

    backClick(){
        this.props.navigation.goBack();
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor: '#ffffff',flexDirection:'column',}} >
                <ToolBar title={'待评价'} isShowBack={true} backClick={this.backClick.bind(this)} btn='发布' btnClick={this.btnClick.bind(this)}/>
                <OrderHeadDetailsItem itemInfo={this.props.itemInfo} isShow={this.state.isShow}/>
                <TextInput style={{marginTop:UtilScreen.getHeight(20),height:UtilScreen.getHeight(160),color:'#333333',fontSize:14,alignSelf:'center',padding:0,width:UtilScreen.getWidth(650)}}
                           placeholder='分享给其他人评价...' maxLength={2000} multiline={true} textAlignVertical='top' underlineColorAndroid='transparent' onChangeText={(text)=>{
                                this.setState({
                                    content:text
                                })
                }}/>
                <ImageGridView editImage={this.editImage.bind(this)} inputImageDescResult={this.inputImageDescResult.bind(this)} ref={ref=>this.ImageGridView=ref} />
                <View style={Styless.styles.order_light_F1F1F1} />
                <MyInputDialog isShow={this.state.isShowInputImageDesc} callBack={this.inputImageDescResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputImageDescProps}/>
            </View>
        )
    }
}