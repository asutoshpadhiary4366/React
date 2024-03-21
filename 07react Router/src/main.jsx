import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
// import Github from './Components/Github/Github.jsx'
import Home from './Components/Home/Home.jsx'
import User from './Components/User/User.jsx'
import './index.css'
import Layout from './Layout/Layout.jsx'

// const router = createBrowserRouter([
//     {
//       path:'/',
//       element: <Layout/>,
//       children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//       ]
//     }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:id' element={<User/>}/>
      <Route path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
