import React from "react";
import { View } from "react-native";
import { 
    Button,
    TextInput
  } from 'react-native-paper';



class SignInScreen extends React.Component {
    // static navigationOptions = {
    //   title: 'Please sign in',
    // };
    render() {
      return (
        <View>
          <TextInput
            label='Email'
          />          
          <TextInput
            label='Senha'
          />          
          <Button 
            icon="account"
            mode="contained"
            loading={false}
            onPress={this._signInAsync}>
            Entrar
          </Button>
        </View>
      );
    }
  
    _signInAsync = async () => {
    //   await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('App');
    };
  }
    
  export default SignInScreen;
  // More code like OtherScreen omitted for brevity