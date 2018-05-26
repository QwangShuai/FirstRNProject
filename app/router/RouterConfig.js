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
import PersonalInfoItem from '../components/PersonalInfoItem';
import PersonalInfoHead from '../components/PersonalInfoHead';
import Update from '../pages/Update';

const RouterConfig = StackNavigator({
    Home: {screen: LoginLeaf},
    Wait: {screen: WaitingLeaf},
    Register: {screen: Registered},
    Set: {screen: Set},
    PersonalInfo: {screen: PersonalInfo},
    PersonalInfoItem: {screen: PersonalInfoItem},
    PersonalInfoHead: {screen: PersonalInfoHead},
    Update: {screen: Update},
});
export default RouterConfig;