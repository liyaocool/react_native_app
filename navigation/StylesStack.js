import { createAppContainer, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import StylesPage from "../views/MyStyles";
import DetailPage from "../views/MyStyles/detail";
const TITLE_OFFSET = Platform.OS === "ios" ? 70 : 56;

//首页模块
const StylesStack = createStackNavigator(
  {
    StylesPage: {
      screen: StylesPage,
      navigationOptions: ({ navigation }) => ({
        title: `样式`,
        headerBackTitle: "返回样式"
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
      headerStyle: {
        backgroundColor: "#6a51ae"
      },
      headerTitleStyle: {
        alignSelf: "center",
        textAlign: "center",
        flex: 1,
        color: "#fff"
      },
      headerTintColor: "#fff",
      headerBackTitleStyle: {
        color: "#fff"
      },
      headerTitleContainerStyle: {
        left: TITLE_OFFSET,
        right: TITLE_OFFSET
      }
    }
  }
);

export default StylesStack;
