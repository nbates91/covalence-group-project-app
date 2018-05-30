/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { SwitchNavigator } from 'react-navigation';
import WelcomeNavigator from './src/navigators/WelcomeNav';
import DrawerNavigation from './src/navigators/DrawerNav';

const PrimaryNavigation = SwitchNavigator(
	{
		Welcome: { screen: WelcomeNavigator },
		DrawerStack: DrawerNavigation,
	},
	{ initialRouteName: 'Welcome' }
);

export default class App extends Component {
	render() {
		return <PrimaryNavigation />;
		// return <RootNavigator />;
	}
}
