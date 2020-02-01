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
