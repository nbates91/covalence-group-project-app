import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';

export default class GameOverScreen extends Component {
	static navigationOptions = {
		title: 'Game Over',
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				<Text>Thanks for playing!</Text>
				<Button block onPress={() => this.props.navigation.navigate('Welcome')}>
					<Text>Back to start</Text>
				</Button>
			</View>
		);
	}
}
