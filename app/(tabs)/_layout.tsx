import { Redirect, Tabs, useNavigationContainerRef } from "expo-router";
import React, { useEffect, useState } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AccountScreen from "./account";
import CartScreen from "./cart";
import {
    ParamListBase,
    RouteProp,
    getFocusedRouteNameFromRoute,
} from "@react-navigation/native";

const Stack = createBottomTabNavigator();

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const [ready, setReady] = useState(false);
    const nav = useNavigationContainerRef();

    useEffect(() => {
        if (!nav.isReady) return;

        setReady(true);
    }, [nav.isReady]);

    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 70,
                },
                tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
                tabBarInactiveTintColor: "#000000",
            }}
            // activeColor={Colors[colorScheme ?? "dark"].tint}
            // barStyle={{ backgroundColor: "#ffffff" }}
            // shifting
            // activeIndicatorStyle={{ backgroundColor: "#FFFFFF" }}
            // labeled={false}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ route }) => ({
                    title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            name={focused ? "grid" : "grid-outline"}
                            color={color}
                        />
                    ),
                    tabBarStyle: ((route: RouteProp<ParamListBase>) => {
                        const routeName = getFocusedRouteNameFromRoute(route);

                        console.log(routeName);
                        if (routeName === "ShopDetails") {
                            return { display: "none" };
                        }
                        return { height: 70 };
                    })(route),
                })}
                // options={{
                // tabBarColor: "#FFFFFF",
                // title: "",
                // tabBarIcon: ({ focused, color }) => (
                //     <TabBarIcon
                //         name={focused ? "grid" : "grid-outline"}
                //         color={color}
                //     />
                // ),
                // }}
            />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={({ route }) => ({
                    // tabBarColor: "#ffffff",
                    title: "",
                    tabBarIcon: ({ focused, color }) => (
                        <TabBarIcon
                            name={focused ? "cart" : "cart-outline"}
                            color={color}
                        />
                    ),

                    tabBarStyle: ((route: RouteProp<ParamListBase>) => {
                        const routeName = getFocusedRouteNameFromRoute(route);

                        console.log(routeName);
                        if (routeName === "Checkout") {
                            return { display: "none" };
                        }
                        return { height: 70 };
                    })(route),
                })}
            />
            <Stack.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    // tabBarColor: "",
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
