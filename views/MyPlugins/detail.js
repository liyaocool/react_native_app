import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class Page1 extends Component {
  render() {
    const {goBack} = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>Plugins detail</Text>
        <Text>{JSON.stringify(this.props.navigation) }</Text>
        <Button
          title="返回上一页"
          onPress={() => goBack()}
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