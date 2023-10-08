import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'

import { defaultTheme } from './styled/themes/default'
import { GlobalStyle } from './styled/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="accept" />

      <GlobalStyle />
    </ThemeProvider>
  )
}
