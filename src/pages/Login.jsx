import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setStorage, storageKeys } from '../utils/localStorage'
import logo from '../assets/skadik504-logo.svg'

export default function Login() {
  const nav = useNavigate()
  const [form, setForm] = useState({ username: '', password: '', role: 'Peserta' })
  const [msg, setMsg] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.username || !form.password) { setMsg('Data gagal: semua field wajib diisi.'); return }
    setStorage(storageKeys.currentUser, { username: form.username, role: form.role, loginAt: new Date().toISOString() })
    setMsg('Data berhasil disimpan.')
    nav('/dashboard')
  }
  return <div className='login-page page-pad'>
    <section className='card login-panel'>
      <div className='login-info'><img src={logo} alt='Logo Skadik 504' /><span className='eyebrow'>Secure LMS Access</span><h1>Login / Register Dashboard</h1><p>Masuk sebagai Admin, Peserta/Siswa, atau Dosen/Instruktur untuk mengakses fitur LMS sesuai role.</p></div>
      <form className='form' onSubmit={onSubmit}>
        <h2>E-Learning FASH Skadik 504</h2>{msg && <p className='notice'>{msg}</p>}
        <label>Username<input placeholder='Masukkan username' value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} /></label>
        <label>Password<input type='password' placeholder='Masukkan password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
        <label>Role<select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}><option>Peserta</option><option>Instruktur</option><option>Admin</option></select></label>
        <button className='btn'>Login / Register</button>
      </form>
    </section>
  </div>
}
