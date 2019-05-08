import React, { Component } from 'react';
import { View, Text, Button, Platform, StyleSheet } from 'react-native';

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
      title:'首页',
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
    const {navigate} = this.props.navigation
    return (
      <View style={styles.Container}>
        <Text>首页</Text>
        <Text>计数: {this.state.count}</Text>
        <Button
          title="去详情"
          onPress={() => {
            navigate('Details', { itemId: '首页传的参数' })
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