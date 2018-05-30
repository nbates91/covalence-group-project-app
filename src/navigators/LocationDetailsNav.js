import { createStackNavigator } from 'react-navigation';
import LocationDetailsScreen from '../screens/locationdetailsscreen';

const LocationDetailsNavigator = createStackNavigator({
	LocationDetails: { screen: LocationDetailsScreen },
});

export default LocationDetailsNavigator;
