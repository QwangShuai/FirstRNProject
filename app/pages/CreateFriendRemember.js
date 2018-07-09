import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableHighlight,
    ScrollView,
    AsyncStorage
} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import CreateActicitiesItem from '../components/CreateActicitiesItem';
import SelectYesOrNo from '../components/SelectYesOrNo';
import MyDatePicker from '../components/MyDatePicker';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
import SelectArea from "../components/SelectArea";
import SetPwdModal from "../components/SetPwdModal";
import UploadImageGridView from '../components/UploadImageGridView';
import md5 from "react-native-md5";
const Buffer = require('buffer').Buffer;
const Stylecss = require('../common/Stylecss');
import MyInputDialog from '../components/MyInputDialog';
import CostModal from '../components/CostModal';
export default class CreateFriendRemember extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            item:{
                follow_title:'',//标题
                begin_time:'',//开始时间
                end_time:'',//结束时间
                file_img:null,//主图
                fmpeople:'5',//出游人数
                city:0,//地点
                activity_info:"这是内容内容这是内容内容这是内容内容这是内容内容这是内容内容",//内容
                follow_pass:'',//密码
                fmlable:4,//标签
                fmpartyId:0,//所属活动,
                insertatext:0,//是否可以插文
            },
            itemInfo: [
                {key: 0, lUrl: require('../res/images/time-start.png'), lTitle: '开始时间:', rTitle: '0000-00-00',},
                {key: 1, lUrl: require('../res/images/time-end.png'), lTitle: '结束时间:', rTitle: '0000-00-00',},
                {key: 2, lUrl: require('../res/images/place.png'), lTitle: '活动地点:', rTitle: '城市名字',},
                {key: 3, lUrl: require('../res/images/price.png'), lTitle: '出游人数', rTitle: '填写人数',},
                {key: 4, lUrl: require('../res/images/enter-activity.png'), lTitle: '进入友记:', rTitle: '需输入密码',},
            ],
            isShowSelectPhoto: false,
            isSelectDate: false,
            ImageSource: {uri: 'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'},
            textCount: 0,
            //start 上传图片编辑描述用到------------
            isShowInputImageDesc: false,
            inputImageDescProps: {
                title: '请输入图片描述',
                placeholder: '30个字符以内，仅可以输入汉字、字母、数字或下划线',
                maxSize: 30,
            },
            index: 0,
            screenHeight: UtilScreen.getHeight(1334),
            hintText:'*',
            isCost:false,
            isCostState:0,
            isShowSelectArea:false,
            isSet:true,
            isSetPwdModal:false,
        };
        this.selectDate = {key: 1, title: '0'};

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
     * 点击头像回掉
     */
    clickImage() {
        this.setState({isShowSelectPhoto: !this.state.isShowSelectPhoto,});
    }

    /**
     * 拍照或者选择照片回调，返回链接对象
     * @param obj
     */
    photoResult(obj) {
        this.setState({
            ImageSource: {uri:obj},
        });
        this.state.item.file_img = {uri: obj,type: 'multipart/form-data', name: 'a.jpg'};
    }

    backClick() {
        this.props.navigation.goBack();
    }
    setModalVisible(){
        this.setState({
            isCost: false,
            isSetPwdModal:false,
        });
    }
    selectImages(images) {
        console.log(images)
    }
    paymentReference(){
        this.setState ({
            isCostState:0,
        })
    }
    paymentNow(){
        this.setState ({
            isCostState:1,
        })
    }
    itemClick(item) {
        switch (item.key) {
            case 0:
                this.setState({
                    isSelectDate: true,
                });
                this.selectDate = {key: 0, title: '选择活动开始时间'};
                break;
            case 1:
                this.setState({
                    isSelectDate: true,
                });
                this.selectDate = {key: 1, title: '选择活动结束时间'};
                break;
            case 2:
                this.setState({
                    isShowSelectArea:true,
                })
                break;
            case 3:
                this.setState({
                    isCost: true,
                });
                break;
            case 4:
                this.setState({
                    isSetPwdModal:true,
                })
                break;
        }
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
     * 选择日期
     * @param date
     */
    selectData(date) {
        let d = date.concat();
        this.state.itemInfo[this.selectDate.key].rTitle = d;
        let data = this.state.itemInfo.concat();
        this.setState({isSelectDate: false, itemInfo: data});
        if(this.selectDate.key==0){
            this.state.item.begin_time = d;
        } else {
            this.state.item.end_time = d;
        }
    }

    inputDialogDismissBack() {
        this.setState({isShowInputImageDesc: false});
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
        this.UploadImageGridView.setImageDesc(this.state.index, str);
    }
    callbackCost(data){
        this.state.itemInfo[3].rTitle = data.money;
        let  mydata = this.state.itemInfo.concat();
        this.setState({
            isCost:false,
            itemInfo:mydata
        });
        this.state.item.price = data.money;
        this.state.item.price_type = this.state.isCostState;
        this.state.item.price_info = data.other;
    }
    selectAreaResult(area,type) {
        let [province, city, street] = area;
        this.state.itemInfo[2].rTitle = province + '-' + city + '-' + street;
        let data = this.state.itemInfo.concat();
        this.setState({isShowSelectArea: false, itemInfo: data});
        this.state.item.city = 0;
    }
    changeTitle(){
        if(this.state.item.follow_title.length==1){
            this.setState({
                hintText:'*',
            })
        } else {
            this.setState({
                hintText:'',
            })
        }
    }
    //设置密码modal
    setPwd_isShow(){
        let b = this.state.isSet?false:true;
        this.setState({
            isSet:b,
        })
    }

    setPwd_callBack(item){
        this.state.itemInfo[4].rTitle = item.pwd;
        let data = this.state.itemInfo.concat();
        console.log('我的数据呢：',item);
        this.setState({
            isSetPwdModal:false,
            itemInfo:data,
        })
        this.state.item.follow_pass= item.pwd;
    }
    //下一步
    nextStep(){
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_article/InsertArticle');
        let params=md5.hex_md5(param);
        let data = this.state.item;
        formData.append('app_key',params);
        formData.append('fmtitle',data.follow_title);
        formData.append('fmcontent',data.activity_info);
        formData.append('fmaddress',data.city);
        formData.append("images",data.file_img);
        formData.append('fmlable',data.fmlable);
        formData.append('fmgotime',data.begin_time[0]+'-'+data.begin_time[1]+'-'+data.begin_time[2]);
        formData.append('fmendtime',data.end_time[0]+'-'+data.end_time[1]+'-'+data.end_time[2]);
        formData.append('fmpeople',data.fmpeople);
        formData.append('fmpartyID',data.fmpartyId);
        formData.append('accesspassword',data.follow_pass);
        formData.append('insertatext',data.insertatext);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("userID", result);
                    fetch(global.commons.baseurl+'action/ac_article/InsertArticle',{
                        method:'POST',
                        headers:{
                            'Content-Type':'multipart/form-data',
                        },
                        body:formData,
                    })
                        .then((response) => response.text() )
                        .then((responseData)=>{
                            console.log('responseData',responseData);
                            return false;
                            var bf = new Buffer(responseData , 'base64')
                            var  str= bf.toString();
                            let result=JSON.parse(str);
                            /*if (result.code===200){*/
                                /*Alert.alert(
                                    '提示',
                                    ''+result.message+'',
                                    [
                                        {text:'确定',onPress:(()=>{this.props.navigation.navigate('CreateContents');}),style:'cancel'}
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
                            }*/
                            console.log('responseData',result);
                        })
                    // .catch((error)=>{console.error('error',error)});
                } else {
                    this.props.navigation.navigate('Home',{position:'CreateActivities'});
                }
            } else {
                this.props.navigation.navigate('Home',{position:'CreateActivities'});
            }
        })

    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'创建友记'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                    <View style={{height:UtilScreen.getHeight(88),flexDirection:'row',marginLeft:UtilScreen.getWidth(40)}}>
                        {/*<Text style={{color:'#ff0000',fontSize:14,alignSelf:'center'}}>{this.state.hintText}</Text>*/}
                        <TextInput style={{marginLeft:UtilScreen.getWidth(10),height:UtilScreen.getHeight(88),color:'#333333',fontSize:14,alignSelf:'center',padding:0,width:UtilScreen.getWidth(580)}}
                                   placeholder='请输入友记标题' maxLength={30}  underlineColorAndroid='transparent' onChange={this.changeTitle.bind(this)} onChangeText={(text)=>{
                            this.state.item.follow_title =text;
                        }}/>
                        <Text style={{color:'#333333',fontSize:14,position:'absolute',right:UtilScreen.getWidth(40),alignSelf:'center'}}>{this.state.item.follow_title.length}/30</Text>

                    </View>


                <View style={Stylecss.styles.line}/>
                {/*<ModalDropdown options={['option 1', 'option 2']}/>*/}
                    <TouchableHighlight underlayColor='#ffffff' onPress={this.clickImage.bind(this)}>
                        <Image style={styles.showImage} source={this.state.ImageSource}/>
                    </TouchableHighlight>
                <View style={{height:UtilScreen.getHeight(88),flexDirection:'row',marginLeft:UtilScreen.getWidth(40)}}>
                    <Text style={{color:'#333333',fontSize:14,alignSelf:'center',marginLeft:UtilScreen.getWidth(10)}}>具体内容</Text>
                    <Text style={{color:'#333333',fontSize:14,position:'absolute',right:UtilScreen.getWidth(40),alignSelf:'center'}}>{this.state.item.activity_info.length}/2000</Text>
                </View>
                <TextInput style={{height:UtilScreen.getHeight(160),color:'#333333',fontSize:14,alignSelf:'center',padding:0,width:UtilScreen.getWidth(650)}}
                           placeholder='请输入活动内容' maxLength={2000} multiline={true} textAlignVertical='top' underlineColorAndroid='transparent' onChangeText={(text)=>{
                    this.state.item.activity_info =text;
                    let data = this.state.item;
                    this.setState({
                        item:data
                    })
                }}/>
                    <FlatList
                        data={this.state.itemInfo}
                        renderItem={({item}) => {
                            return (
                                <View>
                                    <TouchableHighlight style={Stylecss.styles.lightitem}
                                                        underlayColor={'#f8f8f8'}
                                                        onPress={this.itemClick.bind(this, item)}>
                                        <CreateActicitiesItem itemInfo={item}/></TouchableHighlight>
                                    <View style={Stylecss.styles.line}/>
                                </View>
                            );
                        }}
                        keyExtractor={item => item.key.toString()}
                    ></FlatList>
                    <Text style={styles.next} onPress={this.nextStep.bind(this)}>下一步</Text>
                <SelectYesOrNo yesOrNo={this.takerPhotoOrSelect.bind(this)} isShow={this.state.isShowSelectPhoto}
                               topTitle={'拍照'} bottomTitle={'从相册中选择'}/>
                <MyDatePicker isShow={this.state.isSelectDate} callBack={this.selectData.bind(this)}
                              title={this.selectDate.title}/>
                <MyInputDialog isShow={this.state.isShowInputImageDesc} callBack={this.inputImageDescResult.bind(this)}
                               onCoverPress={this.inputDialogDismissBack.bind(this)}
                               inputProps={this.state.inputImageDescProps}/>
                <CostModal isCost={this.state.isCost} isCostState={this.state.isCostState} setModalVisible={this.setModalVisible.bind(this)} paymentReference={this.paymentReference.bind(this)}
                           paymentNow={this.paymentNow.bind(this)} callbackCost={this.callbackCost.bind(this)}/>
                <SelectArea isShow={this.state.isShowSelectArea} callBack={this.selectAreaResult.bind(this)}/>
                <SetPwdModal isSetPwdModal={this.state.isSetPwdModal} isSet={this.state.isSet} setModalVisible={this.setModalVisible.bind(this)} setPwd_isShow={this.setPwd_isShow.bind(this)}
                             setPwd_callBack={this.setPwd_callBack.bind(this)}/>
            </View>)
    }
}

const styles = StyleSheet.create({
    showImage: {
        height: UtilScreen.getHeight(372),
        width: '100%',
        resizeMode: 'stretch',
    },
    itemView: {
        flexDirection: 'column',
        height: UtilScreen.getHeight(98),
        backgroundColor: '#fff',
    },
    redText: {
        fontSize: 14,
        marginLeft: UtilScreen.getWidth(40),
        color: 'red',
    },
    next:{
        textAlign:'center',
        height:UtilScreen.getHeight(98),
        fontSize:15,
        backgroundColor:'#ff9d00',
        color:'#ffffff',
        width:'100%',
        lineHeight:UtilScreen.getHeight(98),
    },
})