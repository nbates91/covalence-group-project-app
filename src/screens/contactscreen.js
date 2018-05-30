import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';
import { sendContactEmail } from '../services/contact';

export default class ContactScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}

	handleSubmit() {
		sendContactEmail(this.state.name, this.state.email, this.state.message)
			.then(() => {
				alert('Thank you, your feedback means a lot to us!');
			})
			.catch(err => {
				console.log(err);
			});
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
				<Button
					title="Submit Feedback"
					onPress={() => this.handleSubmit()}
				/>
			</ScrollView>
		);
	}
}