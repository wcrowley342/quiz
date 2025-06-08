import { useState } from 'react';

interface Question {
  id: string;
  prompt: string;
  options: string[];
  answer: number; // index of correct option
  explanation: string;
}

export default function QuestionCard({
  question,
  onSubmit,
}: {
  question: Question;
  onSubmit: (isCorrect: boolean) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleClick = () => {
    if (selected === null) return;
    const isCorrect = selected === question.answer;
    setSubmitted(true);
    onSubmit(isCorrect);
  };

  return (
    <div className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold">{question.prompt}</h3>
      <ul className="space-y-2">
        {question.options.map((opt, idx) => (
          <li key={idx}>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="option"
                className="accent-aqua"
                checked={selected === idx}
                onChange={() => setSelected(idx)}
                disabled={submitted}
              />
              <span>{opt}</span>
            </label>
          </li>
        ))}
      </ul>
      {!submitted && (
        <button
          className="px-4 py-2 bg-aqua text-navy rounded-full font-semibold disabled:opacity-40"
          onClick={handleClick}
          disabled={selected === null}
        >
          Submit
        </button>
      )}
      {submitted && (
        <p className="mt-4 text-sm text-gray-600">
          {selected === question.answer ? 'Correct!' : `Incorrect. ${question.explanation}`}
        </p>
      )}
    </div>
  );
}
