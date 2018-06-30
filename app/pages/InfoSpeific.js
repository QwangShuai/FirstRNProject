import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import InfoSpeificItem from '../components/InfoSpeificItem';
const Stylecss = require('../common/Stylecss');
export default class InfoSpeific extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this.state = {
            InfoSpeificItem: [
                {key: 0,rTitie:'热门消息1',lImg:require('../res/images/1.jpg'),rContent:'内容', },
                {key: 1,rTitie:'热门消息2',lImg:require('../res/images/1.jpg'),rContent:'内容',},
                {key: 2,rTitie:'热门消息3',lImg:require('../res/images/1.jpg'),rContent:'内容',},
                {key: 3,rTitie:'热门消息4',lImg:require('../res/images/1.jpg'),rContent:'内容',},
            ],
            modalVisible: true,
        }
    }
    backClick(){
        this.props.navigation.goBack()
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    itemClick(item){
        this.props.navigation.navigate('InfoDetails');
    }
    render(){
        return(
            <View style={styles.container}>
                <ToolBar title={'消息中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.InfoSpeificItem}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={{backgroundColor:'#f8f8f8'}}
                                                    onPress={this.itemClick.bind(this,item)}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <InfoSpeificItem InfoItem={item}/></TouchableHighlight>
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
    });