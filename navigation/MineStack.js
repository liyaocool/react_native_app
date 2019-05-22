import { createAppContainer, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import MinePage from "../views/Mine";
import DetailPage from "../views/Mine/detail";
const TITLE_OFFSET = Platform.OS === "ios" ? 70 : 56;

//首页模块
const MineStack = createStackNavigator(
  {
    MinePage: {
      screen: MinePage,
      navigationOptions: ({ navigation }) => ({
        initialRouteName:'Mine',
        title: `我的`,
        headerBackTitle: "返回我的"
      })
    },
    DetailPage: {
      screen: DetailPage,
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

export default MineStack;
