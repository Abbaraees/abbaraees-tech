import './App.css'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Blogs from './pages/blogs'
import Projects from './pages/projects'
import About from './pages/about'

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Home />, index: true},
    {path: '/about', element: <About />},
    {path: '/blog', element: <Blogs />},
    {path: '/projects', element: <Projects />}

  ])


  return (
   <RouterProvider router={router} />
  )
}

export default App
