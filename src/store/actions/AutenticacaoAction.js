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
    console.log(email)
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then((user) => cadastraUsuarioSucesso(user, dispatch))
            .catch((error) => cadastraUsuarioErro(error, dispatch))
    }
}

const cadastraUsuarioSucesso = (user, dispatch) => {
    console.log("_cadastrar sucesso")
    dispatch ({
        type: "CADASTRA_USUARIO_SUCESSO",
        payload: user
    })

}

const cadastraUsuarioErro = (error, dispatch) => {
    console.log("_cadastrar erro")
    dispatch ({
        type: "CADASTRA_USUARIO_ERRO",
        payload: error
    })

}
