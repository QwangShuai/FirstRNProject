import React, { Component } from 'react';
import { AppRegistry ,View,Text,Image,StyleSheet,TextInput,FlatList, TouchableHighlight} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import InfoSpeificItem from '../components/InfoSpeificItem';
const Stylecss = require('../common/Stylecss');
export default class InfoCenter extends Component {
    static navigationOptions = {
        headerStyle:{height:0},
    };
    constructor(props){
        super(props);
        this.state = {
            InfoSpeificItem: [
                {key: 0,rTitie:'热门消息',lImg:require('../res/images/user-1.png'),rMore:'时间', rArrow:require('../res/images/user-1.png'),},
                {key: 1,rTitie:'热门消息',lImg:require('../res/images/user-1.png'),rMore:'时间', rArrow:require('../res/images/user-1.png'),},
            ],
            modalVisible: true,
        }
    }
    backClick(){

    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
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
                                <TouchableHighlight style={Stylecss.styles.lightitem}
                                                    underlayColor={'#f8f8f8'}
                                >
                                    <InfoSpeificItem InfoItem={item}/></TouchableHighlight>
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