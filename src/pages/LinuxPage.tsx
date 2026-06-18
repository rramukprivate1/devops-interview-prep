import QuestionCard from "../components/QuestionCard";
import { linuxQuestions } from "../data/linuxQuestions";

export default function LinuxPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Linux Questions</h1>

      {linuxQuestions.map((q) => (
        <QuestionCard
          key={q.id}
          item={q}
        />
      ))}
    </div>
  );
}