import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';

export default class CardItemButton extends Component {
	render() {
		return (
			<Card id={this.props.route.id}>
				<CardItem button onPress={() => this.props.navigation.navigate('RouteDetailsScreen')}>
					<Body>
						<Text>{this.props.route.routename}</Text>
						<Text>Number of stops:{this.props.route.numberofstops}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}
