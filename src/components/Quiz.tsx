import { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight, RefreshCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { quizQuestions } from '../data';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === quizQuestions[currentQuestion].correctAnswerIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = (score / quizQuestions.length) * 100;
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-[3rem] shadow-2xl shadow-indigo-900/20 text-center border-4 border-indigo-800 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-700/40 via-slate-900 to-slate-900"></div>
        <div className="relative z-10">
          <div className="w-24 h-24 bg-yellow-400 rounded-full mx-auto mb-6 flex items-center justify-center text-5xl shadow-lg shadow-yellow-500/30 border-4 border-yellow-200">
            {percentage >= 80 ? '🏆' : percentage >= 60 ? '⭐️' : '💪'}
          </div>
          <h2 className="text-3xl font-black mb-4 text-white uppercase tracking-wider">
            {percentage >= 80 ? 'Luar Biasa!' : percentage >= 60 ? 'Kerja Bagus!' : 'Terus Semangat!'}
          </h2>
          <div className="text-7xl font-black text-yellow-400 mb-8 drop-shadow-md">
            {score} <span className="text-4xl text-slate-500">/ {quizQuestions.length}</span>
          </div>
          <p className="text-lg text-slate-300 mb-8 font-medium max-w-md mx-auto">
            {percentage >= 80 
              ? "Kamu sudah memahami dasar-dasar Canva dan Desain Grafis dengan sangat baik."
              : percentage >= 60
              ? "Kamu punya dasar yang baik, tapi masih bisa ditingkatkan lagi. Yuk ulas materinya!"
              : "Jangan menyerah! Coba baca kembali materi dasar dan praktikkan pelan-pelan."}
          </p>
          <button 
            onClick={restartQuiz}
            className="inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-indigo-900 font-black rounded-full hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-lg shadow-yellow-500/30"
          >
            <RefreshCcw className="w-6 h-6" />
            COBA LAGI
          </button>
        </div>
      </motion.div>
    );
  }

  const q = quizQuestions[currentQuestion];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex flex-col sm:flex-row items-center justify-between bg-indigo-700 p-6 rounded-3xl text-white shadow-lg shadow-indigo-200 gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-3">
          <span className="animate-pulse">⚡</span> Kuis Evaluasi
        </h2>
        <div className="text-sm font-black px-4 py-2 bg-indigo-900 text-yellow-400 rounded-full border border-indigo-600 shadow-inner">
          PERTANYAAN {currentQuestion + 1} / {quizQuestions.length}
        </div>
      </div>

      <motion.div 
        key={currentQuestion}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border-4 border-indigo-50 mb-6"
      >
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 leading-tight">
          {q.question}
        </h3>

        <div className="space-y-4">
          {q.options.map((option, index) => {
            let stateClass = "border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 bg-white";
            let icon = null;

            if (isAnswered) {
              if (index === q.correctAnswerIndex) {
                stateClass = "border-emerald-500 bg-emerald-50 text-emerald-900 shadow-md";
                icon = <CheckCircle2 className="w-7 h-7 text-emerald-500 ml-auto flex-shrink-0" />;
              } else if (index === selectedAnswer) {
                stateClass = "border-pink-500 bg-pink-50 text-pink-900";
                icon = <XCircle className="w-7 h-7 text-pink-500 ml-auto flex-shrink-0" />;
              } else {
                stateClass = "border-slate-200 opacity-50 bg-white";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={isAnswered}
                className={`w-full text-left p-5 md:p-6 rounded-2xl border-4 transition-all flex items-center gap-4 group ${stateClass}`}
              >
                <span className={`w-10 h-10 flex items-center justify-center rounded-xl text-lg font-black flex-shrink-0 transition-colors
                  ${isAnswered && index === q.correctAnswerIndex ? 'bg-emerald-200 text-emerald-800' : 
                    isAnswered && index === selectedAnswer ? 'bg-pink-200 text-pink-800' : 
                    !isAnswered ? 'bg-slate-100 text-slate-500 group-hover:bg-indigo-200 group-hover:text-indigo-800' : 'bg-slate-100 text-slate-400'}
                `}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="font-bold text-lg md:text-xl">{option}</span>
                {icon}
              </button>
            );
          })}
        </div>
      </motion.div>

      {isAnswered && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-yellow-50 border-4 border-yellow-200 rounded-[2rem] p-8 mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-lg shadow-yellow-100"
        >
          <div className="flex-1">
            <h4 className="font-black text-yellow-900 mb-2 text-lg uppercase tracking-wider flex items-center gap-2">
              <span className="text-2xl">💡</span> Penjelasan
            </h4>
            <p className="text-yellow-900/80 leading-relaxed font-medium text-lg">{q.explanation}</p>
          </div>
          <button 
            onClick={handleNext}
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-indigo-700 text-white font-black rounded-full hover:bg-indigo-800 transition-all w-full md:w-auto justify-center shadow-lg shadow-indigo-200 transform hover:-translate-y-1 uppercase tracking-widest"
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Selesai' : 'Lanjut'}
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </div>
  );
}
