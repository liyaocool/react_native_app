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
import Icon from "react-native-vector-icons/Ionicons";

export default class HomeScreen extends Component {
  //渲染DOM
  render() {
    const { navigate, state } = this.props.navigation;
    return (
      <View style={styles.Container}>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        {/* <Text>首页</Text> */}
        <Icon name="ios-settings" size={25} color="blue" />
        <Button
          title="去首页详情页"
          onPress={() => {
            navigate("HomeDetail", { name: "动态名字" });
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
    justifyContent: "center",
    backgroundColor: "#efefef"
  }
});
