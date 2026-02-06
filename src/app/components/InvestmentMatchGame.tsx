import { useState } from "react";

const scenarios = [
  {
    question: "You want long term growth and are okay with market ups and downs.",
    answer: "Stock",
    explanation: "Stocks offer higher potential growth but come with more volatility.",
  },
  {
    question: "You want steady and predictable returns with lower risk.",
    answer: "Bond",
    explanation: "Bonds provide fixed income and are generally more stable.",
  },
  {
    question: "You want to invest in many companies at once to reduce risk.",
    answer: "ETF",
    explanation: "ETFs allow diversification across multiple companies.",
  },
  {
    question: "You need money to stay safe and accessible in the short term.",
    answer: "Savings",
    explanation: "Savings accounts protect money but offer low growth.",
  },
  {
    question: "You want diversification without choosing individual stocks.",
    answer: "ETF",
    explanation: "ETFs bundle many investments together in one fund.",
  },
];

export default function InvestmentMatchGame() {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const current = scenarios[index];

  function handleChoice(choice: string) {
    if (choice === current.answer) {
      setScore(score + 1);
      setFeedback("Correct! " + current.explanation);
    } else {
      setFeedback("Not quite. " + current.explanation);
    }
  }

  function next() {
    setFeedback("");
    setIndex((index + 1) % scenarios.length);
  }

  return (
    <div className="rounded-2xl border-2 border-[#354024]/20 bg-white p-8 max-w-xl shadow-lg">
      <div className="mb-6">
        <p className="text-lg text-[#354024]/70 mb-3" style={{ letterSpacing: '-0.89px' }}>Scenario {index + 1} of {scenarios.length}</p>
        <h3 className="text-2xl text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{current.question}</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {["Stock", "Bond", "ETF", "Savings"].map((opt) => (
          <button
            key={opt}
            onClick={() => handleChoice(opt)}
            disabled={feedback !== ""}
            className="rounded-xl border-2 border-[#354024]/20 px-6 py-4 text-lg text-[#1C1C1C] hover:bg-[#889063] hover:text-white hover:border-[#889063] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#1C1C1C] disabled:hover:border-[#354024]/20"
            style={{ letterSpacing: '-0.89px' }}
          >
            {opt}
          </button>
        ))}
      </div>

      {feedback && (
        <div className={`rounded-lg p-6 mb-6 ${feedback.startsWith("Correct") ? "bg-green-50 border-2 border-green-400" : "bg-orange-50 border-2 border-orange-400"}`}>
          <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>{feedback}</p>
        </div>
      )}

      <div className="flex items-center justify-between">
        <p className="text-lg text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>Score: {score} / {scenarios.length}</p>
        <button
          onClick={next}
          className="rounded-full bg-[#354024] px-8 py-4 text-lg text-white hover:opacity-90 transition-opacity"
          style={{ letterSpacing: '-0.89px' }}
        >
          {index === scenarios.length - 1 ? "Restart" : "Next Scenario"}
        </button>
      </div>
    </div>
  );
}
