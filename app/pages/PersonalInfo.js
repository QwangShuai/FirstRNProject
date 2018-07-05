import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableHighlight,AsyncStorage,Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
import PersonalInfoItem from '../components/PersonalInfoItem';
import PersonalInfoHead from '../components/PersonalInfoHead';
import SelectYesOrNo from '../components/SelectYesOrNo';
import MyDatePicker from '../components/MyDatePicker';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
import SelectArea from "../components/SelectArea";
import MyInputDialog from "../components/MyInputDialog";
const Buffer = require('buffer').Buffer;
import md5 from "react-native-md5";
import ComMon from '../util/ComMon';
import SlideDeleteListItem from '../components/SlideDeleteEditListItem';

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
                {key: 8, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV13',},
            ],
            headepics:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529467063703&di=728741c3be89d01ff6e63d13eab380e0&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png',
            isSelectYesOrNo: false,
            nickName: '测试用户',
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
    login(){
        this.props.navigation.navigate('Home',{position:'PersonalInfo'});
    }
    asQuery() {
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    console.log(result);
                    this.UserInfo(result);
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
    }
    componentWillMount() {
        this.asQuery();
    }
    //根据服务端获取用户信息
    UserInfo(uid){
        let formData = new FormData();
        formData.append("uid", uid);
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/UserInformation');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        fetch(global.commons.baseurl+'action/ac_user/UserInformation', {
            method: "POST",
            body: formData
        }).then(response => response.text())
            .then(responseJson => {
                var bf = new Buffer(responseJson , 'base64')
                var  str= bf.toString();
                let result=JSON.parse(str);
                this.setState({
                        nickName:result.obj.username,
                    }
                );
                if (result.obj.headeimg===null){
                    this.setState({
                            headepics:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1529467063703&di=728741c3be89d01ff6e63d13eab380e0&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png',
                        }
                    );
                }else{
                    this.setState({
                            headepics:result.obj.headeimg,
                        }
                    );
                }
                this.setState({
                    itemInfo:[{key: 0, imageURL: require('../res/images/user-1.png'), lTitle: '昵称', rValue: result.obj.username,},
                        {key: 1, imageURL: require('../res/images/sex.png'), lTitle: '性别', rValue: result.obj.sex,},
                        {key: 2, imageURL: require('../res/images/person_location.png'), lTitle: '所在地', rValue: result.obj.useraddress,},
                        {key: 3, imageURL: require('../res/images/person_sign.png'), lTitle: '签名', rValue: result.obj.userautograph,},
                        {key: 4, imageURL: require('../res/images/person_birthday.png'), lTitle: '生日', rValue: result.obj.userbirthday,},
                        {
                            key: 5,
                            imageURL: require('../res/images/person_register_time.png'),
                            lTitle: '注册时间',
                            rValue: result.obj.usertime,
                        },
                        {key: 6, imageURL: require('../res/images/person_real_name.png'), lTitle: '实名认证', rValue: result.obj.usercodeok,},
                        {key: 7, imageURL: require('../res/images/person_is_single.png'), lTitle: '是否单身', rValue:result.obj.usermarry,},
                        {key: 8, imageURL: require('../res/images/person_rank.png'), lTitle: '等级', rValue: 'LV'+result.obj.usergrade,},],
                });
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    static navigationOptions = {
        headerStyle: {height: 0},
    };

    /**
     * ToolBar 点击按钮回调
     */
    backClick() {
        this.props.navigation.goBack()
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
                if(this.state.itemInfo[6].rValue==='未认证'){
                    this.props.navigation.navigate('UploadIdCard', {
                        callBack: () => {
                            this.state.itemInfo[6].rValue = '已上传';
                            let data = this.state.itemInfo.concat();
                            this.setState({
                                itemInfo: data,
                            });
                        }
                    });
                }else if(this.state.itemInfo[6].rValue==='已认证'){
                    alert('您已经认证过了');
                    return false;
                }else if(this.state.itemInfo[6].rValue==='待审核'){
                    alert('正在审核中');
                }
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
        //type 为0说明用户点击取消了弹框，所以不需要更新数据
        if (type === 0) {
            this.setState({
                isSelectYesOrNo: false,
            });
        } else {
            this.state.itemInfo[7].rValue = type === 1 ? '是' : '否';
            let formData = new FormData();
            let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/saveUserinfo');
            let params=md5.hex_md5(param);
            formData.append('app_key',params);
            formData.append("type",'Single');
            formData.append("list",type);
            AsyncStorage.getItem('uid', (error, result) => {
                if (!error) {
                    if (result !== '' && result !== null) {
                        formData.append("uid", result);
                        fetch(global.commons.baseurl+'action/ac_user/saveUserinfo',{
                            method:'POST',
                            body:formData,
                        })
                            .then((response) => response.text() )
                            .then((responseData)=>{
                                var bf = new Buffer(responseData , 'base64')
                                var  str= bf.toString();
                                let result=JSON.parse(str);
                                if (result.code===200){
                                    Alert.alert(
                                        '提示',
                                        ''+result.message+'',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }else{
                                    Alert.alert(
                                        '提示',
                                        '操作失败',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }
                                console.log('responseData',result);
                            })
                            .catch((error)=>{console.error('error',error)});
                    } else {
                        this.login();
                    }
                } else {
                    this.login();
                }
            })
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
            let formData = new FormData();
            let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/saveUserinfo');
            let params=md5.hex_md5(param);
            formData.append('app_key',params);
            formData.append("type",'sex');
            formData.append("list",type);
            AsyncStorage.getItem('uid', (error, result) => {
                if (!error) {
                    if (result !== '' && result !== null) {
                        formData.append("uid", result);
                        fetch(global.commons.baseurl+'action/ac_user/saveUserinfo',{
                            method:'POST',
                            body:formData,
                        })
                            .then((response) => response.text() )
                            .then((responseData)=>{
                                var bf = new Buffer(responseData , 'base64')
                                var  str= bf.toString();
                                let result=JSON.parse(str);
                                if (result.code===200){
                                    Alert.alert(
                                        '提示',
                                        ''+result.message+'',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }else{
                                    Alert.alert(
                                        '提示',
                                        '操作失败',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }
                                console.log('responseData',result);
                            })
                            .catch((error)=>{console.error('error',error)});
                    } else {
                        this.login();
                    }
                } else {
                    this.login();
                }
            })
            let data = this.state.itemInfo.concat();
            this.setState({
                isSelectSex: false,
                itemInfo: data,
            });
        }
    }

    /**
     * type0 取消 1确定
     * @param date
     * @param type
     */
    selectDate(date,type) {
        if (type===1){
            let d = date.concat();
            this.state.itemInfo[this.selectItemDate.key].rValue = d;
            let formData = new FormData();
            let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/saveUserinfo');
            let params=md5.hex_md5(param);
            formData.append('app_key',params);
            if(this.selectItemDate.key===4){//生日
                formData.append("type",'Birthday');
            }else if(this.selectItemDate.key===5){//注册时间
                formData.append("type",'Registration');
            }
            formData.append("list",date[0]+'-'+date[1]+'-'+date[2]);
            AsyncStorage.getItem('uid', (error, result) => {
                if (!error) {
                    if (result !== '' && result !== null) {
                        formData.append("uid", result);
                        fetch(global.commons.baseurl+'action/ac_user/saveUserinfo',{
                            method:'POST',
                            body:formData,
                        })
                            .then((response) => response.text() )
                            .then((responseData)=>{
                                var bf = new Buffer(responseData , 'base64')
                                var  str= bf.toString();
                                let result=JSON.parse(str);
                                if (result.code===200){
                                    Alert.alert(
                                        '提示',
                                        ''+result.message+'',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }else{
                                    Alert.alert(
                                        '提示',
                                        '操作失败',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }
                                console.log('responseData',result);
                            })
                            .catch((error)=>{console.error('error',error)});
                    } else {
                        this.login();
                    }
                } else {
                    this.login();
                }
            })
            let data = this.state.itemInfo.concat();
            this.setState({isSelectDate: false, itemInfo: data});
        }else {
            this.setState({isSelectDate: false});
        }

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
        let source = {uri: obj,type: 'multipart/form-data', name: 'a.jpg'};
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/UploadSheader');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        formData.append("images",source);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/UploadSheader',{
                        method:'POST',
                        headers:{
                            'Content-Type':'multipart/form-data',
                        },
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            this.setState({
                                    headepics:result.obj.headimg,
                                }
                            );
                            console.log('responseData',responseData);
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                //this.toast.show('查询数据失败', DURATION.LENGTH_SHORT);
            }
        })
        /* this.setState({
             headImageSource: obj
         });*/
    }

    /**
     * 选择所在地回调
     * @param area
     * 0取消
     * 1确定
     */
    selectAreaResult(area,type) {
        if (type===1){
            let [province, city, street] = area;
            this.state.itemInfo[2].rValue = province + '-' + city + '-' + street;
            let formData = new FormData();
            let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/saveUserinfo');
            let params=md5.hex_md5(param);
            formData.append('app_key',params);
            formData.append("type",'city');
            formData.append("list",province + '-' + city + '-' + street);
            AsyncStorage.getItem('uid', (error, result) => {
                if (!error) {
                    if (result !== '' && result !== null) {
                        formData.append("uid", result);
                        fetch(global.commons.baseurl+'action/ac_user/saveUserinfo',{
                            method:'POST',
                            body:formData,
                        })
                            .then((response) => response.text() )
                            .then((responseData)=>{
                                var bf = new Buffer(responseData , 'base64')
                                var  str= bf.toString();
                                let result=JSON.parse(str);
                                if (result.code===200){
                                    Alert.alert(
                                        '提示',
                                        ''+result.message+'',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }else{
                                    Alert.alert(
                                        '提示',
                                        '操作失败',
                                        [
                                            {text:'确定',onPress:(()=>{}),style:'cancel'}
                                        ]

                                    );
                                }
                                console.log('responseData',result);
                            })
                            .catch((error)=>{console.error('error',error)});
                    } else {
                        this.login();
                    }
                } else {
                    this.login();
                }
            })
            let data = this.state.itemInfo.concat();
            this.setState({isShowSelectArea: false, itemInfo: data});
        }else {
            this.setState({isShowSelectArea: false});
        }

    }

    /**
     * 输入名字回调
     */
    inputNameResult(name) {
        this.state.itemInfo[0].rValue = name;
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/saveUserinfo');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        formData.append("type",'nickname');
        formData.append("list",name);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/saveUserinfo',{
                        method:'POST',
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            if (result.code===200){
                                Alert.alert(
                                    '提示',
                                    ''+result.message+'',
                                    [
                                        {text:'确定',onPress:(()=>{}),style:'cancel'}
                                    ]

                                );
                            }else{
                                Alert.alert(
                                    '提示',
                                    '操作失败',
                                    [
                                        {text:'确定',onPress:(()=>{}),style:'cancel'}
                                    ]

                                );
                            }
                            console.log('responseData',result);
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                this.login();
            }
        })
        let data = this.state.itemInfo.concat();
        this.setState({isShowInputName: false, itemInfo: data});
    }

    /**
     * 输入签名回调
     */
    inputSignResult(sign) {
        this.state.itemInfo[3].rValue = sign;
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_user/saveUserinfo');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        formData.append("type",'autograph');
        formData.append("list",sign);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("uid", result);
                    fetch(global.commons.baseurl+'action/ac_user/saveUserinfo',{
                        method:'POST',
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            if (result.code===200){
                                Alert.alert(
                                    '提示',
                                    ''+result.message+'',
                                    [
                                        {text:'确定',onPress:(()=>{}),style:'cancel'}
                                    ]

                                );
                            }else{
                                Alert.alert(
                                    '提示',
                                    '操作失败',
                                    [
                                        {text:'确定',onPress:(()=>{}),style:'cancel'}
                                    ]

                                );
                            }
                            console.log('responseData',result);
                        })
                        .catch((error)=>{console.error('error',error)});
                } else {
                    this.login();
                }
            } else {
                this.login();
            }
        })
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
                                  imageSource={this.state.headepics} nickname={this.state.nickName} />
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <PersonalInfoItem itemInfo={item}/>
                                </TouchableHighlight>
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
        },

    });