import { useMemo, useState } from 'react'
import { assignments, blsSimulationSteps, fashMaterials, fashVideos, simulationModes } from '../data/dummyData'
import { getStorage, setStorage, storageKeys } from '../utils/localStorage'

export default function Fash() {
  const [tab, setTab] = useState('Panduan')
  const [mode, setMode] = useState('Satu Penolong')
  const [mp, setMp] = useState(getStorage(storageKeys.materiProgress, {}))
  const [vp, setVp] = useState(getStorage(storageKeys.videoProgress, {}))
  const [sim, setSim] = useState(getStorage(storageKeys.simulationResults, []))
  const [idx, setIdx] = useState(0); const [correct, setCorrect] = useState(0)
  const curr = blsSimulationSteps[idx]
  const options = useMemo(() => [...blsSimulationSteps].sort(() => Math.random() - 0.5), [idx])
  const p = Math.round(((Object.values(mp).filter(Boolean).length + Object.values(vp).filter(Boolean).length) / (fashMaterials.length + fashVideos.length)) * 100) || 0
  const choose = (s) => { if (s.key === curr.key) { const c = correct + 1; setCorrect(c); if (idx === blsSimulationSteps.length - 1) { const r = { nama: mode, score: Math.round(c / blsSimulationSteps.length * 100), date: new Date().toISOString() }; const n = [r, ...sim]; setSim(n); setStorage(storageKeys.simulationResults, n); setIdx(0); setCorrect(0) } else setIdx(idx + 1) } }

  return <div className='stack'>
    <section className='card course-hero'>
      <span className='badge'>Aplikasi Penelitian Tesis • S2 Keperawatan Unsoed</span>
      <h2>AEROFORCE-BLS</h2>
      <h3>Aeromedical Force-Oriented Response & Clinical Education – Basic Life Support</h3>
      <p>Menu khusus untuk pelaksanaan penelitian tesis dengan fokus pelaksanaan BLS, penanganan kesehatan penerbangan, serta FASH: Basic Life Support dan Kesehatan Penerbangan.</p>
      <div className='progress'><div style={{ width: `${p}%` }} /></div>
    </section>

    <div className='tabs'>{['Panduan', 'Materi Pembelajaran', 'Simulasi Interaktif BLS', 'Forum Diskusi', 'Tugas / Assignment', 'Kuis / Ujian'].map((t) => <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>)}</div>

    {tab === 'Panduan' && <section className='grid cols-3'>{['Panduan penggunaan aplikasi', 'Panduan mengikuti pembelajaran', 'Panduan mengerjakan simulasi, tugas, dan kuis'].map((x, i) => <article className='card feature-card' key={x}><span className='feature-icon'>0{i + 1}</span><h3>{x}</h3><p>Ikuti tahapan pembelajaran secara tertib, selesaikan modul, dan pastikan data tersimpan pada dashboard.</p></article>)}</section>}

    {tab === 'Materi Pembelajaran' && <div className='stack'><section className='grid cols-2'>{['Teori BLS', 'Teori Kesehatan Penerbangan', 'Video Praktik BLS', 'Video Penanganan Kesehatan Penerbangan'].map((m) => <article className='card' key={m}><h3>📘 {m}</h3><p>Konten pembelajaran terstruktur untuk kebutuhan FASH dan penelitian.</p></article>)}</section>{fashMaterials.map((m, i) => <article className='card row' key={m.id}><div><strong>{i + 1}. {m.title}</strong><p>{m.description} • {m.duration} • {m.level}</p></div><button className='btn small' onClick={() => { const n = { ...mp, [m.id]: true }; setMp(n); setStorage(storageKeys.materiProgress, n) }}>{mp[m.id] ? 'Selesai' : 'Tandai Selesai'}</button></article>)}<div className='grid cols-3'>{fashVideos.map((v) => <article className='card' key={v.id}><div className='video'>▶</div><h4>{v.title}</h4><p>{v.duration}</p><button className='btn small' onClick={() => { const n = { ...vp, [v.id]: true }; setVp(n); setStorage(storageKeys.videoProgress, n) }}>{vp[v.id] ? 'Sudah Ditonton' : 'Tandai Sudah Ditonton'}</button></article>)}</div></div>}

    {tab === 'Simulasi Interaktif BLS' && <section className='stack'><div className='grid cols-2'>{simulationModes.map((m) => <button key={m.title} className={`card mode-card ${mode === m.title ? 'selected' : ''}`} onClick={() => setMode(m.title)}><span>{m.icon}</span><strong>{m.title}</strong><small>{m.text}</small></button>)}</div><article className='card simulation-card'><span className='badge'>{mode}</span><h3>Langkah {idx + 1}: {curr.title}</h3><p>{curr.description}</p><div className='grid cols-2'>{options.map((o) => <button className='btn ghost block' key={o.key} onClick={() => choose(o)}>{o.key} — {o.title}</button>)}</div><div className='simulation-flow'>{blsSimulationSteps.map((s, i) => <span className={i <= idx ? 'active' : ''} key={s.key}>{s.key}</span>)}</div><h4>Riwayat Simulasi</h4><div className='table-wrap'><table><tbody>{sim.map((r, i) => <tr key={i}><td>{r.nama}</td><td>{r.score}</td><td>{new Date(r.date).toLocaleString()}</td></tr>)}</tbody></table></div></article></section>}

    {tab === 'Forum Diskusi' && <section className='card'><h3>Forum Diskusi</h3><p>Fitur interaksi peserta, dosen, instruktur, dan kelompok untuk bertanya, menjawab, serta membahas kasus FASH/BLS.</p><a className='btn small' href='/forum'>Buka Forum</a></section>}
    {tab === 'Tugas / Assignment' && <section className='grid cols-3'>{assignments.map((a) => <article className='card' key={a.id}><span className='badge'>{a.status}</span><h3>{a.title}</h3><p>{a.description}</p><button className='btn ghost small'>Unduh Tugas</button><button className='btn small'>Unggah Jawaban</button></article>)}</section>}
    {tab === 'Kuis / Ujian' && <section className='card'><h3>Kuis / Ujian Berbasis Waktu</h3><p>Timer 30 menit, hasil nilai otomatis, dan feedback setelah pengerjaan tersedia pada menu kuis.</p><a className='btn small' href='/kuis'>Mulai Kuis</a></section>}
  </div>
}
