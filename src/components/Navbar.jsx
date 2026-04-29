import { NavLink, useNavigate } from 'react-router-dom'
import { removeStorage, storageKeys } from '../utils/localStorage'
const links=[['/','Home'],['/login','Login'],['/dashboard','Dashboard'],['/fash','FASH'],['/pendidikan','Pendidikan'],['/forum','Forum'],['/tugas','Tugas'],['/kuis','Kuis'],['/admin','Admin']]
export default function Navbar(){const nav=useNavigate(); const logout=()=>{removeStorage(storageKeys.currentUser);nav('/login')}; return <header className='navbar'><strong>E-Learning FASH Skadik 504</strong><nav>{links.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}</nav><button className='btn small' onClick={logout}>Logout</button></header>}
