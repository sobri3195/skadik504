import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Fash from './pages/Fash'
import Pendidikan from './pages/Pendidikan'
import ProgramDetail from './pages/ProgramDetail'
import Forum from './pages/Forum'
import Tugas from './pages/Tugas'
import Kuis from './pages/Kuis'
import Admin from './pages/Admin'

export default function App() {
  return <BrowserRouter><Layout><Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard />} />
    <Route path='/aeroforce-bls' element={<Fash />} />
    <Route path='/fash' element={<Navigate to='/aeroforce-bls' replace />} />
    <Route path='/pendidikan' element={<Pendidikan />} />
    <Route path='/pendidikan/:id' element={<ProgramDetail />} />
    <Route path='/forum' element={<Forum />} />
    <Route path='/tugas' element={<Tugas />} />
    <Route path='/kuis' element={<Kuis />} />
    <Route path='/admin' element={<Admin />} />
  </Routes></Layout></BrowserRouter>
}
