import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/HomeScreen'
import CardScreen from '../screens/CardScreen'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Card: CardScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    },
  }
);

export default RootStack