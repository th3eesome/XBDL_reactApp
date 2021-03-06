/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ExaminationView from './List';
import HomeScreen from './HomeScreen';
import LocalInfo from './LocalInfo';
import {
  Platform,
  StyleSheet,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Drawer = DrawerNavigator({
         Home: {
            screen: HomeScreen
         },
         Details: {
            screen: ExaminationView
         },
         LocalInfo: {
            screen: LocalInfo
         }
       },
    {
        drawerWidth:300,
        drawerPosition:'left',
    },
    {
        initialRouteName: 'Home'
    });

export default class App extends Component<Props> {
  render() {
      return <Drawer />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
