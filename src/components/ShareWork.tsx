import { useState, useEffect } from 'react';
import { StudentWork } from '../types';
import { ExternalLink, PlusCircle, Sparkles, Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ShareWork() {
  const [works, setWorks] = useState<StudentWork[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    className: '',
    workTitle: '',
    canvaLink: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('canva_student_works');
    if (saved) {
      try {
        setWorks(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved works");
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.canvaLink || !formData.workTitle) return;

    let link = formData.canvaLink;
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = 'https://' + link;
    }

    const newWork: StudentWork = {
      id: Date.now().toString(),
      studentName: formData.studentName,
      className: formData.className,
      workTitle: formData.workTitle,
      canvaLink: link,
      timestamp: Date.now()
    };

    const updatedWorks = [newWork, ...works];
    setWorks(updatedWorks);
    localStorage.setItem('canva_student_works', JSON.stringify(updatedWorks));
    
    setFormData({ studentName: '', className: '', workTitle: '', canvaLink: '' });
    setIsFormOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-indigo-700 rounded-[3rem] p-10 md:p-12 mb-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl shadow-indigo-200 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 text-center md:text-left">
          <span className="bg-indigo-500/30 text-indigo-100 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wider border border-indigo-500/50 mb-4 inline-block">Galeri Siswa</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">Karya Terbaikmu</h2>
          <p className="text-indigo-200 max-w-xl text-lg font-medium">
            Bagikan hasil karya desain pertamamu di sini, dan lihat karya kreatif dari teman-teman lainnya!
          </p>
        </div>
        <div className="relative z-10 shrink-0">
          <button 
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-indigo-900 font-black rounded-full hover:bg-yellow-300 shadow-lg shadow-yellow-500/30 transition-all transform hover:-translate-y-1 uppercase tracking-widest"
          >
            {isFormOpen ? <X className="w-6 h-6" /> : <PlusCircle className="w-6 h-6" />}
            {isFormOpen ? 'BATAL' : 'KIRIM KARYA'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <motion.form 
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: 'auto', marginBottom: 40 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            className="overflow-hidden"
            onSubmit={handleSubmit}
          >
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200 border-4 border-indigo-50">
              <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 uppercase tracking-wider">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                Form Pengumpulan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Nama Lengkap</label>
                  <input 
                    type="text" 
                    required
                    value={formData.studentName}
                    onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-indigo-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Kelas</label>
                  <input 
                    type="text" 
                    required
                    value={formData.className}
                    onChange={(e) => setFormData({...formData, className: e.target.value})}
                    placeholder="Contoh: X MIPA 1"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-indigo-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Judul Karya</label>
                  <input 
                    type="text" 
                    required
                    value={formData.workTitle}
                    onChange={(e) => setFormData({...formData, workTitle: e.target.value})}
                    placeholder="Contoh: Poster Hari Bumi"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-indigo-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Tautan (Link) Publik Canva</label>
                  <input 
                    type="url" 
                    required
                    value={formData.canvaLink}
                    onChange={(e) => setFormData({...formData, canvaLink: e.target.value})}
                    placeholder="https://www.canva.com/design/..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-slate-200 focus:border-indigo-500 focus:bg-white outline-none transition-all font-medium text-slate-900"
                  />
                  <p className="text-sm font-bold text-pink-500 mt-3 flex items-center gap-1.5 bg-pink-50 p-3 rounded-xl border border-pink-100">
                    <span>⚠️</span> Pastikan tautan dapat diakses publik (Anyone with the link can view).
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-700 text-white font-black rounded-full hover:bg-indigo-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-200 uppercase tracking-widest"
                >
                  <Send className="w-5 h-5" />
                  Kirim Karya
                </button>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {works.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-[3rem] border-4 border-dashed border-slate-200">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-2xl font-black text-slate-900 mb-2">Belum Ada Karya</h3>
          <p className="text-slate-500 font-medium text-lg">Jadilah yang pertama membagikan hasil desainmu!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, idx) => {
             const colors = ['bg-pink-100 text-pink-700', 'bg-yellow-100 text-yellow-700', 'bg-cyan-100 text-cyan-700', 'bg-emerald-100 text-emerald-700', 'bg-purple-100 text-purple-700'];
             const colorIndex = idx % colors.length;
             return (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-indigo-100 border-2 border-slate-100 hover:border-indigo-200 transition-all group flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-indigo-50 transition-colors"></div>
              
              <div className={`w-14 h-14 ${colors[colorIndex]} rounded-2xl flex items-center justify-center font-black text-2xl mb-6 shrink-0 shadow-inner`}>
                {work.studentName.charAt(0).toUpperCase()}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-2 line-clamp-2 group-hover:text-indigo-700 transition-colors">
                {work.workTitle}
              </h3>
              
              <div className="text-sm font-medium text-slate-500 mb-8 flex-grow">
                Oleh <strong className="text-slate-700">{work.studentName}</strong> <br/>
                <span className="inline-block mt-2 px-2 py-1 bg-slate-100 rounded text-xs text-slate-600 font-bold">{work.className}</span>
              </div>
              
              <a 
                href={work.canvaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-slate-900 hover:bg-indigo-700 text-white font-black rounded-xl transition-colors mt-auto"
              >
                LIHAT DESAIN
                <ExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          )})}
        </div>
      )}
    </div>
  );
}
