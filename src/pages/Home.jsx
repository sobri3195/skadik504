import { Link } from 'react-router-dom'
import { announcements, dashboardCards, educationPrograms, features, stats } from '../data/dummyData'

function SkadikVisual() {
  return <div className='skadik-visual' aria-label='Visual identitas Skadik 504'>
    <div className='crest'>
      <span className='crest-wing'>✈</span>
      <strong>SKADIK<br />504</strong>
      <small>FASH • BLS</small>
    </div>
    <div className='visual-panel'>
      <span className='badge'>Wingdik 500/Umum</span>
      <h3>Pendidikan Kesehatan Militer</h3>
      <p>Learning Management System internal untuk mendukung pembelajaran formal, praktik klinis, simulasi, evaluasi, dan rekap hasil belajar.</p>
    </div>
  </div>
}

export default function Home() {
  const previewCards = dashboardCards.slice(0, 6)
  return <div className='stack landing' id='home'>
    <section className='hero-grid card hero-official'>
      <div>
        <span className='badge'>Platform LMS Resmi Skadik 504</span>
        <h1>E-Learning FASH Skadik 504</h1>
        <p className='lead'>Platform pembelajaran digital untuk FASH, Basic Life Support, Kesehatan Penerbangan, dan program pendidikan kesehatan militer.</p>
        <div className='row row-left hero-actions'>
          <Link className='btn' to='/aeroforce-bls'>Mulai Belajar</Link>
          <a href='#program' className='btn ghost'>Lihat Program</a>
        </div>
      </div>
      <SkadikVisual />
    </section>

    <section id='profil' className='profile-band card'>
      <div>
        <span className='eyebrow'>Profil Singkat</span>
        <h2>Skadik 504 Wingdik 500/Umum</h2>
        <p>Skadik 504 menjadi satuan pendidikan yang menyiapkan pembelajaran kesehatan militer secara terarah, disiplin, dan terukur. LMS ini dirancang untuk memperkuat kompetensi FASH, Basic Life Support, kesehatan penerbangan, dan program pendidikan kejuruan maupun kualifikasi khusus.</p>
      </div>
      <div className='mini-dashboard'>
        <strong>Status Sistem</strong>
        <p>Materi, video, forum, tugas, kuis, simulasi, sertifikat, manajemen peserta, dan laporan progress tersedia dalam satu platform.</p>
      </div>
    </section>

    <section className='grid cols-4'>{stats.map(([n, t, s]) => <article className='card stat-card hover' key={t}><h3>{n}</h3><p>{t}</p><small>{s}</small></article>)}</section>

    <section id='fitur' className='stack'>
      <div className='section-heading'><span className='eyebrow'>Fitur Utama LMS</span><h2>Pembelajaran lengkap dari materi hingga sertifikat</h2></div>
      <div className='grid cols-3'>{features.map((f) => <article className='card feature-card hover' key={f.title}><span className='feature-icon'>{f.icon}</span><h3>{f.title}</h3><p>{f.text}</p><Link className='btn ghost small' to='/dashboard'>Buka Dashboard</Link></article>)}</div>
    </section>

    <section className='dashboard-preview card'>
      <div className='section-heading'><span className='eyebrow'>Preview Dashboard</span><h2>Kontrol pembelajaran sesuai role</h2><p>Admin, peserta, dan dosen/instruktur dapat memantau aktivitas belajar, tugas, kuis, forum, kalender, sertifikat, dan laporan progress peserta.</p></div>
      <div className='grid cols-3'>{previewCards.map(([title, value, text]) => <article className='dashboard-tile' key={title}><span>{title}</span><strong>{value}</strong><small>{text}</small></article>)}</div>
    </section>

    <section id='program' className='stack'>
      <div className='section-heading'><span className='eyebrow'>Program Pendidikan</span><h2>Katalog Kejuruan dan Dikkualsus</h2></div>
      <div className='grid cols-2'>
        <article className='card program-card hover'><span className='feature-icon'>🎓</span><h3>Kejuruan</h3><p>16 program pembinaan kompetensi kesehatan, psikologi, jasmil, farmasi, dan PNS kesehatan.</p><Link className='btn small' to='/pendidikan'>Lihat Kejuruan</Link></article>
        <article className='card program-card hover'><span className='feature-icon'>🛡️</span><h3>Dikkualsus</h3><p>{educationPrograms.filter((p) => p.category === 'Dikkualsus').length} program kualifikasi khusus untuk dukungan aeromedis dan kesehatan lapangan.</p><Link className='btn small' to='/pendidikan'>Lihat Dikkualsus</Link></article>
      </div>
    </section>

    <section><h2>Pengumuman Akademik</h2><div className='grid cols-2'>{announcements.map((a) => <article className='card announcement' key={a}>📌 {a}</article>)}</div></section>

    <footer className='footer card'><strong>E-Learning FASH Skadik 504 Wingdik 500/Umum</strong><p>LMS internal untuk FASH, BLS, kesehatan penerbangan, dan program pendidikan kesehatan militer.</p><small>© 2026 Skadik 504 Wingdik 500/Umum</small></footer>
  </div>
}
