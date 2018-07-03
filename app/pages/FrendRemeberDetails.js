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
    ImageBackground,
    ScrollView
} from 'react-native';
import ToolBar from '../components/ToolBar';
import ActivityView from '../components/ActivityView';
import UtilScreen from '../util/UtilScreen';
import PolyContentItem from '../components/PolyContentItem';

const Stylecss = require('../common/Stylecss');
export default class FrendRemeberDetails extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };

    constructor(props) {
        super(props);
        this.state = {
            item: {
                pic: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                title: '标题标题标题标题标题标题标题标 题标题标题标题标题标题标题标题',
                look: '123456',
                nickname:'盗将行',
                pffavorite: '123456',
                userpic: {uri: 'http://pic10.nipic.com/20101003/2531170_181124047910_2.jpg'},
                level: '123',
                begin_time:'2018.05.01',
                end_time:'2018.05.02',
                city:'上海',
                price:'￥1500.00',
            }
        }
    }
    backClick() {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <ScrollView>
                <View style={Stylecss.styles.container}>
                    <ToolBar title={'友记详情'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                    <Image style={{height: UtilScreen.getHeight(372), width: '100%', resizeMode: 'stretch'}}
                           source={this.state.item.pic}/>
                    <Text style={styles.titleStyle}>{this.state.item.title}</Text>
                    <View style={{
                        marginTop: UtilScreen.getHeight(20),
                        // width: UtilScreen.getWidth(480),
                        height: UtilScreen.getHeight(40),
                        marginLeft:UtilScreen.getWidth(40),
                        flexDirection: 'row'
                    }}>
                        <Image style={{
                            width: UtilScreen.getWidth(40),
                            height: UtilScreen.getHeight(40),
                            resizeMode: 'contain'
                        }} source={require('../res/images/eyes.png')}/>
                        <Text style={styles.textStyle}>浏览：{this.state.item.look}</Text>
                        <Image style={{
                            width: UtilScreen.getWidth(26),
                            height: UtilScreen.getHeight(40),
                            resizeMode: 'contain',
                            marginLeft: UtilScreen.getWidth(20)
                        }} source={require('../res/images/heart-y.png')}/>
                        <Text style={styles.textStyle}>关注：{this.state.item.pffavorite}</Text>
                    </View>
                    <View style={{height:UtilScreen.getHeight(3),width:UtilScreen.getWidth(710),backgroundColor:"#e5e5e5",alignSelf:'center',marginTop:UtilScreen.getHeight(10),
                        marginBottom:UtilScreen.getHeight(30)}} />
                    <View style={styles.viewStyle}>
                        <View>
                           <View style={{marginTop:UtilScreen.getHeight(20),flexDirection:'row'}}>
                                <Image style={styles.imageView} source={require('../res/images/time-start.png')}/>
                           </View>
                        </View>
                        <View style={{position:'absolute',right:UtilScreen.getWidth(32)}}>
                            <Image style={{height:UtilScreen.getHeight(140),width:UtilScreen.getHeight(140),borderRadius:UtilScreen.getHeight(140)}} source={this.state.item.userpic} />
                            <Text style={{color:'#333333',fontSize:12,marginLeft:UtilScreen.getHeight(10),alignSelf:'center'}}>{this.state.item.nickname}</Text>
                            {/*<ImageBackground/>*/}
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    titleStyle:{
        alignSelf:'center',
      color:'#333333',
      fontSize:18,
        width:UtilScreen.getWidth(670),
        height:UtilScreen.getHeight(100),
        marginTop:UtilScreen.getHeight(30),
    },
    viewStyle:{
        height:UtilScreen.getHeight(223),
        marginLeft:UtilScreen.getWidth(40),
        flexDirection:'row',
    },
    imageView: {
        height: UtilScreen.getHeight(40),
        width: UtilScreen.getWidth(40),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    textView:{
        marginLeft:UtilScreen.getWidth(10),
        color:'#333333',
        fontSize:14,
        lineHeight:UtilScreen.getHeight(40),
        textAlign:'center',
    },

})