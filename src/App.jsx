import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Chicken from './pages/Chicken'
import Fishes from './pages/Fishes'
import Contact from './pages/Contact'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/our-chickens' element={<Chicken />} />
      <Route path='/our-fishes' element={<Fishes />} />
      <Route path='/contact-us' element={<Contact />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App