import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StatusBar,
  Text,
  Button,
  Platform,
  StyleSheet
} from "react-native";

export default class SplashPage extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.navigation.navigate("BottomNavigator");
    }, 300);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  //渲染DOM
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text style={styles.title}>欢迎~欢迎~</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6a51ae"
  },
  title: {
    fontSize: 30,
    color: '#fff'
  }
});
