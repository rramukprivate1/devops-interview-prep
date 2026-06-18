export type Question = {
  id: string;
  category: string;
  question: string;
  answer: string;
  example: string;
  commands?: string[];
  memoryTrick?: string;
  crossQuestions?: string[];
};