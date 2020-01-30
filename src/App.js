
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import paperTheme from "./styles/paperTheme"




import Router from "./routes";

const App: () => React$Node = () => {
  return (
    <PaperProvider theme={paperTheme}>
      <Router />
    </PaperProvider>
  );
};

export default App;
