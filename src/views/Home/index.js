import React, { Component } from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }


  static navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon name="ios-home" size={26} style={{ color: tintColor }} />
    )
  }
  //渲染DOM
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>首页</Text>
        <Text>计数: {this.state.count}</Text>
        <Icon name="ios-settings" size={25} color="blue" />
        <Button
          title="去详情"
          onPress={() => {
            navigate('Details', { itemId: '首页传的参数' })
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})