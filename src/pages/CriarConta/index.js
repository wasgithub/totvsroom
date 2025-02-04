import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase";
import b64 from 'base-64';
import { 
    Button,
    TextInput,
    Title,
    Subheading
  } from 'react-native-paper';
import colors from "../../styles/colors"
import Spinner from '../../components/spinner'

import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from "../../store/actions/AutenticacaoAction"

import Logo from "../../components/Logo";

const CriarConta = (props) => {

  const { navigation } = props

  const [isLoading, setIsloading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  const loginState = useSelector(state => state.autenticacaoReducer)
  const dispatch = useDispatch();

  const _cadastraUsuario = async() => {
    const { nome, email, senha } = loginState;
    setIsloading(true)
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then((user) => {
        let emailB64 = b64.encode(email);
        firebase.database()
          .ref(`contatos/${emailB64}`)
          .push({nome})
          .then(value => navigation.navigate("BemVindo"))
          .catch(error => console.tron.log("firebaseerror: ",error))


        
      })
      .catch((error) => setErrorMsg(error.message))
      .finally(() => setIsloading(false))

    // cadastraUsuario({ nome, email, senha });
    // props.navigation.navigate('App');
  };


  return (
      <View style={styles.containerLogin}>
      <View style={styles.containerLogo}>
        <Logo />
      </View>
      <View style={styles.containerFields}>
        <Title style={styles.loginTitle}>{"Criar Conta"}</Title>
        <TextInput
          label='Nome'
          value={loginState.nome}
          onChangeText={(text) => dispatch(modificaNome(text))}
          mode={"outlined"}
          style={styles.field}
          />          
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
          <Text>{errorMsg}</Text>       
        <Button 
          mode="contained"
          loading={false}
          style={styles.field}
          onPress={_cadastraUsuario}
          loading={isLoading}>
          Cadastrar
        </Button>
        <Subheading style={{...styles.esqueceuSenha,...styles.field}}>
            Esqueceu sua senha?
        </Subheading>
        <Text></Text>
      </View>
      <View style={styles.footer}>
        <TouchableHighlight onPress={() => props.navigation.navigate("SignIn")}>
          <Subheading style={{...styles.esqueceuSenha,...styles.field}}>
              Voltar
          </Subheading>
        </TouchableHighlight>
        <Text style={{...styles.footerText, ...styles.field}}>@2020</Text>
      </View>
      <Spinner visible={false}/>
    </View>
  )
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

export default CriarConta
