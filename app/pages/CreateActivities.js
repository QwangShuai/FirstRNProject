import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import CreateActicitiesItem from '../components/CreateActicitiesItem';
import GetPhotoFromPhone from '../util/GetPhotoFromPhone';
const Stylecss = require('../common/Stylecss');
export default class CreateActivities extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {key:0,lTitle:'活动简介:',rTitle:'',},
                {key:1,lTitle:'开始时间:',rTitle:'0000-00-00',},
                {key:2,lTitle:'结束时间:',rTitle:'0000-00-00',},
                {key:3,lTitle:'活动地点:',rTitle:'城市名字',},
                {key:4,lTitle:'人均费用:',rTitle:'￥000.00',},
            ],
        }
    }

    backClick(){

    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'创建活动'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <TouchableHighlight>
                    <Image style={styles.showImage} source={{uri:'http://img.51tietu.net/upload/www.51tietu.net/2014-8/201408240241206330.jpg'}}/>
                </TouchableHighlight>
                    <View style={styles.itemView}></View>
                <FlatList
                    data={this.state.itemInfo}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <CreateActicitiesItem itemInfo={item}/></TouchableHighlight>
                                <View style={Stylecss.styles.line}/>
                            </View>
                        );
                    }}
                    keyExtractor={item => item.key.toString()}
                ></FlatList>
                <Text style={Stylecss.styles.set_logout}>下一步</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    showImage:{
      height:UtilScreen.getHeight(372),
        width:'100%',
        resizeMode:'stretch',
    },
    itemView:{
        flexDirection:'column',
        height:UtilScreen.getHeight(98),
        backgroundColor:'#fff',
    },
    redText:{
      fontSize:14,
      marginLeft:UtilScreen.getWidth(40),
        color:'red',
    },
})