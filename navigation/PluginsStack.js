import { createAppContainer, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import PluginsPage from "../views/MyPlugins";
import PluginsDetail from "../views/MyPlugins/detail";
const TITLE_OFFSET = Platform.OS === "ios" ? 70 : 56;

//首页模块
const PluginsStack = createStackNavigator(
  {
    PluginsPage: {
      screen: PluginsPage,
      navigationOptions: ({ navigation }) => ({
        initialRouteName:'PluginsPage',
        title: `插件`,
        headerBackTitle: "返回插件"
      })
    },
    PluginsDetail: {
      screen: PluginsDetail,
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

export default PluginsStack;
