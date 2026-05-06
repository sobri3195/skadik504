import { useParams } from 'react-router-dom'
import { educationPrograms, fashMaterials, programModules } from '../data/dummyData'

export default function ProgramDetail() {
  const { id } = useParams()
  const p = educationPrograms.find((x) => x.id === id)
  if (!p) return <p>Program tidak ditemukan.</p>
  return <div className='stack page-pad'>
    <section className='card accent-card'><span className='badge'>{p.category}</span><h1>{p.name}</h1><p>{p.description}</p><p>Materi {p.materials} • Video {p.videos} • Simulasi {p.simulations}</p><div className='progress'><div style={{ width: `${p.progress}%` }} /></div></section>
    <section className='grid cols-3'>{programModules.map((m, i) => <article className='card feature-card' key={m}><span className='feature-icon'>{['📘', '📚', '🎥', '🫀', '⏱️', '📥', '📈'][i]}</span><h3>{m}</h3><p>Modul {m.toLowerCase()} tersedia untuk program {p.name}.</p></article>)}</section>
    <section className='card'><h3>Materi Program</h3>{fashMaterials.slice(0, 6).map((m, i) => <div className='row lesson-row' key={m.id}><span>{i + 1}. {m.title}</span><button className='btn small'>Buka Modul</button></div>)}</section>
  </div>
}
