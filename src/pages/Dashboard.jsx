import { Link } from 'react-router-dom'
import { assignments, fashMaterials, fashVideos, educationPrograms, dummyUsers } from '../data/dummyData'
import { getStorage, storageKeys } from '../utils/localStorage'

export default function Dashboard() {
  const user = getStorage(storageKeys.currentUser, { role: 'Peserta', username: 'guest' })
  const mp = getStorage(storageKeys.materiProgress, {})
  const quiz = getStorage(storageKeys.quizResults, [])
  const subs = getStorage(storageKeys.assignmentSubmissions, [])
  const forum = getStorage(storageKeys.forumPosts, [])
  const done = Object.values(mp).filter(Boolean).length
  const progress = Math.round((done / fashMaterials.length) * 100) || 0
  return <div className='stack'><section className='card'><h2>Selamat datang, {user.username}</h2><p>Lanjutkan pembelajaran Anda hari ini.</p><div className='row'><Link className='btn small' to='/fash'>Lanjutkan Materi</Link><Link className='btn ghost small' to='/tugas'>Kerjakan Tugas</Link><Link className='btn ghost small' to='/kuis'>Ikuti Kuis</Link></div></section>
  {user.role === 'Peserta' && <><section className='grid cols-4'>{[['Progress Belajar', `${progress}%`], ['Materi Selesai', done], ['Tugas Aktif', assignments.length], ['Kuis Aktif', 1]].map(([t, v]) => <article className='card' key={t}><p>{t}</p><h3>{v}</h3></article>)}</section><section className='grid cols-2'><article className='card'><h3>Lanjutkan Pembelajaran</h3><p>{fashMaterials[done]?.title || fashMaterials[0].title}</p><div className='progress'><div style={{ width: `${progress}%` }} /></div></article><article className='card'><h3>Recent Activity</h3><ul><li>Materi diselesaikan: {done}</li><li>Tugas dikumpulkan: {subs.length}</li><li>Kuis dikerjakan: {quiz.length}</li></ul></article></section></>}
  {user.role === 'Instruktur' && <section className='grid cols-4'>{[['Total peserta', dummyUsers.length], ['Submission terbaru', subs.length], ['Forum aktif', forum.length], ['Rata-rata nilai kuis', quiz.length ? Math.round(quiz.reduce((a, b) => a + b.score, 0) / quiz.length) : 0]].map(([t, v]) => <article className='card' key={t}><p>{t}</p><h3>{v}</h3></article>)}</section>}
  {user.role === 'Admin' && <section className='grid cols-4'>{[['Total user dummy', dummyUsers.length], ['Total program', educationPrograms.length], ['Total materi', fashMaterials.length], ['Total video', fashVideos.length], ['Total tugas', assignments.length], ['Total kuis', 1]].map(([t, v]) => <article className='card' key={t}><p>{t}</p><h3>{v}</h3></article>)}<Link className='btn' to='/admin'>Admin LocalStorage</Link></section>}
  </div>
}
