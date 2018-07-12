import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginLeaf from '../pages/LoginLeaf';
import Registered from '../pages/Registered';
import Set from '../pages/Set';
import PersonalInfo from '../pages/PersonalInfo';
import Update from '../pages/Update';
import Apply from '../pages/Apply';
import CreateActivities from '../pages/CreateActivities';
import Feedback from '../pages/Feedback';
import Agreement from '../pages/Agreement';
import MyAlbum from '../pages/MyAlbum';
import AddContent from '../pages/AddContent';
import FocusOnActivities from '../pages/FocusOnActivities';
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
import CheckOrder from '../pages/CheckOrder';
import Search from '../pages/Search';
import Order from '../pages/Order';
import PersonalInformation from '../pages/PersonalInformation';
import SimpleSelectCity from '../pages/SimpleSelectCity';
import UploadIdCard from '../pages/UploadIdCard';
import FriendsTogether from '../pages/FriendsTogether';
import CreateFriendRemember from '../pages/CreateFriendRemember';
import InfoDetails from '../pages/InfoDetails';
import MyComments from '../pages/MyComments';
import UnpaidDetails from '../components/UnpaidDetails';
import WaitEvaluationDetails from '../components/WaitEvaluationDetails';
import RefundDetails from '../components/RefundDetails';
import ToTravelDetails from '../components/ToTravelDetails';
import OrderRate from '../components/OrderRate';
import Evaluation from '../pages/Evaluation';
import FirendRemeberDetails from '../pages/FirendRemeberDetails';
import CreateContents from '../pages/CreateContents';
import InitiativesDetails from '../pages/InitiativesDetails';
const RouterConfig = StackNavigator({

    CreateContents: {screen: CreateContents},
    // InitiativesDetails: {screen: InitiativesDetails},
    // CreateActivities: {screen: CreateActivities},
    // Initiatives: {screen: Initiatives},
    // FriendsTogether: {screen: FriendsTogether},
    // Order: {screen: Order},
    // TravelItem: {screen: TravelItem},
    // Apply: {screen: Apply},
    // PersonalInformation:{screen:PersonalInformation},

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
    Update: {screen: Update},
    MyCollectionList: {screen: MyCollectionList},
    MyDraftList: {screen: MyDraftList},
    PersonalInfoDemo2: {screen: PersonalInfoDemo2},
    SimpleSelectCity:{screen:SimpleSelectCity},
    Search:{screen:Search},
    Order: {screen: Order},
    CheckOrder: {screen: CheckOrder},
    UnpaidDetails: {screen: UnpaidDetails},
    UploadIdCard: {screen: UploadIdCard},
    PersonalInformation: {screen: PersonalInformation},
    InfoDetails: {screen: InfoDetails},
    MyComments: {screen: MyComments},
    Evaluation:{screen:Evaluation},
    CreateContents:{screen:CreateContents},
    CreateFriendRemember: {screen: CreateFriendRemember},
    FirendRemeberDetails: {screen: FirendRemeberDetails},
    FriendsTogether:{screen:FriendsTogether},
    InitiativesDetails:{screen:InitiativesDetails},
    RefundDetails: {screen: RefundDetails},
    WaitEvaluationDetails: {screen: WaitEvaluationDetails},
    ToTravelDetails: {screen: ToTravelDetails},
});
export default RouterConfig;