import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { ColorModeScript } from '@chakra-ui/react';
import theme from './theme';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <> 
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </>,
)

reportWebVitals();
