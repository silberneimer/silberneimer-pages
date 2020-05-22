import React from "react";
import { View, ViewStyle, StyleProp, FlexAlignType, TouchableHighlight, TouchableOpacity } from "react-native";

export type ViewSize = string | number
export type ViewSpace = string | number
export type JustifyContent = "flex-start" 
                            | "flex-end"
                            | "center" 
                            | "space-between" 
                            | "space-around" 
                            | "space-evenly"

export type BoxGravityDirection = "topToBottom"
                                | "bottomToTop" 
                                | "rightToLeft" 
                                | "leftToRight"

export type BoxGravityHorizontalAlignment = "center" 
                                            | "left" 
                                            | "right" 
                                            | "stretch"
                                            | "baseline"

export type BoxGravityVerticalAlignment = "center" 
                                        | "start" 
                                        | "end"
                                        | "space-between"
                                        | "space-around"
                                        | "space-evenry"

export type BoxProps = {
    // # View size
    w?: ViewSize,       width?: ViewSize,
    h?: ViewSize,       height?: ViewSize,
    z?: number,         zIndex?: number,
    // # View space
    m?:  ViewSpace,     margin?: ViewSpace,
    mt?: ViewSpace,     marginTop?: ViewSpace,
    mr?: ViewSpace,     marginRight?: ViewSpace,
    mb?: ViewSpace,     marginBottom?: ViewSpace,
    ml?: ViewSpace,     marginLeft?: ViewSpace,
    // mx?: ViewSpace,     marginX?: ViewSpace,
    // my?: ViewSpace,     marginY?: ViewSpace,
    p?:  ViewSpace,     padding?: ViewSpace,
    pt?: ViewSpace,     paddingTop?: ViewSpace,
    pr?: ViewSpace,     paddingRight?: ViewSpace,
    pb?: ViewSpace,     paddingBottom?: ViewSpace,
    pl?: ViewSpace,     paddingLeft?: ViewSpace,
    // px?: ViewSpace,     paddingX?: ViewSpace,
    // py?: ViewSpace,     paddingY?: ViewSpace,       
    t?: ViewSpace,      top?: ViewSpace,
    r?: ViewSpace,      right?: ViewSpace,
    b?: ViewSpace,      bottom?: ViewSpace,
    l?: ViewSpace,      left?: ViewSpace,
    // # View flex direction
    gravity?: BoxGravityDirection,

    // ## wrapper for gravity
    topToBottom?: boolean,
    bottomToTop?: boolean,
    leftToRight?: boolean,
    rightToLeft?: boolean,

    // # View flex alignment
    vertical?: BoxGravityVerticalAlignment,
    horizontal?: BoxGravityHorizontalAlignment,

    // ## wrapper for vertical and horizontal

    // ### center
    alignCenter?: boolean,
    alignCenterLeft?: boolean,
    alignCenterRight?: boolean,

    // ### start
    alignStart?: boolean,
    alignStartLeft?: boolean,
    alignStartRight?: boolean,

    // ### end
    alignEnd?: boolean,
    alignEndLeft?: boolean,
    alignEndRight?: boolean,

    // # View multiline


    // # View position
    absolute?: boolean,

    // # View style
    bg?: string, backgrondColor?: string,
    style?: StyleProp<ViewStyle>
}

const mapViewStyle: (props: BoxProps) => StyleProp<ViewStyle> = (props) => {
    const alignPair = alignments(props)
    return [
        props.style,
        {
                width: props.w ?? props.width,
                height: props.h ?? props.height,
                zIndex: props.z ?? props.zIndex,
            },
            {
                margin: props.m ?? props.margin,
                marginTop: props.mt ?? props.marginTop,
                marginBottom: props.mb ?? props.marginBottom,
                marginLeft: props.ml ?? props.marginLeft,
                marginRight: props.mr ?? props.marginRight,
                padding: props.p ?? props.padding,
                paddingTop: props.pt ?? props.paddingTop,
                paddingBottom: props.pb ?? props.paddingBottom,
                paddingRight: props.pr ?? props.paddingRight,
                paddingLeft: props.pl ?? props.paddingLeft,
                top: props.t ?? props.top,
                right: props.r ?? props.right,
                bottom: props.b ?? props.bottom,
                left: props.l ?? props.left,
            },
            {
                flexDirection: createFlexDirection(props),
                justifyContent: alignPair.justifyContent,
                alignItems: alignPair.alignItems,
                position: createFlexPosition(props),
                backgroundColor: props.bg ?? props.backgrondColor,
            },
            {
                flexBasis: undefined,
                flexGrow: undefined,
                flexShrink: undefined,
            },
    ]
}



export const AbsBox: React.FC<BoxProps> = (props) => {
    return (
        <Box {...props} absolute>
            {props.children}
        </Box>
    )
}

export const TapOpacityBox: React.FC<BoxProps> = (props) => {
    return <TouchableOpacity style={mapViewStyle(props)} onPress={() => {}} >
        {props.children}
    </TouchableOpacity>
}

export const TapHighlightBox: React.FC<BoxProps> = (props) => {
    return <TouchableHighlight 
        underlayColor={"white"} 
        style={mapViewStyle(props)} 
        onPress={() => {}}>
        {props.children}
    </TouchableHighlight>
}

export const Box: React.FC<BoxProps> = (props) => {
    return (
        <View style={mapViewStyle(props)}>
            {props.children}
        </View>
    )
};

type flexDirection = "column" | "column-reverse" | "row" | "row-reverse"
type flexDirectionFn = (props: BoxProps) => flexDirection | undefined
const createFlexDirection: flexDirectionFn = (props) => {
    if (props.absolute) {
        return undefined
    } else if (props.topToBottom) {
        return "column"
    } else if (props.bottomToTop) {
        return "column-reverse"
    } else if (props.leftToRight) {
        return "row"
    } else if (props.rightToLeft) {
        return "row-reverse"
    }
    const direction = props.gravity ?? "topToBottom"
    switch (direction) {
        case "topToBottom":
            return "column"
        case "bottomToTop":
            return "column-reverse"
        case "leftToRight":
            return "row"
        case "rightToLeft":
            return "row-reverse"
    }
}

type flexPosition = "absolute" | "relative"
type flexPositionFn = (props: BoxProps) => flexPosition | undefined;
const createFlexPosition: flexPositionFn = (props) => {
    const absolute = props.absolute ?? false
    if (absolute) {
        return "absolute"
    }
    return "relative"
}

const alignments: (props: BoxProps) => {
    justifyContent: JustifyContent | undefined,
    alignItems: FlexAlignType | undefined
} = (props) => {
    if (props.alignCenter) {
        return {
            justifyContent: "center",
            alignItems: "center"
        }
    } else if (props.alignCenterLeft) {
        return {
            justifyContent: "center",
            alignItems: "flex-start"
        }
    } else if (props.alignCenterRight) {
        return {
            justifyContent: "center",
            alignItems: "flex-end"
        }
    } else if (props.alignStart) {
        return {
            justifyContent: "flex-start",
            alignItems: "center"
        }
    } else if (props.alignStartRight) {
        return {
            justifyContent: "flex-start",
            alignItems: "flex-start"
        }
    } else if (props.alignStartLeft) {
        return {
            justifyContent: "flex-start",
            alignItems: "flex-end"
        }
    } else if (props.alignEnd) {
        return {
            justifyContent: "flex-end",
            alignItems: "center"
        }
    } else if (props.alignEndLeft) {
        return {
            justifyContent: "flex-end",
            alignItems: "flex-start"
        }
    } else if (props.alignEndRight) {
        return {
            justifyContent: "flex-end",
            alignItems: "flex-end"
        }
    }
    return {
        justifyContent: props.vertical !== undefined ? 
            createVeticalAlignment(props.vertical) : undefined,
        alignItems: props.horizontal !== undefined ?
            createHorizontalAlignment(props.horizontal) : undefined
    }
}

type vetticalAlignmentFn = (v: BoxGravityVerticalAlignment) => JustifyContent
const createVeticalAlignment: vetticalAlignmentFn = (v) => {
    switch (v) {
        case "start":
            return "flex-start"
        case "end":
            return "flex-end"
        default:
            return v as JustifyContent
    }
}

type horizontalAlignmentFn = (v: BoxGravityHorizontalAlignment) => FlexAlignType
const createHorizontalAlignment: horizontalAlignmentFn = (v) => {
    switch (v) {
        case "left":
            return "flex-start"
        case "right":
            return "flex-end"
        default:
            return v as FlexAlignType
    }
}