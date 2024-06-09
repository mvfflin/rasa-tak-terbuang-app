import "react-native-gesture-handler";
import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import Env from "@/constants/env";
import { createStackNavigator } from "@react-navigation/stack";
import TabLayout from "./(auth)/_layout";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import store from "@/functions/store";
import { tokenCache } from "@/functions/cache";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const navStack = createStackNavigator();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Montserrat: require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        Montserrat_Black: require("../assets/fonts/Montserrat/Montserrat-Black.ttf"),
        Montserrat_Bold: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
        SFUI_Regular: require("../assets/fonts/SFUI/SFUIText-Regular.ttf"),
        SFUI_Bold: require("../assets/fonts/SFUI/SFUIText-Bold.ttf"),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <ClerkProvider
            publishableKey={Env.CLERK_PUBLISHABLE_KEY!}
            tokenCache={tokenCache}
        >
            <Provider store={store}>
                <ThemeProvider
                    value={colorScheme === "light" ? DarkTheme : DefaultTheme}
                >
                    <Navigation />
                </ThemeProvider>
            </Provider>
        </ClerkProvider>
    );
}
