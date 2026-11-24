export default function DashboardPage({ onOpenEsim }) {
    const menus = [
        { name: "eSIM", desc: "Internet Luar Negeri", icon: "🌐", active: true },
        { name: "Pulsa", desc: "Isi Pulsa All Operator", icon: "📱", active: false },
        { name: "Paket Data", desc: "Kuota Internet Lokal", icon: "📶", active: false },
        { name: "Token Listrik", desc: "PLN Prabayar", icon: "⚡", active: false },
        { name: "Voucher Game", desc: "Top Up Game", icon: "🎮", active: false },
        { name: "E-Wallet", desc: "Top Up Saldo", icon: "💳", active: false },
    ];

    return (
        <div className="bg-[#F7F8FF] min-h-screen flex flex-col font-sans antialiased text-black">
            <div className="bg-[#2933A5] px-5 pt-6 pb-8 rounded-b-[28px] text-white">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-white/70 text-[13px] leading-none">Selamat Datang,</p>
                        <h1 className="font-bold text-[22px] leading-tight mt-1">Mau beli apa hari ini?</h1>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-md">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" fill="#2933A5" />
                            <path d="M4 21C4 16.5 7.5 14 12 14C16.5 14 20 16.5 20 21C20 21.5 19.5 22 19 22H5C4.5 22 4 21.5 4 21Z" fill="#2933A5" />
                        </svg>
                    </div>
                </div>

                <div className="bg-[#1E2A8A] rounded-xl flex items-center px-4 py-3.5 mt-5">
                    <input
                        placeholder="Cari eSIM, pulsa, dll..."
                        className="bg-transparent flex-1 text-white placeholder:text-white/70 outline-none text-[14px] min-w-0"
                    />
                    <span className="text-white text-xl ml-2">⌕</span>
                </div>
            </div>

            <div className="px-5 -mt-4">
                <div className="bg-white rounded-[20px] p-4 flex justify-between items-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100">
                    <div>
                        <p className="font-bold text-[15px] leading-tight text-[#2933A5]">eSIM Australia Mulai Rp.75rb</p>
                        <p className="text-gray-400 text-[12px] mt-1">Aktif instan, tanpa kartu fisik</p>
                        <button onClick={onOpenEsim} className="bg-[#2933A5] text-white text-[12px] font-bold px-4 py-2 rounded-full mt-3">
                            Beli Sekarang →
                        </button>
                    </div>
                    <span className="text-[42px] shrink-0">🌏</span>
                </div>
            </div>

            <div className="px-5 mt-5">
                <h2 className="font-bold text-[15px] mb-3 leading-none">Semua Layanan</h2>
                <div className="grid grid-cols-3 gap-3">
                    {menus.map((m) => {
                        if (m.active) {
                            return (
                                <button
                                    key={m.name}
                                    onClick={onOpenEsim}
                                    className="bg-white rounded-[20px] p-3 pb-4 text-left shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-2 border-[#2933A5]"
                                >
                                    <span className="text-[28px] leading-none">{m.icon}</span>
                                    <p className="font-bold text-[15px] leading-tight mt-3">{m.name}</p>
                                    <p className="text-gray-400 text-[12px] leading-tight mt-0.5">{m.desc}</p>
                                    <span className="inline-block bg-[#D1FAE5] text-[#15803D] text-[10px] font-bold px-2 py-0.5 rounded-full mt-2">Tersedia</span>
                                </button>
                            );
                        }
                        return (
                            <div
                                key={m.name}
                                className="bg-white rounded-[20px] p-3 pb-4 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100"
                            >
                                <div className="blur-[1px] opacity-60 select-none pointer-events-none">
                                    <span className="text-[28px] leading-none">{m.icon}</span>
                                    <p className="font-bold text-[15px] leading-tight mt-3">{m.name}</p>
                                    <p className="text-gray-400 text-[12px] leading-tight mt-0.5">{m.desc}</p>
                                    <span className="inline-block bg-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full mt-2">Segera</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <p className="text-center text-gray-400 text-[12px] py-6"></p>
            </div>
        </div>
    );
}