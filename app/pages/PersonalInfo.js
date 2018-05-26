import React, {Component} from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import ToolBar from '../components/ToolBar';
import UtilScreen from '../util/UtilScreen'
import PersonalInfoHead from '../components/PersonalInfoHead';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.test = '回上个页面';
    }
    static navigationOptions = {
        // title:'登录',
        headerStyle:{height:0},
    };
    /**
     * ToolBar 点击按钮回调
     */
    backClick() {
        alert(this.test)
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar title={'个人中心'} isShowBack={true} backClick={this.backClick.bind(this)}/>
                <PersonalInfoHead/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
});