import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import configureStore from 'store/configureStore';
import configureTheme from 'theme';
import App from './App';
import mockWorker from 'mocks/browser';

async function renderMain(){
  
  const { store } = configureStore();
  store.runSaga();
  
  const theme = configureTheme();
  
  mockWorker.start();

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename={process.env.REACT_APP_BASENAME} >
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
}

renderMain();
