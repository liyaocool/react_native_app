import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('itemId', 'default_id'),
    }
  }
  render() {
    const {
      getParam,
      setParams,
      navigate
    } = this.props.navigation
    const itemId = getParam('itemId', 'default_id')
    return (
      <View style={styles.Container}>
        <Text>Details Screen</Text>
        <Text>params:{JSON.stringify(itemId)}</Text>
        <Button
          title="去首页"
          onPress={() => navigate('Home')}
        />
        <Button
          title="Update the title"
          onPress={() => setParams({ itemId: 'Updated!' })}
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