import React, { Component } from 'react';
import { ScrollView, Text, Button } from 'react-native';

let hardCodedUserId = 1;

export default class ProfilePageScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: '',
		};
	}

	componentWillMount() {
		fetch(`https://bham-hops.herokuapp.com/api/users/${hardCodedUserId}`)
			.then(res => {
				// alert(res);
				return res.json();
			})
			.then(user => {
				alert(user);
				// alert(user.email);
				this.setState({
					userEmail: user.email,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	render() {
		return (
			<ScrollView>
				<Text> {this.state.userEmail} </Text>
			</ScrollView>
		);
	}
}
