import React, {Component} from "react";
import {ScrollView, Text, View, TextInput} from "react-native";
import {
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener,
    widthPercentageToDP
} from "react-native-responsive-screen";
import Theme from "../../components/Theme";
import {BackgroundColor, FullStretch, Position} from "../../components/Layout";
import { Box, AbsBox, TapHighlightBox, TapOpacityBox } from "../../components/assets/atoms/Box";
import FullScreenView from "../../components/templates/FullScreenView";

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
            <Box bg="green" h={"100%"}>
                <Box alignCenter w={50} h={50} bg="red">
                    <Text>[A]</Text>
                </Box>
                <TapHighlightBox alignCenter w={50} h={50} bg="blue">
                    <Text>[B]</Text>
                </TapHighlightBox>
                <TapOpacityBox alignCenter w={50} h={50} bg="yellow">
                    <Text>[C]</Text>
                </TapOpacityBox>
            </Box>
        )
    }
}
