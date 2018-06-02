import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

class LocationCard extends Component {
	render() {
		if (this.props.addIcon) {
			return (
				<Card>
					<CardItem button onPress={() => this.props.onPress()}>
						<Body>
							<Icon name="check" size={25} color="#B3FFAA"/>
							<Text>{this.props.stop.stops}</Text>
						</Body>
					</CardItem>
				</Card>
			);
		}
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
