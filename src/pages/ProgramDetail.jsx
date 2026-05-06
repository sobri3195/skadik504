import { useParams } from 'react-router-dom'
import { educationPrograms, fashMaterials, programModules } from '../data/dummyData'

export default function ProgramDetail() {
  const { id } = useParams(); const p = educationPrograms.find((x) => x.id === id)
  if (!p) return <p>Program tidak ditemukan.</p>
  return <div className='stack'>
    <section className='card page-hero'><span className='badge'>{p.category}</span><h2>{p.name}</h2><p>{p.description}</p><p>Materi {p.materials} • Video {p.videos} • Simulasi {p.simulations}</p><div className='progress'><div style={{ width: `${p.progress}%` }} /></div></section>
    <section className='grid cols-3'>{programModules.map((m) => <article className='card feature-card' key={m}><span className='feature-icon'>{m === 'Panduan' ? '📋' : m === 'Materi' ? '📚' : m === 'Video' ? '🎥' : m === 'Simulasi' ? '🩺' : m === 'Soal Ujian' ? '⏱️' : m === 'Progress Peserta' ? '📈' : '📤'}</span><h3>{m}</h3><p>Modul {m.toLowerCase()} tersedia untuk pelaksanaan pembelajaran, evaluasi, dan monitoring peserta.</p></article>)}</section>
    <section className='card'><h3>Materi Program</h3>{fashMaterials.slice(0, 6).map((m, i) => <div className='row lesson-row' key={m.id}><span>{i + 1}. {m.title}</span><button className='btn small'>Tandai Selesai</button></div>)}</section>
  </div>
}
