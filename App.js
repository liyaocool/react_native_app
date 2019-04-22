import React, { Component } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert, Platform } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json


class LogoTitle extends Component {
  render() {
    return (
      <Image
        source={require('./src/assets/img/img_1.jpg')}
        style={{ width: 30, height: 30 }}
      />
    )
  }
}
class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  }

  state = {
    count: 0,
  }

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>Count: {this.state.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.navigate('Details', { itemId: 'details-itemId' })
          }}
        />
      </View>
    );
  }


}

class DetailsScreen extends Component {
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

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Settings'
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Screen</Text>
        <Button
          title="Go to Profile"
          onPress={() => this.props.navigation.navigate('Profile')}
        />
      </View>
    );
  }
}
class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Profile',
      //单独头部样式
      headerStyle: {
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate('Settings')}
        />
      </View>
    );
  }
}


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    //默认头部样式
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Profile: ProfileScreen,

  },
  {
    initialRouteName: 'Settings',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Settings: SettingsStack,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(TabNavigator);
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
})