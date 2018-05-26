import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginLeaf from '../pages/LoginLeaf';
import WaitingLeaf from '../components/WaitingLeaf';
import Registered from '../pages/Registered';
import Set from '../pages/Set';
import PersonalInfo from '../pages/PersonalInfo';
import PersonalInfoItem from '../components/PersonalInfoItem';
const RouterConfig = StackNavigator({
    Home: { screen: LoginLeaf },
    Wait: { screen: WaitingLeaf },
    Register:{screen:Registered},
    Set:{screen:Set},
    PersonalInfo:{screen:PersonalInfo},
    PersonalInfoItem:{screen:PersonalInfoItem},


});
export default RouterConfig;