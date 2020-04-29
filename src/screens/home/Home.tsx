import React, {Component} from "react";
import {Alert, ScrollView, Text, View} from "react-native";
import {
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener,
    widthPercentageToDP
} from "react-native-responsive-screen";
import Theme from "../../components/Theme";

export class Home extends Component<{}> {

    componentDidMount() {
        listenOrientationChange(this);
    }

    componentWillUnmount() {
        removeOrientationListener();
    }

    render() {
        const isPhoneStyle = widthPercentageToDP(100) < 960;
        return (
            <React.Fragment>
                <ScrollView onLayout={() => {
                    
                }}>
                    <View style={[{
                        backgroundColor: Theme.elements.background,
                        height: heightPercentageToDP(isPhoneStyle ? 100 : 50)
                    }]}>
                        <Text style={[{
                            color: Theme.elements.headline
                        }]}>
                            test1
                        </Text>
                    </View>
                    <View style={[{
                        backgroundColor: Theme.elements.button,
                        height: heightPercentageToDP(isPhoneStyle ? 100 : 50)
                    }]}>
                        <Text style={[{
                            color: Theme.elements.headline
                        }]}>
                            test2
                        </Text>
                    </View>
                </ScrollView>
            </React.Fragment>
        )
    }
}
