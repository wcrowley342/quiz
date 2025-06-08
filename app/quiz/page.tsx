'use client';

import { useQuiz } from '@/hooks/useQuiz';
import QuestionCard from '@/components/QuestionCard';
import questions from '@/data/seo_questions.json';

export default function QuizPage() {
  const {
    currentIndex,
    currentQuestion,
    handleAnswer,
    score,
    isFinished,
  } = useQuiz(questions);

  if (isFinished) return <Results score={score} />;

  return (
    <section className="max-w-3xl mx-auto p-4 space-y-8">
      <Progress current={currentIndex} total={10} />
      <QuestionCard question={currentQuestion} onSubmit={handleAnswer} />
    </section>
  );
}

function Progress({ current, total }: { current: number; total: number }) {
  const percent = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="h-3 rounded-full bg-aqua transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

function Results({ score }: { score: number }) {
  const passed = score >= 80;
  return (
    <div className="text-center space-y-6 p-8 bg-white rounded-xl shadow-md">
      {passed ? (
        <>
          <h2 className="text-3xl font-bold">🎉 SEO Rockstar!</h2>
          <p className="text-lg">You scored {score}%</p>
          <SwagForm />
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold">Your Score: {score}%</h2>
          <p className="text-lg">Nice try! Drop your email and we’ll send tips to improve.</p>
          <LeadCaptureForm />
        </>
      )}
    </div>
  );
}
