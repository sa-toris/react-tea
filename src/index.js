import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from './redux/store';

const Global = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  list-style: none;
  outline: none;
  font-family: 'Proxima Nova', Roboto, system-ui, Tahoma, sans-serif;
  box-sizing: border-box;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: $black;
}

a,
span,
p,
b,
h1,
h2,
h3,
h4,
h5 {
  color: $black;
}

h1 {
  font-size: 48px;
}

h2 {
  font-weight: 600;
  font-size: 28px;
  line-height: 30px;
}

a {
  text-decoration: none;
}

@mixin noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
`;

const theme = {
  colors: {},
  other: {
    duration: '0.15s',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
