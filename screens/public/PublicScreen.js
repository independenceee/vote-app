import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./SplashScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const Root = createStackNavigator();

const PublicScreen = function () {
    return (
        <Root.Navigator>
            <Root.Screen name="SplashScreen" component={SplashScreen} />
            <Root.Screen name="SignInScreen" component={SignInScreen} />
            <Root.Screen name="SignUpScreen" component={SignUpScreen} />
        </Root.Navigator>
    );
};

export default PublicScreen;
