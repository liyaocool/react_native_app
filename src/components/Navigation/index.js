import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../../views/Home/'
import DetailsScreen from '../../views/Home/Details'
import MyPlugins from '../../views/MyPlugins'
import MyStyles from '../../views/MyStyles'
import Mine from '../../views/Mine'

//首页模块
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
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
  {
    Home: HomeStack,
    MyPlugins: MyPluginsStack,
    MyStyles: MyStylesStack,
    Mine: MineStack
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer
