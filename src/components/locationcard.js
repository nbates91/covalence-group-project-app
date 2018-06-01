import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';

class LocationCard extends Component {
	render() {
		return (
			<Card>
				<CardItem button onPress={() => this.props.onPress()}>
					<Body>
						<Text>{this.props.stop.stops}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default withNavigation(LocationCard);
