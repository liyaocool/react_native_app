//只包含了启动动画页面,可以多页面做介绍指引
import { createStackNavigator } from 'react-navigation';
import SplashPage from '../views/Splash'

export default StackNavigator = createStackNavigator(
    {
        SplashPage : SplashPage,
    },
    {
        defaultNavigationOptions:{
            header:null
        }
    }
)