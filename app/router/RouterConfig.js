import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginLeaf from '../pages/LoginLeaf';
import WaitingLeaf from '../components/WaitingLeaf';
import Registered from '../pages/Registered';
const RouterConfig = StackNavigator({
    Home: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf },
    Register:{screen:Registered},
});
export default RouterConfig;
// AppRegistry.registerComponent('LearnRN', () => SimpleApp);