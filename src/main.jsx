import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router'
import { RouterProvider } from 'react-router-dom'

import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import { Container } from '@mui/material'
import './firebase/config'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth="lg" style={{ textAlign: 'center', marginTop: 50 }}>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>
)
