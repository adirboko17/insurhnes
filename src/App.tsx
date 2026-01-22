import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PageA from './pages/PageA'
import PageB from './pages/PageB'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/page-a" element={<PageA />} />
      <Route path="/page-b" element={<PageB />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
