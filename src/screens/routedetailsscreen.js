import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Button, Text } from 'native-base';
import LocationCard from '../components/locationcard';

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

	switchScreens(navigation) {
		let id = this.id;
		this.props.navigation.navigate('ActiveRoute', { id });
	}

	render() {
		let routeStops = this.state.stops.map((stop, index) => {
			return <LocationCard key={stop.stopid} stop={stop} navigation={this.props.navigation} />;
		});
		return (
			<ScrollView>
				<Text>{this.routeName}</Text>
				{routeStops}
				<Button block onPress={() => this.switchScreens(this.props.navigation)}>
					<Text>Select This Route!</Text>
				</Button>
			</ScrollView>
		);
	}
}
