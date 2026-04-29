import { useParams } from 'react-router-dom'
import { educationPrograms, fashMaterials } from '../data/dummyData'

export default function ProgramDetail() {
  const { id } = useParams(); const p = educationPrograms.find((x) => x.id === id)
  if (!p) return <p>Program tidak ditemukan.</p>
  return <div className='stack'><section className='card'><h2>{p.name}</h2><p>{p.description}</p><p>{p.category} • Materi {p.materials} • Video {p.videos}</p></section><section className='card'><h3>Materi Program</h3>{fashMaterials.slice(0, 6).map((m, i) => <div className='row' key={m.id}><span>{i + 1}. {m.title}</span><button className='btn small'>Tandai Selesai</button></div>)}</section></div>
}
