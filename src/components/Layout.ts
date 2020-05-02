import {StyleProp, ViewStyle} from "react-native";

export const BackgroundColor: (color: string) => StyleProp<ViewStyle> = (color) => {
    return {
        backgroundColor: color
    }
};

export const Absolute: StyleProp<ViewStyle> = {
    flex: 1, flexGrow: 1,
    position: 'absolute',
};

export type PositionValue = number | string;
export const Position = (top: PositionValue = "",
                         bottom: PositionValue = "",
                         right: PositionValue = "",
                         left: PositionValue = ""): StyleProp<ViewStyle> => {
    return {
        flex: 1, flexGrow: 1,
        position: 'absolute',
        top: top, bottom: bottom, right: right, left: left,
    }
};
export const POS = Position;
export const FullStretch = POS(0, 0,0 ,0);

export type PaddingValue = number | string;
export const Padding = (top: PaddingValue = "",
                        bottom: PaddingValue = "",
                        right: PaddingValue = "",
                        left: PaddingValue = ""): StyleProp<ViewStyle> => {
    return {
        paddingTop: top, paddingBottom: bottom, paddingRight: right, paddingLeft: left,
    }
};
export const P = Padding;

export const PaddingTop = (value: PaddingValue = ""): StyleProp<ViewStyle> => {
    return {
        paddingTop: value
    }
};
export const PT = PaddingTop;

export const PaddingBottom = (value: PaddingValue = ""): StyleProp<ViewStyle> => {
    return {
        paddingBottom: value
    }
};
export const PB = PaddingBottom;

export const PaddingRight = (value: PaddingValue = ""): StyleProp<ViewStyle> => {
    return {
        paddingRight: value
    }
};
export const PR = PaddingRight;

export const PaddingLeft = (value: PaddingValue = ""): StyleProp<ViewStyle> => {
    return {
        paddingLeft: value
    }
};
export const PL = PaddingLeft;
