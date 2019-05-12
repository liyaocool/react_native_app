import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class AppTop extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>AppTop</Text>
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