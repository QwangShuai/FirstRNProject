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
import Apply from  '../pages/Apply';
const RouterConfig = StackNavigator({
    Apply:{screen:Apply},
    Home: {screen: LoginLeaf},
    PersonalInfo: {screen: PersonalInfo},

    Wait: {screen: WaitingLeaf},
    Register: {screen: Registered},
    Set: {screen: Set},

    PersonalInfoHead: {screen: PersonalInfoHead},
    Update: {screen: Update},
});
export default RouterConfig;