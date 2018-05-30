import { createStackNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/welcomescreen';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';

const WelcomeNavigator = createStackNavigator(
	{
		Welcome: { screen: WelcomeScreen },
		SignIn: { screen: SignInScreen },
		SignUp: { screen: SignUpScreen },
	},
	{ initialRouteName: 'Welcome' }
);

export default WelcomeNavigator;
