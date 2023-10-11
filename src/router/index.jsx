import { Outlet, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
  return <Outlet />
}

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { element: <Login />, path: '/login' },
      { element: <Home />, path: '/' },
    ],
  },
])

export default router
