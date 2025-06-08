import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/dashboard'
import AuthPages from './pages/authPage'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPages />}/>
        <Route path="/" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App