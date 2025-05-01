import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // This will hide headers for all screens in the stack
      }}
    />
  );
} 