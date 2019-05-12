
import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation'
import Icon from "react-native-vector-icons/Ionicons"
import Page1 from '../views/Home/page1'
import Page2 from '../views/Home/page2'
import Page3 from '../views/Home/page3'

 const TopNavigator = createMaterialTopTabNavigator(  
  {
    Page1: {
      screen: Page1,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon:({focused, tintColor})=>(
          <Icon name="ios-home" size={25} style={{color: tintColor}} />
        )
      }
    },
    Page2: {
      screen: Page2,
      navigationOptions: {
        tabBarLabel: '插件',
        tabBarIcon:({focused, tintColor})=>(
          <Icon name="logo-javascript" size={25} style={{color: tintColor}}/>
        )
      }
    },
    Page3: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: '样式',
        tabBarIcon:({focused, tintColor})=>(
          <Icon name="logo-css3" size={25} style={{color: tintColor}}/>
        )
      }
    },
    Page4: {
      screen: Page3,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon:({focused, tintColor})=>(
          <Icon name="ios-contact" size={25} style={{color: tintColor}}/>
        )
      }
    },
  },
  {
  initialRouteName: 'Page3',
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