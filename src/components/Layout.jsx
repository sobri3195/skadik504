import Navbar from './Navbar'
export default function Layout({children}){return <div><Navbar/><main className='container'>{children}</main></div>}
