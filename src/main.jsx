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
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
