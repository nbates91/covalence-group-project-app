import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as userService from '../services/user';
import { styles } from '../../App';

export default class WelcomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			confirmPass: '',
			emailErrorMessage: "",
			passwordErrorMessage: ""
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

	emailExists() {
		// return false for now...I'm getting tired - it's 11pm. Finish tomorrow.
		return false;
	}

	isEmailValid() {
		// let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		// let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		// return re.test(String(this.state.email).toLowerCase());
		return true;
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

	handleSubmit() {
		if (!this.emailExists) {
			if (this.isEmailValid()) {
				this.clearEmailError();
				if (this.state.password === this.state.confirmPass) {
					this.clearPasswordError();
					if (this.isPasswordValid()) {
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
		else {
			alert("There is already an account registered with this email address.");
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
