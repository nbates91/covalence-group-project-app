import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNav';
import ActiveRouteDetailsNavigator from './ActiveRouteDetailsNav';
// import ProfilePageNavigator from './ProfilePageNav';
import ProfilePageScreen from '../screens/profilepagescreen';
import ContactScreen from '../screens/contactscreen';
import LogOutScreen from '../screens/logoutscreen';
// import SignInScreen from '../screens/signinscreen';

const DrawerNavigation = createDrawerNavigator({
	Home: HomeNavigator,
	ActiveRoute: ActiveRouteDetailsNavigator,
	// ProfilePage: ProfilePageNavigator,
	ProfilePage: { screen: ProfilePageScreen },
	Contact: { screen: ContactScreen },
	// LogOut: { screen: SignInScreen },
	LogOut: { screen: LogOutScreen },
});

export default DrawerNavigation;
