import React, { Component } from "react";
import { View, Text, Button, Platform, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SplashPage extends Component {
  //渲染DOM
  render() {
    const { navigate, state } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <Text>只包含了启动页面,可以拓展多页面做介绍指引</Text>
        <Icon name="ios-settings" size={25} color="blue" />
        <Button
          title="下一步"
          onPress={() => {
            navigate("DrawNavigator");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
