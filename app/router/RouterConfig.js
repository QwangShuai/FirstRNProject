import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginLeaf from '../pages/LoginLeaf';
import WaitingLeaf from '../components/WaitingLeaf';
import Registered from '../pages/Registered';
import Set from '../pages/Set';
import PersonalInfo from '../pages/PersonalInfo';
const RouterConfig = StackNavigator({
    PersonalInfo:{screen:PersonalInfo},
    Home: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf },
    Register:{screen:Registered},
    Set:{screen:Set},
});
export default RouterConfig;