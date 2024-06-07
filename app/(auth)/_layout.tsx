import React, { useEffect, useState } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Login from "@/components/auth/login";
import Register from "@/components/auth/register";

const Stack = createStackNavigator();

export default function AuthLayout() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}
