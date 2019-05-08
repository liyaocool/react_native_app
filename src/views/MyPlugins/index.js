import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MyPluginsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'My Plugins'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>MyPluginsScreen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}