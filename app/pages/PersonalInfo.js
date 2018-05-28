import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
import PersonalInfoItem from '../components/PersonalInfoItem';
import PersonalInfoHead from '../components/PersonalInfoHead';
import SelectYesOrNo from '../components/SelectYesOrNo';
import MyDatePicker from '../components/MyDatePicker';
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
        }
        this.selectItemDate={key: 4, title: '选择您的出生日期'};
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
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                this.setState({
                    isSelectDate: true,
                });
                this.selectItemDate={key: 4, title: '选择您的出生日期'};
                break;
            case 5:
                this.setState({
                    isSelectDate:true,
                });
                this.selectItemDate={key: 5, title: '注册时间'};
                break;
            case 6:
                break;
            case 7:
                this.setState({isSelectYesOrNo: !this.state.isSelectYesOrNo,});
                break;
            case 8:
                break;
        }
    }

    yesOrNo(type) {
        this.state.itemInfo[7].rValue = type === 1 ? '是' : '否';
        let data = this.state.itemInfo.concat();
        this.setState({
            isSelectYesOrNo: false,
            itemInfo: data,
        });
    }

    selectDate(date) {
        let d=date.concat();
        this.state.itemInfo[this.selectItemDate.key].rValue = d;
        let data = this.state.itemInfo.concat();
        this.setState({isSelectDate: false, itemInfo: data});
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'个人中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <PersonalInfoHead/>
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
                <SelectYesOrNo yesOrNo={this.yesOrNo.bind(this)} isShow={this.state.isSelectYesOrNo} topTitle={'是'} bottomTitle={'否'}/>
                <MyDatePicker isShow={this.state.isSelectDate} callBack={this.selectDate.bind(this)}  ref={ref => this.MyDatePicker = ref}/>
            </View>
        );
    }
}

const
    styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff'
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