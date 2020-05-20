import {Dialog as PaperDialog, Paragraph} from "react-native-paper";
import {View} from "react-native";
import React from "react";
import {FullStretch} from "../../Layout";

const Box: React.FC<{

}> = (props) => {
    console.log(props)
    return (
        <View></View>
    )
}

const Dialog: React.FC<{
    title: string,
    description: string,
    visible: boolean,
    onDismiss: () => void
}> = (props) => {
    const defaultColor = "white";
    const defaultRadius = 4;
    const width = 500;
    const height = 200;
    return (
        <PaperDialog
            visible={props.visible}
            style={[{
                alignSelf: "center",
                width: width,
                height: height,
                backgroundColor: defaultColor
            }]}
            onDismiss={props.onDismiss}>
            <View style={[FullStretch]}>
                <PaperDialog.Title>{props.title}</PaperDialog.Title>
                <PaperDialog.Content>
                    <Paragraph>{props.description}</Paragraph>
                </PaperDialog.Content>
                {props.children}
            </View>
        </PaperDialog>
    )
};

export default Dialog;
