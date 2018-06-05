import React, { Component } from 'react';
import { Button, Card, CardItem, Text, Body } from 'native-base';
import { withNavigation, NavigationActions } from 'react-navigation';

class RoutesCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundColor: ""
		}
	}

	componentWillMount() {
		if (this.props.id % 2 == 0) {
			this.setState({
				backgroundColor: "#D7E2CC"
			});
		}
		else {
			this.setState({
				backgroundColor: "#AAC1A9"
			});
		}
	}

	switchScreens(id, routename) {
		this.props.navigation.navigate('RouteDetails', { id, routename });
	}

	render() {
		return (
			<Card>
				<CardItem style={{ backgroundColor: this.state.backgroundColor }} button onPress={() => this.switchScreens(this.props.id, this.props.route.routename)}>
					<Body>
						<Text style={{ fontWeight: "bold", }}>{this.props.route.routename}</Text>
						<Text style={{ fontStyle: "italic" }}>Number of stops: {this.props.route.numberofstops}</Text>
						<Text>{this.props.route.routedescription}</Text>
					</Body>
				</CardItem>
			</Card>
		);
	}
}

export default withNavigation(RoutesCard);
