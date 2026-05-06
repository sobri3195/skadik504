import { useState } from 'react'
import { Link } from 'react-router-dom'
import { educationPrograms, programModules } from '../data/dummyData'

export default function Pendidikan() {
  const [q, setQ] = useState(''); const [cat, setCat] = useState('Semua')
  const data = educationPrograms.filter((p) => (cat === 'Semua' || p.category === cat) && p.name.toLowerCase().includes(q.toLowerCase()))
  const count = (c) => educationPrograms.filter((p) => p.category === c).length
  return <div className='stack'>
    <section className='card page-hero'>
      <span className='badge'>Katalog Program Pendidikan</span>
      <h2>Pendidikan Skadik 504</h2>
      <p>Daftar program Kejuruan dan Dikkualsus disajikan dalam card LMS. Setiap detail program memiliki panduan, materi, video, simulasi, soal ujian, kotak pengumpulan tugas/ujian, dan progress peserta.</p>
      <input className='search' placeholder='Cari program pendidikan...' value={q} onChange={(e) => setQ(e.target.value)} />
      <div className='row row-left'>{['Semua', 'Kejuruan', 'Dikkualsus'].map((c) => <button key={c} className={`btn small ${cat === c ? '' : 'ghost'}`} onClick={() => setCat(c)}>{c}{c !== 'Semua' ? ` (${count(c)})` : ''}</button>)}</div>
    </section>
    <section className='grid cols-2'>
      {['Kejuruan', 'Dikkualsus'].map((c) => <article className='card category-card' key={c}><h3>{c}</h3><p>{count(c)} program aktif</p><div className='module-chips'>{programModules.map((m) => <span key={m}>{m}</span>)}</div></article>)}
    </section>
    <section className='grid cols-3'>{data.map((p) => <article className='card program-card hover' key={p.id}><span className='badge'>{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><p>📚 Materi {p.materials} • 🎥 Video {p.videos} • 🩺 Simulasi {p.simulations}</p><div className='progress'><div style={{ width: `${p.progress}%` }} /></div><small>Progress contoh {p.progress}%</small><Link className='btn small' to={`/pendidikan/${p.id}`}>Masuk Detail Program</Link></article>)}</section>
  </div>
}
