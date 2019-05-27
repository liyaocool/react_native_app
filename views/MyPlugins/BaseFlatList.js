import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class BaseFlatList extends Component {
  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>BaseFlatList</Text>
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