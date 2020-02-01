const INITIAL_STATE = {
  email: "washington@totvs.com.br",
  senha: ""
}

const autenticacaoReducer = (state = INITIAL_STATE, action) => {
    console.log(action)
    switch (action.type) {
      case 'MODIFICA_EMAIL':
        return {
          ...state, email: action.payload,
        }
      case 'MODIFICA_SENHA':
        return {
          ...state, senha: action.payload,
        }
        
      default:
        return state
    }
  }
  export default autenticacaoReducer