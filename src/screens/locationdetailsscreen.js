import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class LocationDetails extends Component {
	constructor(props) {
		super(props);
		this.id = this.props.navigation.state.params.id;
		this.state = {
			location: [],
		};
	}

	componentWillMount() {
		fetch(`https://bham-hops.herokuapp.com/api/locations/${this.id}`)
			.then(res => {
				return res.json();
			})
			.then(location => {
				this.setState({ location: location[0] });
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<ScrollView>
				<Text>{this.state.location.name}</Text>
				<Text>
					{this.state.location.latitude}, {this.state.location.longitude}
				</Text>
				<Text>{this.state.location.url}</Text>
			</ScrollView>
		);
	}
}
