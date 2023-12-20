import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import { Router } from './routes/routes'
import { ContextPageProvider } from './context/contextpage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ContextPageProvider>
    <RouterProvider router={Router}/>
    </ContextPageProvider>
  </React.StrictMode>,
)
