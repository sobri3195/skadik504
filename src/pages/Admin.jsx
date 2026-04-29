import { useState } from 'react'
import { clearFashStorage, getStorage, removeStorage, storageKeys } from '../utils/localStorage'

export default function Admin() {
  const [tick, setTick] = useState(0)
  const keys = Object.values(storageKeys)
  const reset = (k) => { if (confirm(`Reset ${k}?`)) { removeStorage(k); setTick(tick + 1); alert('Data berhasil dihapus') } }
  return <div className='stack'><h2>Admin LocalStorage</h2><section className='grid cols-4'>{keys.map((k) => <article className='card' key={k}><p>{k}</p><h3>{Array.isArray(getStorage(k, [])) ? getStorage(k, []).length : getStorage(k, null) ? 1 : 0}</h3><button className='btn ghost small' onClick={() => reset(k)}>Reset</button></article>)}</section>{keys.map((k) => <details className='card' key={k + 'd'}><summary>{k}</summary><pre>{JSON.stringify(getStorage(k, null), null, 2)}</pre></details>)}<button className='btn' onClick={() => { if (confirm('Reset semua data?')) { clearFashStorage(); setTick(tick + 1); alert('Reset semua data berhasil') } }}>Reset Semua</button></div>
}
