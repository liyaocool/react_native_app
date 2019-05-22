import React from 'react';
import {createBottomTabNavigator} from 'react-navigation'
import Icon from "react-native-vector-icons/Ionicons"
import Home from '../views/Home'
import HomeStack from './HomeStack'
import MineStack from './MineStack'
import MyPlugins from '../views/MyPlugins'
import MyStyles from '../views/MyStyles'
import Mine from '../views/Mine'

const BottomNavigator = createBottomTabNavigator(
  {
    HomeStack: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon:({focused, tintColor})=>(
        <Icon name="ios-home" size={25} style={{color: tintColor}} />
      )
    }
  },
  MyPlugins: {
    screen: MyPlugins,
    navigationOptions: {
      tabBarLabel: '插件',
      tabBarIcon:({focused, tintColor})=>(
        <Icon name="logo-javascript" size={25} style={{color: tintColor}}/>
      )
    }
  },
  MyStyles: {
    screen: MyStyles,
    navigationOptions: {
      tabBarLabel: '样式',
      tabBarIcon:({focused, tintColor})=>(
        <Icon name="logo-css3" size={25} style={{color: tintColor}}/>
      )
    }
  },
  MineStack: {
    screen: MineStack,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon:({focused, tintColor})=>(
        <Icon name="logo-css3" size={25} style={{color: tintColor}}/>
      )
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor:'blue',
      showIcon: true
    }
  }
);

export default BottomNavigator