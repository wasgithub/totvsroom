
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './store/reducers'

import Router from "./routes";
import { paperTheme } from "./styles"

const store = createStore(rootReducer)


const App: () => React$Node = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={paperTheme}>
        <Router />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
