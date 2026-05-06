import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { removeStorage, storageKeys, getStorage } from '../utils/localStorage'
import { NavLink } from 'react-router-dom'
import logo from '../assets/skadik504-logo.svg'

const menus = [
  ['/', 'Home'],
  ['/profil', 'Profil Skadik 504'],
  ['/dashboard', 'Dashboard'],
  ['/aeroforce-bls', 'AEROFORCE-BLS'],
  ['/pendidikan', 'Pendidikan'],
]

const appMenus = [
  ['/dashboard', 'Dashboard'],
  ['/aeroforce-bls', 'AEROFORCE-BLS'],
  ['/pendidikan', 'Pendidikan'],
  ['/forum', 'Forum Diskusi'],
  ['/tugas', 'Tugas'],
  ['/kuis', 'Kuis'],
  ['/admin', 'Admin'],
]

function Brand() {
  return <NavLink className='brand-mark' to='/'>
    <img src={logo} alt='Logo Skadik 504 Wingdik 500/Umum' />
    <span><strong>E-Learning FASH</strong><small>Skadik 504 Wingdik 500/Umum</small></span>
  </NavLink>
}


function Footer() {
  return <footer className='site-footer'>
    <div className='mw footer-grid'>
      <div><strong>E-Learning FASH Skadik 504 Wingdik 500/Umum</strong><p>Platform LMS internal untuk FASH, Basic Life Support, Kesehatan Penerbangan, dan program pendidikan kesehatan militer.</p></div>
      <div><span>Skadik 504</span><span>Wingdik 500/Umum</span><span>Pendidikan TNI AU / Kesehatan</span></div>
    </div>
  </footer>
}

function PublicNavbar() {
  const [open, setOpen] = useState(false)
  return <header className='public-nav'>
    <div className='mw public-nav-inner'>
      <Brand />
      <button className='nav-toggle' onClick={() => setOpen(!open)} aria-label='Buka menu'>☰</button>
      <nav className={open ? 'open' : ''}>{menus.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}<NavLink className='btn small' to='/login' onClick={() => setOpen(false)}>Login / Masuk Dashboard</NavLink></nav>
    </div>
  </header>
}

function AppShell({ children }) {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()
  const user = getStorage(storageKeys.currentUser, { role: 'Peserta', username: 'guest' })
  return <div className='app-shell'>
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <Brand />
      <nav>{appMenus.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    </aside>
    <div className='app-main'>
      <header className='topbar'>
        <button className='btn ghost small mobile-only' onClick={() => setOpen(!open)}>☰</button>
        <input className='search' placeholder='Cari materi, tugas, kuis, atau program...' />
        <span className='topbar-icon'>🔔</span>
        <span className='badge'>{user.role}</span>
        <button className='btn small' onClick={() => { removeStorage(storageKeys.currentUser); nav('/login') }}>Logout</button>
      </header>
      <main className='container'>{children}</main>
    </div>
  </div>
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const publicPage = ['/', '/profil', '/login'].includes(pathname)
  if (publicPage) return <><PublicNavbar /><main className='container'>{children || <Outlet />}</main><Footer /></>
  return <AppShell>{children || <Outlet />}</AppShell>
}
