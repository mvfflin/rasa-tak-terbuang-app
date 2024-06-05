import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CatalogScreen from "./catalog";
import AccountScreen from "./account";

const Stack = createMaterialBottomTabNavigator();

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Stack.Navigator
            initialRouteName="Home"
            activeColor={Colors[colorScheme ?? "dark"].tint}
            barStyle={{ backgroundColor: "#ffffff" }}
            shifting
            activeIndicatorStyle={{ backgroundColor: "#FFFFFF" }}
            labeled={false}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarColor: "#FFFFFF",
                    title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            name={focused ? "grid" : "grid-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Catalog"
                component={CatalogScreen}
                options={{
                    tabBarColor: "#ffffff",
                    title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            name={focused ? "cart" : "cart-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarColor: "",
                    title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            name={focused ? "person" : "person-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            {/* <Tabs.Screen
                name="catalog"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "cart" : "cart-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "person" : "person-outline"}
                            color={color}
                        />
                    ),
                }}
            /> */}
        </Stack.Navigator>
    );
}
