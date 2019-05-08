import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, Platform } from 'react-native'

export default class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      //单独头部样式
      headerStyle: {
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigate('MyPlugins')}
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