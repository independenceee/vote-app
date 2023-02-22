import React, { useState, useLayoutEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StatusBar,
    Alert,
    SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation, useTheme } from "@react-navigation/native";
import TypeWriter from "react-native-typewriter";

const styles = {
    container: `flex-1 bg-[#009387] `,
    header: `flex-1 justify-end p-5 t.pB12`,
    headerText: `text-[#fff] font-bold text-[30px]`,
    footer: `flex-[3] bg-[#fff] rounded-tl-[30px] rounded-tr-[30px]`,
    footerText: `text-[#05375a] text-[18px]`,
    action: `flex-row mt-[10px] border-b-[#f2f2f2] pb-[5px]`,
    actionError: `flex-row mt-[10px] border-b-w-[1px] border-b-[#FF0000] pb-[5px]`,
    textInput: `flex-1 mt-[${
        Platform.OS === "ios" ? 0 : -12
    }px] pl-[10px] text-[#05375a]`,
    errorMessage: `text-[#FF0000] text-[14px] `,
    button: `items-center mt-[50px] `,
    signIn: `w-[100%] h-[50px] justify-center items-center rounded-[10px] bg-[#01ab9d]`,
    signUp: `w-[100%] h-[50px] justify-center items-center rounded-[10px]`,
    textSign: `text-[18px] font-bold text-[#ffffff]`,
    textSignUp: `text-[18px] font-bold text-[#009387]`,
};

const SignInScreen = function () {
    const { colors } = useTheme();
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
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const updateSecureTextEntry = function () {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const handleTextInputChange = function (value) {
        if (value.trim().length >= 4) {
            setData({
                ...data,
                username: value,
                checkTextInputChange: true,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                username: value,
                checkTextInputChange: false,
                isValidUser: false,
            });
        }
    };

    const handlePasswordChange = function (value) {
        if (value.trim().length >= 8) {
            setData({
                ...data,
                password: value,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password: value,
                isValidPassword: false,
            });
        }
    };

    const handleValidUser = (value) => {
        if (value.trim().length >= 4) {
            setData({
                ...data,
                isValidUser: true,
            });
        } else {
            setData({
                ...data,
                isValidUser: false,
            });
        }
    };

    const handleLogin = function (username, password) {};

    return (
        <SafeAreaView className={styles.container}>
            <View className={styles.container}>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />
                <View className={styles.header}>
                    <Text className={styles.headerText}>
                        <TypeWriter>Welcome !</TypeWriter>
                    </Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                    }}
                    className={styles.footer}
                >
                    <Text className={styles.footerText}>Gmail</Text>
                    <View className={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Email"
                            placeholderTextColor="#666666"
                            className={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(value) =>
                                handleTextInputChange(value)
                            }
                            onEndEditing={(e) =>
                                handleValidUser(e.nativeEvent.text)
                            }
                        />
                        {data.checkTextInputChange ? (
                            <Animatable.View animation="bounceIn">
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                        ) : null}
                    </View>

                    {data.isValidUser ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text className={styles.errorMessage}>
                                Gmail must be characters long.
                            </Text>
                        </Animatable.View>
                    )}
                    <Text className={styles.footerText}>Password</Text>
                    <View className={styles.action}>
                        <Feather name="lock" color={colors.text} size={20} />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="#666666"
                            className={styles.textInput}
                            secureTextEntry={data.secureTextEntry}
                            autoCapitalize="none"
                            onChangeText={(value) =>
                                handlePasswordChange(value)
                            }
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                            {data.secureTextEntry ? (
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                            ) : (
                                <Feather name="eye" color="grey" size={20} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null : (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text className={styles.errorMessage}>
                                Password must be 8 characters long.
                            </Text>
                        </Animatable.View>
                    )}
                    <TouchableOpacity>
                        <Text style={{ color: "#009387", marginTop: 15 }}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                    <View className={styles.button}>
                        <TouchableOpacity
                            onPress={() => {
                                handleLogin(data.username, data.password);
                            }}
                            className={styles.signIn}
                        >
                            <View className={styles.signIn}>
                                <Text className={styles.textSign}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUpScreen")}
                            className={styles.signUp}
                            style={{
                                borderColor: "#009387",
                                borderWidth: 1,
                                marginTop: 15,
                            }}
                        >
                            <Text className={styles.textSignUp}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
};

export default SignInScreen;
