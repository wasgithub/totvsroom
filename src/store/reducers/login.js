const INITIAL_STATE = {
  email: "washington@totvs.com.br",
  senha: ""
}

const login = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'CHANGE_EMAIL':
        return {
          ...state, email: action.text,
        }
      case 'CHANGE_SENHA':
        return {
          ...state, senha: action.text,
        }
        
      default:
        return state
    }
  }
  export default login