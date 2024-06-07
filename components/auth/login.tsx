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
import React from "react";
import { useSignIn } from "@clerk/clerk-expo";

export default function Login({ navigation }: any) {
    const { isLoaded, signIn, setActive } = useSignIn();

    const [error, setError] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSignInPress = async () => {
        if (!isLoaded) return;

        try {
            const completeSignIn = await signIn.create({
                identifier: email,
                password,
                redirectUrl: "/(tabs)/",
            });
            // This is an important step,
            // This indicates the user is signed in
            await setActive({ session: completeSignIn.createdSessionId });
        } catch (errors: any) {
            console.log(errors.clerkError);
            setError(errors.errors[0].longMessage);
        }
    };

    return (
        <SafeAreaView className="bg-green-100 h-full">
            <View className="mt-32 mx-auto space-y-5">
                <Image source={logoA} className="h-[100px] w-[100px] mx-auto" />
                <View className="w-72 bg-white rounded-lg shadow">
                    <View className="p-6 space-y-5">
                        <Text
                            className="text-3xl text-green-950 text-center"
                            style={{ fontFamily: "SFUI_Bold" }}
                        >
                            Sign In
                        </Text>
                        {error ? (
                            <Text className="text-md text-red-600 text-center">
                                {error}
                            </Text>
                        ) : null}
                        <View>
                            <Text className="text-xl block mb-2 font-medium text-gray-900 ">
                                Email
                            </Text>
                            <TextInput
                                value={email}
                                onChangeText={(value) => setEmail(value)}
                                keyboardType="email-address"
                                textContentType="emailAddress"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-2"
                            />
                        </View>
                        <View>
                            <Text className="text-xl block mb-2 font-medium text-gray-900 ">
                                Password
                            </Text>
                            <TextInput
                                secureTextEntry
                                value={password}
                                onChangeText={(value) => setPassword(value)}
                                keyboardType="visible-password"
                                textContentType="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm px-2"
                            />
                        </View>

                        <Pressable
                            onPress={onSignInPress}
                            className="active:outline-none text-white bg-green-700 active:bg-green-800 active:ring-4 active:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                        >
                            <Text
                                className="text-white text-center"
                                style={{ fontFamily: "Montserrat_Black" }}
                            >
                                Sign In
                            </Text>
                        </Pressable>

                        <View className="flex flex-row space-x-1">
                            <Text>Don't have an account?</Text>
                            <Pressable
                                onPress={() => navigation.navigate("Register")}
                            >
                                <Text className="text-blue-500 text-center">
                                    Sign Up!
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
