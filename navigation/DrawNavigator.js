import React, { Component } from "react";
import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import HomeStack from './HomeStack'
import BottomNavigator from "./BottomNavigator";
import Home from "../views/Home";

//自定义内容组件
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.Container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View>
        <Button title="关闭抽屉菜单" onPress={() => props.navigation.closeDrawer()} />
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const DrawNavigator = createDrawerNavigator(
  {
    BottomNavigator: {
      screen: BottomNavigator,
      navigationOptions: {
        drawerLabel: "BottomNavigator",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="ios-home" size={25} style={{ color: tintColor }} />
        )
      }
    },
  },
  {
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: "#e91e63",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
export default DrawNavigator;
