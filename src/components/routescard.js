import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';

class RoutesCard extends Component {
	switchScreens(id, routename) {
		// this.props.navigation.navigate({
		// 	routeName: 'RouteDetails',
		// 	params: {},
		// 	action: NavigationActions.navigate({
		// 		routeName: 'RouteDetailsScreen',
		// 		params: { id, routename },
		// 	}),
		// });
		this.props.navigation.navigate('RouteDetails', { id, routename });
	}

	render() {
		return (
			<Card>
				<CardItem button onPress={() => this.switchScreens(this.props.id, this.props.route.routename)}>
					<Body>
						<Text>{this.props.route.routename}</Text>
						<Text>Number of stops: {this.props.route.numberofstops}</Text>
						<Text>{this.props.route.routedescription}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default withNavigation(RoutesCard);
