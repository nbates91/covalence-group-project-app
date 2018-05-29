import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'constants';

let hardCodedUserId = 1;

export default class ProfilePageScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: '',
			profilePictureURL: '',
			pictures: [],
			user: null,
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
				});
				this.getPictures();
			})
			.catch(err => {
				console.log(err);
			});
	}

	updatePassword() {
		let updatedUser = {
			email: this.state.user.email,
			hash: newPassword, // get the new password from input box
			role: this.state.user.role,
			level: this.state.user.level,
			numberofcheckins: this.state.user.numberofcheckins,
		};
		// put new user to db
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
								<Input />
							</Item>
							<Item floatingLabel last>
								<Label>Confirm Password</Label>
								<Input />
							</Item>
							<Button
								block
								onPress={() => {
									// save new password and show pop up confirmation
									this.updatePassword();
									alert('Password was successfully changed!');
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
