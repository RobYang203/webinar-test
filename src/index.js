import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import configureStore from 'store/configureStore';
import theme from 'theme';
import App from './App';

const { store } = configureStore();

store.runSaga();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
