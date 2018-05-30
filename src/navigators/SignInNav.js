import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/signinscreen';
import HomeNavigator from './HomeNav';
import WelcomeNavigator from './WelcomeNav';

const SignInNavigator = createStackNavigator({
	SignIn: { screen: SignInScreen },
	Home: { screen: HomeNavigator },
	Welcome: { screen: WelcomeNavigator },
});

export default SignInNavigator;
