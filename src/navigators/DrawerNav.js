import React from 'react';
import { createDrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
import HomeNavigator from './HomeNav';
import { Image } from 'react-native'
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
},
	{
		contentComponent: (props) => (
			<SafeAreaView style={{ paddingTop: 20, flex: 1, backgroundColor: "#404041", justifyContent: 'space-between' }} >
				<DrawerItems {...props} />
				<Image style={{ width: 300, height: 300, resizeMode: 'contain' }} source={require('../assets/clearhop.png')} />
			</SafeAreaView>
		),
		contentOptions: {
			activeTintColor: "#F9F5E0",
			inactiveTintColor: "#F9F5E0",
			activeBackgroundColor: "#58585B",
			itemStyle: {
				borderBottomColor: '#58585B',
				borderBottomWidth: 1
			}
		}
	},
);

export default DrawerNavigation;
