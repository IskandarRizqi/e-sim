const today = new Date();
const tanggalPesanan = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;

export default function CustomerPage({ product, dataSize, customer, setCustomer, onBack, onNext }) {
    return (
        <div className="bg-[#2933A5] min-h-screen">
            <div className="px-5 pt-5 pb-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    <button onClick={onBack} className="w-8 h-8 flex items-center justify-center -ml-1 shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 3.5L6 10L12.5 16.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <h1 className="font-bold text-[20px]">Detail Pemesan</h1>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-6 h-6 bg-white text-[#2933A5] rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span className="w-4 h-[2px] bg-white/50" />
                    <span className="w-6 h-6 bg-white/30 text-white rounded-full flex items-center justify-center text-xs">2</span>
                </div>
            </div>

            <div className="bg-white rounded-t-[28px] px-5 pt-5 pb-8 min-h-[600px]">
                <h3 className="font-bold text-lg">Ringkasan Paket</h3>
                <div className="space-y-2 mt-3 text-[15px]">
                    <div className="flex justify-between"><span className="text-gray-500">Paket Terpilih</span><span>{product?.name}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Data Tersedia</span><span>{dataSize}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Tanggal Pesanan</span><span>{tanggalPesanan}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Jumlah</span><span>1</span></div>
                </div>

                <h3 className="font-bold text-lg mt-6">Data Pelanggan</h3>
                <div className="mt-3 space-y-4">
                    <div>
                        <label className="block mb-1">Nama</label>
                        <input value={customer.nama} onChange={e => setCustomer({ ...customer, nama: e.target.value })} placeholder="Masukan Nama Pelanggan" className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#2933A5]" />
                    </div>
                    <div>
                        <label className="block mb-1">Alamat Email</label>
                        <input value={customer.email} onChange={e => setCustomer({ ...customer, email: e.target.value })} placeholder="Masukan Email Pelanggan" className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#2933A5]" />
                    </div>
                    <div>
                        <label className="block mb-1">Nomor Whatsapp</label>
                        <input value={customer.wa} onChange={e => setCustomer({ ...customer, wa: e.target.value })} placeholder="Masukan Nomor HP Pelanggan" className="w-full border rounded-xl px-4 py-3 outline-none focus:border-[#2933A5]" />
                        <p className="text-xs mt-1">Jika terjadi kendala, kami akan menghubungi ke nomor ini</p>
                    </div>
                </div>

                <button onClick={onNext} className="w-full bg-[#2933A5] text-white py-3.5 rounded-full font-bold mt-10">Lanjutkan</button>
            </div>
        </div>
    );
}