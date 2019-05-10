import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import HomePage from '../views/Home'
import Page1 from '../views/Home/page1'
import Page2 from '../views/Home/page2'
// import MyPlugins from '../views/MyPlugins'
// import MyStyles from '../views/MyStyles'
// import Mine from '../views/Mine'
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

//首页模块
const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions:({navigation}) => ({
        title:`首页`,
        headerBackTitle: '返回首页'
      })
    },
    Page1: {
      screen: Page1,
      navigationOptions:({navigation}) => ({
        title:`${navigation.state.params.name}页面`
      })
    },
    Page2: {
      screen: Page2,
      navigationOptions:({navigation}) => ({
        title:`页面2`
      })
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
       headerTitleStyle: {
           alignSelf: 'center',
           textAlign: 'center',
           flex: 1,
         },
         headerTitleContainerStyle: {
           left: TITLE_OFFSET,
           right: TITLE_OFFSET,
         }
    }
  }
);

// //插件模块
// const MyPluginsStack = createStackNavigator(
//   {
//     MyPlugins: MyPlugins,

//   },
//   {
//     initialRouteName: 'MyPlugins',
//   }
// );

// //样式模块
// const MyStylesStack = createStackNavigator(
//   {
//     MyStyles: MyStyles,

//   },
//   {
//     initialRouteName: 'MyStyles',
//   }
// );

// //个人中心模块
// const MineStack = createStackNavigator(
//   {
//     Mine: Mine,

//   },
//   {
//     initialRouteName: 'Mine',
//   }
// );

// const TabNavigator = createBottomTabNavigator(
//   {
//     Home: HomeStack,
//     MyPlugins: MyPluginsStack,
//     MyStyles: MyStylesStack,
//     Mine: MineStack
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

const AppContainer = createAppContainer(HomeStack);

export default AppContainer
