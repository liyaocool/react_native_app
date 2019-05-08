import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../../views/Home/'
import DetailsScreen from '../../views/Home/Details'
import MyPlugins from '../../views/MyPlugins'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const MyPluginsStack = createStackNavigator(
  {
    MyPlugins: MyPlugins,

  },
  {
    initialRouteName: 'MyPlugins',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    MyPlugins: MyPluginsStack,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer
