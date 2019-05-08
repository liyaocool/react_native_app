import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../../views/Home/'
import MyPlugins from '../../views/MyPlugins'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    // Details: DetailsScreen,
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
    // Profile: ()=>import("../../views/MyPlugins/Profile"),

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
