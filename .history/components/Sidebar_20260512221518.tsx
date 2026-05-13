'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Send, ArrowLeftRight, Users, Shield, Settings, Logout} from 'lucide-react'
import './Sidebar.css'

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className='sidebar'>
            <div className='logo'>
                <img src="/public/logo.jpeg" alt="Cashflow" className='logo-img'/>
            </div>

            <nav className='nav'>
                <p className='nav-title'>MAIN NAVIGATION</p>
                <Link href="#" className={`nav-item #{pathname === '/home' ? 'active' : ''}`}>
                    <Home size={18} />Home
                </Link>
            </nav>
        </aside>
    )
}