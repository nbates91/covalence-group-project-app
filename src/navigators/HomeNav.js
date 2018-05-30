import { createStackNavigator } from 'react-navigation';
import Homescreen from '../screens/homescreen';
import RouteDetailsNavigator from './RouteDetailsNav';

const HomeNavigator = createStackNavigator({
	Home: { screen: Homescreen },
	RouteDetails: { screen: RouteDetailsNavigator },
});

export default HomeNavigator;
