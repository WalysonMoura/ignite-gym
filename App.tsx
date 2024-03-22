import { GluestackUIProvider, Text, View } from "@gluestack-ui/themed";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import React from "react";
import { config, gluestackUIConfig } from "@/components/gluestack-ui.config";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View>
        <Text color="$green700">gg</Text>
      </View>
    </GluestackUIProvider>
  );
}
