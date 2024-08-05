import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Deashboard } from './pages/app/deshboard'
import { SignIn } from './pages/auth/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Deashboard /> }],
  },

  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
])
