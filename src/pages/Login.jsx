import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setStorage, storageKeys } from '../utils/localStorage'

export default function Login() {
  const nav = useNavigate(); const [form, setForm] = useState({ username:'', password:'', role:'Peserta' }); const [msg, setMsg] = useState('')
  const onSubmit = (e) => { e.preventDefault(); if (!form.username || !form.password) { setMsg('Data gagal: semua field wajib diisi.'); return } setStorage(storageKeys.currentUser, { username: form.username, role: form.role, loginAt: new Date().toISOString() }); setMsg('Data berhasil disimpan.'); nav('/dashboard') }
  return <div className='login-page'>
    <section className='card login-info'><span className='badge'>E-Learning FASH Skadik 504 Wingdik 500/Umum</span><h2>Masuk Dashboard LMS</h2><p>Login dan register dummy untuk mengakses dashboard sesuai role: Admin, Peserta/Siswa, atau Dosen/Instruktur.</p><ul className='check-list'><li>Upload/download materi</li><li>Video pembelajaran dan simulasi interaktif</li><li>Forum, tugas, kuis berbasis waktu</li><li>Nilai, progress, sertifikat, dan rekap hasil belajar</li></ul></section>
    <form className='card form login-card' onSubmit={onSubmit}><h2>Login / Register</h2>{msg && <p>{msg}</p>}<input placeholder='Username / NIP / Nomor peserta' value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} /><input type='password' placeholder='Password' value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /><select value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}><option>Peserta</option><option>Instruktur</option><option>Admin</option></select><button className='btn'>Masuk Dashboard</button><button type='button' className='btn ghost'>Register Akun Baru</button></form>
  </div>
}
