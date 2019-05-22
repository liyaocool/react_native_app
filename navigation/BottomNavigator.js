import React, { Component } from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeStack from "./HomeStack";
import MineStack from "./MineStack";
import MyPlugins from "../views/MyPlugins";
import MyStyles from "../views/MyStyles";

class CustomBottomComponent extends Component {
  constructor() {
    super();
    this.state = { visible: false };
  }
  render() {
    const {state} = this.props.navigation
    return (
      <View style={ state.routeName == 'HomePage' ? styles.noBottom : ''}>
        <Text>{state.routeName}</Text>
        <BottomTabBar {...this.props} />
      </View>
    );
  }
}

const BottomNavigator = createBottomTabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "首页",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="ios-home" size={25} style={{ color: tintColor }} />
        )
      }
    },
    MyPlugins: {
      screen: MyPlugins,
      navigationOptions: {
        tabBarLabel: "插件",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="logo-javascript" size={25} style={{ color: tintColor }} />
        )
      }
    },
    MyStyles: {
      screen: MyStyles,
      navigationOptions: {
        tabBarLabel: "样式",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="logo-css3" size={25} style={{ color: tintColor }} />
        )
      }
    },
    MineStack: {
      screen: MineStack,
      navigationOptions: {
        tabBarLabel: "我的",
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon name="logo-css3" size={25} style={{ color: tintColor }} />
        )
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
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  noBottom: {
    width: 0,
    height: 0,
  }
})

export default BottomNavigator;
