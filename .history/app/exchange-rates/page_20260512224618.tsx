import Sidebar from "@/components/Sidebar";
import HistoriqueTaux from '@/components/HistoriqueTaux'

export default function ExchangeRatesPage() {
    return (
        <div style={{ display: 'flex', minHeight: '100hv', background: '#0A0A0B'}}>
            <Sidebar />
            <HistoriqueTaux />
        </div>
    )
}