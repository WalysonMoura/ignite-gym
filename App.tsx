import 'react-native-gesture-handler';
import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import RootStack from './src/navigation';
import { StatusBar, View } from 'react-native';

import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { Loading } from '~/components/Loading';
import { THEME } from '~/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <GluestackUIProvider config={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoaded ? <RootStack /> : <Loading />}
    </GluestackUIProvider>
  );
}
