import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button, Text } from 'native-base';
import LocationCard from '../components/locationcard';

export default class ActiveRoute extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.navigation.state.params.id;
		this.state = {
			route: [],
			stops: [],
		};
	}
	componentWillMount() {
		alert(this.id);
		fetch(`https://bham-hops.herokuapp.com/api/routes/${this.id}`)
			.then(res => {
				return res.json();
			})
			.then(route => {
				this.setState({ route: route[0] });
			})
			.catch(err => {
				console.log(err);
			});
	}
	// componentDidMount() {
	// 	fetch(`api/routes/stops/1`)
	// 		.then(res => {
	// 			return res.json();
	// 		})
	// 		.then(stops => {
	// 			this.setState({ stops: stops[0] });
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
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

	uberTempMessage = () => {
		alert('This feature is not set up yet.');
	};

	nextStopTempMessage = () => {
		alert('This feature is not set up yet.');
	};

	checkInTempMessage = () => {
		alert('This feature is not set up yet.');
	};

	render() {
		return (
			<View>
				<Text>{this.state.route.routename}</Text>
				<Button block onPress={this.checkInTempMessage}>
					<Text>Check in at current stop</Text>
				</Button>
				<Button block onPress={this.nextStopTempMessage}>
					<Text>Directions to next stop</Text>
				</Button>
				<Button block onPress={this.uberTempMessage}>
					<Text>Uber</Text>
				</Button>
				<Button block onPress={this.tapOutAlert}>
					<Text>Tapout</Text>
				</Button>
			</View>
		);
	}
}
