import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/create",
        element: <Create/>
      },
      {
        path:"/update/:id",
        element: <Update/>
      },
      {
        path:"/read/:id",
        element: <Read/>
      }
    ]
  }
])

function App() {


  return (
    <RouterProvider router={router} />
       
  )
}

export default App
