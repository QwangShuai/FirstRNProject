import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableHighlight,AsyncStorage,Alert} from 'react-native';
import ToolBar from '../components/ToolBar';
import EvaluationView from '../components/EvaluationView';
import UtilScreen from '../util/UtilScreen'
const Stylecss = require('../common/Stylecss');
export default class Evaluation extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo: [
                {
                    key:0,
                    headUrl: require('../res/images/1.jpg'),
                    nickname: '昵称：帅气的小迷糊',
                    contentText: '我爱旅游我爱旅游我爱旅游我爱旅游我 我爱旅游我爱旅游我爱旅游我爱旅游爱 旅游',
                    commentsInfo: [
                        {
                            key: 0,
                            user: '葫芦娃：大娃',
                            comments: '妖怪快放了我的爷爷',
                        },
                        {
                            key: 1,
                            user: '葫芦娃：二娃',
                            comments: '妖怪快放了我的爷爷',
                        },
                        {
                            key: 2,
                            user: '葫芦娃：三娃',
                            comments: '妖怪快放了我的爷爷',
                        },
                        {
                            key: 3,
                            user: '蛇精',
                            comments: '日你爷爷个象拔蚌，瓜皮葫芦娃，你皮任你皮，专打你瓜皮！！！',
                        },
                        {
                            key: 4,
                            user: '蛇精2',
                            comments: '日你爷爷个象拔蚌，瓜皮葫芦娃，你皮任你皮，专打你瓜皮！！！',
                        },
                    ]
                },
                {
                    key:1,
                    headUrl: require('../res/images/1.jpg'),
                    nickname: '昵称：美腻的小迷糊',
                    contentText: '我爱旅游我爱旅游我爱旅游我爱旅游我 我爱旅游我爱旅游我爱旅游我爱旅游爱 旅游,我爱旅游我爱旅游我爱旅游我爱旅游我 我爱旅游我爱旅游我爱旅游我爱旅游爱 旅游，我爱旅游我爱旅游我爱旅游我爱旅游我 我爱旅游我爱旅游我爱旅游我爱旅游爱 旅游',
                    commentsInfo: [
                        {
                            key: 0,
                            user: '葫芦娃：大娃',
                            comments: '妖怪快放了我的爷爷',
                        },
                        {
                            key: 1,
                            user: '葫芦娃：二娃',
                            comments: '妖怪快放了我的爷爷',
                        },
                        {
                            key: 2,
                            user: '葫芦娃：三娃',
                            comments: '妖怪快放了我的爷爷',
                        },
                        {
                            key: 3,
                            user: '蛇精',
                            comments: '日你爷爷个象拔蚌，瓜皮葫芦娃，你皮任你皮，专打你瓜皮！！！',
                        },
                        {
                            key: 4,
                            user: '蛇精2',
                            comments: '日你爷爷个象拔蚌，瓜皮葫芦娃，你皮任你皮，专打你瓜皮！！！',
                        },
                    ]
                },
            ]
        }
    }
    backClick() {
        this.props.navigation.goBack()
    }


    itemClick(item) {

    }
    deleteItem(item,index){
        this.state.itemInfo.splice(index,1);
        let data = this.state.itemInfo.concat();
        this.setState({
            itemInfo:data
        })
        console.log('w我的数据呢',data);
    }
    render() {
        return (
            <View style={Stylecss.styles.container}>
                <ToolBar title={'评价'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item,index}) => {
                        return (
                            <View>
                                <EvaluationView deleteItem={this.deleteItem.bind(this,item,index)} itemInfo={item}/>
                                <View style={{width:'100%',alignSelf:'center',backgroundColor:'#e5e5e5',height:UtilScreen.getHeight(20),marginTop:UtilScreen.getHeight(20)}}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
            </View>
        )
    }
}