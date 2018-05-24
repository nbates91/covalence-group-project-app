import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';
import RoutesCard from '../components/routescard';

export default class Homescreen extends Component {
	static navigationOptions = {
		title: 'Choose a Route!',
		headerRight: <Text onPress={() => this.props.navigation.navigate('drawerStack')}>Menu</Text>,
	};

	constructor(props) {
		super(props);
		this.state = {
			routes: [],
		};
	}

	async componentWillMount() {
		try {
			let results = await fetch('https://bham-hops.herokuapp.com/api/routes');
			let routes = await results.json();
			this.setState({ routes });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<ScrollView>
				{this.state.routes.map((route, index) => {
					return <RoutesCard key={index} route={route} navigation={this.props.navigation} />;
				})}
			</ScrollView>
		);
	}
}
