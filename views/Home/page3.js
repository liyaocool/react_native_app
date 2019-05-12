import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class Page3 extends Component {
  render() {
    const {navigate} = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>页面3</Text>
        <Button
          title="跳转页面1"
          onPress={() => navigate('Page1',{name:'来自页面3的标题'})}
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