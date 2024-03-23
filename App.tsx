import { GluestackUIProvider, Text, View } from "@gluestack-ui/themed";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import React from "react";
import { config } from "@/components/gluestack-ui.config";
import { StatusBar } from "react-native";
import { Routes } from "@/routes";
import { Loading } from "@/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}
