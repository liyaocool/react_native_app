import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../../views/Home/'
import DetailsScreen from '../../views/Home/Details'
import MyPlugins from '../../views/MyPlugins'
import ProfileScreen from '../../views/MyPlugins/Profile/'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    //默认头部样式
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const MyPluginsStack = createStackNavigator(
  {
    MyPlugins: MyPlugins,
    Profile: ProfileScreen,

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
