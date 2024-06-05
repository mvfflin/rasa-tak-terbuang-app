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

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const [loaded] = useFonts({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
        Montserrat: require("../assets/fonts/Montserrat/Montserrat-Regular.ttf"),
        Montserrat_Black: require("../assets/fonts/Montserrat/Montserrat-Black.ttf"),
        Montserrat_Bold: require("../assets/fonts/Montserrat/Montserrat-Bold.ttf"),
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
        <ThemeProvider
            value={colorScheme === "light" ? DarkTheme : DefaultTheme}
        >
            <Stack>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                        animation: "slide_from_right",
                    }}
                />
            </Stack>
        </ThemeProvider>
    );
}
