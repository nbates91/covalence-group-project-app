import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class WelcomeScreen extends Component {
	render() {
		return (
			<View>
				<Text> Craft Crawls </Text>
				<Text />
				<Text> Welcome to Craft Crawls! </Text>
				<Button title="View Routes" onPress={() => this.props.navigation.navigate('Home')} />
				<Button title="Sign In" onPress={() => this.props.navigation.navigate('SignIn')} />
				<Text> Don't have an account yet? </Text>
				<Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUp')} />
			</View>
		);
	}
}
