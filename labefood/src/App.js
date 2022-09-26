import React from 'react'
import Router from './rotas/Router';
import { GlobalStyles } from './styles/GlobalStyles'
import { GlobalState } from './context/GlobalState';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './styles/theme'


function App() {
  return (
    <div>
      <GlobalStyles />
      <GlobalState>
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </GlobalState>

    </div>
  );
}

export default App;
