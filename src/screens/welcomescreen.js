import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class WelcomeScreen extends Component {
	static navigationOptions = {
		title: 'Welcome to Craft Crawls!',
	};

	switchScreens(navigation) {
		this.props.navigation.navigate('DrawerStack');
		// this.props.navigation.navigate('Home', { navigation });
	}

	render() {
		return (
			<View>
				<Button block onPress={() => this.switchScreens(this.props.navigation)}>
					<Text>View Routes</Text>
				</Button>
				<Button block onPress={() => this.props.navigation.navigate('SignIn')}>
					<Text>Sign In</Text>
				</Button>
				<Text> Don't have an account yet? </Text>
				<Button block onPress={() => this.props.navigation.navigate('SignUp')}>
					<Text>Sign Up</Text>
				</Button>
			</View>
		);
	}
}
