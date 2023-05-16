


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <Auth0Provider
  domain="dev-61etewi1oke1yajn.us.auth0.com"
  clientId="u2yyExeanfLzdhBp7ktDIsNLmJPWNZAh"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
 

  {/* <ChakraProvider> */}
  <Provider   store={store}>
  
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
      {/* </ChakraProvider> */}
 

  </Auth0Provider>,

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();