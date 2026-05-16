import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DynamicStackNavigator from './src/navigator/stack/DynamicStackNavigator';
import StaticStackNavigator from './src/navigator/stack/StaticStackNavigator';




export default function App(){
  return  <StaticStackNavigator/>
}