import { useState } from 'react';
import { BookOpen, MonitorPlay, HelpCircle, ImagePlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MaterialContent from './components/MaterialContent';
import Practice from './components/Practice';
import Quiz from './components/Quiz';
import ShareWork from './components/ShareWork';

type TabType = 'materi' | 'praktik' | 'kuis' | 'karya';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('materi');

  const tabs = [
    { id: 'materi', label: 'Materi Dasar', icon: BookOpen },
    { id: 'praktik', label: 'Praktik Canva', icon: MonitorPlay },
    { id: 'kuis', label: 'Kuis Evaluasi', icon: HelpCircle },
    { id: 'karya', label: 'Galeri Karya', icon: ImagePlus },
  ] as const;

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 font-sans text-slate-800 selection:bg-yellow-200">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex w-72 bg-indigo-700 p-6 flex-col justify-between shrink-0 z-20">
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center font-black text-indigo-900 text-2xl shadow-inner">C+</div>
            <h1 className="text-white font-black text-2xl tracking-tight">CANVA EDU</h1>
          </div>
          <nav className="space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 p-4 rounded-xl font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white border-l-4 border-yellow-400 shadow-md'
                    : 'text-indigo-100 hover:bg-indigo-600 hover:text-white border-l-4 border-transparent'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="bg-indigo-800 p-5 rounded-xl shadow-inner">
          <p className="text-xs text-indigo-300 uppercase font-black mb-3 tracking-wider">Progres Belajar</p>
          <div className="w-full bg-indigo-900 h-2.5 rounded-full overflow-hidden">
            <div className="bg-yellow-400 h-full rounded-full w-[65%] shadow-sm"></div>
          </div>
          <p className="text-xs font-bold text-indigo-200 mt-3">65% Selesai</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="bg-white h-20 border-b border-slate-200 flex items-center justify-between px-6 md:px-8 shrink-0 z-10 shadow-sm">
          <div className="flex items-center gap-4">
             {/* Mobile Sidebar Brand */}
             <div className="md:hidden w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center font-black text-white shadow-sm">C+</div>
            <div>
              <p className="text-xs md:text-sm text-slate-500 font-bold uppercase tracking-wider">SMA Kelas X • Multimedia</p>
              <h2 className="text-lg md:text-xl font-black text-slate-900">{tabs.find(t => t.id === activeTab)?.label || 'Pengenalan Dasar Canva'}</h2>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="hidden sm:block px-5 py-2 rounded-full border-2 border-slate-200 font-bold text-sm text-slate-600 hover:bg-slate-50 transition-all">Bantuan</button>
            <button onClick={() => setActiveTab('praktik')} className="px-5 py-2 rounded-full bg-pink-500 text-white font-black text-sm shadow-lg shadow-pink-200 hover:bg-pink-600 hover:shadow-pink-300 transition-all transform hover:-translate-y-0.5 whitespace-nowrap">Mulai Praktik</button>
          </div>
        </header>

        {/* Mobile Navigation (Top) */}
        <div className="md:hidden bg-indigo-700 overflow-x-auto shrink-0 shadow-inner">
          <div className="flex p-3 gap-2 min-w-max px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all
                  ${activeTab === tab.id ? 'bg-yellow-400 text-indigo-900 shadow-md' : 'text-indigo-100 hover:bg-indigo-600'}
                `}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-5xl mx-auto h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full pb-20"
              >
                {activeTab === 'materi' && <MaterialContent />}
                {activeTab === 'praktik' && <Practice />}
                {activeTab === 'kuis' && <Quiz />}
                {activeTab === 'karya' && <ShareWork />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
