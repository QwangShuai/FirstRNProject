import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import ApplyInfoItem from '../components/ApplyInfoItem';
import ApplyItem from '../components/ApplyItem';
export default class Apply extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this.state = {
            itemInfo: [
                {key:0,lTitle:'活动标题:',rHint:'上海7日行',},
                {key:1,lTitle:'出发时间:',rHint:'2018-05-28',},
                {key:2,lTitle:`费        用:`,rHint:'￥888.00',},
                {key: 3, lTitle:`姓        名:`, rHint: '请输入姓名',},
                {key: 4, lTitle: '联系方式:', rHint: '请输入手机号',},
                {key: 5, lTitle:`性        别:`, rHint: '请输入性别',},
                {key: 6, lTitle:`年        龄:`, rHint: '请输入年龄',},
                {key: 7, lTitle: '婚姻状况:', rHint: '请输入婚姻状况',},
            ],
        }
    }
    backClick(){

    }
    render(){
        return(
            <View style={styles.container}>
                <ToolBar title={'报名'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <ApplyInfoItem itemInfo={item}/></TouchableHighlight>
                                <View style={styles.line}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        );
    };
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