import { createStackNavigator } from 'react-navigation';
import Homescreen from '../screens/homescreen';
import RouteDetailsScreen from '../screens/routedetailsscreen';

const HomeNavigator = createStackNavigator({
	HomeScreen: { screen: Homescreen },
	RouteDetails: { screen: RouteDetailsScreen },
});

export default HomeNavigator;
