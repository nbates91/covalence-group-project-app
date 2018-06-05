import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNav';
import ActiveRouteDetailsNavigator from './ActiveRouteDetailsNav';
import ProfilePageNavigator from './ProfilePageNav';
import ContactNavigator from './ContactNav';
import LogOutScreen from '../screens/logoutscreen';
// import { styles } from '../../App';

const DrawerNavigation = createDrawerNavigator({
	Home: HomeNavigator,
	ActiveRoute: {
		screen: ActiveRouteDetailsNavigator,
		navigationOptions: ({ navigation }) => ({
			title: `Active Crawl`,
		}),
	},
	ProfilePage: {
		screen: ProfilePageNavigator,
		navigationOptions: ({ navigation }) => ({
			title: `Profile Page`,
		}),
	},
	Contact: {
		screen: ContactNavigator,
		navigationOptions: ({ navigation }) => ({
			title: `Contact Us`,
		}),
	},
	LogOut: {
		screen: LogOutScreen,
		navigationOptions: ({ navigation }) => ({
			title: `Log Out`,
		}),
	},
});

export default DrawerNavigation;
