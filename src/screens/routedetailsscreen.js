import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Button, Text } from 'native-base';
import LocationCard from '../components/locationcard';
import { NavigationActions } from 'react-navigation';

export default class RouteDetailsScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: "Crawl Details"
	});
	constructor(props) {
		super(props);
		this.routeid = this.props.navigation.state.params.id;
		this.routeName = this.props.navigation.state.params.routename;
		this.state = {
			stops: [],
			buttonIsDisabled: false,
			buttonText: "",
			userID: null,
			user: null,
			crawlWarningMessage: ""
		};
	}

	componentWillMount() {
		fetch(`https://bham-hops.herokuapp.com/api/routes/stops/${this.routeid}`)
			.then(results => {
				return results.json();
			})
			.then(stops => {
				this.setState({ stops });
				this.checkIfUserHasActiveRoute();
			})
			.catch(err => {
				console.log(err);
			});
	}

	getUsersActiveRoute() {
		fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}`)
			.then(res => {
				return res.json();
			})
			.then(user => {
				this.setState({ user });
				if (user.activerouteid && user.activerouteid != null) { // if the user does have an active route...
					if (user.activerouteid === this.routeid) { // if the user selected the route they're actively crawling...
						this.setState({
							buttonIsDisabled: false,	// enable button
							buttonText: "View Active Crawl",
							crawlWarningMessage: ""
						});
					}
					else {
						this.setState({
							buttonIsDisabled: true,	// disable the button
							crawlWarningMessage: "You cannot start another crawl until you complete or tap out of your current crawl.",
							buttonText: "Start This Crawl"
						});
					}
				}
				else {
					this.setState({
						buttonIsDisabled: false, // enable button
						crawlWarningMessage: "",
						buttonText: "Start This Crawl"
					});
				}
			})
			.catch(err => {
				console.log(err);
			});

	}

	checkIfUserHasActiveRoute() {
		AsyncStorage.getItem('user')
			.then(userID => {
				this.setState({ userID });
				this.getUsersActiveRoute();
			})
			.catch(err => {
				console.log(err);
			});
	}

	updateUsersActiveRouteAndSwitchScreens() {
		this.state.user.activerouteid = this.routeid;
		fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}`, {
			method: 'PUT',
			body: JSON.stringify(this.state.user),
			headers: new Headers({
				'Content-Type': 'application/json',
			}),
		})
			.then((res) => {
				this.goToActiveRouteDetail();
			})
			.catch(err => {
				console.log(err);
			});
	}

	goToActiveRouteDetail() {
		let id = this.routeid;
		this.props.navigation.navigate({
			routeName: 'ActiveRoute',
			params: {},
			action: NavigationActions.navigate({
				routeName: 'ActiveRouteDetail',
				params: { id },
			}),
		});
	}

	goToLocationDetail(id) {
		this.props.navigation.navigate({
			routeName: 'LocationDetails',
			params: { id },
		});
	}

	render() {
		let routeStops = this.state.stops.map((stop, index) => {
			return <LocationCard addIcon={false} onPress={() => this.goToLocationDetail(stop.stopid)} key={stop.stopid} stop={stop} />;
		});
		return (
			<ScrollView>
				<Text>{this.routeName}</Text>
				{routeStops}
				<Text> {this.state.crawlWarningMessage} </Text>
				<Button block disabled={this.state.buttonIsDisabled} onPress={() => this.updateUsersActiveRouteAndSwitchScreens()} >
					<Text> {this.state.buttonText} </Text>
				</Button>
			</ScrollView>
		);
	}
}
