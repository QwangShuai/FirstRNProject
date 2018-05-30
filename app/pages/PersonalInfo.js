import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
import PersonalInfoItem from '../components/PersonalInfoItem';
import PersonalInfoHead from '../components/PersonalInfoHead';
import SelectYesOrNo from '../components/SelectYesOrNo';
import MyDatePicker from '../components/MyDatePicker';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
import SelectArea from "../components/SelectArea";
import MyInputDialog from "../components/MyInputDialog";

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemInfo: [
                {key: 0, imageURL: require('../res/images/user-1.png'), lTitle: '昵称', rValue: '欧阳',},
                {key: 1, imageURL: require('../res/images/sex.png'), lTitle: '性别', rValue: '女',},
                {key: 2, imageURL: require('../res/images/person_location.png'), lTitle: '所在地', rValue: '黑龙江',},
                {key: 3, imageURL: require('../res/images/person_sign.png'), lTitle: '签名', rValue: '世界那么大，我要去看看',},
                {key: 4, imageURL: require('../res/images/person_birthday.png'), lTitle: '生日', rValue: '1996-07-07',},
                {
                    key: 5,
                    imageURL: require('../res/images/person_register_time.png'),
                    lTitle: '注册时间',
                    rValue: '2018-05-26',
                },
                {key: 6, imageURL: require('../res/images/person_real_name.png'), lTitle: '实名认证', rValue: '身份证上传',},
                {key: 7, imageURL: require('../res/images/person_is_single.png'), lTitle: '是否单身', rValue: '是',},
                {key: 8, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',}
            ],
            isSelectYesOrNo: false,
            isSelectDate: false,
            isShowSelectPhoto: false,
            isSelectSex: false,
            isShowSelectArea: false,
            isShowInputName: false,
            isShowInputSign: false,
            inputNameProps: {
                title: '请输入昵称',
                placeholder: '20个字符以内，仅可以输入汉字、字母、数字或下划线',
            },
            inputSignProps: {
                title: '签名',
                placeholder: '20个字符以内，仅可以输入汉字、字母、数字或下划线',
            },
            headImageSource: {},
        }
        this.selectItemDate = {key: 4, title: '选择您的出生日期'};
    }

    static navigationOptions = {
        // title:'登录',
        headerStyle: {height: 0},
    };

    /**
     * ToolBar 点击按钮回调
     */
    backClick() {
    }


    itemClick(item) {
        switch (item.key) {
            case 0:
                this.setState({
                    isShowInputName: true,
                });
                break;
            case 1:
                this.setState({isSelectSex: !this.state.isSelectSex,});
                break;
            case 2:
                this.setState({
                    isShowSelectArea: true,
                });
                break;
            case 3:
                this.setState({
                    isShowInputSign: true,
                });
                break;
            case 4:
                this.setState({
                    isSelectDate: true,
                });
                this.selectItemDate = {key: 4, title: '选择您的出生日期'};
                break;
            case 5:
                this.setState({
                    isSelectDate: true,
                });
                this.selectItemDate = {key: 5, title: '注册时间'};
                break;
            case 6:
                this.props.navigation.navigate('UploadIdCard');
                break;
            case 7:
                this.setState({isSelectYesOrNo: !this.state.isSelectYesOrNo,});
                break;
            case 8:
                break;
        }
    }

    /**
     * 选择是否单身
     * @param type
     */
    yesOrNo(type) {
        this.state.itemInfo[7].rValue = type === 1 ? '是' : '否';
        let data = this.state.itemInfo.concat();
        this.setState({
            isSelectYesOrNo: false,
            itemInfo: data,
        });
    }

    /**
     * 选择性别回调
     * @param type
     */
    selectSex(type) {
        this.state.itemInfo[1].rValue = type === 1 ? '男' : 'nv';
        let data = this.state.itemInfo.concat();
        this.setState({
            isSelectSex: false,
            itemInfo: data,
        });
    }

    selectDate(date) {
        let d = date.concat();
        this.state.itemInfo[this.selectItemDate.key].rValue = d;
        let data = this.state.itemInfo.concat();
        this.setState({isSelectDate: false, itemInfo: data});
    }

    /**
     * 点击头像回掉
     */
    clickHeadImage() {
        this.setState({isShowSelectPhoto: !this.state.isShowSelectPhoto,});
    }

    /**
     * 选择拍照或者从相册选择回掉
     */
    takerPhotoOrSelect(type) {
        this.setState({
            isShowSelectPhoto: false,
        });
        let getPhoto = new GetPhotoFromPhone(this);
        if (type === 1) {
            getPhoto.takerPhoto();
        } else {
            getPhoto.selectPhoto();
        }
    }

    /**
     * 拍照或者选择照片回调，返回链接对象
     * @param obj
     */
    photoResult(obj) {
        this.setState({
            headImageSource: obj
        });
    }

    /**
     * 选择所在地回调
     * @param area
     */
    selectAreaResult(area) {
        let [province, city, street] = area;
        this.state.itemInfo[2].rValue = province + '-' + city + '-' + street;
        let data = this.state.itemInfo.concat();
        this.setState({isShowSelectArea: false, itemInfo: data});
    }

    /**
     * 输入名字回调
     */
    inputNameResult(name) {
        this.state.itemInfo[0].rValue = name;
        let data = this.state.itemInfo.concat();
        this.setState({isShowInputName: false, itemInfo: data});
    }

    /**
     * 输入签名回调
     */
    inputSignResult(sign) {
        this.state.itemInfo[3].rValue = sign;
        let data = this.state.itemInfo.concat();
        this.setState({isShowInputSign: false, itemInfo: data});
    }

    /**
     * InputDialog调用dismiss的时候回调
     * @constructor
     */
    inputDialogDismissBack() {
        this.setState({isShowInputName: false, isShowInputSign: false});
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'个人中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <PersonalInfoHead clickCallBack={this.clickHeadImage.bind(this)}
                                  imageSource={this.state.headImageSource}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <PersonalInfoItem itemInfo={item}/></TouchableHighlight>
                                <View style={styles.line}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                <SelectYesOrNo yesOrNo={this.yesOrNo.bind(this)} isShow={this.state.isSelectYesOrNo} topTitle={'是'}
                               bottomTitle={'否'}/>
                <SelectYesOrNo yesOrNo={this.selectSex.bind(this)} isShow={this.state.isSelectSex} topTitle={'男'}
                               bottomTitle={'女'}/>
                <SelectYesOrNo yesOrNo={this.takerPhotoOrSelect.bind(this)} isShow={this.state.isShowSelectPhoto}
                               topTitle={'拍照'} bottomTitle={'从相册中选择'}/>
                <MyDatePicker isShow={this.state.isSelectDate} callBack={this.selectDate.bind(this)}
                              title={this.selectItemDate.title}
                              ref={ref => this.MyDatePicker = ref}/>
                <SelectArea isShow={this.state.isShowSelectArea} callBack={this.selectAreaResult.bind(this)}/>
                <MyInputDialog isShow={this.state.isShowInputName} callBack={this.inputNameResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputNameProps}/>
                <MyInputDialog isShow={this.state.isShowInputSign} callBack={this.inputSignResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputSignProps}/>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            width: UtilScreen.getWidth(750),
            height: UtilScreen.getHeight(1334),
            backgroundColor: '#fff',
        },
        lightitem: {
            backgroundColor: '#fff'
        },
        line: {
            width: '100%',
            height: UtilScreen.getHeight(15),
            backgroundColor: '#f8f8f8',
        }
    });