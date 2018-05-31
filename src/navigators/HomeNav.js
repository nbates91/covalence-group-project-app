import { createStackNavigator } from 'react-navigation';
import Homescreen from '../screens/homescreen';
import RouteDetailsScreen from '../screens/routedetailsscreen';
import ActiveRouteScreen from '../screens/activeroutescreen';
// import RouteDetailsNavigator from './RouteDetailsNav';

const HomeNavigator = createStackNavigator({
	Home: { screen: Homescreen },
	RouteDetails: { screen: RouteDetailsScreen },
	ActiveRouteScreen: { screen: ActiveRouteScreen }
	// RouteDetails: { screen: RouteDetailsNavigator },
});

export default HomeNavigator;
