import { createStackNavigator } from "react-navigation";
import ActiveRouteScreen from "../screens/activeroutescreen";
import GameOverNavigator from "./GameOverNav";
import LocationDetailsNavigator from "./LocationDetailsNav";
// import DrawerNavigation from './DrawerNav';

const ActiveRouteDetailsNavigator = createStackNavigator({
  ActiveRouteDetail: {
    screen: ActiveRouteScreen
  },
  GameOver: { screen: GameOverNavigator },
  LocationDetails: { screen: LocationDetailsNavigator }
  // DrawerStack: DrawerNavigation,
});

export default ActiveRouteDetailsNavigator;
