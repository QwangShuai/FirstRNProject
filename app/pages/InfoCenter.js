import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import InfoItem from '../components/InfoItem';
const Stylecss = require('../common/Stylecss');
export default class InfoCenter extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this.state = {
            InfoItem: [
                {key: 0,lImg:require('../res/images/1.jpg'),rTitie:'热门消息',rContent:'内容', rTime:'04月03日',rPice:'4',},
                {key: 1,lImg:require('../res/images/1.jpg'),rTitie:'系统消息',rContent:'内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容', rTime:'04月03日',rPice:'0',},
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
    itemClick(item) {
        this.props.navigation.navigate('InfoSpeific');
    }
    render(){
        return(
            <View style={styles.container}>
                <ToolBar title={'消息中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <FlatList
                    data={this.state.InfoItem}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    onPress={this.itemClick.bind(this, item)}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <InfoItem InfoItem={item}/></TouchableHighlight>
                                <View style={Stylecss.styles.line}/>
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