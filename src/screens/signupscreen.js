import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as userService from '../services/user';

export default class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPass: '',
		};
	}
	static navigationOptions = {
		title: 'Sign up',
	};

	login() {
		userService
			.login(this.state.email, this.state.password)
			.then(() => {
				this.setState({ redirectToReferrer: true });
				this.props.navigation.navigate('DrawerStack');
			})
			.catch(err => {
				if (err.message) {
					this.setState({ feedbackMessage: err.message });
					alert(err.message);
				}
			});
	}

	handleSubmit() {
		// check email syntax (ex. make sure it contains '@')
		if (this.state.password === this.state.confirmPass) {
			let updatedUser = {
				user: '',
				email: this.state.email,
				hash: this.state.password,
				role: 'user',
				level: 0,
				numberofcheckins: 0,
			};
			fetch(`https://bham-hops.herokuapp.com/api/users/`, {
				method: 'POST',
				body: JSON.stringify(updatedUser),
				headers: new Headers({
					'Content-Type': 'application/json',
				}),
			})
				.then(res => {
					// alert('Got here!');
					this.login();
				})
				.catch(err => {
					// alert(err);
					console.log(err);
				});
		} else {
			alert('Passwords do not match!');
		}
	}

	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Email</Label>
							<Input onChangeText={email => this.setState({ email })} />
						</Item>
						<Item floatingLabel last>
							<Label>Password</Label>
							<Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
						</Item>
						<Item floatingLabel last>
							<Label>Confirm Password</Label>
							<Input
								secureTextEntry={true}
								onChangeText={confirmPass => this.setState({ confirmPass })}
							/>
						</Item>
						<Button
							block
							onPress={() => {
								this.handleSubmit();
							}}
						>
							<Text>Create Account</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
