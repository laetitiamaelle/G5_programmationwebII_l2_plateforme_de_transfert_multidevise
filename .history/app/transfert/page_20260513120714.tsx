import Sidebar from '@/components/Sidebar'
import Transfert from '@/components/Transfert'

export default function TransfertPage() {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: '#0A0A0B'}}>
            <Sidebar />
            <Transfert />
        </div>
    )
}