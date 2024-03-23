import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { SignIn } from '@/screens/SignIn';
import { SignUp } from '@/screens/SignUp';

type AuhtRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type AuhtRoutesProps = NativeStackNavigationProp<AuhtRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuhtRoutes>();

export function AuhtRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={SignIn} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
