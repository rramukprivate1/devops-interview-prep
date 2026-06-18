import QuestionCard from "../components/QuestionCard";
import { awsQuestions } from "../data/awsQuestions";

export default function AwsPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>AWS Questions</h1>

      {awsQuestions.map((q) => (
        <QuestionCard
          key={q.id}
          item={q}
        />
      ))}
    </div>
  );
}