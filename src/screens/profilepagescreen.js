import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import * as baseService from '../services/base';

let hardCodedUserId = 1;

export default class ProfilePageScreen extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Choose a Route!',
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
			userEmail: '',
			profilePictureURL: '',
			pictures: [],
			user: null,
			newPassword: '',
			confirmPassword: '',
		};
	}

	getPictures() {
		fetch(`https://bham-hops.herokuapp.com/api/users/${hardCodedUserId}/images`)
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
		fetch(`https://bham-hops.herokuapp.com/api/users/${hardCodedUserId}`)
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
			fetch(`https://bham-hops.herokuapp.com/api/users/${hardCodedUserId}`, {
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
					});
				})
				.catch(err => {
					console.log(err);
				});
			alert('Password was successfully changed!');
		} else {
			alert('Passwords do not match!');
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
							<Item floatingLabel last>
								<Label>Confirm Password</Label>
								<Input
									secureTextEntry={true}
									onChangeText={confirmPassword => this.setState({ confirmPassword })}
									value={this.state.confirmPassword}
								/>
							</Item>
							<Button
								block
								onPress={() => {
									// save new password and show pop up confirmation
									this.updatePassword();
								}}
							>
								<Text>Update Password</Text>
							</Button>
						</Form>
						<Text> Photos </Text>
						{this.state.pictures.map((pic, index) => {
							return <Text key={index}> {pic.imageurl} </Text>;
						})}
					</Content>
				</Container>
			</ScrollView>
		);
	}
}
