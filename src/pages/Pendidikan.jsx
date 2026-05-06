import { useState } from 'react'
import { Link } from 'react-router-dom'
import { educationPrograms, programModules } from '../data/dummyData'

export default function Pendidikan() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('Semua')
  const data = educationPrograms.filter((p) => (cat === 'Semua' || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()))
  const counts = { Kejuruan: educationPrograms.filter((p) => p.category === 'Kejuruan').length, Dikkualsus: educationPrograms.filter((p) => p.category === 'Dikkualsus').length }
  return <div className='stack page-pad'>
    <section className='card section-head accent-card'><span className='eyebrow'>Menu Pendidikan</span><h1>Program Pendidikan Skadik 504</h1><p>Katalog program Kejuruan dan Dikkualsus dengan modul lengkap: {programModules.join(', ')}.</p><input className='search' placeholder='Cari program pendidikan...' value={q} onChange={(e) => setQ(e.target.value)} /><div className='row wrap'>{['Semua', 'Kejuruan', 'Dikkualsus'].map((c) => <button key={c} className={`btn small ${cat === c ? '' : 'ghost'}`} onClick={() => setCat(c)}>{c}{c !== 'Semua' ? ` (${counts[c]})` : ''}</button>)}</div></section>
    <section className='grid cols-3'>{data.map((p) => <article className='card program-card hover' key={p.id}><span className='badge'>{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><p>Materi {p.materials} • Video {p.videos} • Simulasi {p.simulations}</p><div className='progress'><div style={{ width: `${p.progress}%` }} /></div><Link className='btn small' to={`/pendidikan/${p.id}`}>Masuk Detail Program</Link></article>)}</section>
  </div>
}
