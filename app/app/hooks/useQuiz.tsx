import { useState, useMemo } from 'react';

export function useQuiz(allQuestions: any[]) {
  const selected = useMemo(() =>
    [...allQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 10),
    [allQuestions]
  );

  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setCorrect((c) => c + 1);
    setIndex((i) => i + 1);
  };

  return {
    currentIndex: index,
    currentQuestion: selected[index],
    handleAnswer,
    score: Math.round((correct / 10) * 100),
    isFinished: index >= 10,
  };
}

// ================================
// data/seo_questions.json (truncated example)
// ================================
[
  {
    "id": "q1",
    "prompt": "Which HTML tag is used to define the title of a webpage that appears in search engine results?",
    "options": ["<meta>", "<title>", "<h1>", "<header>"],
    "answer": 1,
    "explanation": "The <title> tag specifies the title shown in SERPs and browser tabs."
  },
  {
    "id": "q2",
    "prompt": "True or false: Keyword stuffing can lead to a Google ranking penalty.",
    "options": ["True", "False"],
    "answer": 0,
    "explanation": "Excessive keyword repetition violates Google’s spam policies."
  }
  // ...add 13 more
]
