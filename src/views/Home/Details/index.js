import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import { withNavigationFocus } from 'react-navigation';
class HeaderTitle extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Text style={styles.HeaderTitle}>详情</Text>
      </View>
    )
  }
}
class HeaderRight extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <Button
          style={styles.has_margin}
          title="设置"
          onPress={() => {

          }}
        />
      </View>
    )
  }
}
class DetailsScreen extends Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle />,
    headerRight: <HeaderRight />
  };
  render() {
    const {
      getParam,
      setParams,
      navigate,
      goBack,
      isFocused,
      state,
    } = this.props.navigation
    const itemId = getParam('itemId', 'default_id')

    return (
      <View style={styles.Container}>
        <Button
          title="去首页"
          onPress={() => navigate('Home')}
        />
        <Button
          title="更新标题"
          onPress={() => setParams({ itemId: 'Updated!' })}
        />
        <Button
          title="返回上一页"
          onPress={() => goBack()}
        />
        <Text style={styles.has_margin}>Details Screen</Text>
        <Text style={styles.has_margin}>params:{JSON.stringify(itemId)}</Text>
        <Text style={styles.has_margin}>this.props.navigation.state:{JSON.stringify(state)}</Text>
        <Text style={styles.has_margin}>state.routeName:{state.routeName}</Text>
        <Text style={styles.has_margin}>this.props.navigation.isFocused()获取是否聚焦当前页面:{isFocused() ? 'focus' : 'notFocus'}</Text>
        <Text style={styles.has_margin}>withNavigationFocus获取是否聚焦当前页面:{this.props.isFocused ? 'focus' : 'notFocus'}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  has_margin: {
    margin: 5,

  },
  HeaderTitle: {
    fontSize: 18,
    color: '#fff',
  }

})

export default withNavigationFocus(DetailsScreen)