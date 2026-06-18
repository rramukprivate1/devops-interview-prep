import { useState } from "react";
import type { Question } from "../types/question";

type Props = {
  item: Question;
};

export default function QuestionCard({ item }: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginBottom: "20px",
        borderRadius: "12px",
        boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2>{item.question}</h2>

      <button
        onClick={() => setShowAnswer(!showAnswer)}
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </button>

      {showAnswer && (
        <>
          <h3>Answer</h3>
          <p>{item.answer}</p>

          <h3>Example</h3>
          <p>{item.example}</p>

          {item.commands && item.commands.length > 0 && (
            <>
              <h3>Commands</h3>

              <pre
                style={{
                  background: "#111",
                  color: "#00ff99",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                {item.commands.join("\n")}
              </pre>
            </>
          )}

          {item.crossQuestions &&
            item.crossQuestions.length > 0 && (
              <>
                <h3>Cross Questions</h3>

                <ul>
                  {item.crossQuestions.map((q, index) => (
                    <li key={index}>{q}</li>
                  ))}
                </ul>
              </>
            )}

          {item.memoryTrick && (
            <>
              <h3>Memory Trick</h3>
              <p>{item.memoryTrick}</p>
            </>
          )}
        </>
      )}
    </div>
  );
}