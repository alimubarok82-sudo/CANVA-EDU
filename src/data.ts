import { QuizQuestion } from './types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Apa fungsi utama dari aplikasi Canva?",
    options: [
      "Mengedit video dengan efek CGI kompleks",
      "Membuat desain grafis secara mudah dengan template",
      "Membuat aplikasi mobile",
      "Menulis kode pemrograman"
    ],
    correctAnswerIndex: 1,
    explanation: "Canva adalah platform desain grafis yang memudahkan pengguna membuat berbagai visual menggunakan template drag-and-drop."
  },
  {
    id: 2,
    question: "Elemen desain yang memberikan jarak antar objek agar desain tidak terlihat penuh sesak disebut?",
    options: [
      "Tipografi",
      "Saturasi",
      "White Space (Ruang Kosong)",
      "Resolusi"
    ],
    correctAnswerIndex: 2,
    explanation: "White space atau ruang kosong sangat penting untuk memberikan 'ruang bernapas' pada elemen-elemen desain sehingga informasi mudah dicerna."
  },
  {
    id: 3,
    question: "Jika kamu ingin menambahkan foto dari HP atau komputermu sendiri ke Canva, menu apa yang harus kamu pilih?",
    options: [
      "Elemen (Elements)",
      "Teks (Text)",
      "Proyek (Projects)",
      "Unggahan (Uploads)"
    ],
    correctAnswerIndex: 3,
    explanation: "Menu Unggahan (Uploads) digunakan untuk memasukkan file gambar, video, atau audio milik kita sendiri ke dalam ruang kerja Canva."
  },
  {
    id: 4,
    question: "Kombinasi warna yang saling berhadapan di roda warna (misalnya Biru dan Oranye) disebut warna?",
    options: [
      "Monokromatik",
      "Analog",
      "Komplementer",
      "Tersier"
    ],
    correctAnswerIndex: 2,
    explanation: "Warna komplementer adalah warna yang berseberangan di roda warna, yang jika digabungkan akan memberikan kontras yang sangat tinggi dan menarik perhatian."
  },
  {
    id: 5,
    question: "Format file yang paling disarankan ketika mendownload desain yang memiliki background transparan (tanpa latar belakang) adalah?",
    options: [
      "JPG",
      "PNG",
      "PDF",
      "MP4"
    ],
    correctAnswerIndex: 1,
    explanation: "Format PNG mendukung saluran alpha (alpha channel) yang memungkinkan penyimpanan gambar dengan latar belakang transparan, berbeda dengan JPG."
  }
];
