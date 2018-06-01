import React, { Component } from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as baseService from '../services/base';
import { styles } from '../../App';

export default class ProfilePageScreen extends Component {
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
			userID: null,
			userEmail: '',
			profilePictureURL: '',
			pictures: [],
			user: null,
			newPassword: '',
			confirmPassword: '',
			passwordErrorMessage: ''
		};
		this.setUserID();
	}

	setUserID() {
		AsyncStorage.getItem('user')
			.then(userID => {
				this.setState({ userID });
			})
			.catch(err => {
				console.log(err);
			});
	}

	getPictures() {
		fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}/images`)
			.then(res => {
				return res.json();
			})
			.then(pictures => {
				this.setState({
					pictures: pictures,
					profilePictureURL: pictures[0].imageurl,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	componentWillMount() {
		fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}`)
			.then(res => {
				return res.json();
			})
			.then(user => {
				this.setState({
					userEmail: user.email,
					user: user,
				});
				this.getPictures();
			})
			.catch(err => {
				console.log(err);
			});
	}

	updatePassword() {
		// still need to add requirements to passwords - even an empty password works right now...
		if (this.state.newPassword === this.state.confirmPassword) {
			let updatedUser = {
				email: this.state.user.email,
				hash: this.state.newPassword,
				role: this.state.user.role,
				level: this.state.user.level,
				numberofcheckins: this.state.user.numberofcheckins,
			};
			fetch(`https://bham-hops.herokuapp.com/api/users/${this.state.userID}`, {
				method: 'PUT',
				body: JSON.stringify(updatedUser),
				headers: new Headers({
					'Content-Type': 'application/json',
				}),
			})
				.then(res => {
					this.setState({
						newPassword: '',
						confirmPassword: '',
						passwordErrorMessage: ''
					});
				})
				.catch(err => {
					console.log(err);
				});
			alert('Password was successfully changed!');
		} else {
			this.setState({
				passwordErrorMessage: 'Passwords do not match!'
			});
		}
	}

	render() {
		return (
			<ScrollView>
				<Text> Profile Picture URL: {this.state.profilePictureURL} </Text>
				<Text> User Email: {this.state.userEmail} </Text>
				<Container>
					<Content>
						<Form>
							<Item floatingLabel>
								<Label>Password</Label>
								<Input
									secureTextEntry={true}
									onChangeText={newPassword => this.setState({ newPassword })}
									value={this.state.newPassword}
								/>
							</Item>
							<Text style={styles.errorRed}> {this.state.passwordErrorMessage} </Text>
							<Item floatingLabel last>
								<Label>Confirm Password</Label>
								<Input
									secureTextEntry={true}
									onChangeText={confirmPassword => this.setState({ confirmPassword })}
									value={this.state.confirmPassword}
								/>
							</Item>
							<Text style={styles.errorRed}> {this.state.passwordErrorMessage} </Text>
							<Button
								block
								onPress={() => {
									this.updatePassword();
								}}
							>
								<Text>Update Password</Text>
							</Button>
						</Form>
						<Text> Photos </Text>
						{this.state.pictures.map((pic, index) => {
							return <Text key={pic.id}> {pic.imageurl} </Text>;
						})}
					</Content>
				</Container>
			</ScrollView>
		);
	}
}
