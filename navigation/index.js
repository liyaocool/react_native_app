import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Platform} from 'react-native';
import TopNavigator from './TopNavigator'
import BottomNavigator from './BottomNavigator'
import DrawNavigator from './DrawNavigator'
import HomePage from '../views/Home'
import Page1 from '../views/Home/page1'
import Page2 from '../views/Home/page2'
import Page3 from '../views/Home/page3'
const TITLE_OFFSET = Platform.OS === 'ios' ? 70 : 56;

//首页模块
const HomeStack = createStackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: ({
      navigation
    }) => ({
      title: `首页`,
      headerBackTitle: '返回首页'
    })
  },
  Page1: {
    screen: Page1,
    navigationOptions: ({
      navigation
    }) => ({
      title: `${navigation.state.params.name}页面`
    })
  },
  Page2: {
    screen: Page2,
    navigationOptions: ({
      navigation
    }) => ({
      title: `页面2`
    })
  },

  Page3: {
    screen: Page3,
    navigationOptions: ({
      navigation
    }) => ({
      title: `页面3`
    })
  },

  AppTop: {
    screen: TopNavigator,
    navigationOptions: ({
      navigation
    }) => ({
      title: `TopNavigator`
    })
  },
  AppBottom: {
    screen: BottomNavigator,
    navigationOptions: ({
      navigation
    }) => ({
      title: `BottomNavigator`
    })
  },
  AppDraw: {
    screen: DrawNavigator,
    navigationOptions: ({
      navigation
    }) => ({
      title: `DrawNavigator`
    })
  },

}, {
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
});


const AppContainer = createAppContainer(HomeStack);

export default AppContainer