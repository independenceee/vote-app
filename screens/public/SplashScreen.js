import React, { useLayoutEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StatusBar,
    Image,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.28;

const styles = {
    container: `flex-1 bg-[#009387] w-[100%]`,
    header: `flex-2 justify-center items-center`,
    logo: `w-[${heightLogo}] h-[${heightLogo}] rounded-full`,
    footer: `flex-1 bg-[#fff] rounded-tl-[30px] rounded-tr-[30px]`,
    title: `font-bold text-[30px] text-[#05375a]`,
    text: `text-grey mt-[5px]`,
    button: `items-end mt-[30px]`,
    signIn: `bg-[#01ab9d] flex-row rounded-[50px] w-[150px] h-[40px] justify-center items-center`,
    textSign: `text-white font-bold`,
};

const SplashScreen = function () {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    return (
        <SafeAreaView className={styles.container}>
            <View className={styles.container}>
                <StatusBar backgroundColor="#009387" barStyle="light-content" />
                <View className={styles.header} style={{ flex: 2 }}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require("../../assets/images/logo.png")}
                        className={styles.logo}
                        resizeMode="stretch"
                    />
                </View>

                <Animatable.View
                    className={styles.footer}
                    style={{
                        flex: 1,
                        paddingVertical: 50,
                        paddingHorizontal: 30,
                    }}
                    animation="fadeInUpBig"
                >
                    <Text className={styles.title}>
                        Stay connected with everyone!
                    </Text>
                    <Text className={styles.text}>Sign in with account</Text>
                    <View className={styles.button}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignInScreen")}
                        >
                            <View className={styles.signIn}>
                                <Text className={styles.textSign}>
                                    Get Started
                                </Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color="#fff"
                                    size={20}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        </SafeAreaView>
    );
};

export default SplashScreen;
