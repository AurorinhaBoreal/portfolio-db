import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/main.css"
import "./fonts/supermolot-regular.ttf"
import "./fonts/supermolot-bold.ttf"
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/projetos",
    element: <Projects />
  },
  {
    path: "*",
    element: <NotFound />
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
