import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class RouteDetailsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			stops: [],
		};
	}

	async componentWillMount() {
		try {
			let results = await fetch(`https://bham-hops.herokuapp.com/api/routes/stops/${this.state.id}`);
			let stops = await results.json();
			this.setState({ stops });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<ScrollView>
				<Text>Hello World!</Text>
			</ScrollView>
		);
	}
}
