import { createStackNavigator } from 'react-navigation';
import ActiveRouteScreen from '../screens/activeroutescreen';
import LocationDetailsScreen from '../screens/locationdetailsscreen';
import GameOverScreen from '../screens/gameoverscreen';
import OpenCamera from '../screens/camerascreen';

const ActiveRouteDetailsNavigator = createStackNavigator(
	{
		ActiveRouteDetail: { screen: ActiveRouteScreen },
		GameOver: { screen: GameOverScreen },
		LocationDetails: { screen: LocationDetailsScreen },
		Camera: { screen: OpenCamera },
	}, 
	{ headerTitle: "Active Crawl" } 
);

export default ActiveRouteDetailsNavigator;
