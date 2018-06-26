import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen';
import CheckOrder from '../pages/CheckOrder';
import MainTabPage from './MainTabPage';
const Stylecss = require('../common/Stylecss');


export default class Order extends Component {
    static navigationOptions = {
        headerStyle: {height: 0},
    };
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    backClick(){
        this.props.navigation.goBack();
    }
    selectImages(images){
        console.log(images)
    }
    render(){
        return(
            <View style={Stylecss.styles.container}>
                <ToolBar title={'查看订单'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <CheckOrder
                    screenProps={{ rootNavigation: this.props.navigation }}
                   //navigation={this.props.navigation}
                   // routeName={this.props.navigation.state.params.routeName}
                />
            </View>
        )
    }
}
//Order.router=Order.MainTabPage;
