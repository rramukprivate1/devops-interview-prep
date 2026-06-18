import type { Question } from "../types/question";

export const awsQuestions: Question[] = [
  {
    id: "aws-1",
    category: "AWS",
    question:
      "Difference between Security Group and NACL?",
    answer:
      "Security Group works at instance level and is stateful. NACL works at subnet level and is stateless.",
    example:
      "EC2 uses Security Group while subnet uses NACL.",
    memoryTrick:
      "SG = Server, NACL = Network",
    crossQuestions: [
      "Which supports deny rules?",
      "Which is stateful?"
    ]
  }
];