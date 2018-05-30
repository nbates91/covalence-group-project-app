import { createStackNavigator } from 'react-navigation';
import GameOverScreen from '../screens/gameoverscreen';

const GameOverNavigator = createStackNavigator({
	GameOver: { screen: GameOverScreen },
});

export default GameOverNavigator;
