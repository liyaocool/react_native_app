import React, { Component } from 'react';
import { View, Text, Button, Platform } from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  //初始加载钩子
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  }

  //方法
  _increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  //渲染DOM
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="To Details"
          onPress={() => {
            this.props.navigation.navigate('Details', { itemId: 'details-itemId' })
          }}
        />
      </View>
    );
  }
}