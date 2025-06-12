import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from './pages/dashboard'
import AuthPages from './pages/authPage'
import LandingPage from "./pages/landingPage"
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPages />}/>
        <Route path="/dash" element={<Dashboard />}/>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App