import { useMemo, useState } from 'react'
import { blsSimulationSteps, fashMaterials, fashVideos } from '../data/dummyData'
import { getStorage, setStorage, storageKeys } from '../utils/localStorage'

export default function Fash() {
  const [tab, setTab] = useState('Materi')
  const [mp, setMp] = useState(getStorage(storageKeys.materiProgress, {}))
  const [vp, setVp] = useState(getStorage(storageKeys.videoProgress, {}))
  const [sim, setSim] = useState(getStorage(storageKeys.simulationResults, []))
  const [idx, setIdx] = useState(0); const [correct, setCorrect] = useState(0)
  const curr = blsSimulationSteps[idx]
  const options = useMemo(() => [...blsSimulationSteps].sort(() => Math.random() - 0.5), [idx])
  const p = Math.round(((Object.values(mp).filter(Boolean).length + Object.values(vp).filter(Boolean).length) / (fashMaterials.length + fashVideos.length)) * 100)
  const choose = (s) => { if (s.key === curr.key) { const c = correct + 1; setCorrect(c); if (idx === blsSimulationSteps.length - 1) { const r = { nama: 'peserta', score: Math.round(c / blsSimulationSteps.length * 100), date: new Date().toISOString() }; const n = [r, ...sim]; setSim(n); setStorage(storageKeys.simulationResults, n); setIdx(0); setCorrect(0) } else setIdx(idx + 1) } }
  return <div className='stack'><section className='card'><h2>FASH - Basic Life Support <span className='badge'>Aktif</span></h2><p>8 Materi • 6 Video • 5 Tahap Simulasi • 1 Kuis</p><div className='progress'><div style={{ width: `${p}%` }} /></div><button className='btn small'>Lanjutkan Belajar</button></section><div className='tabs'>{['Panduan', 'Materi', 'Video', 'Simulasi', 'Forum', 'Tugas', 'Kuis'].map((t) => <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>)}</div>
  {tab === 'Materi' && <div className='stack'>{fashMaterials.map((m, i) => <article className='card row' key={m.id}><div><strong>{i + 1}. {m.title}</strong><p>{m.description} • {m.duration} • {m.level}</p></div><button className='btn small' onClick={() => { const n = { ...mp, [m.id]: true }; setMp(n); setStorage(storageKeys.materiProgress, n) }}>{mp[m.id] ? 'Selesai' : 'Tandai Selesai'}</button></article>)}</div>}
  {tab === 'Video' && <div className='grid cols-3'>{fashVideos.map((v) => <article className='card' key={v.id}><div className='video'>▶</div><h4>{v.title}</h4><p>{v.duration}</p><button className='btn small' onClick={() => { const n = { ...vp, [v.id]: true }; setVp(n); setStorage(storageKeys.videoProgress, n) }}>{vp[v.id] ? 'Sudah Ditonton' : 'Tandai Sudah Ditonton'}</button></article>)}</div>}
  {tab === 'Simulasi' && <section className='card'><p>Langkah {idx + 1}: {curr.title}</p>{options.map((o) => <button className='btn ghost block' key={o.key} onClick={() => choose(o)}>{o.key} - {o.title}</button>)}<h4>Riwayat Simulasi</h4><div className='table-wrap'><table><tbody>{sim.map((r, i) => <tr key={i}><td>{r.nama}</td><td>{r.score}</td><td>{new Date(r.date).toLocaleString()}</td></tr>)}</tbody></table></div></section>}
  {['Panduan', 'Forum', 'Tugas', 'Kuis'].includes(tab) && <article className='card'>Gunakan menu {tab} dari sidebar untuk fitur lengkap.</article>}
  </div>
}
