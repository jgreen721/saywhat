import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import {Dashboard, Login} from "./views"
import {ProtectedRoute} from "./components"
import {AppProvider} from "./context/AppContext"
import './App.css'

function App() {

  return (
    <div className="app">
      <AppProvider>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </AppProvider>
    </div>
  )
}

export default App
