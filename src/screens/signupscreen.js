import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

export default class WelcomeScreen extends Component {
	static navigationOptions = {
		title: 'Sign up',
	};
	render() {
		return (
			<Container>
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Username</Label>
							<Input />
						</Item>
						<Item floatingLabel last>
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
								alert('Account Created!!!... not really');
							}}
						>
							<Text>Create Account</Text>
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
