import { createSwitchNavigator } from 'react-navigation';
import SplashPage from '../views/Splash'
import DrawNavigator from './DrawNavigator'

export default createSwitchNavigator(
    {
        SplashPage : SplashPage,    
        DrawNavigator : DrawNavigator
    },
)