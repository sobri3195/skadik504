import { useState } from 'react'
import { Outlet, useLocation, useNavigate, NavLink } from 'react-router-dom'
import { removeStorage, storageKeys, getStorage } from '../utils/localStorage'

const appMenus = [
  ['/dashboard', '🏠 Dashboard'],
  ['/aeroforce-bls', '🩺 AEROFORCE-BLS'],
  ['/pendidikan', '🎓 Pendidikan'],
  ['/forum', '💬 Forum'],
  ['/tugas', '📝 Tugas'],
  ['/kuis', '⏱️ Kuis'],
  ['/admin', '⚙️ Admin'],
]

function PublicNavbar() {
  return <header className='public-nav'>
    <div className='mw public-nav-inner'>
      <NavLink className='brand-lockup' to='/'>
        <span className='brand-mark'>504</span>
        <span><strong>E-Learning FASH</strong><small>Skadik 504 Wingdik 500/Umum</small></span>
      </NavLink>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <a href='/#profil'>Profil Skadik 504</a>
        <NavLink to='/dashboard'>Dashboard</NavLink>
        <NavLink to='/aeroforce-bls'>AEROFORCE-BLS</NavLink>
        <NavLink to='/pendidikan'>Pendidikan</NavLink>
      </nav>
      <NavLink className='btn small' to='/login'>Login / Masuk Dashboard</NavLink>
    </div>
  </header>
}

function AppShell({ children }) {
  const [open, setOpen] = useState(false)
  const nav = useNavigate()
  const user = getStorage(storageKeys.currentUser, { role: 'Peserta', username: 'guest' })
  return <div className='app-shell'>
    <aside className={`sidebar ${open ? 'open' : ''}`}>
      <NavLink className='brand-lockup sidebar-brand' to='/'>
        <span className='brand-mark'>504</span>
        <span><strong>FASH 504 LMS</strong><small>Internal Learning System</small></span>
      </NavLink>
      <nav>{appMenus.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    </aside>
    <div className='app-main'>
      <header className='topbar'>
        <button className='btn ghost small mobile-only' onClick={() => setOpen(!open)}>☰</button>
        <input className='search' placeholder='Cari materi, video, simulasi, tugas, kuis...' />
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
  if (publicPage) return <div><PublicNavbar /><main className='container'>{children || <Outlet />}</main></div>
  return <AppShell>{children || <Outlet />}</AppShell>
}
