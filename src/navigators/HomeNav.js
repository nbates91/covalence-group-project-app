import { createStackNavigator } from 'react-navigation';
import Homescreen from '../screens/homescreen';
import RouteDetailsScreen from '../screens/routedetailsscreen';
import LocationDetailsScreen from '../screens/locationdetailsscreen';
// import RouteDetailsNavigator from './RouteDetailsNav';

const HomeNavigator = createStackNavigator({
	HomeScreen: { screen: Homescreen },
	// RouteDetails: RouteDetailsNavigator
	RouteDetails: { screen: RouteDetailsScreen },
	LocationDetails: { screen: LocationDetailsScreen },
});

export default HomeNavigator;
