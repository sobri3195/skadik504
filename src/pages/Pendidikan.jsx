import { useState } from 'react'
import { Link } from 'react-router-dom'
import { educationPrograms } from '../data/dummyData'

export default function Pendidikan() {
  const [q, setQ] = useState(''); const [cat, setCat] = useState('Semua')
  const data = educationPrograms.filter((p) => (cat === 'Semua' || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()))
  return <div className='stack'><section className='card'><h2>Program Pendidikan</h2><p>Katalog program pembelajaran kesehatan militer.</p><input className='search' placeholder='Cari program pendidikan...' value={q} onChange={(e) => setQ(e.target.value)} /><div className='row'>{['Semua', 'Kejuruan', 'Dikkualsus'].map((c) => <button key={c} className={`btn small ${cat === c ? '' : 'ghost'}`} onClick={() => setCat(c)}>{c}</button>)}</div></section><section className='grid cols-3'>{data.map((p) => <article className='card' key={p.id}><h3>{p.name}</h3><p><span className='badge'>{p.category}</span></p><p>Materi {p.materials} • Video {p.videos} • Simulasi {p.simulations}</p><div className='progress'><div style={{ width: `${p.progress}%` }} /></div><Link className='btn small' to={`/pendidikan/${p.id}`}>Lihat Detail</Link></article>)}</section></div>
}
