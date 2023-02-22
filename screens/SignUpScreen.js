import Reac, { useState, useLayoutEffect } from "react";
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    ScrollView,
    StatusBar,
    SafeAreaView,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const styles = {
    container: `flex-1 bg-[#009387]`,
    header: `flex-1 justify-end `,
    headerText: `text-[#fff] font-bold text-[30px]`,
    footer: `bg-[#fff] rounded-tl-[30px] rounded-tr-[30px] flex-[${
        Platform.OS === "ios" ? 3 : 5
    }] `,
    footerText: `text-[#05375a] text-[18px]`,
    action: `flex-row`,
    textInput: `flex-1 mt-[${Platform.OS == "ios" ? 0 : -12}px] text-[#05375a]`,
    button: `items-center mt-[50px]`,
    signIn: `w-[100%] h-[50px] justify-center items-center rounded-[10px]`,
    textSign: `text-[18px] font-bold`,
    textPrivate: `flex-row mt-[20px] flex-wrap`,
    colorTextPrivate: `text-grey`,
};

const SignUpScreen = function ({}) {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkTextInputChange: false,
        secureTextEntry: true,
        confirmTextEntry: true,
    });

    const handleTextInputChange = function (value) {
        if (value.length !== 0) {
            setData({
                ...data,
                username: value,
                checkTextInputChange: true,
            });
        } else {
            setData({
                ...data,
                username: value,
                checkTextInputChange: false,
            });
        }
    };

    const handlePassword = function (value) {
        setData({
            ...data,
            password: value,
        });
    };

    const handleConfirmPasswordChange = function (value) {
        setData({
            ...data,
            confirmPassword: value,
        });
    };

    const updateSecureTextEntry = function () {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const updateConfirmSecureTextEntry = function () {
        setData({
            ...data,
            confirmTextEntry: !data.confirmTextEntry,
        });
    };

    return (
        <SafeAreaView className={styles.container}>
            <View className={styles.container}>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />
                <View
                    className={styles.header}
                    style={{ paddingHorizontal: 20, paddingBottom: 50 }}
                >
                    <Text className={styles.headerText}>Register Now !</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    className={styles.footer}
                    style={{
                        paddingHorizontal: 20,
                        paddingVertical: 30,
                    }}
                >
                    <ScrollView>
                        <Text className={styles.footerText}>Username</Text>
                        <View
                            className={styles.action}
                            style={{
                                marginTop: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: "#f2f2f2",
                                paddingBottom: 5,
                            }}
                        >
                            <FontAwesome
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Username"
                                className={styles.textInput}
                                style={{
                                    paddingLeft: 10,
                                    marginTop: Platform.OS === "ios" ? 0 : -12,
                                }}
                                autoCapitalize="none"
                                onChangeText={(val) =>
                                    handleTextInputChange(val)
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
                        <Text className={styles.footerText}>Password</Text>
                        <View
                            className={styles.action}
                            style={{
                                marginTop: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: "#f2f2f2",
                                paddingBottom: 5,
                            }}
                        >
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                className={styles.textInput}
                                style={{
                                    paddingLeft: 10,
                                    marginTop: Platform.OS === "ios" ? 0 : -12,
                                }}
                                secureTextEntry={
                                    data.secureTextEntry ? true : false
                                }
                                autoCapitalize="none"
                                onChangeText={(value) => handlePassword(value)}
                            />
                            <TouchableOpacity onPress={updateSecureTextEntry}>
                                {data.secureTextEntry ? (
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                ) : (
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                        <Text className={styles.footerText}>
                            Confirm Password
                        </Text>
                        <View
                            className={styles.action}
                            style={{
                                marginTop: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: "#f2f2f2",
                                paddingBottom: 5,
                            }}
                        >
                            <FontAwesome
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                className={styles.textInput}
                                style={{
                                    paddingLeft: 10,
                                    marginTop: Platform.OS === "ios" ? 0 : -12,
                                }}
                                secureTextEntry={
                                    data.confirmPassword ? true : false
                                }
                                autoCapitalize="none"
                                onChangeText={(value) =>
                                    handleConfirmPasswordChange(value)
                                }
                            />
                            <TouchableOpacity
                                onPress={updateConfirmSecureTextEntry}
                            >
                                {data.secureTextEntry ? (
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                ) : (
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View
                            className={styles.textPrivate}
                            style={{ flexWrap: "wrap", marginTop: 20 }}
                        >
                            <Text className={styles.colorTextPrivate}>
                                By signing up you agree to our
                            </Text>
                            <Text
                                className={styles.textPrivate}
                                style={{ flexWrap: "wrap", marginTop: 20 }}
                            >
                                {" "}
                                Terms of service
                            </Text>
                            <Text className={styles.colorTextPrivate}>
                                {" "}
                                and
                            </Text>
                            <Text className={styles.colorTextPrivate}>
                                {" "}
                                Privacy policy
                            </Text>
                        </View>
                        <View className={styles.button}>
                            <TouchableOpacity
                                className={styles.signIn}
                                onPress={() => {}}
                            >
                                <View className={styles.signIn}>
                                    <Text className={styles.textSign}>
                                        Sign Up
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className={styles.signIn}
                            >
                                <Text className={styles.textSign}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
};

export default SignUpScreen;
