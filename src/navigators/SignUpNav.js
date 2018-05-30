import { createStackNavigator } from 'react-navigation';
import SignUpScreen from '../screens/signupscreen';
import HomeNavigator from './HomeNav';
import WelcomeNavigator from './WelcomeNav';

const SignUpNavigator = createStackNavigator({
	SignUp: { screen: SignUpScreen },
	Home: { screen: HomeNavigator },
	Welcome: { screen: WelcomeNavigator },
});

export default SignUpNavigator;
