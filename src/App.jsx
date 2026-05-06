import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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

function Profil() {
  return <div className='stack page-pad'>
    <section className='section-head card accent-card'>
      <span className='eyebrow'>Profil Satuan Pendidikan</span>
      <h1>Profil Skadik 504 Wingdik 500/Umum</h1>
      <p>Skadik 504 digambarkan sebagai satuan pendidikan yang mendukung pembinaan kompetensi kesehatan militer, FASH, Basic Life Support, kesehatan penerbangan, dan kesiapan personel melalui pembelajaran digital yang terukur.</p>
    </section>
    <section className='grid cols-3'>
      {[
        ['🎖️', 'Formal dan Kredibel', 'Tata kelola pembelajaran mendukung standar kedinasan, dokumentasi, dan rekap hasil belajar.'],
        ['🩺', 'Militer-Kesehatan', 'Materi memadukan prinsip kedisiplinan pendidikan militer dengan respons klinis dasar.'],
        ['🛫', 'Kesehatan Penerbangan', 'Penguatan kompetensi FASH untuk mendukung keamanan dan kesehatan operasional penerbangan.'],
      ].map(([icon, title, text]) => <article className='card feature-card' key={title}><span className='feature-icon'>{icon}</span><h3>{title}</h3><p>{text}</p></article>)}
    </section>
  </div>
}

export default function App() {
  return <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil' element={<Profil />} />
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
      </Routes>
    </Layout>
  </BrowserRouter>
}
