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
import { Box, AbsBox } from "../../components/assets/atoms/Box";
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
            <Box direction="bottom"
              bg="green"
              h={"100%"}
              verticalAlign="space-around"
              horizontalAlign="center">
                <Box verticalAlign="space-around" horizontalAlign="center" w={50} h={50} bg="red">
                    <Text>[A]</Text>
                </Box>
                <Box verticalAlign="space-around"
              horizontalAlign="center" w={50} h={50} bg="blue">
                    <Text>[B]</Text>
                </Box>
                <Box verticalAlign="space-around"
                     horizontalAlign="center" w={50} h={50} bg="yellow">
                    <Text>[C]</Text>
                </Box>
                <AbsBox w={50} h={50} bg="orange" verticalAlign="center"
              horizontalAlign="center" style={{
                    bottom: 0, left: 0
                }}>
                    <Text>[D]</Text>
                </AbsBox>
            </Box>
        )
    }
}
