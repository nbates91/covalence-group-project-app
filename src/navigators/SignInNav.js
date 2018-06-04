import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';
import { styles } from '../../App';
// import cclogo from '../assetts/cclogo'

const SignInNavigator = createStackNavigator({
	SignIn: {
		screen: SignInScreen,
		navigationOptions: ({ navigation }) => ({
			title: 'Sign in',
			headerStyle: styles.headerColor,
			// headerTitle: (
			// 	<Image style={{ marginTop: 30, width: 90, height: 90 }} source={require('../assetts/cclogo.png')} />
			// ),
		})
	},
	SignUp: { screen: SignUpScreen },
});

export default SignInNavigator;
