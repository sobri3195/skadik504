import { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { removeStorage, storageKeys, getStorage } from '../utils/localStorage'
import { NavLink } from 'react-router-dom'

const appMenus = [
  ['/dashboard', 'Dashboard'], ['/fash', 'FASH'], ['/pendidikan', 'Pendidikan'], ['/forum', 'Forum'], ['/tugas', 'Tugas'], ['/kuis', 'Kuis'], ['/admin', 'Admin'],
]

function PublicNavbar() {
  return <header className='public-nav'><div className='mw'><div className='public-nav-inner'><strong>E-Learning FASH Skadik 504</strong><nav><a href='#home'>Home</a><a href='#fitur'>Fitur</a><a href='#program'>Program</a><NavLink to='/login'>Login</NavLink></nav><NavLink className='btn small' to='/dashboard'>Masuk Dashboard</NavLink></div></div></header>
}

function AppShell({ children }) {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()
  const user = getStorage(storageKeys.currentUser, { role: 'Peserta', username: 'guest' })
  return <div className='app-shell'>
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <div className='brand'>FASH 504 LMS</div>
      <nav>{appMenus.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    </aside>
    <div className='app-main'>
      <header className='topbar'>
        <button className='btn ghost small mobile-only' onClick={() => setOpen(!open)}>☰</button>
        <input className='search' placeholder='Cari materi, tugas, kuis...' />
        <span className='icon'>🔔</span>
        <span className='badge'>{user.role}</span>
        <button className='btn small' onClick={() => { removeStorage(storageKeys.currentUser); nav('/login') }}>Logout</button>
      </header>
      <main className='container'>{children}</main>
    </div>
  </div>
}

export default function Layout({ children }) {
  const { pathname } = useLocation()
  const publicPage = pathname === '/' || pathname === '/login'
  if (publicPage) return <div>{pathname === '/' && <PublicNavbar />}<main className='container'>{children || <Outlet />}</main></div>
  return <AppShell>{children || <Outlet />}</AppShell>
}
