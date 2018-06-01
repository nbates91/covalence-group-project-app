import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class GameOverScreen extends Component {
	static navigationOptions = {
		title: 'Game Over',
		headerLeft: null
	};

	constructor(props) {
		super(props);
	}

	switchScreens() {
		this.props.navigation.navigate({
			routeName: 'Home',
			params: {},
			action: NavigationActions.navigate({
				routeName: 'HomeScreen',
				params: {},
			}),
		});
	}

	render() {
		return (
			<View>
				<Text>Thanks for playing!</Text>
				<Button block onPress={() => this.switchScreens()}>
					<Text>Back to start</Text>
				</Button>
			</View>
		);
	}
}
