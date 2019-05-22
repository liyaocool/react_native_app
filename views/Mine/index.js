import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class MineScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '我的'
    }
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>MineScreen</Text>
        <Button
          title="去我的详情页"
          onPress={() => {
            navigate('DetailPage', { name: '我的详情' })
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