import { createSwitchNavigator } from 'react-navigation';
import SplashPage from '../views/Splash'
import BottomNavigator from './BottomNavigator'

export default createSwitchNavigator(
    {
        SplashPage : SplashPage,    
        BottomNavigator : BottomNavigator
    },
)