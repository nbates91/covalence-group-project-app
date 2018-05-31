import React, { Component } from 'react';
import { View, Alert, ScrollView, Linking, AsyncStorage } from 'react-native';
import { Button, Text, Container } from 'native-base';
import LocationCard from '../components/locationcard';

export default class ActiveRoute extends Component {
	static navigationOptions = ({ navigation }) => ({
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
		// this.navigation = this.props.navigation.state.params.navigation;
		// alert(this.props.navigation.state.params);
		this.id = this.props.navigation.state.params.id;
		this.state = {
			route: [],
			stops: [],
			userID: null,
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

	getNumberOfCheckins() {
		AsyncStorage.getItem('user')
			.then(userID => {
				fetch(`https://bham-hops.herokuapp.com/api/users/${userID}`)
					.then(res => {
						this.setState({ userID });
						return res.json();
					})
					.then(user => {
						return user.numberofcheckins;
					})
					.catch(err => {
						console.log(err);
					});
			})
			.catch(err => {
				console.log(err);
			});
	}

	checkIn(withPicture) {
		this.getNumberOfCheckins();
		fetch(`https://bham-hops.herokuapp.com/api/users/${hardCodedUserId}`, {
			method: 'PUT',
			body: JSON.stringify(updatedUser),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
			.then(res => {
				this.setState({
					newPassword: '',
					confirmPassword: '',
				});
			})
			.catch(err => {
				console.log(err);
			}); withPicture) {
			this.props.navigation.navigate('Camera');
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

		render() {
			let routeStops = this.state.stops.map((stop, index) => {
				return <LocationCard key={stop.stopid} stop={stop} navigation={this.props.navigation} />;
			});
			return (
				<ScrollView>
					<Text>{this.state.route.routename}</Text>
					{routeStops}
					<Button
						block
						onPress={() => {
							this.checkInAlert();
							// this.props.navigation.navigate('Camera');
						}}
					>
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
}}}


}
