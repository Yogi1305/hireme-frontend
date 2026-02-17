import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Employeer from './pages/Employeer.tsx'
import Dashboard from './pages/Dashboard.tsx'
import DashboardHome from './pages/dashboard/DashboardHome.tsx'
import CreateJob from './pages/dashboard/CreateJob.tsx'
import AppliedStudents from './pages/dashboard/AppliedStudents.tsx'
import InterviewedStudents from './pages/dashboard/InterviewedStudents.tsx'
import Employees from './pages/dashboard/Employees.tsx'
import Jobs from './pages/Jobs.tsx'
import Profile from './pages/Profile.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'jobs', element: <Jobs /> },
      { path: 'employeer', element: <Employeer /> },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'profile', element: <Profile /> },
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: 'create-job', element: <CreateJob /> },
          { path: 'applied-students', element: <AppliedStudents /> },
          { path: 'interviewed-students', element: <InterviewedStudents /> },
          { path: 'employees', element: <Employees /> },
        ],
      },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
