import { HeaderContainer, HeaderContent, NewTransactionsButton } from './styles'

import logoImg from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <div>
      <HeaderContainer>
        <HeaderContent>
          <img src={logoImg} alt="logo" />
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionsButton>Nova transação</NewTransactionsButton>
            </Dialog.Trigger>
            <NewTransactionModal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
    </div>
  )
}
