import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styled/themes/default'
import { GlobalStyle } from './styled/global'
import { Transactions } from './pages/transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
