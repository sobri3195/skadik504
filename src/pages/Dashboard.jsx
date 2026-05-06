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
  const progress = Math.round((done / fashMaterials.length) * 100) || 72
  const role = roleMenus[user.role] ? user.role : 'Peserta'

  return <div className='stack'>
    <section className='card dashboard-hero'>
      <div>
        <span className='badge'>{role}</span>
        <h2>Dashboard LMS Skadik 504</h2>
        <p>Selamat datang, {user.username}. Pantau pembelajaran FASH, AEROFORCE-BLS, tugas, kuis, forum, sertifikat, dan agenda kegiatan dari satu panel.</p>
      </div>
      <div className='row row-left'><Link className='btn small' to='/aeroforce-bls'>Lanjutkan Materi</Link><Link className='btn ghost small' to='/tugas'>Kerjakan Tugas</Link><Link className='btn ghost small' to='/kuis'>Ikuti Kuis</Link></div>
    </section>

    <section className='grid cols-3 dashboard-grid'>{dashboardCards.map(([title, value, text]) => <article className='card dashboard-card' key={title}><span>{title}</span><h3>{title === 'Ringkasan Progress Belajar' ? `${progress}%` : value}</h3><p>{text}</p>{title === 'Ringkasan Progress Belajar' && <div className='progress'><div style={{ width: `${progress}%` }} /></div>}</article>)}</section>

    <section className='grid cols-3'>
      <article className='card role-card'><h3>Hak Akses {role}</h3><ul className='check-list'>{roleMenus[role].map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article className='card'><h3>Program yang Sedang Diikuti</h3><ul><li>AEROFORCE-BLS</li><li>FASH: Basic Life Support</li><li>Kesehatan Penerbangan</li></ul><Link className='btn small' to='/pendidikan'>Lihat Semua Program</Link></article>
      <article className='card'><h3>Ringkasan Data Sistem</h3><ul><li>Peserta dummy: {dummyUsers.length}</li><li>Program pendidikan: {educationPrograms.length}</li><li>Materi FASH: {fashMaterials.length}</li><li>Video praktik: {fashVideos.length}</li><li>Tugas aktif: {assignments.length}</li><li>Forum aktif: {forum.length}</li><li>Submission: {subs.length}</li><li>Hasil kuis: {quiz.length}</li></ul></article>
    </section>
  </div>
}
