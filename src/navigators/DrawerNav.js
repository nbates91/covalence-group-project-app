import { createDrawerNavigator } from 'react-navigation';
import HomeNavigator from './HomeNav';
import ActiveRouteDetailsNavigator from './ActiveRouteDetailsNav';
import ProfilePageNavigator from './ProfilePageNav';
import ContactNavigator from './ContactNav';

const DrawerNavigation = createDrawerNavigator(
	{
		Home: HomeNavigator,
		ActiveRoute: ActiveRouteDetailsNavigator,
		ProfilePage: ProfilePageNavigator,
		Contact: ContactNavigator,
	}
);

export default DrawerNavigation;
