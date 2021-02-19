import React from 'react'
import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import Home from './pages/Home'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </ThemeProvider>
  );
}

export default App;
