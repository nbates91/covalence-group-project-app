import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class SignInScreen extends Component {
	static navigationOptions = {
		title: 'Sign in',
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
						<Text>Forgot Password</Text>
						<Button
							block
							onPress={() => {
								alert('You were signed in....but not really lol');
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
