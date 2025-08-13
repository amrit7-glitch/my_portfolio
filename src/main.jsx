import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Projects from './components/Projects.jsx'
import Blog from './components/Blog.jsx'
import Learn from './components/Learn.jsx'
import Contact from './components/Contact.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='Learn' element={<Learn/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
