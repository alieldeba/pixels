import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { View } from "react-native";

const RootLayout = () => {
  return (
    <View className="h-full bg-[#ccc]">
      <RootNavigation />
      <StatusBar style="light" />
    </View>
  );
};

function RootNavigation() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
    </Stack>
  );
}

export default RootLayout;
