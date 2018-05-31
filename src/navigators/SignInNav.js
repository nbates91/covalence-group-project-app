import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';
// import HomeNavigator from './HomeNav';

const SignInNavigator = createStackNavigator({
	SignIn: { screen: SignInScreen },
	SignUp: { screen: SignUpScreen },
	// Home: { screen: HomeNavigator },
});

export default SignInNavigator;
