import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    TextInput,
    SafeAreaView,
    ScrollView,
} from "react-native";

import placeholderImage from "../../assets/images/placeholder-shop.jpg";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { AnimatedView } from "react-native-reanimated/lib/typescript/reanimated2/component/View";
import shopNear from "@/types/shop";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "@/components/home/main";
import ShopDetails from "@/components/home/shop-details";
import ItemDetails from "@/components/home/item-details";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <SafeAreaView className="bg-green-100 h-full">
            <Stack.Navigator
                initialRouteName="Main"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="ShopDetails" component={ShopDetails} />
                <Stack.Screen name="ItemDetails" component={ItemDetails} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
