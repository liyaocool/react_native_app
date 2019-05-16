import React, { Component } from "react";
import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import Page1 from "../views/Home/page1";

class DrawPage extends Component {
  render() {
    const { openDrawer, closeDrawer } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text>从屏幕左侧向右滑动打开抽屉</Text>
        <Button title="打开抽屉菜单" onPress={() => openDrawer()} />
        <Button title="关闭抽屉菜单" onPress={() => closeDrawer()} />
      </View>
    );
  }
}

//自定义内容组件
const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.Container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View>
        <Button title="关闭抽屉菜单" onPress={() => closeDrawer()} />
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const DrawNavigator = createDrawerNavigator(
  {
    DrawPage: {
      screen: DrawPage,
      navigationOptions: {
        drawerLabel: "DrawPage",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="ios-home" size={25} style={{ color: tintColor }} />
        )
      }
    },
    Page1: {
      screen: Page1,
      navigationOptions: {
        drawerLabel: "Page1",
        drawerIcon: ({ focused, tintColor }) => (
          <Icon name="ios-home" size={25} style={{ color: tintColor }} />
        )
      }
    }
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
