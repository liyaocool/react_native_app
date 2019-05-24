import React, { Component } from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeStack from "./HomeStack";
import PluginsStack from "./PluginsStack";
import StylesStack from "./StylesStack";
import MineStack from "./MineStack";

class CustomBottomComponent extends Component {
  constructor() {
    super();
    this.state = { visible: false };
  }
  render() {
    return (
      <View>
        <BottomTabBar {...this.props} />
      </View>
    );
  }
}

const BottomNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "首页",
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="ios-home" size={25} style={{ color: tintColor }} />
          )
        };
      }
    },
    PluginsStack: {
      screen: PluginsStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "插件",
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon
              name="logo-javascript"
              size={25}
              style={{ color: tintColor }}
            />
          )
        };
      }
    },
    StylesStack: {
      screen: StylesStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "样式",
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="logo-css3" size={25} style={{ color: tintColor }} />
          )
        };
      }
    },
    MineStack: {
      screen: MineStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: "我的",
          tabBarIcon: ({ focused, tintColor }) => (
            <Icon name="logo-css3" size={25} style={{ color: tintColor }} />
          )
        };
      }
    }
  },
  {
    tabBarComponent: props => <CustomBottomComponent {...props} />,
    tabBarOptions: {
      // activeTintColor: "red"
    }
  }
);

const styles = StyleSheet.create({
  test: {
    // alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "red"
  },
  noBottom: {
    width: 0,
    height: 0
  }
});

export default BottomNavigator;
