import {
    SafeAreaView,
    Text,
    View,
    TextInput,
    Button,
    Pressable,
    Image,
} from "react-native";
import logoA from "@/assets/images/logo-big-nobg.png";
import images from "@/constants/images";
import { useSignUp } from "@clerk/clerk-expo";
import React from "react";
import axios from "axios";
import Env from "@/constants/env";

const validateEmail = (email: string) => {
    const checkEmail = String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (checkEmail) return true;

    return false;
};

export default function Register({ navigation }: any) {
    const { isLoaded, signUp, setActive } = useSignUp();

    const [loading, setLoading] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [error, setError] = React.useState("");
    const [code, setCode] = React.useState("");

    const onSignUpPress = async () => {
        setError("");
        if (!isLoaded) return;

        if (username == "" || emailAddress == "" || password == "")
            return setError("Tolong isi semua kolom.");

        if (!validateEmail(emailAddress)) return setError("Email tidak valid!");

        setLoading(true);
        try {
            await signUp.create({
                username,
                emailAddress,
                password,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            setPendingVerification(true);
        } catch (errors: any) {
            console.log(errors.clerkError);
            setError(errors.errors[0].longMessage);
        }
        setLoading(false);
    };

    const onPressVerify = async () => {
        setError("");
        if (!isLoaded) return;

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification(
                {
                    code,
                }
            );

            await setActive({ session: completeSignUp.createdSessionId });
        } catch (error: any) {
            console.log(JSON.stringify(error, null, 2));
            setError(error.errors[0].longMessage);
        }
    };

    return (
        <SafeAreaView className="bg-green-100 h-full">
            <View className="mt-32 mx-auto space-y-5">
                <Image source={logoA} className="h-[100px] w-[100px] mx-auto" />
                <View className="w-72 bg-white rounded-lg shadow">
                    <View className="p-6 space-y-5">
                        {/* {ceDataOK != "" && ceDataOK ? (
                            <Text>{ceDataOK}</Text>
                        ) : null} */}
                        <Text
                            className="text-3xl text-green-950 text-center"
                            style={{ fontFamily: "SFUI_Bold" }}
                        >
                            Sign Up
                        </Text>
                        {error ? (
                            <Text className="text-md text-red-600 text-center">
                                {error}
                            </Text>
                        ) : null}
                        {pendingVerification ? (
                            <View className="space-y-3">
                                <Text className="text-md text-center">
                                    Masukkan kode yang sudah dikirim ke
                                </Text>
                                <Text className="border rounded-full w-auto mx-auto text-lg bg-green-100 py-1 px-3">
                                    {emailAddress}
                                </Text>
                                <Text
                                    className="text-center text-xl pt-5"
                                    style={{ fontFamily: "Montserrat_Bold" }}
                                >
                                    Code
                                </Text>
                                <TextInput
                                    keyboardType="number-pad"
                                    value={code}
                                    onChangeText={(value) => setCode(value)}
                                    style={{ fontFamily: "SFUI_Bold" }}
                                    className="bg-gray-50 border text-center border-gray-300 text-gray-900 text-xl rounded-xl px-2"
                                />
                                <Pressable
                                    onPress={onPressVerify}
                                    className="active:outline-none text-white bg-green-700 active:bg-green-800 active:ring-4 active:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                                >
                                    <Text
                                        className="text-white text-center"
                                        style={{
                                            fontFamily: "Montserrat_Black",
                                        }}
                                    >
                                        Verifikasi
                                    </Text>
                                </Pressable>
                            </View>
                        ) : (
                            <View className="space-y-5">
                                <View>
                                    <Text className="text-xl block mb-2 font-medium text-gray-900 ">
                                        Username
                                    </Text>
                                    <TextInput
                                        value={username}
                                        onChangeText={(value) =>
                                            setUsername(value)
                                        }
                                        placeholder="Masukkan username..."
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-2"
                                    />
                                </View>
                                <View>
                                    <Text className="text-xl block mb-2 font-medium text-gray-900 ">
                                        Email
                                    </Text>
                                    <TextInput
                                        value={emailAddress}
                                        onChangeText={(val) =>
                                            setEmailAddress(val)
                                        }
                                        textContentType="emailAddress"
                                        placeholder="Masukkan email..."
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-2"
                                    />
                                </View>
                                <View>
                                    <Text className="text-xl block mb-2 font-medium text-gray-900 ">
                                        Password
                                    </Text>
                                    <TextInput
                                        value={password}
                                        onChangeText={(value) =>
                                            setPassword(value)
                                        }
                                        secureTextEntry
                                        placeholder="Masukkan password..."
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-2"
                                    />
                                </View>

                                <Pressable
                                    onPress={onSignUpPress}
                                    disabled={loading}
                                    className="active:outline-none disabled:bg-green-600 text-white bg-green-700 active:bg-green-800 active:ring-4 active:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                                >
                                    <Text
                                        className="text-white text-center"
                                        style={{
                                            fontFamily: "Montserrat_Black",
                                        }}
                                    >
                                        Sign Up
                                    </Text>
                                </Pressable>

                                <View className="flex flex-row space-x-1">
                                    <Text>Already have an account?</Text>
                                    <Pressable
                                        onPress={() =>
                                            navigation.navigate("Login")
                                        }
                                    >
                                        <Text className="text-blue-500 text-center">
                                            Sign In!
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
