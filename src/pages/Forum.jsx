import { useState } from 'react'
import { getStorage, setStorage, storageKeys } from '../utils/localStorage'
import { initialForumPosts } from '../data/dummyData'

export default function Forum() {
  const [posts, setPosts] = useState(getStorage(storageKeys.forumPosts, initialForumPosts))
  const [q, setQ] = useState('')
  const [f, setF] = useState({ author: '', title: '', category: 'FASH', content: '' })
  const filtered = posts.filter((p) => p.title.toLowerCase().includes(q.toLowerCase()))
  const submit = (e) => { e.preventDefault(); if (Object.values(f).some((v) => !v)) return alert('Data gagal jika input kosong'); const n = [{ id: crypto.randomUUID(), ...f, comments: [], createdAt: new Date().toISOString() }, ...posts]; setPosts(n); setStorage(storageKeys.forumPosts, n); alert('Data berhasil disimpan') }
  return <div className='stack'><section className='card'><h2>Forum Diskusi</h2><input className='search' placeholder='Cari diskusi...' value={q} onChange={(e) => setQ(e.target.value)} /></section><form className='card form' onSubmit={submit}><h3>Tambah Diskusi</h3><input placeholder='Nama' onChange={(e) => setF({ ...f, author: e.target.value })} /><input placeholder='Judul' onChange={(e) => setF({ ...f, title: e.target.value })} /><textarea placeholder='Isi diskusi' onChange={(e) => setF({ ...f, content: e.target.value })} /><button className='btn'>Kirim Diskusi</button></form>{filtered.map((p) => <article className='card' key={p.id}><h4>{p.title} <span className='badge'>{p.category}</span></h4><p>{p.author} • {new Date(p.createdAt).toLocaleDateString()}</p><p>{p.content}</p><button className='btn ghost small' onClick={() => { const n = posts.filter((x) => x.id !== p.id); setPosts(n); setStorage(storageKeys.forumPosts, n) }}>Hapus</button></article>)}</div>
}
