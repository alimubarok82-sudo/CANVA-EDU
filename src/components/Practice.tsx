import { useState } from 'react';
import { PlayCircle, Download, Share2, Search, Pointer, ChevronLeft, ChevronRight, Image as ImageIcon, Type, Palette, MousePointer2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Practice() {
  const [page, setPage] = useState(1);
  const totalPages = 4;

  const nextPage = () => setPage((p) => Math.min(totalPages, p + 1));
  const prevPage = () => setPage((p) => Math.max(1, p - 1));

  return (
    <div className="max-w-4xl mx-auto flex flex-col min-h-[70vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-10 flex-1"
        >
          {page === 1 && (
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-6 md:p-10 border-b-8 border-pink-100 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-pink-100 rounded-3xl shrink-0 flex items-center justify-center text-5xl md:text-6xl transform -rotate-6">🛠️</div>
                <div className="text-center md:text-left">
                  <span className="bg-pink-100 text-pink-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Langkah 1</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                    Mencari Template
                  </h2>
                  <p className="text-slate-600 font-medium text-lg">
                    Mari mulai dengan mencari kerangka desain yang paling sesuai dengan tema kegiatan sekolahmu.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 md:p-8 rounded-3xl border-2 border-indigo-100 shadow-sm w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-inner">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Mulai dari Pencarian</h3>
                </div>
                <p className="text-slate-600 leading-relaxed font-medium mb-8 text-lg">
                  Buka halaman beranda Canva, dan pada bilah pencarian di bagian atas, ketik kata kunci yang spesifik seperti <strong className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">"Poster Kegiatan Sekolah"</strong> atau <strong className="text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">"School Event Poster"</strong>. Tekan Enter.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm">
                    <div className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs">1</span> Filter Ukuran
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Di sebelah kiri halaman hasil pencarian, kamu bisa memfilter format (misalnya pilih orientasi vertikal/portrait yang umum untuk poster).</p>
                  </div>
                  <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm">
                    <div className="font-bold text-indigo-700 mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs">2</span> Pilih Struktur
                    </div>
                    <p className="text-sm text-slate-600 font-medium">Fokus pada tata letak (layout) kotak gambar dan teksnya, abaikan dulu warnanya karena nanti akan kita ubah seluruhnya.</p>
                  </div>
                </div>
                <div className="mt-8 bg-yellow-50 p-5 rounded-2xl text-sm text-slate-700 border-2 border-yellow-200 flex gap-4 items-start shadow-sm">
                  <span className="text-2xl">💡</span>
                  <span className="font-medium mt-0.5"><strong className="text-slate-900 text-base block mb-1">Tips Pro:</strong> Template dengan label mahkota adalah Canva Pro (berbayar). Pastikan kamu sudah menggunakan akun Belajar.id agar bisa mengakses semuanya secara gratis!</span>
                </div>
              </div>
            </div>
          )}

          {page === 2 && (
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-6 md:p-10 border-b-8 border-cyan-100 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-cyan-100 rounded-3xl shrink-0 flex items-center justify-center text-5xl md:text-6xl transform rotate-3">🔤</div>
                <div className="text-center md:text-left">
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Langkah 2</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                    Teks & Warna
                  </h2>
                  <p className="text-slate-600 font-medium text-lg">
                    Sekarang saatnya memasukkan informasi acaramu dan menyesuaikan warna agar pas dengan tema.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-cyan-50 p-6 md:p-8 rounded-3xl border-2 border-cyan-100 shadow-sm w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-cyan-500 text-white rounded-xl flex items-center justify-center shadow-inner shrink-0">
                      <Type className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Ubah Teks</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-cyan-200 text-cyan-800 font-bold flex items-center justify-center shrink-0">1</span>
                      <p className="text-slate-600 font-medium pt-1"><strong>Klik Dua Kali</strong> pada kotak teks di template untuk memblok tulisan lama.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-cyan-200 text-cyan-800 font-bold flex items-center justify-center shrink-0">2</span>
                      <p className="text-slate-600 font-medium pt-1">Ketikkan informasi acaramu (Nama Acara, Tanggal, Tempat, Waktu).</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-cyan-200 text-cyan-800 font-bold flex items-center justify-center shrink-0">3</span>
                      <p className="text-slate-600 font-medium pt-1">Gunakan toolbar di bagian atas untuk mengganti <strong>jenis font, ukuran, atau perataan teks</strong> (rata kiri/tengah).</p>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 md:p-8 rounded-3xl border-2 border-emerald-100 shadow-sm w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center shadow-inner shrink-0">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Ubah Warna</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 font-bold flex items-center justify-center shrink-0">1</span>
                      <p className="text-slate-600 font-medium pt-1"><strong>Klik area latar belakang</strong> kanvas desainmu.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 font-bold flex items-center justify-center shrink-0">2</span>
                      <p className="text-slate-600 font-medium pt-1">Perhatikan ikon <strong>kotak warna</strong> yang muncul di pojok kiri atas, klik kotak tersebut.</p>
                    </li>
                    <li className="flex gap-4">
                      <span className="w-8 h-8 rounded-full bg-emerald-200 text-emerald-800 font-bold flex items-center justify-center shrink-0">3</span>
                      <p className="text-slate-600 font-medium pt-1">Pilih warna dari panel sebelah kiri. Canva akan secara otomatis menawarkan <strong>"Warna Dokumen"</strong> agar warnanya senada.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {page === 3 && (
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-6 md:p-10 border-b-8 border-yellow-100 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-yellow-100 rounded-3xl shrink-0 flex items-center justify-center text-5xl md:text-6xl transform rotate-6">🖼️</div>
                <div className="text-center md:text-left">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Langkah 3</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                    Gambar & Ilustrasi
                  </h2>
                  <p className="text-slate-600 font-medium text-lg">
                    Buat poster lebih hidup dengan menambahkan foto dokumentasi asli atau ilustrasi grafis yang menarik.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border-4 border-indigo-900 shadow-xl shadow-indigo-900/20 w-full text-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-inner shrink-0 border border-indigo-400">
                      <ImageIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-white">Mengunggah Foto</h3>
                  </div>
                  <p className="text-slate-300 font-medium mb-6">Punya foto dokumentasi acara tahun lalu? Gunakan foto asli agar poster lebih personal.</p>
                  <ol className="space-y-3 text-slate-300 font-medium ml-4 list-decimal list-inside">
                    <li>Klik menu <strong>Unggahan (Uploads)</strong> di panel paling kiri.</li>
                    <li>Klik tombol ungu <strong>"Unggah file"</strong>.</li>
                    <li>Pilih foto dari komputermu.</li>
                    <li>Setelah terunggah, klik foto tersebut untuk memasukkannya ke kanvas, lalu sesuaikan ukurannya.</li>
                  </ol>
                  <div className="mt-6 bg-indigo-900/50 p-4 rounded-xl border border-indigo-500/30 text-indigo-200 text-sm flex gap-3">
                    <span className="text-xl">✨</span>
                    <span>Dengan akun Canva Edu, kamu bisa menggunakan fitur <strong>Penghapus Latar Belakang (Background Remover)</strong> di menu Edit Foto (Edit Image) untuk menghapus background foto dengan sekali klik!</span>
                  </div>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-3xl border-2 border-slate-200 shadow-sm w-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center shadow-inner shrink-0 border border-slate-200">
                      <MousePointer2 className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Menambah Ilustrasi</h3>
                  </div>
                  <p className="text-slate-600 font-medium mb-6">Jika tidak ada foto asli, gunakan ilustrasi vektor dari pustaka Canva.</p>
                  <ol className="space-y-4 text-slate-600 font-medium ml-4 list-decimal list-inside">
                    <li>Klik menu <strong>Elemen (Elements)</strong> di panel paling kiri.</li>
                    <li>Ketikkan kata kunci di bilah pencarian (Contoh: "Buku", "Sekolah", "Olahraga").</li>
                    <li>Pilih tab <strong>Grafis (Graphics)</strong> untuk melihat hanya ilustrasi/vektor tanpa foto.</li>
                    <li>Klik ilustrasi yang disukai. Kamu juga bisa <strong>mengubah warna sebagian besar ilustrasi vektor</strong> melalui kotak warna di pojok kiri atas!</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {page === 4 && (
            <div className="space-y-10">
              <div className="bg-white rounded-3xl p-6 md:p-10 border-b-8 border-indigo-100 shadow-sm flex flex-col md:flex-row gap-6 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 bg-indigo-100 rounded-3xl shrink-0 flex items-center justify-center text-5xl md:text-6xl transform -rotate-3">🚀</div>
                <div className="text-center md:text-left">
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">Langkah Akhir</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 tracking-tight">
                    Ekspor & Bagikan
                  </h2>
                  <p className="text-slate-600 font-medium text-lg">
                    Desainmu sudah jadi! Kini saatnya mengunduhnya atau membagikan linknya untuk disetorkan.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 md:p-8 rounded-3xl border-2 border-indigo-100 shadow-sm w-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-indigo-500 text-white rounded-xl flex items-center justify-center shadow-inner">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Tombol "Bagikan"</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                    <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 mb-6 shrink-0">
                      <Download className="w-8 h-8" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xl mb-3">Unduh File Gambar</strong>
                      <p className="text-slate-600 font-medium mb-4">Klik "Bagikan" lalu klik "Unduh" (Download). Pilih jenis file:</p>
                      <ul className="text-sm font-medium text-slate-500 space-y-2">
                        <li>• <strong>PNG:</strong> Kualitas gambar terbaik</li>
                        <li>• <strong>JPG:</strong> Ukuran file kecil</li>
                        <li>• <strong>PDF Cetak:</strong> Resolusi tinggi untuk di-print</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col p-6 rounded-2xl bg-white border-2 border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                    <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shrink-0">
                      <PlayCircle className="w-8 h-8" />
                    </div>
                    <div>
                      <strong className="block text-slate-900 text-xl mb-3">Bagikan Tautan Publik</strong>
                      <p className="text-slate-600 font-medium mb-4">Untuk menyetorkan tugas secara online tanpa mengunduh file:</p>
                      <ol className="text-sm font-medium text-slate-500 space-y-2 list-decimal list-inside ml-2">
                        <li>Klik "Bagikan" (Share)</li>
                        <li>Ubah "Hanya Anda yang dapat mengakses" menjadi <strong>"Tautan kolaborasi publik"</strong> atau "Yang punya tautan"</li>
                        <li>Pilih akses <strong>"Bisa melihat"</strong> (Can view)</li>
                        <li>Klik <strong>Salin Tautan</strong> (Copy link)</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination Controls */}
      <div className="mt-12 pt-6 border-t-2 border-slate-200 flex items-center justify-between pb-8">
        <button 
          onClick={prevPage}
          disabled={page === 1}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
            page === 1 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200 hover:shadow-md'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Sebelumnya</span>
        </button>

        <div className="hidden sm:flex gap-3">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-12 h-12 rounded-full font-black text-sm transition-all flex items-center justify-center ${
                page === i + 1 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 transform -translate-y-1' 
                  : 'bg-slate-100 text-slate-600 hover:bg-indigo-50 hover:text-indigo-700'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        <div className="sm:hidden font-black text-slate-500 uppercase tracking-widest text-sm">
          Hal {page} / {totalPages}
        </div>

        <button 
          onClick={nextPage}
          disabled={page === totalPages}
          className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
            page === totalPages 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-1'
          }`}
        >
          <span className="hidden sm:inline">Selanjutnya</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

