import { Outlet, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import AuthProvider from '../context/AuthProvider'
import ProtectedRoute from './ProtectedRoute'
import ErrorPage from './ErrorPage'
import NoteList from '../components/NoteList'
import Note from '../components/Note'

// eslint-disable-next-line react-refresh/only-export-components
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { element: <Login />, path: '/login' },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: '/',
            loader: async () => {
              const query = `query ExampleQuery {
                folders {
                  name
                  id
                  createdAt
                }
              }`
              const res = await fetch('http://localhost:4000/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
                body: JSON.stringify({
                  query,
                }),
              })
              const { data } = await res.json()
              console.log('data', data)
              return data
            },
            children: [
              {
                element: <NoteList />,
                path: `folders/:folderId`,
                children: [
                  {
                    element: <Note />,
                    path: `note/:noteId`,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
])

export default router
