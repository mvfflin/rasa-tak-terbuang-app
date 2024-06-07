import { createStackNavigator } from "@react-navigation/stack";
import AuthLayout from "./(auth)/_layout";
import TabLayout from "./(tabs)/_layout";
import { useAuth } from "@clerk/clerk-expo";

const Stack = createStackNavigator();

export default function Navigation() {
    const { isLoaded, isSignedIn } = useAuth();

    return (
        <Stack.Navigator>
            {isSignedIn ? (
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                    component={TabLayout}
                />
            ) : (
                <Stack.Screen
                    name="(auth)"
                    options={{ headerShown: false }}
                    component={AuthLayout}
                />
            )}
        </Stack.Navigator>
    );
}
