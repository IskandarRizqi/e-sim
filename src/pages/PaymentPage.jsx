import { formatRupiah, formatRupiahDecimal } from "../data/products";

const methods = [
    { id: "Saldo", label: "Saldo", right: "Rp200.000" },
    { id: "VA BCA", label: "VA BCA", right: "" },
    { id: "VA Mandiri", label: "VA Mandiri", right: "" },
    { id: "VA BRI", label: "VA BRI", right: "" },
];
const today = new Date();
const tanggalPesanan = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;


export default function PaymentPage({ product, dataSize, payment, setPayment, price, fee, total, onBack, onNext }) {
    return (
        <div className="bg-[#2933A5] min-h-screen">
            <div className="px-5 pt-5 pb-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    <button onClick={onBack} className="w-8 h-8 flex items-center justify-center -ml-1 shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 3.5L6 10L12.5 16.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h1 className="font-bold text-[20px]">Metode Pembayaran</h1>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-6 h-6 bg-white text-[#2933A5] rounded-full flex items-center justify-center text-xs">✓</span>
                    <span className="w-4 h-[2px] bg-white" />
                    <span className="w-6 h-6 bg-white text-[#2933A5] rounded-full flex items-center justify-center text-xs font-bold">2</span>
                </div>
            </div>

            <div className="bg-white rounded-t-[28px] px-5 pt-5 pb-8 min-h-[600px]">
                <h3 className="font-bold text-lg">Ringkasan Paket</h3>
                <div className="space-y-2 mt-3 text-[15px] pb-4 border-b border-dashed">
                    <div className="flex justify-between"><span className="text-gray-500">Paket Terpilih</span><span>{product?.name}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Data Tersedia</span><span>{dataSize}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Tanggal Pesanan</span><span>{tanggalPesanan}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Jumlah</span><span>1</span></div>
                </div>

                <h3 className="font-bold text-lg mt-4">Pilih Metode Pembayaran</h3>
                <div className="space-y-2 mt-3">
                    {methods.map(m => (
                        <button key={m.id} onClick={() => setPayment(m.id)} className="w-full border rounded-xl px-4 py-3.5 flex items-center justify-between">
                            <span className="font-bold flex items-center gap-2">
                                {m.id === "Saldo" ? "💳" : m.id === "VA BCA" ? "🏦" : m.id === "VA Mandiri" ? "🟡" : "🔵"} {m.label}
                            </span>
                            <span className="flex items-center gap-2">
                                {m.right && <span className="text-gray-500 text-sm">{m.right}</span>}
                                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${payment === m.id ? "border-[#2933A5]" : "border-gray-300"}`}>
                                    {payment === m.id && <span className="w-2.5 h-2.5 bg-[#2933A5] rounded-full" />}
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                <div className="mt-8 space-y-2 text-[15px]">
                    <div className="flex justify-between"><span className="text-gray-500">Harga</span><span className="font-bold">{formatRupiahDecimal(price)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Biaya Layanan</span><span className="font-bold">{formatRupiah(fee)}</span></div>
                    <div className="flex justify-between items-center pt-2"><span className="font-bold text-lg">Total</span><span className="font-bold text-[#2933A5] text-[20px]">{formatRupiah(total)}</span></div>
                </div>

                <button onClick={onNext} className="w-full bg-[#2933A5] text-white py-3.5 rounded-full font-bold mt-6">Lanjutkan</button>
            </div>
        </div>
    );
}