import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header_Dashboard from './components/Header_Dashboard'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/DashBoard' element={<Header_Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
