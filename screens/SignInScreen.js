import React, { useState, useLayoutEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation, useTheme } from "@react-navigation/native";

const styles = {
    container: `flex-1 bg-[#009387] `,
    header: `flex-1 justify-end p-5 t.pB12`,
    headerText: `text-[#fff] font-bold text-[30px]`,
};

const SignInScreen = function () {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [data, setData] = useState({
        username: "",
        password: "",
        checkTextInputChange: false,
        secureTextExtry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    return (
        <SafeAreaView className={styles.container}>
            <View className={styles.container}>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />
                <View className={styles.header}>
                    <Text className={styles.headerText}>Welcome!</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignInScreen;
