import { createAppContainer, createStackNavigator } from "react-navigation";
import { Platform } from "react-native";
import PluginsPage from "../views/MyPlugins";
import BaseFlatList from "../views/MyPlugins/BaseFlatList";
const TITLE_OFFSET = Platform.OS === "ios" ? 70 : 56;

//首页模块
const PluginsStack = createStackNavigator(
  {
    PluginsPage: {
      screen: PluginsPage,
      navigationOptions: ({ navigation }) => ({
        title: `插件`,
        headerBackTitle: "返回插件"
      })
    },
    BaseFlatList: {
      screen: BaseFlatList,
      navigationOptions: ({ navigation }) => ({
        title: `FlatList基本用法`
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

export default PluginsStack;
