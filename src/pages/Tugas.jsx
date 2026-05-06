import { useState } from 'react'
import { assignments } from '../data/dummyData'
import { getStorage, setStorage, storageKeys } from '../utils/localStorage'

export default function Tugas() {
  const [subs, setSubs] = useState(getStorage(storageKeys.assignmentSubmissions, []))
  const [f, setF] = useState({ assignmentId: 'A1', studentName: '', answer: '', fileName: '' })
  const submit = (e) => {
    e.preventDefault()
    if (Object.values(f).some((v) => !v)) return alert('Data gagal jika input kosong')
    const a = assignments.find((x) => x.id === f.assignmentId)
    const rec = { id: crypto.randomUUID(), assignmentTitle: a.title, ...f, status: 'Dikumpulkan', submittedAt: new Date().toISOString(), feedback: 'Menunggu penilaian instruktur' }
    const n = [rec, ...subs]
    setSubs(n); setStorage(storageKeys.assignmentSubmissions, n); alert('Data berhasil disimpan')
  }
  return <div className='stack page-pad'>
    <section className='card accent-card'><span className='eyebrow'>Tugas / Assignment</span><h1>Kotak Pengumpulan Tugas dan Ujian</h1><p>Peserta dapat mengunduh instruksi, mengunggah jawaban, dan memantau status tugas: belum dikerjakan, dikumpulkan, atau dinilai.</p></section>
    <section className='grid cols-4'>{[['Total Tugas', assignments.length], ['Belum Dikerjakan', assignments.filter((a) => a.status === 'Belum dikerjakan').length], ['Dikumpulkan', subs.length], ['Deadline Terdekat', `${assignments[0].dueInDays} hari`]].map(([t, v]) => <article className='card' key={t}><p>{t}</p><h3>{v}</h3></article>)}</section>
    <section className='grid cols-3'>{assignments.map((a) => <article className='card' key={a.id}><span className='badge'>{a.status}</span><h4>{a.title}</h4><p>{a.description}</p><p>Deadline H+{a.dueInDays}</p><button className='btn ghost small'>Unduh Instruksi</button></article>)}</section>
    <form className='card form' onSubmit={submit}><h3>Unggah Jawaban</h3><select value={f.assignmentId} onChange={(e) => setF({ ...f, assignmentId: e.target.value })}>{assignments.map((a) => <option key={a.id} value={a.id}>{a.title}</option>)}</select><input placeholder='Nama peserta' value={f.studentName} onChange={(e) => setF({ ...f, studentName: e.target.value })} /><textarea placeholder='Ringkasan jawaban / catatan pengumpulan' value={f.answer} onChange={(e) => setF({ ...f, answer: e.target.value })} /><input placeholder='Nama file unggahan (contoh: laporan-bls.pdf)' value={f.fileName} onChange={(e) => setF({ ...f, fileName: e.target.value })} /><button className='btn'>Kumpulkan Jawaban</button></form>
    <div className='table-wrap card'><table><thead><tr><th>Nama</th><th>Tugas</th><th>File</th><th>Status</th><th>Feedback</th></tr></thead><tbody>{subs.map((s) => <tr key={s.id}><td>{s.studentName}</td><td>{s.assignmentTitle}</td><td>{s.fileName}</td><td><span className='badge'>{s.status}</span></td><td>{s.feedback}</td></tr>)}</tbody></table></div>
  </div>
}
