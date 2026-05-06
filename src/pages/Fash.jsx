import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { blsSimulationSteps, fashMaterials, fashVideos, simulationModes } from '../data/dummyData'
import { getStorage, setStorage, storageKeys } from '../utils/localStorage'

export default function Fash() {
  const [tab, setTab] = useState('Panduan')
  const [mp, setMp] = useState(getStorage(storageKeys.materiProgress, {}))
  const [vp, setVp] = useState(getStorage(storageKeys.videoProgress, {}))
  const [sim, setSim] = useState(getStorage(storageKeys.simulationResults, []))
  const [idx, setIdx] = useState(0)
  const [correct, setCorrect] = useState(0)
  const curr = blsSimulationSteps[idx]
  const options = useMemo(() => [...blsSimulationSteps].sort(() => Math.random() - 0.5), [idx])
  const p = Math.round(((Object.values(mp).filter(Boolean).length + Object.values(vp).filter(Boolean).length) / (fashMaterials.length + fashVideos.length)) * 100) || 45
  const choose = (s) => {
    if (s.key !== curr.key) return
    const c = correct + 1
    setCorrect(c)
    if (idx === blsSimulationSteps.length - 1) {
      const r = { nama: 'peserta', score: Math.round(c / blsSimulationSteps.length * 100), mode: 'D-R-M-C-B', date: new Date().toISOString() }
      const n = [r, ...sim]
      setSim(n); setStorage(storageKeys.simulationResults, n); setIdx(0); setCorrect(0)
    } else setIdx(idx + 1)
  }

  return <div className='stack page-pad'>
    <section className='aero-hero card'>
      <span className='eyebrow'>Aplikasi Khusus Penelitian Tesis • S2 Keperawatan Unsoed</span>
      <h1>AEROFORCE-BLS</h1>
      <h2>Aeromedical Force-Oriented Response & Clinical Education – Basic Life Support</h2>
      <p>Menu pembelajaran khusus untuk pelaksanaan BLS, penanganan kesehatan penerbangan, serta FASH: Basic Life Support dan Kesehatan Penerbangan.</p>
      <div className='progress'><div style={{ width: `${p}%` }} /></div>
    </section>

    <div className='tabs'>{['Panduan', 'Materi Pembelajaran', 'Simulasi Interaktif BLS', 'Forum Diskusi', 'Tugas / Assignment', 'Kuis / Ujian'].map((t) => <button key={t} className={`tab ${tab === t ? 'active' : ''}`} onClick={() => setTab(t)}>{t}</button>)}</div>

    {tab === 'Panduan' && <section className='grid cols-3'>
      {['Panduan penggunaan aplikasi', 'Panduan mengikuti pembelajaran', 'Panduan mengerjakan simulasi, tugas, dan kuis'].map((title, i) => <article className='card feature-card' key={title}><span className='feature-icon'>{['📘', '🧭', '✅'][i]}</span><h3>{title}</h3><p>Ikuti instruksi secara berurutan, baca materi, tonton video, selesaikan simulasi, kumpulkan tugas, dan kerjakan kuis berbasis waktu.</p></article>)}
    </section>}

    {tab === 'Materi Pembelajaran' && <div className='stack'>
      <section className='grid cols-2'>
        <article className='card'><h3>Teori BLS</h3><p>Konsep bantuan hidup dasar, keselamatan penolong, AVPU, sirkulasi, napas, dan RJP.</p></article>
        <article className='card'><h3>Teori Kesehatan Penerbangan</h3><p>Pengenalan respons klinis pada konteks aeromedical dan kondisi penerbangan.</p></article>
      </section>
      <section className='grid cols-2'>
        <div className='stack'>{fashMaterials.map((m, i) => <article className='card row' key={m.id}><div><strong>{i + 1}. {m.title}</strong><p>{m.description} • {m.duration}</p></div><button className='btn small' onClick={() => { const n = { ...mp, [m.id]: true }; setMp(n); setStorage(storageKeys.materiProgress, n) }}>{mp[m.id] ? 'Selesai' : 'Tandai Selesai'}</button></article>)}</div>
        <div className='grid cols-1'>{fashVideos.map((v) => <article className='card video-card' key={v.id}><div className='video'>▶</div><h4>{v.title}</h4><p>{v.description} • {v.duration}</p><button className='btn small' onClick={() => { const n = { ...vp, [v.id]: true }; setVp(n); setStorage(storageKeys.videoProgress, n) }}>{vp[v.id] ? 'Sudah Ditonton' : 'Tandai Sudah Ditonton'}</button></article>)}</div>
      </section>
    </div>}

    {tab === 'Simulasi Interaktif BLS' && <section className='stack'>
      <div className='grid cols-2'>{simulationModes.map((m) => <article className='card mode-card' key={m.title}><h3>{m.title}</h3><p>{m.focus}</p></article>)}</div>
      <article className='card simulation-card'><span className='eyebrow'>Alur Simulasi D-R-M-C-B</span><h3>Langkah {idx + 1}: {curr.title}</h3><p>{curr.description}</p><div className='grid cols-5 sim-steps'>{blsSimulationSteps.map((s) => <div className={`sim-step ${s.key === curr.key ? 'active' : ''}`} key={s.key}><strong>{s.key}</strong><span>{s.title}</span></div>)}</div><p>Pilih urutan tindakan yang benar:</p>{options.map((o) => <button className='btn ghost block' key={o.key} onClick={() => choose(o)}>{o.key} - {o.title}</button>)}</article>
      <article className='card'><h3>Riwayat Simulasi</h3><div className='table-wrap'><table><tbody>{sim.map((r, i) => <tr key={i}><td>{r.nama}</td><td>{r.mode}</td><td>{r.score}</td><td>{new Date(r.date).toLocaleString()}</td></tr>)}</tbody></table></div></article>
    </section>}

    {tab === 'Forum Diskusi' && <article className='card'><h3>Forum Diskusi</h3><p>Fitur interaksi peserta, dosen, instruktur, dan kelompok. Peserta dapat bertanya, menjawab, dan berdiskusi.</p><Link className='btn' to='/forum'>Masuk Forum Diskusi</Link></article>}
    {tab === 'Tugas / Assignment' && <article className='card'><h3>Tugas / Assignment</h3><p>Unduh tugas, unggah jawaban, dan pantau status: belum dikerjakan, dikumpulkan, dinilai.</p><Link className='btn' to='/tugas'>Buka Tugas</Link></article>}
    {tab === 'Kuis / Ujian' && <article className='card'><h3>Kuis / Ujian</h3><p>Kuis berbasis waktu dilengkapi timer, nilai, status kelulusan, dan feedback setelah pengerjaan.</p><Link className='btn' to='/kuis'>Buka Kuis</Link></article>}
  </div>
}
