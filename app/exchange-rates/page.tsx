import Sidebar from "@/components/Sidebar";
import Exchangerates from '@/components/Exchange-rates'

export default function ExchangeRatesPage() {
    return (
        <div style={{ display: 'flex', minHeight: '100hv', background: '#0A0A0B'}}>
            <Sidebar />
            <Exchangerates />
        </div>
    )
}