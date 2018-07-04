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
    ScrollView
} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import CreateActicitiesItem from '../components/CreateActicitiesItem';
import SelectYesOrNo from '../components/SelectYesOrNo';
import MyDatePicker from '../components/MyDatePicker';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
import SelectArea from "../components/SelectArea";
import PersonsModal from "../components/PersonsModal";
import ActivitiesRequireModal from "../components/ActivitiesRequireModal";
import SetPwdModal from "../components/SetPwdModal";
import UploadImageGridView from '../components/UploadImageGridView';

const Stylecss = require('../common/Stylecss');
import MyInputDialog from '../components/MyInputDialog';
import CostModal from '../components/CostModal';

export default class CreateActivities extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo: [
                {key: 0, lUrl: require('../res/images/time-start.png'), lTitle: '开始时间:', rTitle: '0000-00-00',},
                {key: 1, lUrl: require('../res/images/time-end.png'), lTitle: '结束时间:', rTitle: '0000-00-00',},
                {key: 2, lUrl: require('../res/images/place.png'), lTitle: '活动地点:', rTitle: '城市名字',},
                {key: 3, lUrl: require('../res/images/price.png'), lTitle: '人均费用:', rTitle: '￥000.00',},
                {key: 4, lUrl: require('../res/images/person.png'), lTitle: '人数要求:', rTitle: '无,最少,最多',},
                {key: 5, lUrl: require('../res/images/activities-require.png'), lTitle: '活动要求:', rTitle: '',},
                {key: 6, lUrl: require('../res/images/enter-activity.png'), lTitle: '进入活动:', rTitle: '参加活动需输入密码',},
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
            titleText:'',
            index: 0,
            screenHeight: UtilScreen.getHeight(1334),
            hintText:'*',
            isCost:false,
            isCostState:true,
            isShowSelectArea:false,
            isPersonsModal:false,
            isPersonsState:0,
            isActivitiesRequireModal:false,
            isMarriage:true,
            isSex:0,
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
    }

    backClick() {

    }
    setModalVisible(){
        this.setState({
            isCost: false,
            isPersonsModal:false,
            isActivitiesRequireModal:false,
            isSetPwdModal:false,
        });
    }
    selectImages(images) {
        console.log(images)
    }
    paymentReference(){
        this.setState ({
            isCostState:true,
        })
    }
    paymentNow(){
        this.setState ({
            isCostState:false
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
                    isPersonsModal:true,
                })
                break;
            case 5:
                this.setState({
                    isActivitiesRequireModal:true,
                })
                break;
            case 6:
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

    }
    selectAreaResult(area,type) {
        let [province, city, street] = area;
        this.state.itemInfo[2].rTitle = province + '-' + city + '-' + street;
        let data = this.state.itemInfo.concat();
        this.setState({isShowSelectArea: false, itemInfo: data});
    }
    changeTitle(){
        if(this.state.titleText.length==1){
            this.setState({
                hintText:'*',
            })
        } else {
            this.setState({
                hintText:'',
            })
        }
    }
    //人数要求modal操作方法
    persons_none(){
        this.setState({
            isPersonsState:0,
        })
    }
    persons_less(){
        this.setState({
            isPersonsState:1,
        })
    }
    persons_many(){
        this.setState({
            isPersonsState:2,
        })
    }
    callBackPerson(item){
        this.state.itemInfo[4].rTitle = item.allPersons;
        let data = this.state.itemInfo.concat();
        this.setState({
            itemInfo:data,
            isPersonsModal:false,
        })
    }
    //活动要求modal
    activities_sex0(){
        this.setState({
            isSex:0,
        })
    }
    activities_sex1(){
        this.setState({
            isSex:1,
        })
    }
    activities_sex2(){
        this.setState({
            isSex:2,
        })
    }
    activities_isMarriage0(){
        this.setState({
            isMarriage:true,
        })
    }
    activities_isMarriage1(){
        this.setState({
            isMarriage:false,
        })
    }
    activities_callBack(item){
        this.setState({
            isActivitiesRequireModal:false,
        })
    }
    //设置密码modal
    setPwd_isShow(){
        let b = this.state.isSet?false:true;
      this.setState({
          isSet:b,
      })
    }

    setPwd_callBack(item){
        this.state.itemInfo[6].rTitle = item.pwd;
        let data = this.state.itemInfo.concat();
        console.log('我的数据呢：',item);
        this.setState({
            isSetPwdModal:false,
            itemInfo:data,
        })
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'创建活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <ScrollView>
                    <View style={{height:UtilScreen.getHeight(88),flexDirection:'row',marginLeft:UtilScreen.getWidth(40)}}>
                        {/*<Text style={{color:'#ff0000',fontSize:14,alignSelf:'center'}}>{this.state.hintText}</Text>*/}
                        <TextInput style={{marginLeft:UtilScreen.getWidth(10),height:UtilScreen.getHeight(88),color:'#333333',fontSize:14,alignSelf:'center',padding:0,width:UtilScreen.getWidth(580)}}
                                   placeholder='请输入活动标题' maxLength={30}  underlineColorAndroid='transparent' onChange={this.changeTitle.bind(this)} onChangeText={(text)=>this.setState({titleText:text})}/>
                        <Text style={{color:'#333333',fontSize:14,position:'absolute',right:UtilScreen.getWidth(40),alignSelf:'center'}}>{this.state.titleText.length}/30</Text>
                    </View>

                    <View style={Stylecss.styles.line}/>
                <TouchableHighlight underlayColor='#ffffff' onPress={this.clickImage.bind(this)}>
                    <Image style={styles.showImage} source={this.state.ImageSource}/>
                </TouchableHighlight>
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
                    <Text style={styles.next}>下一步</Text>
                </ScrollView>
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
                <PersonsModal isPersonsState={this.state.isPersonsState} isPersonsModal={this.state.isPersonsModal} setModalVisible={this.setModalVisible.bind(this)} persons_none={this.persons_none.bind(this)}
                              persons_less={this.persons_less.bind(this)} persons_many={this.persons_many.bind(this)} callBackPerson={this.callBackPerson.bind(this)}/>
                <ActivitiesRequireModal isActivitiesRequireModal={this.state.isActivitiesRequireModal} setModalVisible={this.setModalVisible.bind(this)} activities_sex0={this.activities_sex0.bind(this)}
                                        activities_sex1={this.activities_sex1.bind(this)} activities_sex2={this.activities_sex2.bind(this)} activities_isMarriage0={this.activities_isMarriage0.bind(this)}
                                        activities_isMarriage1={this.activities_isMarriage1.bind(this)} activities_callBack={this.activities_callBack.bind(this)} isMarriage={this.state.isMarriage} isSex={this.state.isSex}/>
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