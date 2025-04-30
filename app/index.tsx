import Logo  from "./components/shared/Logo";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Login } from "./screens/Login";

export default function Index() {
  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View>
      <Login/>         
    </View>
    </>
  );
}


