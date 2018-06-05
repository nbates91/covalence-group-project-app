import { createStackNavigator } from 'react-navigation';
import ProfilePageScreen from '../screens/profilepagescreen';

const ProfilePageNavigator = createStackNavigator({
    ProfilePage: { screen: ProfilePageScreen },
});

export default ProfilePageNavigator;