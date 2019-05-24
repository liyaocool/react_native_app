import { createSwitchNavigator } from 'react-navigation';
import SplashNavigator from './SplashNavigator';
import DrawNavigator from './DrawNavigator'
import StackNavigator from './StackNavigator'

export default createSwitchNavigator(
    {
        //这个是上图中的启动动画，也可以是你的登录注册页面等
        //你想只显示一次的页面组件
        SplashNavigator : SplashNavigator,    
        // StackNavigator : StackNavigator,
        DrawNavigator : DrawNavigator
    },
)