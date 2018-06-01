import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as userService from '../services/user';
import { styles } from '../../App';

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPass: '',
			emailErrorMessage: '',
			passwordErrorMessage: ''
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

	isEmailValid() {
		let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return emailFormat.test(String(this.state.email).toLowerCase());
	}

	isPasswordValid() {
		return this.state.password.length >= 5;
	}

	clearEmailError() {
		this.setState({
			emailErrorMessage: ""
		});
	}

	clearPasswordError() {
		this.setState({
			passwordErrorMessage: ""
		});
	}

	passwordsMatch() {
		return this.state.password === this.state.confirmPass;
	}

	createUser() {
		let updatedUser = {
			email: this.state.email,
			hash: this.state.password,
			role: 'user',
			level: 0,
			numberofcheckins: 0,
		};
		fetch(`https://bham-hops.herokuapp.com/api/users/`,
			{
				method: 'POST',
				body: JSON.stringify(updatedUser),
				headers: new Headers({
					'Content-Type': 'application/json',
				}),
			})
			.then(res => {
				this.login();
			})
			.catch(err => {
				console.log(err);
			});
	}

	checkEverythingElse() {
		if (this.isEmailValid()) {
			this.clearEmailError();
			if (this.passwordsMatch()) {
				this.clearPasswordError();
				if (this.isPasswordValid()) {
					this.createUser();
				}
				else {
					alert("Please enter a valid password.");
				}
			}
			else {
				this.setState({
					passwordErrorMessage: "Passwords do not match."
				});
			}
		}
		else {
			this.setState({
				emailErrorMessage: "Email is invalid."
			});
		}
	}

	// this checks to see if the email the user input already exists in the database. 
	handleSubmit() {
		fetch(`https://bham-hops.herokuapp.com/api/users/`)
			.then((res) => {
				return res.json();
			})
			.then((users) => {
				for (let i = 0; i < users.length; i++) {
					if ((users[i].email).toLowerCase() === (this.state.email).toLowerCase()) {
						this.checkEverythingElse();
						return; // this prevents us from ever getting out of the for loop (and to the alert)
					}
				}
				alert("There is already an account registered with this email address.");
			})
			.catch(err => {
				console.log(err);
			});
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
						<Text style={styles.errorRed} > {this.state.emailErrorMessage} </Text>
						<Item floatingLabel last>
							<Label>Password</Label>
							<Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
						</Item>
						<Text> Password is case sensitve and must contain at least 5 characters. </Text>
						<Text style={styles.errorRed}> {this.state.passwordErrorMessage} </Text>
						<Item floatingLabel last>
							<Label>Confirm Password</Label>
							<Input
								secureTextEntry={true}
								onChangeText={confirmPass => this.setState({ confirmPass })}
							/>
						</Item>
						<Text style={styles.errorRed}> {this.state.passwordErrorMessage} </Text>
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
