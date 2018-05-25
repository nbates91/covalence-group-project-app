import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button, Text } from 'native-base';

export default class ActiveRoute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			route: {},
			stops: [],
		};
	}
	// componentWillMount() {
	// 	fetch(`api/routes/${this.props.match.params.routeid}`)
	// 		.then(res => {
	// 			return res.json();
	// 		})
	// 		.then(route => {
	// 			this.setState({ route });
	// 		});
	// }
	// componentWillMount() {
	// 	fetch(`api/routes/stops/${this.props.match.params.routeStopsId}`)
	// 		.then(res => {
	// 			return res.json();
	// 		})
	// 		.then(stops => {
	// 			this.setState({ stops });
	// 		});
	// }
	tapOutAlert = () => {
		Alert.alert(
			'Tapout',
			'Are you sure?',
			[
				{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
				{ text: 'OK', onPress: () => this.props.navigation.navigate('GameOver') },
			],
			{ cancelable: false }
		);
	};

	render() {
		return (
			<View>
				<Button block onPress={this.tapOutAlert}>
					<Text>Tapout</Text>
				</Button>
			</View>
		);
	}
}
