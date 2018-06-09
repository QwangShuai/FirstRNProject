/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    YellowBox,
    PixelRatio
} from 'react-native';
const GlobalParams =require('./app/util/GlobalParams');
import RouterConfig from './app/router/RouterConfig';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}
                  onLayout={(event) => {
                      var viewHeight = event.nativeEvent.layout.height;
                      GlobalParams.screenHeight=viewHeight;
                  }}
            >
            <RouterConfig/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
