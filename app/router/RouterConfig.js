import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginLeaf from '../pages/LoginLeaf';
import WaitingLeaf from '../components/WaitingLeaf';
import Registered from '../pages/Registered';
import Set from '../pages/Set';
const RouterConfig = StackNavigator({
    Home: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf },
    Register:{screen:Registered},
    Set:{screen:Set},
});
export default RouterConfig;
// AppRegistry.registerComponent('LearnRN', () => SimpleApp);