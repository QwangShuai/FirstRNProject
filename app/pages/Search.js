import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
const Stylecss = require('../common/Stylecss');
export default class Search extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            itemInfo:[
                {key: 0, title:'搜索搜索搜索',},
                {key: 1, title:'搜索搜索搜索搜搜搜搜索苏so撒的撒多搜索',},
                {key: 2, title:'搜索搜索搜索大萨达撒多撒多撒多撒多撒多',},
                {key: 3, title:'搜索搜索搜索',},
            ],
            searchTitle:'取消',
            inputText:'',
            isState:true,
            historyTitle:'历史记录',
            titleTopHeight:UtilScreen.getWidth(50),
            titleBottomHeight:UtilScreen.getWidth(28),
            titleHeight:UtilScreen.getHeight(40),
        }
    }

    backClick(){
        this.props.navigation.navigate('MainTabPage');
    }
    updateState(inputText){
        if(inputText.length===0){
            this.setState(
                {
                    // searchTitle:'搜索',
                    titleTopHeight:UtilScreen.getWidth(50),
                    titleBottomHeight:UtilScreen.getWidth(28),
                    titleHeight:UtilScreen.getHeight(40),
                    isState:true,
                }
            )
        } else{
            this.setState(
                {
                    // searchTitle:'取消',
                    inputText:inputText,
                    titleTopHeight:0,
                    titleBottomHeight:0,
                    titleHeight:0,
                    isState:false,
                }
            )
        }

    }
    submit(){

    }
    search(){
        if(this.state.searchTitle==="搜索"){

        } else {
            this.setState({
                inputText:'',
            })
            this.updateState("")
        }
    }

    itemClick(item) {

    }
    render(){
            return(
                <View style={Stylecss.styles.container}>
                    <View style={styles.myView}>
                        <View style={styles.searchStyle}>
                            <Image style={styles.imageStyle} source={require('../res/images/6F.png')} resizeMode='contain'/>
                            <TextInput style={{flex:1,fontSize:14,padding:0}} placeholder='搜索文章/景点' underlineColorAndroid='transparent'
                                       onChangeText={this.updateState.bind(this)} onSubmitEditing={this.submit.bind(this)}
                                        ref='myInput'/>
                        </View>
                        <Text style={styles.cancelStyle} onPress={this.backClick.bind(this)}>{this.state.searchTitle}</Text>
                    </View>
                    <Text style={[styles.historyTitle,{marginTop:this.state.titleTopHeight,marginBottom:this.state.titleBottomHeight,height:this.state.titleHeight}]}>历史记录</Text>
                    <FlatList
                        data={this.state.itemInfo}
                        renderItem={({item}) => {
                            if(this.state.isState){
                                return (
                                    <View>
                                        <TouchableHighlight
                                            numColumns={2}
                                            underlayColor={'#f8f8f8'}
                                            onPress={this.itemClick.bind(this, item)}>
                                            <Text style={styles.itemStyle}>{item.title}</Text>
                                        </TouchableHighlight>
                                        <View style={styles.line}/>
                                    </View>
                                );
                            } else {
                                return (
                                    <View>
                                        <TouchableHighlight
                                            numColumns={2}
                                            underlayColor={'#f8f8f8'}
                                            onPress={this.itemClick.bind(this, item)}>
                                            <Text>{item.title}</Text>
                                        </TouchableHighlight>
                                        <View style={styles.line}/>
                                    </View>
                                );
                            }
                        }}
                        keyExtractor={item => item.key.toString()}
                    ></FlatList>
                </View>
            )
    }
}
const styles = StyleSheet.create({
    myView:{
        marginTop:UtilScreen.getHeight(20),
        width:'100%',
        height:UtilScreen.getHeight(64),
        alignSelf:'center',
        backgroundColor:'#ffffff',
        flexDirection:'row',
    },
    searchStyle:{
        marginLeft:UtilScreen.getWidth(20),
        flexDirection:'row',
        borderRadius:UtilScreen.getWidth(34),
        width:UtilScreen.getWidth(634),
        height:UtilScreen.getHeight(64),
        borderWidth:UtilScreen.getWidth(2),
        borderColor:'#FEA81F',
    },
    imageStyle:{
        margin:UtilScreen.getWidth(24),
        alignSelf:'center',
        width:UtilScreen.getWidth(24),
        height:UtilScreen.getHeight(24),
    },
    cancelStyle:{
        marginLeft:UtilScreen.getHeight(20),
        lineHeight:UtilScreen.getHeight(64),
        textAlign:'center',
        fontSize:14,
        color:'#333333',
        alignSelf:'center',
    },
    historyTitle:{
      fontSize:14,
      color:'#333333',
      marginLeft:UtilScreen.getWidth(20),
        // marginTop:UtilScreen.getHeight(50),
        // marginBottom:UtilScreen.getHeight(28),
    },
    itemStyle:{
        // width:UtilScreen.getWidth(244),
        height:UtilScreen.getHeight(60),
        backgroundColor:'#e6e6e6',
        borderRadius:UtilScreen.getHeight(35),
        fontSize:12,
        color:'#333333',
        alignSelf:'center',
        marginLeft:UtilScreen.getWidth(20),
        marginRight:UtilScreen.getWidth(10),
        padding:UtilScreen.getWidth(10),
    },
})