import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { withNavigation } from 'react-navigation';

class RoutesCard extends Component {
	switchScreens(id, routename, navigation) {
		// alert(navigation.params);
		this.props.navigation.navigate('RouteDetails', { id, routename });
	}

	render() {
		return (
			<Card>
				<CardItem button onPress={() => this.switchScreens(this.props.id, this.props.route.routename, this.props.navigation)}>
					<Body>
						<Text>{this.props.route.routename}</Text>
						<Text>Number of stops:{this.props.route.numberofstops}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default withNavigation(RoutesCard);
