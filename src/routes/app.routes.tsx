import { Home } from '@/screens/Home';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { config } from '@/components/gluestack-ui.config';
import { History } from '@/screens/History';
import { Profile } from '@/screens/Profile';
import { Exercise } from '@/screens/Exercise';

type AppRoutes = {
  home: undefined;
  exercise: undefined;
  profile: undefined;
  history: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const iconSize = config.tokens.sizes[6];
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: config.tokens.colors.green500,
        tabBarInactiveTintColor: config.tokens.colors.gray200,
        tabBarStyle: {
          backgroundColor: config.tokens.colors.gray600,
          borderTopWidth: 0,
          paddingBottom: 26,
          paddingTop: 20,
          height: Platform.OS === 'android' ? 65 : 90,
        },
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <HomeSvg fill={color} width={iconSize} height={iconSize} />,
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => <HistorySvg fill={color} width={iconSize} height={iconSize} />,
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <ProfileSvg fill={color} width={iconSize} height={iconSize} />,
        }}
      />

      <Screen
        name="exercise"
        component={Exercise}
        options={{
          tabBarIcon: () => null,
        }}
      />
    </Navigator>
  );
}
