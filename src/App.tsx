import './App.css'
import './index.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Blogs from './pages/blogs'
import Projects from './pages/projects'
import About from './pages/about'
import Layout from './components/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout><Outlet /></Layout>,
      children: [
        {path: '/', element: <Home />},
        {path: '/about', element: <About />},
        {path: '/blog', element: <Blogs />},
        {path: '/projects', element: <Projects />}
      ]
    },
    

  ])


  return (
   <RouterProvider router={router} />
  )
}

export default App
