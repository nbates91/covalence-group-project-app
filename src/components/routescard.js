import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';

export default class RoutesCard extends Component {
	switchScreens(id, routename, navigation) {
		// alert(navigation.params);
		this.props.navigation.navigate('RouteDetails', { id, routename, navigation });
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
