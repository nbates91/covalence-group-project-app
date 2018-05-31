import React, { Component } from 'react';
import { View, Alert, ScrollView, Linking } from 'react-native';
import { Button, Text, Container } from 'native-base';
import LocationCard from '../components/locationcard';

export default class ActiveRoute extends Component {
	constructor(props) {
		super(props);
		// this.navigation = this.props.navigation.state.params.navigation;
		// alert(this.props.navigation.state.params);
		this.id = this.props.navigation.state.params.id;
		this.state = {
			route: [],
			stops: [],
		};
	}
	componentWillMount() {
		// alert(this.id);
		fetch(`https://bham-hops.herokuapp.com/api/routes/${this.id}`)
			.then(res => {
				return res.json();
			})
			.then(route => {
				this.setState({ route: route[0] });
			})
			.then(() => {
				return this.getStops();
			})
			.catch(err => {
				console.log(err);
			});
	}
	getStops() {
		return fetch(`https://bham-hops.herokuapp.com/api/routes/stops/${this.id}`)
			.then(res => {
				return res.json();
			})
			.then(stops => {
				// alert(stops);
				this.setState({ stops });
			})
			.catch(err => {
				console.log(err);
			});
	}
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

	getRide = () => {
		Linking.openURL(
			'uber://?client_id=<CLIENT_ID>&action=setPickup=my_location&pickup[nickname]=UberHQ&pickup[formatted_address]=1455%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103&dropoff[latitude]=33.5156832&dropoff[longitude]=-86.8063203&dropoff[nickname]=Coit%20Tower&dropoff[formatted_address]=1%20Telegraph%20Hill%20Blvd%2C%20San%20Francisco%2C%20CA%2094133&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383'
		).catch(err => console.error('An error occurred', err));
	};

	getDirections = () => {
		Linking.openURL('https://www.google.com/maps/dir/?api=1&parameters').catch(err =>
			console.error('An error occurred', err)
		);
	};

	// uberTempMessage = () => {
	// 	alert('This feature is not set up yet.');
	// };

	// nextStopTempMessage = () => {
	// 	alert('This feature is not set up yet.');
	// };

	checkInTempMessage = () => {
		alert('This feature is not set up yet.');
	};

	render() {
		// alert(this.state.stops.length);
		let routeStops = this.state.stops.map((stop, index) => {
			// alert(JSON.stringify(stop));
			return <LocationCard key={stop.stopid} stop={stop} navigation={this.props.navigation} />;
		});
		return (
			<ScrollView>
				<Text>{this.state.route.routename}</Text>
				{routeStops}
				<Button block onPress={this.checkInTempMessage}>
					<Text>Check in at current stop</Text>
				</Button>
				<Button block onPress={this.getDirections}>
					<Text>Directions to next stop</Text>
				</Button>
				<Button block onPress={this.getRide}>
					<Text>Uber</Text>
				</Button>
				<Button block onPress={this.tapOutAlert}>
					<Text>Tapout</Text>
				</Button>
			</ScrollView>
		);
	}
}
