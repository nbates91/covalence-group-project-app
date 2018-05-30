import { createStackNavigator } from 'react-navigation';
import RouteDetailsScreen from '../screens/routedetailsscreen';
import ActiveRouteDetailsNavigator from './ActiveRouteDetailsNav';
import LocationDetailsNavigator from './LocationDetailsNav';
import WelcomeNavigator from './WelcomeNav';

const RouteDetailsNavigator = createStackNavigator({
	RouteDetails: { screen: RouteDetailsScreen },
	ActiveRoute: { screen: ActiveRouteDetailsNavigator },
	LocationDetails: { screen: LocationDetailsNavigator },
	Welcome: { screen: WelcomeNavigator },
});

export default RouteDetailsNavigator;
