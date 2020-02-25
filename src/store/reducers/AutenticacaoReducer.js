const INITIAL_STATE = {
  nome: "was",
  email: "washington@totvs.com.br",
  senha: ""
}

const autenticacaoReducer = (state = INITIAL_STATE, action) => {
    console.log("ACTION: ", action)
    switch (action.type) {
      case 'MODIFICA_EMAIL':
        return {
          ...state, email: action.payload,
        }
      case 'MODIFICA_SENHA':
        return {
          ...state, senha: action.payload,
        }
      case 'MODIFICA_NOME':
        return {
          ...state, nome: action.payload,
        }
        
      default:
        return state
    }
  }
  export default autenticacaoReducer