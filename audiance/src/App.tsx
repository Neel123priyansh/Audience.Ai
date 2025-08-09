import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/DashBoard' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
