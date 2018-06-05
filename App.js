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

// LOGO HEX VALUES
// Gray: #C8D5B9
// Tan: #FAF3DD
// Light Brown: #A5978B
// Green: #ACEB98
// Dark Blue: #4B88A2

export const styles = StyleSheet.create({
	backgroundColor: {
		backgroundColor: "#A5978B",
	},
	headerColor: {
		backgroundColor: "#A5978B",
	},
	errorRed: {
		color: "red",
	},
	button: {
		backgroundColor: "#DD8C5D",
		width: 200,
		margin: 5,
		alignSelf: "center"
	},
	boxShadow: {
		alignSelf: "center",
		width: 360,
		height: 360,
		padding: 10,
		margin: 10,
		backgroundColor: "#FAF3DD",
		shadowOffset: { width: 12, height: 12, },
		shadowColor: '#A38560',
		shadowOpacity: 1.0,
	}
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
				SignIn: SignInNavigator,
				DrawerStack: DrawerNavigation,
			},
			{
				initialRouteName: r ? 'DrawerStack' : 'SignIn',
				headerMode: "screen"
			}
		);
		this.setState({ loggedIn: r });
	}

	render() {
		return <this.PrimaryNavigation />;
	}
}