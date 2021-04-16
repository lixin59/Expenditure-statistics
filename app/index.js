import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from './store'
import App from './App';
import './assets/css/app.global.css';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles'

const theme =createMuiTheme({});
render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <App/>
        </Provider>
      </MuiThemeProvider>,
      document.getElementById('root')
    );
  });
}
