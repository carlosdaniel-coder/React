import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutCaontainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutCaontainer>
      <Header />
      <Outlet />
    </LayoutCaontainer>
  )
}
