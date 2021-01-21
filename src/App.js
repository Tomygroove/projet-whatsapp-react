import React from 'react';
import {ThemeProvider} from 'styled-components'
import Routes from './config/router'
import {theme} from './config/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes></Routes>
    </ThemeProvider>
  )
}

export default App