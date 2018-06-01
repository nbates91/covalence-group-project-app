import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNav';
import ActiveRouteDetailsNavigator from './ActiveRouteDetailsNav';
import ProfilePageScreen from '../screens/profilepagescreen';
import ContactScreen from '../screens/contactscreen';
import LogOutScreen from '../screens/logoutscreen';

const DrawerNavigation = createDrawerNavigator({
	Home: HomeNavigator,
	ActiveRoute: ActiveRouteDetailsNavigator,
	ProfilePage: { screen: ProfilePageScreen },
	Contact: { screen: ContactScreen },
	LogOut: { screen: LogOutScreen },
});

export default DrawerNavigation;
