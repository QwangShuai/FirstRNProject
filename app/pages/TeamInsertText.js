import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,FlatList,TouchableHighlight,AsyncStorage} from 'react-native';
import ToolBar from '../components/ToolBar';
import TeamInsertTextItem from '../components/TeamInsertTextItem';
import ToastComponent from '../components/pickerview/view/ToastComponent';
const Stylecss = require('../common/Stylecss');
import md5 from "react-native-md5";
const Buffer = require('buffer').Buffer;
import MyInputDialog from "../components/MyInputDialog";
export default class TeamInsertText extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {
                    key:0,
                    fmpID:0,
                    fmID:0,
                    userID:0,
                    fmptitle:'队友的插文，想说什么就说什么呗！',
                    fmpurl:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg',
                    fmpexamine:'待审核',
                    headimg:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg',
                    nickname:'昵称',
                    fmptime:'2018-03-30',
                    fmpdel:0,
                    fmpshield:0,
                },
            ],
        };
    }
    toastResult(){
        this.ToastComponent.show('显示个锤子呦~')
    }
    componentWillMount() {
        console.log('是否执行','------');
        let formData = new FormData();
        let param=md5.hex_md5(global.commons.baseurl+'action/ac_activity/activity_join');
        let params=md5.hex_md5(param);
        formData.append('app_key',params);
        AsyncStorage.getItem('uid', (error, result) => {
            if (!error) {
                if (result !== '' && result !== null) {
                    formData.append("user_id", 7);
                    fetch(global.commons.baseurl+'action/ac_activity/activity_join',{
                        method:'POST',
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
                                    // itemInfo:result.obj
                                })
                            } else{
                                console.log('responseData',result.message);
                            }

                            console.log('responseData',result);
                        })
                    // .catch((error)=>{console.error('error',error)});
                } else {
                    this.props.navigation.navigate('Home',{position:'TeamInsertText'});
                }
            } else {
                this.props.navigation.navigate('Home',{position:'TeamInsertText'});
            }
        })
    }
    backClick() {
        this.props.navigation.goBack();
    }
    itemClick(item) {
        switch (item.key) {
            case 0:

                break;
        }
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'队友插文'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                                    onPress={this.itemClick.bind(this, item)}>
                                    <TeamInsertTextItem toastResult={this.toastResult.bind(this)} itemInfo={item}/></TouchableHighlight>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                <ToastComponent ref={ref => this.ToastComponent = ref} />
            </View>
        )
    }
}