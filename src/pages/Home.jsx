import { Link } from 'react-router-dom'
import { announcements, dashboardCards, educationPrograms, features, stats } from '../data/dummyData'
import logo from '../assets/skadik504-logo.svg'

export default function Home() {
  const featuredPrograms = educationPrograms.slice(0, 6)
  return <div className='stack page-pad' id='home'>
    <section className='hero-grid card hero-card'>
      <div className='hero-copy'>
        <span className='eyebrow'>E-Learning FASH Skadik 504 Wingdik 500/Umum</span>
        <h1>E-Learning FASH Skadik 504</h1>
        <p className='lead'>Platform pembelajaran digital untuk FASH, Basic Life Support, Kesehatan Penerbangan, dan program pendidikan kesehatan militer.</p>
        <div className='hero-actions'><Link className='btn' to='/aeroforce-bls'>Mulai Belajar</Link><a href='#program' className='btn ghost'>Lihat Program</a></div>
      </div>
      <div className='hero-visual'>
        <img src={logo} alt='Logo Skadik 504 Wingdik 500/Umum sebagai visual utama LMS' />
        <div className='visual-panel'><strong>FASH • BLS • Kesehatan Penerbangan</strong><span>Learning Management System Internal</span></div>
      </div>
    </section>

    <section className='profile-strip card'>
      <div><span className='eyebrow'>Profil Singkat</span><h2>Skadik 504 sebagai pusat pembelajaran digital kesehatan militer</h2></div>
      <p>Platform ini dirancang untuk mendukung pembelajaran formal, dokumentasi progres, penguatan kompetensi FASH, Basic Life Support, kesehatan penerbangan, serta program Kejuruan dan Dikkualsus di lingkungan Skadik 504 Wingdik 500/Umum.</p>
    </section>

    <section className='grid cols-4'>{stats.map(([n, t, d]) => <article className='card stat-card hover' key={t}><h3>{n}</h3><p>{t}</p><small>{d}</small></article>)}</section>

    <section id='fitur' className='section-block'>
      <div className='section-head'><span className='eyebrow'>Fitur LMS</span><h2>Fitur utama pembelajaran</h2><p>Seluruh fitur disusun agar website terasa sebagai LMS internal, bukan sekadar landing page.</p></div>
      <div className='grid cols-3'>{features.map((f) => <article className='card feature-card hover' key={f.title}><span className='feature-icon'>{f.icon}</span><h3>{f.title}</h3><p>{f.description}</p><Link className='btn ghost small' to='/dashboard'>Buka Dashboard</Link></article>)}</div>
    </section>

    <section className='preview-dashboard card'>
      <div className='section-head'><span className='eyebrow'>Preview Dashboard LMS</span><h2>Monitoring belajar, tugas, kuis, forum, nilai, dan sertifikat</h2></div>
      <div className='dashboard-preview-grid'>{dashboardCards.slice(0, 6).map((c) => <article className='mini-card' key={c.title}><span>{c.icon}</span><strong>{c.value}</strong><p>{c.title}</p></article>)}</div>
    </section>

    <section id='program' className='section-block'>
      <div className='section-head'><span className='eyebrow'>Program Pendidikan</span><h2>Katalog Kejuruan dan Dikkualsus</h2><p>Setiap program memiliki panduan, materi, video, simulasi, ujian, pengumpulan tugas, dan progress peserta.</p></div>
      <div className='grid cols-3'>{featuredPrograms.map((p) => <article className='card program-card hover' key={p.id}><span className='badge'>{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><Link className='btn small' to={`/pendidikan/${p.id}`}>Detail Program</Link></article>)}</div>
      <div className='center'><Link className='btn ghost' to='/pendidikan'>Lihat Semua Program Pendidikan</Link></div>
    </section>

    <section className='grid cols-2'>
      <article className='card login-teaser'><span className='eyebrow'>Akses Pengguna</span><h2>Login dan register LMS</h2><p>Masuk sebagai Admin, Peserta/Siswa, atau Dosen/Instruktur untuk mengakses dashboard sesuai role.</p><Link className='btn' to='/login'>Login / Masuk Dashboard</Link></article>
      <article className='card'><h2>Pengumuman</h2><div className='stack compact'>{announcements.map((a) => <p className='notice' key={a}>{a}</p>)}</div></article>
    </section>
  </div>
}
