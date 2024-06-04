import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "",
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon
                            name={focused ? "grid" : "grid-outline"}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
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
            />
        </Tabs>
    );
}
