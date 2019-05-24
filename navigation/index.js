import { createAppContainer } from "react-navigation";

import DrawNavigator from "./DrawNavigator";

import SwitchNavigator from './SwitchNavigator'

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
