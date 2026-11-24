import { useState } from "react";
import { products, formatRupiah } from "../data/products";

export default function HomePage({ onSelect, onBack }) {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("Semua Region");
    const [type, setType] = useState("Semua Jenis");
    const [showRegion, setShowRegion] = useState(false);
    const [showType, setShowType] = useState(false);
    const [tempRegion, setTempRegion] = useState(region);
    const [tempType, setTempType] = useState(type);

    const filtered = products.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
        const matchRegion = region === "Semua Region" || p.region === region;
        const matchType = type === "Semua Jenis" || p.type === type;
        return matchSearch && matchRegion && matchType;
    });

    return (
        <div className="bg-[#2933A5] min-h-screen flex flex-col">
            <div className="px-5 pt-6 pb-4 flex items-center gap-3 text-white shrink-0">
                <button onClick={onBack} className="w-8 h-8 flex items-center justify-center -ml-1 shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M12.5 3.5L6 10L12.5 16.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <h1 className="font-bold text-[22px]">Travel eSIM</h1>
            </div>

            <div className="px-5 shrink-0">
                <div className="bg-[#1E2A8A] rounded-xl flex items-center px-4 py-3.5">
                    <input
                        value={search} onChange={e => setSearch(e.target.value)}
                        placeholder="Cari Produk yang Anda Mau"
                        className="bg-transparent flex-1 text-white placeholder:text-white/70 outline-none text-[14px] min-w-0"
                    />
                    <span className="text-white text-xl ml-2">⌕</span>
                </div>
            </div>

            <div className="px-5 flex gap-2.5 mt-4 mb-4 shrink-0">
                <button
                    onClick={() => { setTempRegion(region); setShowRegion(true); }}
                    className="inline-flex items-center justify-center gap-2 border border-white/80 text-white rounded-full pl-5 pr-4 py-2 text-[14px] leading-none whitespace-nowrap"
                >
                    <span className="leading-none">{region}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-[1px]">
                        <path d="M2 4L6 8L10 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button
                    onClick={() => { setTempType(type); setShowType(true); }}
                    className="inline-flex items-center justify-center gap-2 border border-white/80 text-white rounded-full pl-5 pr-4 py-2 text-[14px] leading-none whitespace-nowrap"
                >
                    <span className="leading-none">{type}</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-[1px]">
                        <path d="M2 4L6 8L10 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className="bg-white rounded-t-[28px] px-4 pt-5 pb-10 flex-1">
                <div className="grid grid-cols-2 gap-x-4 gap-y-5">
                    {filtered.map(p => (
                        <div
                            key={p.id}
                            onClick={() => onSelect(p)}
                            className="cursor-pointer active:scale-[0.98] transition bg-white rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 p-3 pb-4"
                        >
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full aspect-[3/4] object-cover rounded-[16px]"
                            />
                            <h3 className="font-bold text-[15px] mt-3 leading-tight px-1">{p.name}</h3>
                            <p className="text-[12px] text-gray-400 mt-0.5 px-1">{p.regionLabel}</p>
                            <p className="text-[12px] font-medium mt-2 flex items-center gap-1.5 px-1 text-black">
                                {p.type === "Instant" ? (
                                    <>
                                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" stroke="#2933A5" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                                        </svg>
                                        Instant
                                    </>
                                ) : (
                                    <>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <rect x="2" y="5" width="20" height="13" rx="2.5" stroke="#2933A5" strokeWidth="1.8" />
                                            <circle cx="8.5" cy="11.5" r="1.6" fill="#2933A5" />
                                            <path d="M17 20V14.5" stroke="#2933A5" strokeWidth="1.8" strokeLinecap="round" />
                                            <path d="M14.5 17L17 14.5L19.5 17" stroke="#2933A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        Topupable
                                    </>
                                )}
                            </p>
                            <p className="font-bold text-[#2933A5] text-[15px] mt-1.5 px-1">{formatRupiah(p.price)}</p>
                        </div>
                    ))}
                </div>
                {filtered.length === 0 && <p className="text-center text-gray-400 py-10">Produk tidak ditemukan</p>}
            </div>

            {showRegion && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
                    onClick={() => setShowRegion(false)}
                >
                    <div
                        className="bg-white w-full max-w-[430px] rounded-t-3xl p-5 pb-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4 cursor-pointer" onClick={() => setShowRegion(false)} />

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-[18px] leading-none">Pilih Region</h3>
                            <button className="text-[#2933A5] text-[14px] font-medium leading-none" onClick={() => setTempRegion("Semua Region")}>Reset</button>
                        </div>

                        {["Semua Region", "Asia", "Amerika", "Oseania", "Eropa", "Afrika"].map(r => (
                            <label key={r} className="flex justify-between items-center py-3.5 cursor-pointer">
                                <span>{r}</span>
                                <input type="radio" checked={tempRegion === r} onChange={() => setTempRegion(r)} className="accent-[#2933A5] w-5 h-5" />
                            </label>
                        ))}
                        <button onClick={() => { setRegion(tempRegion); setShowRegion(false); }} className="w-full bg-[#2933A5] text-white py-3 rounded-full font-bold mt-4">Terapkan</button>
                    </div>
                </div>
            )}

            {showType && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center"
                    onClick={() => setShowType(false)}
                >
                    <div
                        className="bg-white w-full max-w-[430px] rounded-t-3xl p-5 pb-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4 cursor-pointer" onClick={() => setShowType(false)} />

                        <div className="flex justify-between items-center mb-1">
                            <h3 className="font-bold text-[18px] leading-none">Pilih Jenis Produk</h3>
                            <button className="text-[#2933A5] text-[14px] font-medium leading-none" onClick={() => setTempType("Semua Jenis")}>Reset</button>
                        </div>

                        {["Semua Jenis", "Instant", "Topupable"].map(t => (
                            <label key={t} className="flex justify-between items-center py-3.5 cursor-pointer">
                                <span>{t === "Semua Jenis" ? t : t + "s"}</span>
                                <input type="radio" checked={tempType === t} onChange={() => setTempType(t)} className="accent-[#2933A5] w-5 h-5" />
                            </label>
                        ))}
                        <button onClick={() => { setType(tempType); setShowType(false); }} className="w-full bg-[#2933A5] text-white py-3 rounded-full font-bold mt-4">Terapkan</button>
                    </div>
                </div>
            )}
        </div>
    );
}