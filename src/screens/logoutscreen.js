import React, { Component } from 'react';
import { View } from 'react-native';
import * as userService from '../services/user';

export default class LogOut extends Component {
	componentWillMount() {
		userService.logout();
		// let a = userService.isLoggedIn();
		// alert(a);
		this.props.navigation.navigate('SignIn');
	}

	render() {
		return <View />;
	}
}
