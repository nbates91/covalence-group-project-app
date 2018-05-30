/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import WelcomeScreen from './src/screens/welcomescreen';
import Homescreen from './src/screens/homescreen';
import SignInScreen from './src/screens/signinscreen';
import SignUpScreen from './src/screens/signupscreen';
import RouteDetailsScreen from './src/screens/routedetailsscreen';
import ActiveRouteScreen from './src/screens/activeroutescreen';
import GameOverScreen from './src/screens/gameoverscreen';
import ProfilePageScreen from './src/screens/profilepagescreen';
import LocationDetailsScreen from './src/screens/locationdetailsscreen';
// import ContactScreen from './src/screens/contactscreen';

// const DrawerStack = DrawerNavigator({
// 	Home: { screen: Homescreen },
// });

// const DrawerNavigation = StackNavigator(
// 	{
// 		Home: { screen: Homescreen },
// 		ActiveRoute: { screen: ActiveRouteScreen },
// 		// DrawerStack: { screen: DrawerStack },
// 	},
// 	{
// 		headerMode: 'float',
// 	}
// );

const RootNavigator = StackNavigator(
	{
		Welcome: { screen: WelcomeScreen },
		SignIn: { screen: SignInScreen },
		SignUp: { screen: SignUpScreen },
		Home: { screen: Homescreen },
		RouteDetailsScreen: { screen: RouteDetailsScreen },
		// drawerStack: { screen: DrawerNavigation },
		ActiveRoute: { screen: ActiveRouteScreen },
		GameOver: { screen: GameOverScreen },
		// ProfilePage: { screen: ProfilePageScreen },
		LocationDetails: { screen: LocationDetailsScreen },
		// Contact: { screen: ContactScreen },
	},
	{ initialRouteName: 'Welcome' }
);

export default class App extends Component {
	render() {
		return <RootNavigator />;
	}
}
