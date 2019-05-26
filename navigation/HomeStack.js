import { createAppContainer, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import HomePage from "../views/Home";
import HomeDetail from "../views/Home/detail";
const TITLE_OFFSET = Platform.OS === "ios" ? 70 : 56;

//首页模块
const HomeStack = createStackNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: ({ navigation }) => ({
        header: null,
        title: `首页`,
        headerBackTitle: "返回首页"
      })
    },
    HomeDetail: {
      screen: HomeDetail,
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.name}页面`
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {
        alignSelf: "center",
        textAlign: "center",
        flex: 1
      },
      headerTitleContainerStyle: {
        left: TITLE_OFFSET,
        right: TITLE_OFFSET
      }
    }
  }
);

export default HomeStack;
