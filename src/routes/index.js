import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "../pages/HomeScreen";
import SignInScreen from "../pages/SignInScreen";
import AuthLoadingScreen from "../pages/LoadingScreen";
import CriarConta from "../pages/CriarConta"

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  CriarConta });
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