import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import BottomNavigator from "./BottomNavigator";

export default (StackNavigator = createStackNavigator(
  {
    BottomNavigator: {
        screen:BottomNavigator,
        navigationOptions: {
            header: null
        }
    },
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
));
