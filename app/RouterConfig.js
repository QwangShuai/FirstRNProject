import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';
import Registered from './Registered';
const RouterConfig = StackNavigator({
    Home: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf },
    Register:{screen:Registered},
});
export default RouterConfig;
// AppRegistry.registerComponent('LearnRN', () => SimpleApp);