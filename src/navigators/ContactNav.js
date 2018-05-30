import { createStackNavigator } from 'react-navigation';
import ContactScreen from '../screens/contactscreen';

const ContactNavigator = createStackNavigator({
	Contact: { screen: ContactScreen },
});

export default ContactNavigator;
