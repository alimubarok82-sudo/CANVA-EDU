export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface StudentWork {
  id: string;
  studentName: string;
  className: string;
  workTitle: string;
  canvaLink: string;
  timestamp: number;
}
