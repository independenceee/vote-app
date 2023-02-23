import React from "react";

import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";

import PublicScreen from "./screens/public";

const App = function () {
    return (
        <TailwindProvider>
            <NavigationContainer>
                <PublicScreen />
            </NavigationContainer>
        </TailwindProvider>
    );
};

export default App;
