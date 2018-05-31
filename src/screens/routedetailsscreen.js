import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import LocationCard from '../components/locationcard';
import { NavigationActions } from 'react-navigation';

export default class RouteDetailsScreen extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.navigation.state.params.id;
		this.routeName = this.props.navigation.state.params.routename;
		this.state = {
			stops: [],
		};
	}

	async componentWillMount() {
		try {
			let results = await fetch(`https://bham-hops.herokuapp.com/api/routes/stops/${this.id}`);
			let stops = await results.json();
			this.setState({ stops });
		} catch (err) {
			console.log(err);
		}
	}

	switchScreens() {
		let id = this.id;
		// alert(this.props.navigation.params);
		// alert(JSON.stringify(this.props.navigation));

		this.props.navigation.navigate({
			routeName: 'ActiveRoute',
			params: {},
			action: NavigationActions.navigate({
				routeName: 'ActiveRouteDetail',
				params: { id },
			}),
		});
	}

	render() {
		let routeStops = this.state.stops.map((stop, index) => {
			return <LocationCard key={stop.stopid} stop={stop} />;
		});
		return (
			<ScrollView>
				<Text>{this.routeName}</Text>
				{routeStops}
				<Button block onPress={() => this.switchScreens()}>
					<Text>Select This Route!</Text>
				</Button>
			</ScrollView>
		);
	}
}
