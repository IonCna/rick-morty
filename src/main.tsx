import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.tsx'
import NotFound from './errors/NotFound.tsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"

const elements = createRoutesFromElements(
  <Route path='/'>
    <Route index element={ <App /> } />
    <Route path='*' element={ <NotFound /> } />
  </Route>
)

const router = createBrowserRouter(elements)

const domElement = document.getElementById("root") as HTMLElement
const root = createRoot(domElement)

root.render(
  <RouterProvider router={router} />
)