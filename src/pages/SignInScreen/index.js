import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import AsyncStorage from '@react-native-community/async-storage';

import { 
    Button,
    TextInput
  } from 'react-native-paper';

const SignInScreen = ({...props}) => {

  
  const loginState = useSelector(state => state.login)
  const dispatch = useDispatch();

    const changeEmail = text => dispatch({type: 'CHANGE_EMAIL', text})
    const changeSenha = text => dispatch({type: 'CHANGE_SENHA', text})

    const _signInAsync = () => {
      storeData();
      props.navigation.navigate('App');
    };

    const storeData = async () => {
      try {
        // await AsyncStorage.setItem('login', 'Washington Alexandre')
      } catch (e) {
        // saving error
      }
    }    

    return (
      <View>
        <TextInput
          label='Email'
          value={loginState.email}
          onChangeText={(text) => changeEmail(text)}
          />          
        <TextInput
          label='Senha'
          value={loginState.senha}
          onChangeText={(text) => changeSenha(text)}
          secureTextEntry
        />          
        <Button 
          icon="account"
          mode="contained"
          loading={false}
          onPress={_signInAsync}>
          Entrar
        </Button>
      </View>
    );
}  
    
  export default SignInScreen;
  // More code like OtherScreen omitted for brevity