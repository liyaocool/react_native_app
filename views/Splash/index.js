import React, { Component } from "react";
import {
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  Platform,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default class SplashPage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate("DrawNavigator");
    }, 1000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  //渲染DOM
  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text styles={{ fontSize: 34 }}>欢迎~欢迎~</Text>
        <Icon name="ios-settings" size={25} color="#fff" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a51ae"
  },
  MyText: {
    fontSize: 34
    // color: '#fff'
  }
});
