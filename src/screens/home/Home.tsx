import React, {Component} from "react";
import {ScrollView, Text, View} from "react-native";
import {
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener,
    widthPercentageToDP
} from "react-native-responsive-screen";
import Theme from "../../components/Theme";
import Dialog from "../../components/assets/atoms/Dialog";
import {BackgroundColor, FullStretch, Position} from "../../components/Layout";

export class Home extends Component<{}> {

    async componentDidMount() {
        listenOrientationChange(this);
    }

    componentWillUnmount() {
        removeOrientationListener();
    }

    render() {
        // const isPhoneStyle = widthPercentageToDP(100) < 960;
        return (
            <></>
        )
    }
}
