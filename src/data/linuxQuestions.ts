import type { Question } from "../types/question";

export const linuxQuestions: Question[] = [
  {
    id: "linux-1",
    category: "Linux",
    question: "What is df vs du?",
    answer:
      "df shows filesystem usage. du shows directory usage.",
    example:
      "When disk becomes full, first use df -h then du -sh.",
    commands: ["df -h", "du -sh *"],
    memoryTrick:
      "df = filesystem, du = directory",
    crossQuestions: [
      "Why can df and du differ?",
      "Which command identifies large folders?"
    ]
  }
];