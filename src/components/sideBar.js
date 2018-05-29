import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class SideBar extends Component {
	render() {
		return (
			<ScrollView>
				<Text onPress={() => this.props.navigation.state.params.navigation.navigate('Home')}> Home </Text>
				<Text onPress={() => this.props.navigation.state.params.navigation.navigate('ActiveRoute')}> Active Route </Text>
			</ScrollView>
		);
	}
}
