/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Alert,
    Text,
    View
} from 'react-native';
import RoundButton from "./src/component/ui/RoundButton";


export default class App extends Component<{}> {

    onclick = () => {
        Alert.alert("Button Click");
    }

    render() {
        return (
            <View>
                <RoundButton onPress={this.onclick} name="NEXT"  btnPadding={7} btnHeight={35}
                             btnWidth={270} btnMargin={50}/>
            </View>
        );
    }
}

