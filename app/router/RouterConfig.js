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
import ApplyRealName from '../components/ApplyRealName';
import MyAlbumitem from '../components/MyAlbumGridView';
import PickerViewDemo from '../components/PickerViewDemo';
import Apply from '../pages/Apply';
import ApplyPaymentSuccess from '../components/ApplyPaymentSuccess';
import CreateActivities from '../pages/CreateActivities';
import SetModal from '../components/SetModal';
import Feedback from '../pages/Feedback';
import Agreement from '../pages/Agreement';
import FeedbackItem from '../components/FeedbackItem';
import UploadImageGridView from '../components/UploadImageGridView';
import MyAlbum from '../pages/MyAlbum';
import AddContent from '../pages/AddContent';
import FocusOnActivities from '../pages/FocusOnActivities';
import FocusOnActivitiesItem from '../components/FocusOnActivitiesItem';
import InitiativesItem from '../components/InitiativesItem';
import Initiatives from '../pages/Initiatives';
import ActivitiesAttended from '../pages/ActivitiesAttended';
import MyPublished from '../pages/MyPublished';
import MyInsertText from '../pages/MyInsertText';
import TeamInsertText from '../pages/TeamInsertText';
import InfoSpeific from '../pages/InfoSpeific';
import InfoCenter from '../pages/InfoCenter';
import PersonalInfoDemo2 from '../pages/PersonalInfoDemo2';
import MyDraftList from '../pages/MyDraftList';
import MyCollectionList from '../pages/MyCollectionList';
import MainTabPage from '../pages/MainTabPage';
import MyPage from '../pages/MyPage';

const RouterConfig = StackNavigator({
    MainTabPage: {screen: MainTabPage,
        navigationOptions:{
            headerStyle: {height: 0},
        }
    },
    Home: {screen: LoginLeaf},
    Registered:{screen:Registered},
    //?
    TeamInsertText: {screen: TeamInsertText},
    MyInsertText: {screen: MyInsertText},
    MyPublished: {screen: MyPublished},
    ActivitiesAttended: {screen: ActivitiesAttended},
    Initiatives: {screen: Initiatives},
    InitiativesItem: {screen: InitiativesItem},
    InfoSpeific: {screen: InfoSpeific},
    InfoCenter: {screen: InfoCenter},
    Registered: {screen: Registered},
    // FocusOnActivitiesItem:{screen:FocusOnActivitiesItem},
    FocusOnActivities: {screen: FocusOnActivities},
    AddContent: {screen: AddContent},
    MyAlbum: {screen: MyAlbum},
    Agreement: {screen: Agreement},
    Home: {screen: LoginLeaf},
    // FeedbackItem:{screen:FeedbackItem},
    Agreement: {screen: Agreement},
    Feedback: {screen: Feedback},
    // SetModal:{screen:SetModal},
    CreateActivities: {screen: CreateActivities},
    PersonalInfo: {screen: PersonalInfo},
    // ApplyPaymentSuccess:{screen:ApplyPaymentSuccess},
    // ApplyRealName:{screen:ApplyRealName},
    // ApplyPaymentState:{screen:ApplyPaymentState},
    Set: {screen: Set},
    Apply: {screen: Apply},

    Wait: {screen: WaitingLeaf},


    PersonalInfoHead: {screen: PersonalInfoHead},
    Update: {screen: Update},
    PickerViewDemo: {screen: PickerViewDemo},
    MyCollectionList: {screen: MyCollectionList},
    MyDraftList: {screen: MyDraftList},
    PersonalInfoDemo2: {screen: PersonalInfoDemo2},
});
export default RouterConfig;