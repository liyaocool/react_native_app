import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class MyStylesScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '样式'
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>MyStylesScreen</Text>
        <Button
          title="去样式详情页"
          onPress={() => {
            navigate('DetailPage', { name: '动态样式参数' })
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