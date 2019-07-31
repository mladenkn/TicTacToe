import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from './GamePage';
import { createGlobalStyle } from 'styled-components';
import { createMuiTheme  } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  * {
      box-sizing: border-box;
  }
`;

const theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paper: {
        margin: 0
      },
    }
  }
});

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Route path="/" exact component={HomePage} />
      <Route path="/play/:gameSize/:userPlayer" component={GamePage} />
    </ThemeProvider>
  </Router>
)
 
export default App;