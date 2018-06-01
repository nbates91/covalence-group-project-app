import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { withNavigation } from 'react-navigation';

class LocationCard extends Component {
	switchScreens(id) {
		this.props.navigation.navigate('LocationDetails', { id });
	}

	render() {
		return (
			<Card>
				<CardItem button onPress={() => this.switchScreens(this.props.stop.stopid)}>
					<Body>
						<Text>{this.props.stop.stops}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default withNavigation(LocationCard);
