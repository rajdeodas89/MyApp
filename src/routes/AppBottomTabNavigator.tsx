import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const AppBottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={navigation => ({
          tabBarLabel: 'Home',
          headerShown: false,
          
        })}
      />
      <Tab.Screen
        name="Calendar"
        component={DetailsScreen}
        options={navigation => ({
          tabBarLabel: 'Calendar',
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={navigation => ({
          tabBarLabel: 'Profile',
          headerShown: false,

        })}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTabNavigator;

const styles = StyleSheet.create({
  tabLabelStyle: {

  },
  tabStyle: {
    height: 50,
    paddingVertical: 5,
  },
});
