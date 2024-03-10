// Import necessary libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Your main App component
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { BrowserRouter as Router } from 'react-router-dom';

// Define your Chakra UI theme
const theme = extendTheme({
  config: {
    initialColorMode: 'light', // or 'dark' depending on your preference
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: 'white', // Set the background color directly to 
        color: mode('gray.800', 'whiteAlpha.900')(props),
      },
    }),
  },
});

// Render the app inside ChakraProviderbackground={"#bac7cd"}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
);
