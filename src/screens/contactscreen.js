import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Button } from 'native-base'
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
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
			isSubmitButtonDisabled: true
		};
	}

	handleSubmit() {
		// if (this.state.email === '') {
		if (!this.isEmailValid()) {
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

	checkIfButtonShouldBeEnabled() {
		if (this.state.email != "" && this.state.name != "" && this.state.message != "") {
			this.setState({ isSubmitButtonDisabled: false });
		}
		else {
			this.setState({ isSubmitButtonDisabled: true });
		}
	}

	handleEmailChange(email) {
		this.setState({ email }, () => { this.checkIfButtonShouldBeEnabled() });
	}

	handleNameChange(name) {
		this.setState({ name }, () => { this.checkIfButtonShouldBeEnabled() });
	}

	handleMessageChange(message) {
		this.setState({ message }, () => { this.checkIfButtonShouldBeEnabled() });
	}

	isEmailValid() {
		let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return emailFormat.test(String(this.state.email).toLowerCase());
	}

	render() {
		return (
			<ScrollView>
				<Text>Please let us know of any issues/bugs that you may have encountered!</Text>
				<FormLabel>Email</FormLabel>
				<FormInput onChangeText={email => this.handleEmailChange(email)} />
				<FormValidationMessage>Required</FormValidationMessage>
				<FormLabel>Name</FormLabel>
				<FormInput onChangeText={name => this.handleNameChange(name)} />
				<FormValidationMessage>Required</FormValidationMessage>
				<FormLabel>Message</FormLabel>
				<FormInput onChangeText={message => this.handleMessageChange(message)} />
				<FormValidationMessage>Required</FormValidationMessage>
				<Button block disabled={this.state.isSubmitButtonDisabled} onPress={() => this.handleSubmit()} >
					<Text> Submit Feedback </Text>
				</Button>
			</ScrollView>
		);
	}
}
