import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { sendContactEmail } from '../services/contact';

export default class ContactScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
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

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	handleSubmit() {
		if (this.state.email === '') {
			alert('The Email provided is not a valid email address.');
		} else if (this.state.name === '') {
			alert('The Name Field cannot be empty');
		} else if (this.state.message === '') {
			alert('There is nothing in the message field');
		} else {
			sendContactEmail(this.state.name, this.state.email, this.state.message)
				.then(() => {
					alert('Thank you, your feedback means a lot to us!');
				})
				.catch(err => {
					console.log(err);
				});
		}
	}

	render() {
		return (
			<ScrollView>
				<Text>Please let us know of any issues/bugs that you may have encountered!</Text>
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={email => this.setState({ email })} />
				<FormValidationMessage>Required</FormValidationMessage>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={name => this.setState({ name })} />
				<FormValidationMessage>Required</FormValidationMessage>
				<FormLabel>Message</FormLabel>
				<FormInput onChangeText={message => this.setState({ message })} />
				<FormValidationMessage>Required</FormValidationMessage>
				<Button title="Submit Feedback" onPress={() => this.handleSubmit()} />
			</ScrollView>
		);
	}
}
