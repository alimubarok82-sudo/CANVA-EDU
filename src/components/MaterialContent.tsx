import { useState } from 'react';
import { Palette, Type, Layout, Image as ImageIcon, ChevronLeft, ChevronRight, Eye, Zap, Layers, MousePointer2, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MaterialContent() {
  const [page, setPage] = useState(1);
  const totalPages = 3;

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
              {/* Intro */}
              <section className="bg-white rounded-3xl p-6 md:p-10 border-b-8 border-indigo-100 shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shrink-0 flex items-center justify-center text-5xl md:text-6xl shadow-xl shadow-indigo-200 transform -rotate-6">✨</div>
                <div>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">BAB 1: Pengantar</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Apa itu Desain Grafis?</h2>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Desain grafis bukan sekadar membuat sesuatu terlihat "bagus". Ini adalah bentuk komunikasi visual yang menggunakan teks, gambar, dan warna untuk menyampaikan informasi atau pesan kepada audiens secara efektif, jelas, dan menarik.
                  </p>
                </div>
              </section>

              {/* Prinsip Dasar */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-pink-100 text-pink-700 rounded-xl">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">4 Prinsip Dasar Desain</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-pink-200 transition-colors">
                    <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-4">
                      <Eye className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-slate-900">Hirarki Visual</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Mengarahkan mata audiens ke informasi paling penting terlebih dahulu. Gunakan ukuran besar untuk judul utama, dan ukuran kecil untuk teks pendukung.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-slate-900">Kontras</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Perbedaan mencolok antar elemen (gelap vs terang, besar vs kecil). Kontras membuat desain tidak membosankan dan teks lebih mudah dibaca.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-cyan-200 transition-colors">
                    <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-4">
                      <Layout className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-slate-900">Keseimbangan (Balance)</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Mendistribusikan elemen secara merata agar desain tidak terasa berat sebelah. Bisa simetris (kiri-kanan sama) atau asimetris.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-100 shadow-sm hover:border-emerald-200 transition-colors">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-slate-900">Kesatuan (Unity)</h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">Mengelompokkan elemen yang saling berkaitan (proximity) dan menggunakan gaya visual yang konsisten agar desain terlihat kohesif.</p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {page === 2 && (
            <div className="space-y-10">
              <section className="bg-white rounded-3xl p-6 md:p-10 border-b-8 border-yellow-100 shadow-sm flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shrink-0 flex items-center justify-center text-5xl md:text-6xl shadow-xl shadow-yellow-200 transform rotate-3">🎨</div>
                <div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">BAB 2: Anatomi</span>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">Elemen Pembentuk Desain</h2>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Sebuah desain yang utuh dibangun dari komponen-komponen dasar. Memahami karakter masing-masing elemen adalah kunci menciptakan karya yang profesional.
                  </p>
                </div>
              </section>

              <section>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-yellow-50 p-6 md:p-8 rounded-3xl border-2 border-yellow-200 shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 bg-yellow-400 text-yellow-900 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-inner shrink-0">🎨</div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2 text-slate-900">Warna (Color)</h4>
                      <p className="text-slate-600 text-base leading-relaxed font-medium mb-4">
                        Warna menciptakan <strong>psikologi dan mood</strong>. Merah memberi kesan berani/semangat, biru terkesan profesional/tenang, kuning berarti ceria.
                      </p>
                      <div className="flex gap-4 flex-col sm:flex-row">
                        <div className="flex-1 bg-white p-4 rounded-2xl border border-yellow-200 shadow-sm">
                          <span className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-wide">Warna Komplementer</span>
                          <span className="text-sm font-medium text-slate-700">Berseberangan di roda warna (Misal: Biru & Oranye). Memberikan kontras tinggi dan dramatis.</span>
                        </div>
                        <div className="flex-1 bg-white p-4 rounded-2xl border border-yellow-200 shadow-sm">
                          <span className="block text-xs font-black text-slate-400 uppercase mb-2 tracking-wide">Warna Analog</span>
                          <span className="text-sm font-medium text-slate-700">Bersebelahan di roda warna (Misal: Biru & Hijau). Terlihat sangat harmonis dan menyatu.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-6 md:p-8 rounded-3xl border-2 border-cyan-200 shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 bg-cyan-400 text-cyan-900 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-inner shrink-0">🔤</div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2 text-slate-900">Tipografi (Typography)</h4>
                      <p className="text-slate-600 text-base leading-relaxed font-medium mb-4">
                        Seni memilih dan menata huruf. Aturan emas dalam desain: <strong>Maksimal gunakan 2-3 jenis font</strong> dalam satu desain untuk menghindari kesan berantakan.
                      </p>
                      <ul className="space-y-3 text-sm text-slate-700 font-medium">
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-cyan-100"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0"></span> <strong>Serif (Berekor):</strong> Terkesan klasik, formal, elegan (Contoh: Times New Roman, Merriweather).</li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-cyan-100"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0"></span> <strong>Sans-Serif (Tanpa Ekor):</strong> Terkesan modern, bersih, minimalis (Contoh: Arial, Inter, Roboto).</li>
                        <li className="flex items-center gap-3 bg-white p-3 rounded-xl border border-cyan-100"><span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shrink-0"></span> <strong>Script (Tegak Bersambung):</strong> Terkesan personal, kreatif, namun sulit dibaca jika digunakan sebagai teks paragraf.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-6 md:p-8 rounded-3xl border-2 border-emerald-200 shadow-sm flex flex-col md:flex-row gap-6">
                    <div className="w-16 h-16 bg-emerald-400 text-emerald-900 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-inner shrink-0">📐</div>
                    <div>
                      <h4 className="font-bold text-2xl mb-2 text-slate-900">Ruang Kosong (White Space)</h4>
                      <p className="text-slate-600 text-base leading-relaxed font-medium">
                        White space bukan berarti harus berwarna putih. Ini adalah area kosong antar elemen (teks, gambar, batas tepi) yang memberikan "ruang bernapas". Desain yang terlalu penuh akan membuat audiens pusing dan bingung harus fokus kemana.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {page === 3 && (
            <div className="space-y-10">
              <section className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl shadow-indigo-900/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/30 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/20 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-indigo-500/20 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
                      <ImageIcon className="w-8 h-8 text-indigo-300" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black tracking-tight uppercase">Mengenal Senjata Kita: Canva</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-800/50 border-2 border-indigo-500/30 rounded-3xl p-6 backdrop-blur-md hover:border-indigo-400/50 transition-colors">
                      <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white font-black text-xl mb-4"><Layout className="w-6 h-6" /></div>
                      <h4 className="text-xl font-bold text-indigo-300 mb-2">Template</h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-medium">
                        Pondasi cepat untuk mendesain. Pilih ribuan layout siap pakai (Instagram post, poster, PPT). Kamu tinggal ATM (Amati, Tiru, Modifikasi).
                      </p>
                    </div>
                    <div className="bg-slate-800/50 border-2 border-pink-500/30 rounded-3xl p-6 backdrop-blur-md hover:border-pink-400/50 transition-colors">
                      <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center text-white font-black text-xl mb-4"><MousePointer2 className="w-6 h-6" /></div>
                      <h4 className="text-xl font-bold text-pink-300 mb-2">Elemen (Elements)</h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-medium">
                        Gudang ajaib Canva. Cari bentuk dasar (shape), garis, stiker ilustrasi, hingga "Frames" (bingkai foto yang bisa memotong gambar jadi bulat/unik).
                      </p>
                    </div>
                    <div className="bg-slate-800/50 border-2 border-yellow-500/30 rounded-3xl p-6 backdrop-blur-md hover:border-yellow-400/50 transition-colors">
                      <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-slate-900 font-black text-xl mb-4"><ImageIcon className="w-6 h-6" /></div>
                      <h4 className="text-xl font-bold text-yellow-300 mb-2">Unggahan (Uploads)</h4>
                      <p className="text-slate-300 text-sm leading-relaxed font-medium">
                        Tempat memasukkan aset pribadi. Tarik foto dari komputer atau HP kamu ke sini untuk menggunakannya di atas kanvas desain.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Format Ekspor */}
              <section>
                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="p-2 bg-indigo-100 text-indigo-700 rounded-xl"><FileDown className="w-6 h-6" /></div>
                  Panduan Format Ekspor
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm hover:border-indigo-300 transition-colors">
                    <div className="text-2xl font-black text-indigo-700 mb-2">.PNG</div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">Kualitas terbaik untuk grafis digital dan web. Secara khusus mendukung penyimpanan latar belakang transparan.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm hover:border-pink-300 transition-colors">
                    <div className="text-2xl font-black text-pink-600 mb-2">.JPG</div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">Ukuran file lebih kecil hasil kompresi. Cocok untuk foto asli atau dibagikan secara instan via WhatsApp.</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl border-2 border-slate-200 shadow-sm hover:border-emerald-300 transition-colors">
                    <div className="text-2xl font-black text-emerald-600 mb-2">.PDF</div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">Kualitas paling tajam (format vektor). Wajib digunakan jika desainmu akan masuk proses pencetakan (banner/brosur).</p>
                  </div>
                </div>
              </section>
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
