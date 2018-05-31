import React, { Component } from 'react';
import { ScrollView, Button, Text } from 'react-native';
import RoutesCard from '../components/routescard';

export default class Homescreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Choose a Route!',
		headerRight: (
			<Text
				onPress={() => {
					navigation.toggleDrawer();
				}}
			>
				Menu
			</Text>
		),
	});

	// static navigationOptions = {
	// 	title: 'Choose a Route!',
	// 	headerRight: <Text onPress={() => this.navigation.navigate('drawerStack')}>Menu</Text>,
	// };

	constructor(props) {
		super(props);
		// this.navigation = this.props.navigation.state.params.navigation;
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
				{/* <Button title="Menu" onPress={() => this.props.navigation.navigate('DrawerOpen')}/> */}
				{this.state.routes.map((route, index) => {
					return (
						<RoutesCard key={index} route={route} id={route.routeid} />
					);
				})}
			</ScrollView>
		);
	}
}
