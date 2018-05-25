import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class WelcomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome to Craft Crawls!',
	};
	render() {
		return (
			<View>
				<Button block onPress={() => this.props.navigation.navigate('Home')} >
					<Text>View Routes</Text>
				</Button>
				<Button block onPress={() => this.props.navigation.navigate('SignIn')} >
					<Text>Sign In</Text>
				</Button>
				<Text> Don't have an account yet? </Text>
				<Button block onPress={() => this.props.navigation.navigate('SignUp')} >
					<Text>Sign Up</Text>
				</Button>
			</View>
		);
	}
}
