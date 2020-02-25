import firebase from "firebase";

export const modificaEmail = text => {
    return {
        type: 'MODIFICA_EMAIL',
        payload: text
    }
}

export const modificaSenha = text => {
    return {
        type: 'MODIFICA_SENHA',
        payload: text
    }
}

export const modificaNome = text => {
    console.log(text)
    return {
        type: 'MODIFICA_NOME',
        payload: text
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {
    // return dispatch => {
        console.tron.log("email",email)
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((user) => cadastraUsuarioSucesso(user))
            .catch((error) => cadastraUsuarioErro(error))
    // }
}

const cadastraUsuarioSucesso = (user, dispatch) => {
    console.tron.log("_cadastrar sucesso")
    return ({
        type: "CADASTRA_USUARIO_SUCESSO",
        payload: user
    })

}

const cadastraUsuarioErro = (error, dispatch) => {
    console.tron.log("_cadastrar erro")
    return ({
        type: "CADASTRA_USUARIO_ERRO",
        payload: error.message
    })

}
