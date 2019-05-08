import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('itemId', 'default_id'),
    }
  }
  render() {
    const { getParam } = this.props.navigation
    const itemId = getParam('itemId', 'default_id')
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>params:{JSON.stringify(itemId)}</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ itemId: 'Updated!' })}
        />
      </View>
    );
  }
}