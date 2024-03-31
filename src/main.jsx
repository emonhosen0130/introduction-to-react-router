import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>,
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
      },
      {
        path:"/user",
        element:<Users></Users>
      }
    ]
  },
 {
  path:'/about',
  element:<div>I am the about page </div>
 },
 {
  path:'/contact',
  element:<div>Call me right now!!</div>
 }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
