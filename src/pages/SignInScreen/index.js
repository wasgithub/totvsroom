import React, { useState, useEffect } from "react";
import  WasButton  from 'was-button';
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import colors from "../../styles/colors"
import Spinner from '../../components/spinner'

import { modificaEmail, modificaSenha } from "../../store/actions/AutenticacaoAction"
// import AsyncStorage from '@react-native-community/async-storage';

import { 
    Button,
    TextInput,
    Title,
    Subheading
  } from 'react-native-paper';
import Logo from "../../components/Logo";

const SignInScreen = ({...props}) => {

  const loginState = useSelector(state => state.autenticacaoReducer)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  const _signInAsync = () => {
    storeData()
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
    <View style={styles.containerLogin}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View style={styles.containerFields}>
        <Title style={styles.loginTitle}>{"Bem Vindo"}</Title>
        <TextInput
          label='Email'
          value={loginState.email}
          onChangeText={(text) => dispatch(modificaEmail(text))}
          mode={"outlined"}
          style={styles.field}
          />          
        <TextInput
          label='Senha'
          value={loginState.senha}
          onChangeText={(text) => dispatch(modificaSenha(text))}
          secureTextEntry
          mode={"outlined"}
          style={styles.field}
          />          
        <Button 
          mode="contained"
          loading={false}
          style={styles.field}
          onPress={_signInAsync}>
          Entrar
        </Button>
        <Subheading style={{...styles.esqueceuSenha,...styles.field}}>
            Esqueceu sua senha?
        </Subheading>
        <Text></Text>
      </View>
      <View style={styles.footer}>
        <TouchableHighlight onPress={() => props.navigation.navigate("CriarConta")}>
          <Subheading style={{...styles.esqueceuSenha,...styles.field}}>
              Criar Conta
          </Subheading>
        </TouchableHighlight>
        <Text style={{...styles.footerText, ...styles.field}}>@2020</Text>
      </View>
      <Spinner 
        visible={loading} 
        />
    </View>
  );
}

styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    justifyContent: "center",
  },
  loginTitle: {
    textAlign: "center",
    fontSize: 24,
    color: colors.neutral
  },
  containerFields: {
    paddingHorizontal: 30,
    flex: 5,
    justifyContent: "center",
  },
  containerLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  field: {
    marginTop: 16
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 24
  },
  footerText: {
    textAlign: "center",
  },
  esqueceuSenha: {
    textAlign: "center",
  }
})
    
export default SignInScreen;
// More code like OtherScreen omitted for brevity