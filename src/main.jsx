import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import AllPlayers from './AllPlayers/AllPlayers.jsx';
import Ranking from './Ranking/Ranking.jsx';
import SinglePlayers from './AllPlayers/SinglePlayers.jsx';
import ResultSubmit from './Submit/ResultSubmit.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/allPlayers",
        element : <AllPlayers/>
      },
      {
        path : "/ranking",
        element : <Ranking/>
      },
      {
        path : "/allPlayer/:id",
        element : <SinglePlayers/>,
        loader : ({params}) => fetch(`https://bss-backend.vercel.app/allPlayers/${params.id}`)
        
      },
      {
        path : "/singlePlayer/:id",
        element : <ResultSubmit/>,
        loader : ({params}) => fetch(`https://bss-backend.vercel.app/allPlayers/${params.id}`)

      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
