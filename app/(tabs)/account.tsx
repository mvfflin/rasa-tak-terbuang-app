import ParallaxScrollView from "@/components/ParallaxScrollView";
import ProfileScreen from "@/components/account/profile";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, SafeAreaView, View } from "react-native";

const Stack = createStackNavigator();

export default function AccountScreen() {
    return (
        <SafeAreaView className="bg-green-100 h-full">
            <Stack.Navigator
                initialRouteName="Profile"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        </SafeAreaView>
    );
}
