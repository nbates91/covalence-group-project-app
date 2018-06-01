import { createStackNavigator } from 'react-navigation';
import SignInScreen from '../screens/signinscreen';
import SignUpScreen from '../screens/signupscreen';

const SignInNavigator = createStackNavigator({
	SignIn: { screen: SignInScreen },
	SignUp: { screen: SignUpScreen },
});

export default SignInNavigator;
