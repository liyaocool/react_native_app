import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons"
import HomeScreen from '../../views/Home/'
import DetailsScreen from '../../views/Home/Details'
import MyPlugins from '../../views/MyPlugins'
import MyStyles from '../../views/MyStyles'
import Mine from '../../views/Mine'

//首页模块
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: {
      screen: DetailsScreen,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6B52AE',
      },
      headerTintColor: '#efefef',
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center'
      },
    }
  }
);

//插件模块
const MyPluginsStack = createStackNavigator(
  {
    MyPlugins: MyPlugins,

  },
  {
    initialRouteName: 'MyPlugins',
  }
);

//样式模块
const MyStylesStack = createStackNavigator(
  {
    MyStyles: MyStyles,

  },
  {
    initialRouteName: 'MyStyles',
  }
);

//个人中心模块
const MineStack = createStackNavigator(
  {
    Mine: Mine,

  },
  {
    initialRouteName: 'Mine',
  }
);

const TabNavigator = createBottomTabNavigator(
  //RouteConfigs 路由显示
  {
    Home: {
      screen: HomeStack,
    },

    MyPlugins: MyPluginsStack,
    MyStyles: MyStylesStack,
    Mine: MineStack
  },
  //BottomTabNavigatorConfig 路由选项
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#6B52AE',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
      },
    }
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer
