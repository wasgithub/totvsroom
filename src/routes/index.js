import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "../pages/HomeScreen";
import SignInScreen from "../pages/SignInScreen";
import AuthLoadingScreen from "../pages/LoadingScreen";

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createSwitchNavigator({ SignIn: SignInScreen });
const inicialStack = createSwitchNavigator(
    { 
        AuthLoadingScreen: AuthLoadingScreen,
    }
  );

const Router = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: inicialStack,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);

export default Router;