import { createStackNavigator } from 'react-navigation';
import Homescreen from '../screens/homescreen';
import RouteDetailsScreen from '../screens/routedetailsscreen';
// import ActiveRouteScreen from '../screens/activeroutescreen';
// import RouteDetailsNavigator from './RouteDetailsNav';

const HomeNavigator = createStackNavigator({
	HomeScreen: { screen: Homescreen },
	RouteDetails: { screen: RouteDetailsScreen },
	// ActiveRouteScreen: { screen: ActiveRouteScreen }
});

export default HomeNavigator;
