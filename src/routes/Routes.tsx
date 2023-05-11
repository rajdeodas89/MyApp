import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Onboarding1 from '../screens/Onboarding1';
import Onboarding2 from '../screens/Onboarding2';
import Onboarding3 from '../screens/Onboarding3';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AppBottomTabNavigator from './AppBottomTabNavigator';
import GettingStartedScreen from '../screens/getting-started/GettingStartedView';
import LoginScreen from '../screens/LoginScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const AuthStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStarted"
          component={GettingStartedScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const OnBoardingStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="NotificationAlert">
        <Stack.Screen
          name="NotificationAlert"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={Onboarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Juristiction"
          component={Onboarding3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const DashboardStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="HomeBase">
        <Stack.Screen
          name="HomeBase"
          component={AppBottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={navigation => ({
            tabBarLabel: '',
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
