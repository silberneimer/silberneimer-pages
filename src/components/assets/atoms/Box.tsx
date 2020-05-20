import React from "react";
import { View, ViewStyle, StyleProp } from "react-native";

export type ViewSize = string | number

export type BoxGravityDirection = "top" | "bottom" | "right" | "left"

export type BoxGravityHorizontalAlign = "center"

export type BoxGravityVerticalAlign = /*"start"*/ 
                                        // | "end" 
                                        | "center" 
                                        | "space-between"
                                        | "space-around"

export type BoxProps = {
    // View size
    w?: ViewSize,
    h?: ViewSize,
    // View flex direction
    direction?: BoxGravityDirection,
    verticalAlign?: BoxGravityVerticalAlign,
    horizontalAlign?: BoxGravityHorizontalAlign,
    // View position
    absolute?: boolean,
    // View style
    bg?: string, backgrondColor?: string,
    style?: StyleProp<ViewStyle>
}

export const AbsBox: React.FC<BoxProps> = (props) => {
    return (
        <Box {...props} absolute>
            {props.children}
        </Box>
    )
}

export const Box: React.FC<BoxProps> = (props) => {
    return (
        <View style={[
            props.style,
            {
                width: props.w,
                height: props.h,
            },
            {
                flexDirection: createFlexDirection(props),
                justifyContent: props.verticalAlign,
                alignItems: props.horizontalAlign,
                position: createFlexPosition(props),
                backgroundColor: props.bg !== undefined ? 
                    props.bg : props.backgrondColor,
            }
        ]}>
            {props.children}
        </View>
    )
};

type flexDirection = "column" | "column-reverse" | "row" | "row-reverse"
type flexDirectionFn = (props: BoxProps) => flexDirection | undefined
const createFlexDirection: flexDirectionFn = (props) => {
    if (props.absolute === true) {
        return undefined
    } else if (!props.direction) {
        return "column"
    }
    switch (props.direction) {
        case "top":
            return "column-reverse"
        case "bottom":
            return "column"
        case "right":
            return "row"
        case "left":
            return "row-reverse"
    }
}

type flexPosition = "absolute" | "relative"
type flexPositionFn = (props: BoxProps) => flexPosition | undefined;
const createFlexPosition: flexPositionFn = (props) => {
    const absolute = props.absolute !== undefined ? props.absolute : false
    if (absolute === true) {
        return "absolute"
    }
    return "relative"
}