
import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation'
import Icon from "react-native-vector-icons/Ionicons"
import Home from '../views/Home'
import MyPlugins from '../views/MyPlugins'
import MyStyles from '../views/MyStyles'
import Mine from '../views/Mine'

 const TopNavigator = createMaterialTopTabNavigator(  
  {
    Home: {
      screen: Home,
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
    Mine: {
      screen: Mine,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon:({focused, tintColor})=>(
          <Icon name="ios-contact" size={25} style={{color: tintColor}}/>
        )
      }
    },
  },
  {
  initialRouteName: 'Mine',
  tabStyle:{minWidth:50},
  indicatorStyle:{
    height:2,
    backgroundColor:"#fff"
  },
  tabBarOptions:{
    showIcon: true
  }
  })

export default TopNavigator