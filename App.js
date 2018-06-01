/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator } from 'react-navigation';
import SignInNavigator from './src/navigators/SignInNav';
import DrawerNavigation from './src/navigators/DrawerNav';
import * as userService from './src/services/user';

export const styles = StyleSheet.create({
	errorRed: {
		color: 'red',
	},
	screenMarginTop: {
		marginTop: '20%',
	},
});

export default class App extends Component {

	PrimaryNavigation = () => <View />;

	constructor(props) {
		super(props)
		this.state = { loggedIn: false };
	}

	async componentWillMount() {
		let r = await userService.isLoggedIn();

		this.PrimaryNavigation = createSwitchNavigator(
			{
				SignIn: { screen: SignInNavigator },
				DrawerStack: DrawerNavigation,
			},
			{ initialRouteName: r ? 'DrawerStack' : 'SignIn' }
		);
		this.setState({ loggedIn: r });
	}

	render() {
		if (this.state.loggedIn) {
			return <this.PrimaryNavigation />;
		}
		return <View />;
	}
}