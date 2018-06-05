import React, { Component } from 'react';
import { View, Alert, ScrollView, Linking, AsyncStorage } from 'react-native';
import { Button, Text, Container } from 'native-base';
import LocationCard from '../components/locationcard';
import { NavigationActions } from 'react-navigation';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class ActiveRoute extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: "Active Crawl",
		headerRight: (
			<Text
				onPress={() => {
					navigation.toggleDrawer();
				}}
			>
				Menu
			</Text>
		),

	});

	constructor(props) {
		super(props);
		this.state = {
			route: [],
			routeID: null,
			stops: [],
			userID: null,
			user: null,
			numberofcheckins: null // this variable is only used so can change state (which makes the page reload) - location.reload() doesn't work...
		};
	}

	componentWillMount() {
		AsyncStorage.getItem('user')
			.then(userID => {
				fetch(`https://bham-hops.herokuapp.com/api/users/${userID}`)
					.then(res => {
						this.setState({ userID });
						return res.json();
					})
					.then(user => {
						this.setState({
							user: user,
							numberofcheckins: user.numberofcheckins,
							routeID: user.activerouteid
						});
						this.getRoute();
					})
					.catch(err => {
						console.log(err);
					});
			})
			.catch(err => {
				console.log(err);
			});
	}

	getRoute() {
		fetch(`https://bham-hops.herokuapp.com/api/routes/${this.state.routeID}`)
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
		return fetch(`https://bham-hops.herokuapp.com/api/routes/stops/${this.state.routeID}`)
			.then(res => {
				return res.json();
			})
			.then(stops => {
				this.setState({ stops });
			})
			.catch(err => {
				console.log(err);
			});
	}

	navigateToGameOver() {
		this.props.navigation.navigate({
			routeName: 'ActiveRoute',
			params: {},
			action: NavigationActions.navigate({
				routeName: 'GameOver',
				params: {},
			}),
		});
	}

	clearTheUsersActiveRouteAndNavigateToGameOver() {
		this.state.user.activerouteid = null;
		this.state.user.numberofcheckins = 0;
		fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}`, {
			method: 'PUT',
			body: JSON.stringify(this.state.user),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
			.then((res) => {
				this.navigateToGameOver();
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
				{ text: 'OK', onPress: () => this.clearTheUsersActiveRouteAndNavigateToGameOver()},
			],
			{ cancelable: false }
		);
	}

	checkIn(withPictureBoolean) {
		this.state.user.numberofcheckins += 1;
		this.setState({ numberofcheckins: this.state.numberofcheckins + 1});
		this.updateUserCheckins(withPictureBoolean);
	}

	updateUserCheckins(withPictureBoolean) {
		fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}`, {
			method: 'PUT',
			body: JSON.stringify(this.state.user),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
			.then((res) => {
				if (withPictureBoolean) {
					this.props.navigation.navigate("Camera");
				}
				else {
					if (this.isRouteComplete()) {
						// update the user's level here
						this.clearTheUsersActiveRouteAndNavigateToGameOver();
					}
				}
			})
			.catch(err => {
				console.log(err);
			});
	}

	checkInAlert() {
		Alert.alert(
			'Check-in',
			'With or without a picture?',
			[
				{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
				{ text: 'With Picture', onPress: () => this.checkIn(true) },
				{ text: 'Without Picture', onPress: () => this.checkIn(false), style: 'cancel' },
			],
			{ cancelable: false }
		);
	}

	getRide = () => {
		Linking.openURL('https://m.uber.com').catch(err => console.error('An error occurred', err));
	};

	getDirections = () => {
		Linking.openURL('https://www.google.com/maps/dir/?api=1&parameters').catch(err =>
			console.error('An error occurred', err)
		);
	};

	switchScreens(id) {
		this.props.navigation.navigate('LocationDetails', { id });
	}

	isRouteComplete() {
		// return false;
		return this.state.stops.length === this.state.user.numberofcheckins;
	}

	render() {
		let routeStops = this.state.stops.map((stop, index) => {
			return <LocationCard key={stop.stopid} addIcon={this.state.numberofcheckins > index} stop={stop} onPress={() => this.switchScreens(stop.stopid)} />;
		});
		return (
			<ScrollView>
				<Text>{this.state.route.routename}</Text>
				{routeStops}
				<Button block onPress={() => { this.checkInAlert(); }} >
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
