import React from "react";

import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootStackScreen from "./screens/RootStackScreen";

const App = function () {
    return (
        <TailwindProvider>
            <NavigationContainer>
                <RootStackScreen />
            </NavigationContainer>
        </TailwindProvider>
    );
};

export default App;
