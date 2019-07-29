import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GamePage from './GamePage';
import { createGlobalStyle } from 'styled-components';

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
`

const App = () => (
  <Router>
    <GlobalStyle />
    <Route path="/" exact component={HomePage} />
    <Route path="/play/:gameSize" component={GamePage} />
  </Router>
)

export default App;