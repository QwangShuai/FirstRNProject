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

const RouterConfig = StackNavigator({
    PersonalInfo: {screen: PersonalInfo},
    Home: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf},
    Register: {screen: Registered},
    Set: {screen: Set},
    
    PersonalInfoHead: {screen: PersonalInfoHead},
    Update: {screen: Update},
});
export default RouterConfig;