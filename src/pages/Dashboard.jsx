import { Link } from 'react-router-dom'
import { assignments, dashboardCards, dummyUsers, educationPrograms, fashMaterials, fashVideos, roleMenus } from '../data/dummyData'
import { getStorage, storageKeys } from '../utils/localStorage'

export default function Dashboard() {
  const user = getStorage(storageKeys.currentUser, { role: 'Peserta', username: 'guest' })
  const mp = getStorage(storageKeys.materiProgress, {})
  const quiz = getStorage(storageKeys.quizResults, [])
  const subs = getStorage(storageKeys.assignmentSubmissions, [])
  const forum = getStorage(storageKeys.forumPosts, [])
  const done = Object.values(mp).filter(Boolean).length
  const progress = Math.round((done / fashMaterials.length) * 100) || 68
  const role = roleMenus[user.role] ? user.role : 'Peserta'

  return <div className='stack page-pad'>
    <section className='dashboard-hero card'>
      <div><span className='eyebrow'>Dashboard LMS</span><h1>Selamat datang, {user.username}</h1><p>Kelola pembelajaran FASH, BLS, kesehatan penerbangan, program pendidikan, tugas, kuis, forum, nilai, sertifikat, dan notifikasi akademik.</p></div>
      <div className='progress-ring'><strong>{progress}%</strong><span>Progress Belajar</span></div>
    </section>

    <section className='grid cols-3'>{dashboardCards.map((c) => <article className='card metric-card' key={c.title}><span className='feature-icon'>{c.icon}</span><div><p>{c.title}</p><h3>{c.value}</h3><small>{c.description}</small></div></article>)}</section>

    <section className='grid cols-3'>
      <article className='card'><h3>Program yang sedang diikuti</h3><ul className='clean-list'><li>AEROFORCE-BLS</li><li>Kesehatan Penerbangan</li><li>{educationPrograms[0].name}</li></ul><Link className='btn small' to='/pendidikan'>Lihat Program</Link></article>
      <article className='card'><h3>Materi terakhir dibuka</h3><p>{fashMaterials[done]?.title || fashMaterials[3].title}</p><div className='progress'><div style={{ width: `${progress}%` }} /></div><Link className='btn ghost small' to='/aeroforce-bls'>Lanjutkan Materi</Link></article>
      <article className='card'><h3>Kalender & Notifikasi</h3><p>Senin 08.00: Materi FASH</p><p>Jumat 13.00: Kuis BLS</p><p className='notice'>7 notifikasi akademik perlu dibaca.</p></article>
    </section>

    <section className='grid cols-3'>
      <article className='card'><h3>Tugas aktif</h3><p>{assignments.length} tugas tersedia • {subs.length} pengumpulan</p><Link className='btn small' to='/tugas'>Buka Tugas</Link></article>
      <article className='card'><h3>Kuis aktif</h3><p>{quiz.length ? `${quiz.length} hasil tersimpan` : 'Kuis BLS berbasis waktu aktif'}</p><Link className='btn small' to='/kuis'>Ikuti Kuis</Link></article>
      <article className='card'><h3>Forum diskusi terbaru</h3><p>{forum.length || 5} topik diskusi peserta dan instruktur.</p><Link className='btn small' to='/forum'>Masuk Forum</Link></article>
    </section>

    <section className='card'>
      <div className='section-head'><span className='eyebrow'>Dashboard sesuai role</span><h2>{role}</h2><p>Menu kerja utama untuk peran pengguna saat ini.</p></div>
      <div className='grid cols-4'>{roleMenus[role].map((item) => <article className='role-card' key={item}>✓ {item}</article>)}</div>
    </section>

    {role === 'Admin' && <section className='grid cols-4'>{[['Total user', dummyUsers.length], ['Total program', educationPrograms.length], ['Total materi', fashMaterials.length], ['Total video', fashVideos.length], ['Total tugas', assignments.length], ['Total kuis', 1]].map(([t, v]) => <article className='card' key={t}><p>{t}</p><h3>{v}</h3></article>)}<Link className='btn' to='/admin'>Manajemen Data LMS</Link></section>}
  </div>
}
