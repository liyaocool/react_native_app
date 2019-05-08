import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class MyPluginsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '插件'
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>MyPluginsScreen</Text>
        <Button
          title="Go to Profile"
          onPress={() => navigate('Profile')}
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