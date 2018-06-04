import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import UploadImageGridView from '../components/UploadImageGridView';
import MyInputDialog from '../components/MyInputDialog';

const Stylecss = require('../common/Stylecss');


export default class AddContent extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            textCount: 0,
            //start 上传图片编辑描述用到------------
            isShowInputImageDesc: false,
            inputImageDescProps: {
                title: '请输入图片描述',
                placeholder: '30个字符以内，仅可以输入汉字、字母、数字或下划线',
                maxSize: 30,
            },
            index: 0,
            //end----------------
        }
    }

    backClick() {
        this.props.navigation.navigate('Set');
    }

    selectImages(images) {
        console.log(images)
    }
    //start 上传图片编辑描述用到------------
    /**
     * 编辑图片描述
     */
    editImage(index) {
        this.setState({
            isShowInputImageDesc: true,
            index: index,
        });
    }

    /**
     * 输入图片描述回调
     */
    inputImageDescResult(str) {
        // this.state.itemInfo[0].rValue = name;
        // let data = this.state.itemInfo.concat();
        this.setState({
            isShowInputImageDesc: false,
        });
        this.UploadImageGridView.setImageDesc(this.state.index,str);
    }

    /**
     * InputDialog调用dismiss的时候回调
     * @constructor
     */
    inputDialogDismissBack() {
        this.setState({isShowInputImageDesc: false});
    }
    //end------------
    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'补充内容'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <Text style={styles.titleText}>标题标题标题标题标题标题标题标题标题标题标题标 题标题标题标题</Text>
                <View style={Stylecss.styles.light_F8F8F8}/>
                <View style={styles.contentView}>
                    <Text style={styles.titleContext}>具体内容</Text>
                    <Text style={styles.promptText}>{this.state.textCount}/2000</Text>
                    <TextInput style={styles.inputStyle} maxLengh={2000} placeholder={'请输入内容'}
                               underlineColorAndroid="transparent"
                               onChangeText={(text) => {
                                   this.setState({
                                       textCount: text.length,
                                   });
                               }}
                               multiline={true}/>
                </View>

                {/*start 上传图片编辑描述用到------------*/}
                <UploadImageGridView maxNumber={9} selectImages={this.selectImages.bind(this)}
                                     editImage={this.editImage.bind(this)}
                                     ref={ref => this.UploadImageGridView = ref}
                />
                <MyInputDialog isShow={this.state.isShowInputImageDesc} callBack={this.inputImageDescResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputImageDescProps}/>

                {/*start 上传图片编辑描述用到------------*/}

                
                <View style={Stylecss.styles.light_F8F8F8}/>
                <Text style={Stylecss.styles.set_logout}>确认提交</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: UtilScreen.getWidth(750),
        height: UtilScreen.getHeight(1334),
        backgroundColor: '#fff',
    },
    agreementText: {
        fontSize: 16,
        width: '100%',
        color: '#333333',
        textAlign: 'center',
        alignSelf: 'center',
    },
    infoText: {
        fontSize: 16,
        width: UtilScreen.getWidth(632),
        marginLeft: UtilScreen.getWidth(60),
        color: '#333333',
    },
    titleText: {
        marginTop: UtilScreen.getHeight(25),
        marginLeft: UtilScreen.getWidth(40),
        textAlign: 'left',
        fontSize: 14,
        height: UtilScreen.getHeight(80),
        width: UtilScreen.getWidth(644),
        color: '#333333',
    },
    contentView: {
        height: UtilScreen.getHeight(231),
        marginLeft: UtilScreen.getWidth(40),
        marginRight: UtilScreen.getWidth(40),
    },
    titleContext: {
        color: '#333333',
        fontSize: 14,
    },
    promptText: {
        position: 'absolute',
        right: 0,
        color: '#333333',
        fontSize: 14,
    },
    inputStyle: {
        flex: 1,
        textAlignVertical: 'top',
    },
})