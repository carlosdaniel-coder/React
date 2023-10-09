import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styled/themes/default'
import { GlobalStyle } from './styled/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
