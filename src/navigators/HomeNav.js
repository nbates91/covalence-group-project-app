import { createStackNavigator } from 'react-navigation';
import Homescreen from '../screens/homescreen';
import RouteDetailsScreen from '../screens/routedetailsscreen';
import LocationDetailsScreen from '../screens/locationdetailsscreen';

const HomeNavigator = createStackNavigator({
	HomeScreen: { screen: Homescreen },
	RouteDetails: { screen: RouteDetailsScreen },
	LocationDetails: { screen: LocationDetailsScreen },
});

export default HomeNavigator;
