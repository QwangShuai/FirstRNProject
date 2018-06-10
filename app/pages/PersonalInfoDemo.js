import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text, PanResponder, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
import PersonalInfoItem from '../components/PersonalInfoItem';
import PersonalInfoHead from '../components/PersonalInfoHead';
import SelectYesOrNo from '../components/SelectYesOrNo';
import MyDatePicker from '../components/MyDatePicker';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
import SelectArea from "../components/SelectArea";
import MyInputDialog from "../components/MyInputDialog";
import SwipeRow from '../components/SwipeRow';
import moment from "moment/moment";

export default class PersonalInfoDemo extends Component {
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
                {key: 8, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 9, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 10, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 11, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 12, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 13, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 14, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
                {key: 15, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},

            ],
            left: -0,
            editWidth: 100,
            deleteWidth: 100,
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


        this.startLeft = 0;

        this._panResponder = PanResponder.create({
            onStartShouldSetResponderCapture: () => true,
            onMoveShouldSetResponderCapture: () => true,
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: (evt, gs) => {
                this.startTouchTime = moment().valueOf();
                this.onlyTouch = true;
            },
            onPanResponderMove: (evt, gs) => {
                let dTime = moment().valueOf() - this.startTouchTime;
                if (dTime > 200 && dTime < 300 && this.onlyTouch && (gs.dx > -UtilScreen.getWidth(5) && gs.dx < UtilScreen.getWidth(5))) {
                    this.onlyTouch = false;
                    alert('09')
                } else {
                    let left = this.startLeft + gs.dx;
                   if (left >= -UtilScreen.getWidth(300) && left <= 0) {
                        if (gs.dx < 0 && (left < -UtilScreen.getWidth(280) && left >= -UtilScreen.getWidth(300))) {
                            left = -UtilScreen.getWidth(300);
                        }
                        if (gs.dx > 0 && (left <= -UtilScreen.getWidth(0) && left >= -UtilScreen.getWidth(20))) {
                            left = 0;
                        }
                        this.setState({
                            left: left,
                        });
                   }
                    if (left >= -UtilScreen.getWidth(150) && left <= 0) {
                        this.setState({
                            deleteWidth: -left,
                            editWidth: 0,
                        });
                    } else if (left >= -UtilScreen.getWidth(300)) {
                        this.setState({
                            editWidth: -left - UtilScreen.getWidth(150),
                            deleteWidth: UtilScreen.getWidth(150),
                        });
                    }
                }
            },
            onPanResponderRelease: (evt, gs) => {
                if (this.state.left >= -UtilScreen.getWidth(150) && this.state.left <= 0) {
                    this.setState({
                        left: 0,
                        editWidth: 0,
                        deleteWidth: 0,
                    });
                    this.startLeft = 0;
                } else if (this.state.left <= -UtilScreen.getWidth(150)) {
                    this.setState({
                        left: -UtilScreen.getWidth(300),
                        editWidth: UtilScreen.getWidth(150),
                        deleteWidth: UtilScreen.getWidth(150),
                    });
                    this.startLeft = -UtilScreen.getWidth(300);
                }
            }
        })
    }

    static navigationOptions = {
        // title:'登录',
        headerStyle: {height: 0},
    };


    /**
     * 选择是否单身
     * @param type
     */
    yesOrNo(type) {
        //type 为0说明用户点击取消了弹框，所以不需要更新数据
        if (type === 0) {
            this.setState({
                isSelectYesOrNo: false,
            });
        } else {
            this.state.itemInfo[7].rValue = type === 1 ? '是' : '否';
            let data = this.state.itemInfo.concat();
            this.setState({
                isSelectYesOrNo: false,
                itemInfo: data,
            });
        }

    }

    /**
     * 选择性别回调
     * @param type
     */
    selectSex(type) {
        //type 为0说明用户点击取消了弹框，所以不需要更新数据
        if (type === 0) {
            this.setState({
                isSelectSex: false,
            });
        } else {
            this.state.itemInfo[1].rValue = type === 1 ? '男' : '女';
            let data = this.state.itemInfo.concat();
            this.setState({
                isSelectSex: false,
                itemInfo: data,
            });
        }
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
        if (type != 0) {
            let getPhoto = new GetPhotoFromPhone(this);
            if (type === 1) {
                getPhoto.takerPhoto();
            } else {
                getPhoto.selectPhoto();
            }
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
            <View style={{flex: 1}}>
                <ToolBar title={'个人中心2'} isShowBack={true}/>
                <PersonalInfoHead
                                  imageSource={this.state.headImageSource}/>
                <FlatList
                    style={{flex: 1}}
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <View style={styles.right}>
                                    <TouchableHighlight
                                        onPress={this.props.editCallBack}
                                        style={[styles.edit]}>
                                        <Text style={{
                                            color: '#fff',
                                            fontSize: 15,
                                            height: UtilScreen.getHeight(50),
                                            lineHeight: UtilScreen.getHeight(50)
                                        }}>编辑</Text>
                                    </TouchableHighlight>
                                    <TouchableHighlight
                                        onPress={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            alert('deleteww')
                                        }}
                                        style={[styles.delete]}>
                                        <Text style={{
                                            color: '#fff',
                                            fontSize: 15,
                                            height: UtilScreen.getHeight(50),
                                            lineHeight: UtilScreen.getHeight(50)
                                        }}>删除</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={[styles.mcontainer, {left: this.state.left}]}>
                                    <View {...this._panResponder.panHandlers}>
                                        <View style={styles.item}>
                                            <Text>123456789</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        item: {
            height: UtilScreen.getHeight(200),
            width: UtilScreen.getWidth(750),
            backgroundColor: 'blue'
        },
        mcontainer: {
            height: UtilScreen.getHeight(200),
            flexDirection: 'row',
            width: UtilScreen.getWidth(750),
        },
        right: {
            height:'100%',
            flexDirection: 'row',
            position: 'absolute',
            right: 0,
        },
        edit: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#F71F1F',
            width: UtilScreen.getWidth(150)
        },
        delete: {
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#CACACA',
            width: UtilScreen.getWidth(150)
        }
    });