import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router'
import { TodoContextPovider } from './context/TodoContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoContextPovider>
    <RouterProvider router={router}/>

    </TodoContextPovider>
  </StrictMode>,
)
