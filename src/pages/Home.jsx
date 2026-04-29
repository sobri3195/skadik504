import { Link } from 'react-router-dom'
import { announcements, features } from '../data/dummyData'

export default function Home() {
  const steps = ['Baca Panduan', 'Pelajari Materi', 'Tonton Video', 'Ikuti Simulasi', 'Kumpulkan Tugas', 'Kerjakan Kuis']
  return <div className='stack' id='home'>
    <section className='hero-grid card'>
      <div><span className='badge'>Platform Pembelajaran Digital Skadik 504</span><h1>E-Learning FASH Skadik 504</h1><p>Platform pembelajaran digital untuk FASH, Basic Life Support, dan program pendidikan kesehatan militer.</p><div className='row'><Link className='btn' to='/fash'>Mulai Belajar</Link><a href='#program' className='btn ghost'>Lihat Program</a></div></div>
      <div className='preview card'><h4>Preview LMS</h4><p>Progress Belajar 68%</p><div className='progress'><div style={{ width: '68%' }} /></div><p>Tugas Aktif: 2 | Kuis Aktif: 1</p></div>
    </section>
    <section className='grid cols-4'>{[['25', 'Program Pendidikan'], ['8', 'Materi FASH'], ['6', 'Video Praktik'], ['5', 'Tahap Simulasi BLS']].map(([n, t]) => <article className='card stat-card hover' key={t}><h3>{n}</h3><p>{t}</p></article>)}</section>
    <section id='fitur'><h2>Fitur Utama</h2><div className='grid cols-3'>{features.map((f) => <article className='card hover' key={f}><h3>📘 {f}</h3><p>Fitur pembelajaran terstruktur dan interaktif.</p><Link className='btn ghost small' to='/dashboard'>Lihat Fitur</Link></article>)}</div></section>
    <section><h2>Learning Journey</h2><div className='timeline'>{steps.map((s, i) => <div key={s} className='card'><strong>{i + 1}.</strong> {s}</div>)}</div></section>
    <section id='program'><h2>Program Pendidikan</h2><div className='grid cols-2'><article className='card program-card hover'><h3>Kejuruan</h3><p>16 Program</p><Link className='btn small' to='/pendidikan'>Lihat Pendidikan</Link></article><article className='card program-card hover'><h3>Dikkualsus</h3><p>9 Program</p><Link className='btn small' to='/pendidikan'>Lihat Pendidikan</Link></article></div></section>
    <section><h2>Pengumuman</h2><div className='stack'>{announcements.map((a) => <article className='card' key={a}>{a}</article>)}</div></section>
    <footer className='card'><strong>E-Learning FASH Skadik 504</strong><p>Kontak: admin@skadik504.local | © 2026</p></footer>
  </div>
}
