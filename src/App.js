
import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from "redux-thunk";

import rootReducer from './store/reducers'
import Router from "./routes";
import { paperTheme } from "./styles";
import inicializaFirebase from "./config/Firebase";
import ReactotronConfig from './config/ReactotronConfig'

// const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))


const App = () => {

  useEffect(() => {
    inicializaFirebase();
    ReactotronConfig();
  },[])

  return (  
    <StoreProvider store={createStore(rootReducer, {}, applyMiddleware(ReduxThunk))}>
      <PaperProvider theme={paperTheme}>
        <Router />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
