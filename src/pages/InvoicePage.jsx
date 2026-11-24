import { formatRupiah, formatRupiahDecimal } from "../data/products";
const now = new Date();
const tanggal = now.toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
const waktu = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " WIB";


export default function InvoicePage({ product, dataSize, customer, payment, price, fee, total, onFinish }) {
    const maskedWA = customer.wa ? "**********" + customer.wa.slice(-4) : "**********9300";
    const maskedEmail = customer.email ? "*********" + customer.email.slice(customer.email.indexOf("@")) : "*********lee@gmail.com";
    const displayName = customer.nama || "George lee";

    return (
        <div className="bg-[#2933A5] min-h-screen">
            <div className="px-5 pt-5 pb-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-3">
                    {/* <button className="w-8 h-8 flex items-center justify-center -ml-1 shrink-0">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M12.5 3.5L6 10L12.5 16.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button> */}
                    <h1 className="font-bold text-[20px]">Invoice</h1>
                </div>
                <div className="flex items-center gap-1">
                    <span className="w-6 h-6 bg-white text-[#2933A5] rounded-full flex items-center justify-center text-xs">✓</span>
                    <span className="w-4 h-[2px] bg-white" />
                    <span className="w-6 h-6 bg-white text-[#2933A5] rounded-full flex items-center justify-center text-xs">✓</span>
                </div>
            </div>

            <div className="bg-white rounded-t-[28px] px-5 pt-6 pb-8">
                <div className="text-center">
                    <div className="w-20 h-20 bg-[#22C55E] mx-auto flex items-center justify-center text-white text-4xl font-bold" style={{ clipPath: "polygon(50% 0%, 61% 10%, 75% 5%, 82% 18%, 96% 18%, 96% 34%, 100% 50%, 96% 66%, 96% 82%, 82% 82%, 75% 95%, 61% 90%, 50% 100%, 39% 90%, 25% 95%, 18% 82%, 4% 82%, 4% 66%, 0% 50%, 4% 34%, 4% 18%, 18% 18%, 25% 5%, 39% 10%)" }}>✓</div>
                    <p className="font-bold text-[#2933A5] text-[28px] mt-3">{formatRupiah(total)}</p>
                    <p className="text-gray-500 text-sm flex items-center justify-center gap-1">No. INV-00019928874 <span>📋</span></p>
                </div>

                <div className="mt-6 space-y-2.5 text-[14px] border-t border-dashed pt-4">
                    <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="bg-[#D1FAE5] text-[#15803D] px-3 py-1 rounded-md text-xs font-bold">Berhasil</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">No. Ref</span><span>20393848042135</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Tgl Transaksi</span><span>{tanggal}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Waktu Transaksi</span><span>{waktu}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Metode pembayaran</span><span>{payment}</span></div>
                </div>

                <h3 className="font-bold mt-5">Detail Transaksi</h3>
                <div className="space-y-2 text-[14px] mt-2">
                    <div className="flex justify-between"><span className="text-gray-500">Produk</span><span>{product?.name}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Data Tersedia</span><span>{dataSize}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Jumlah</span><span>1</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Nama Pelanggan</span><span>{displayName}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Nomor Whatsapp</span><span>{maskedWA}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Email</span><span>{maskedEmail}</span></div>
                    <p className="text-gray-500 text-[13px] pt-1">Kami akan segera mengirimkan kode QR eSIM ke email Anda. Cek inbox (atau folder spam) ya!</p>
                </div>

                <h3 className="font-bold mt-5">Detail Pembayaran</h3>
                <div className="space-y-2 text-[14px] mt-2">
                    <div className="flex justify-between"><span className="text-gray-500">Harga</span><span>{formatRupiahDecimal(price)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Biaya Transaksi</span><span>{formatRupiahDecimal(2500)}</span></div>
                </div>

                <button onClick={onFinish} className="w-full bg-[#2933A5] text-white py-3.5 rounded-full font-bold mt-8">Selesai</button>
            </div>
        </div>
    );
}