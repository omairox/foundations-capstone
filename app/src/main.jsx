import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Navbar from './components/Navbar'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WorkoutSchedule from './pages/WorkoutSchedule'
import Progress from './pages/Progress'
import Contact from './pages/Contact'

const router = createBrowserRouter([
  {
    element: <Navbar />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/workout-schedule',
        element: <WorkoutSchedule />
      },
      {
        path: '/progress',
        element: <Progress />
      },
      {
        path: '/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// TODO
// exercises - video link button
// WorkoutSchedule - make new endpoint for get all days of week, load on start. Something for rest day. Add UI to display the days exercises.
// Progress - add loading spinner. add entry button shows inputs. Add new inputs the table or refetch table. --- DONE
// Contact - Add email package.