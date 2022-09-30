import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/views/home/home'))
const Detail = lazy(() => import('@/views/detail/detail'))
const Entire = lazy(() => import('@/views/entire/entire'))

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  }
]

export default routes
