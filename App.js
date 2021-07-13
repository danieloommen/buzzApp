import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
   <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
})
const AppContainer=createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
