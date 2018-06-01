import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as userService from '../services/user';
import { AsyncStorage } from 'react-native';

export default class SignInScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirectToReferrer: false,
			email: '',
			password: '',
			feedbackMessage: '',
			checkingLogin: true,
		};
	}

	async componentDidMount() {

		let loggedIn = await userService.checkLogin();

		if (loggedIn) {
			this.setState({ redirectToReferrer: true, checkingLogin: false });
			this.props.navigation.navigate('DrawerStack');
		} else {
			this.setState({ checkingLogin: false });
		}
	}

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
							<Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
						</Item>
						{/* Forgot password button needs to go to new screen where user can enter the 
							email they use associated with their craft crawls account. Then, we need 
							to make sure that email exists in our DB. Then, we can use mailgun to send 
							them an email with a new (long crazy) password. We will also need to change 
							their password in the DB to the new (long crazy) password so when they try 
							to log in, it will let them. Once they've logged in with the new (long crazy) 
							password, they can go to the profile page screen and change their password.  */}
						<Text>Forgot Password</Text>
						<Button
							block
							onPress={() => {
								this.login();
							}}
						>
							<Text>Sign In</Text>
						</Button>
						<Text> Don't have an account yet? </Text>
						<Button block onPress={() => this.props.navigation.navigate('SignUp')}>
							<Text>Sign Up</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
