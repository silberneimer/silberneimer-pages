import React from 'react';
import Div100vh from "react-div-100vh";
import {View, Text} from "react-native";
import {Absolute, FullStretch} from "../Layout";

const FullScreenView = (props: {
    children?: React.ReactNode
}) => {
    return (
        <Div100vh>
            <View style={[FullStretch]}>
                {props.children}
            </View>
        </Div100vh>
    )
};

export default FullScreenView;
