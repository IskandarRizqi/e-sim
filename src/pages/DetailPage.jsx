import { formatRupiah } from "../data/products";

export default function DetailPage({ product, dataSize, setDataSize, days, setDays, onBack, onOrder }) {
    if (!product) return null;

    const dataOptions = ["3GB", "5GB", "10GB", "15GB"];
    const dayOptions = ["07", "14", "24", "30"];

    return (
        <div className="bg-[#2933A5] min-h-screen flex flex-col">
            <div className="relative shrink-0">
                <img src={product.image} alt={product.name} className="w-full h-[380px] object-cover" />
                <button onClick={onBack} className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/30 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M12.5 3.5L6 10L12.5 16.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                    <div className="w-6 h-1.5 bg-white rounded-full" />
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                </div>
            </div>

            <div className="bg-white rounded-t-[28px] px-6 pt-5 pb-6 flex-1 -mt-4 relative z-10">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="font-bold text-[20px] leading-tight">{product.name}</h2>
                        <p className="text-[13px] text-gray-400 mt-1">{product.regionLabel}</p>
                        <p className="text-[13px] font-medium mt-2 flex items-center gap-1.5 text-black">
                            {product.type === "Instant" ? (
                                <>
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" stroke="#2933A5" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
                                    </svg>
                                    Instant
                                </>
                            ) : (
                                <>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2" y="5" width="20" height="13" rx="2.5" stroke="#2933A5" strokeWidth="1.8" />
                                        <circle cx="8.5" cy="11.5" r="1.6" fill="#2933A5" />
                                        <path d="M17 20V14.5" stroke="#2933A5" strokeWidth="1.8" strokeLinecap="round" />
                                        <path d="M14.5 17L17 14.5L19.5 17" stroke="#2933A5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Topupable
                                </>
                            )}
                        </p>
                    </div>
                    <p className="font-bold text-[#2933A5] text-[18px] whitespace-nowrap">{formatRupiah(product.price)}</p>
                </div>

                <div className="bg-[#EFF1FF] rounded-[14px] px-4 py-3 mt-4">
                    <p className="text-[13px] font-semibold text-black">Cakupan negara</p>
                    <p className="text-[13px] text-black mt-0.5">{product.coverage}</p>
                </div>

                <h3 className="font-bold text-[15px] mt-5">Ukuran Data</h3>
                <div className="flex gap-2 mt-3">
                    {dataOptions.map(d => (
                        <button key={d} onClick={() => setDataSize(d)} className={`px-4 py-2 rounded-[10px] text-[14px] font-bold transition ${dataSize === d ? "bg-[#2933A5] text-white" : "bg-[#EFF1FF] text-[#2933A5]"}`}>{d}</button>
                    ))}
                </div>

                <h3 className="font-bold text-[15px] mt-5">Pilih Jumlah Hari</h3>
                <div className="flex gap-2 mt-3">
                    {dayOptions.map(d => (
                        <button key={d} onClick={() => setDays(d)} className={`px-4 py-2 rounded-[10px] text-[14px] font-bold transition ${days === d ? "bg-[#2933A5] text-white" : "bg-[#EFF1FF] text-[#2933A5]"}`}>{d}</button>
                    ))}
                </div>

                <h3 className="font-bold text-[15px] mt-6">Deskripsi</h3>
                <ul className="list-disc pl-5 mt-2 space-y-1.5">
                    {product.desc?.map((d, i) => (
                        <li key={i} className="text-[13px] text-gray-500 leading-relaxed">{d}</li>
                    ))}
                </ul>

                <button onClick={onOrder} className="w-full bg-[#2933A5] text-white py-3.5 rounded-full font-bold mt-8">Pesan Sekarang</button>
            </div>
        </div>
    );
}