import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as userService from '../services/user';

export default class SignInScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToReferrer: false,
			email: '',
			password: '',
			feedbackMessage: '',
			checkingLogin: true
		};
	};

	componentDidMount() {
		userService.checkLogin()
			.then((loggedIn) => {
				if (loggedIn) {
					this.setState({ redirectToReferrer: true, checkingLogin: false });
				} else {
					this.setState({ checkingLogin: false });
				}
			});
	};

	login() {
		userService.login(this.state.email, this.state.password)
			.then(() => {
				this.setState({ redirectToReferrer: true });
			}).catch(err => {
				if (err.message) {
					alert(err.message)
					this.setState({ feedbackMessage: err.message });
				}
			});
	};

	static navigationOptions = {
		title: 'Sign in',
	};

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
							<Input onChangeText={password => this.setState({ password })} />
						</Item>
						<Text>Forgot Password</Text>
						<Button
							block
							onPress={() => {
								this.login()
								// alert('You were signed in....but not really lol');
							}}
						>
							<Text>Sign In</Text>
						</Button>
						<Button
							block
							onPress={() => {
								this.props.navigation.navigate('Welcome');
							}}
						>
							<Text>Cancel</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
