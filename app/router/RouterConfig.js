import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginLeaf from '../pages/LoginLeaf';
import WaitingLeaf from '../components/WaitingLeaf';
import Registered from '../pages/Registered';
import Set from '../pages/Set';
import PersonalInfo from '../pages/PersonalInfo';
import PersonalInfoHead from '../components/PersonalInfoHead';
import Update from '../pages/Update';
import ApplyPaymentState from '../components/ApplyPaymentState';
import ApplyRealName from  '../components/ApplyRealName';
import PickerViewDemo from '../components/PickerViewDemo';
import Apply from  '../pages/Apply';
import ApplyPaymentSuccess from '../components/ApplyPaymentSuccess';
const RouterConfig = StackNavigator({
    PersonalInfo: {screen: PersonalInfo},
    ApplyPaymentSuccess:{screen:ApplyPaymentSuccess},
    ApplyRealName:{screen:ApplyRealName},
    ApplyPaymentState:{screen:ApplyPaymentState},
    Apply:{screen:Apply},
    Home: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf},
    Register: {screen: Registered},
    Set: {screen: Set},

    PersonalInfoHead: {screen: PersonalInfoHead},
    Update: {screen: Update},
    PickerViewDemo:{screen:PickerViewDemo},
});
export default RouterConfig;