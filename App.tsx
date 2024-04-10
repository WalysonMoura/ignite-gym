import { GluestackUIProvider, Text, View } from '@gluestack-ui/themed';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import React from 'react';
import { config } from '@/components/gluestack-ui.config';
import { StatusBar } from 'react-native';
import { Routes } from '@/routes';
import { Loading } from '@/components/loading';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config}>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        {fontsLoaded ? <Routes /> : <Loading />}
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}
