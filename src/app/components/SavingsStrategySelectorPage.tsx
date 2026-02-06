import { Link } from './RouterLink';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import lumiLogo from '../assets/lumilogo.png';
import Footer from './Footer';

interface Strategy {
  title: string;
  summary: string;
  steps: string[];
  next: string;
}

const STRATEGIES: Record<string, Strategy> = {
  autopilot: {
    title: "Autopilot Savings (Pay Yourself First)",
    summary:
      "You'll do best with automatic saving that happens before you can spend it. This is the simplest way to stay consistent without overthinking.",
    steps: [
      "Pick a fixed amount or percent to save from every paycheck (start small if needed).",
      "Set an automatic transfer to a savings account on payday (or the next day).",
      "Treat that transfer like a bill that must happen every time.",
      "If you get a raise or more hours, increase the transfer before lifestyle spending grows."
    ],
    next: "Next action: set a recurring transfer today, even if it's just $5 or $10."
  },
  emergency_first: {
    title: "Emergency-First Strategy (Starter Fund → Full Fund)",
    summary:
      "Your priority is building a safety cushion so random expenses do not turn into debt. This strategy focuses on protection first.",
    steps: [
      "Create a starter emergency fund goal (example: $250 to $500).",
      "Automate weekly or paycheck deposits until you hit the starter goal.",
      "After you reach it, build toward a bigger goal (example: 1 month of expenses, then 3 months).",
      "Keep emergency savings in a separate account so it's harder to spend accidentally."
    ],
    next: "Next action: write your starter emergency fund goal and date on your notes app."
  },
  sinking_funds: {
    title: "Sinking Funds (Save for Known Expenses)",
    summary:
      "If you have upcoming expenses or goals, sinking funds make saving feel doable because you are saving in smaller pieces over time.",
    steps: [
      "List 1 to 3 upcoming expenses or goals (car, trip, school costs, gifts).",
      "Assign each goal a target amount and deadline.",
      "Divide the target by the number of weeks until the deadline to get a weekly save amount.",
      "Keep each goal in its own category so you do not mix your savings."
    ],
    next: "Next action: pick one goal and calculate your weekly saving number."
  },
  irregular_income: {
    title: "Irregular Income Plan (Baseline + Buffer)",
    summary:
      "When income changes a lot, you need a flexible plan that protects essentials and builds a buffer during good weeks.",
    steps: [
      "Figure out your baseline monthly expenses (your minimum to survive).",
      "Set a savings rule: on higher-income weeks, save first before spending increases.",
      "Build an income buffer fund so low-income weeks are not stressful.",
      "Use a weekly check-in: plan spending based on what you actually earned this week."
    ],
    next: "Next action: choose a baseline save rule like 'save 20% of any week above my baseline.'"
  },
  micro_saving: {
    title: "Micro-Saving Strategy (Small Wins, Fast Momentum)",
    summary:
      "If money feels tight, micro-saving builds the habit without requiring big amounts. Consistency matters more than size at first.",
    steps: [
      "Pick a tiny daily or weekly amount you can save without feeling it (example: $1 to $3).",
      "Use a separate savings bucket so it does not blend into spending money.",
      "Do a weekly sweep: move leftover small amounts into savings.",
      "After 2 to 3 weeks of consistency, raise the amount slightly."
    ],
    next: "Next action: start a '$1 per day' or '$5 per week' rule and track your streak."
  },
  rule_50_30_20: {
    title: "Simple Rule-Based Saving (50/30/20 Starter Version)",
    summary:
      "You want a clear rule that makes decisions easier. This gives you a structure to follow without needing a perfect budget.",
    steps: [
      "Split your money into needs, wants, and savings (adjust percentages to fit your life).",
      "Start with any savings percent you can stick to, even 5% counts.",
      "Hold the rule steady for one month so it becomes automatic.",
      "If you overspend, adjust wants first, not savings."
    ],
    next: "Next action: pick your personal split for this month and write it down."
  }
};

const LABEL_MAP = {
  income: { steady: "Steady income", mixed: "Mixed income", irregular: "Irregular income" },
  goal: { emergency: "Emergency fund", short: "Short-term goal", mid: "Medium goal", long: "Long-term goal" },
  challenge: { forget: "Forgets to save", spend: "Spends it", tight: "Budget is tight", inconsistent: "Income varies" },
  style: { automatic: "Wants automatic", flexible: "Wants flexible", rules: "Likes simple rules" },
  starting: { none: "Starting from $0", some: "Not consistent yet", consistent: "Already consistent" }
};

export default function SavingsStrategySelectorPage() {
  const [answers, setAnswers] = useState({
    income: '',
    goal: '',
    challenge: '',
    style: '',
    starting: ''
  });
  
  const [result, setResult] = useState<Strategy | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (name: string, value: string) => {
    setAnswers(prev => ({ ...prev, [name]: value }));
  };

  const allAnswered = Object.values(answers).every(val => val !== '');

  const chooseStrategy = (): Strategy => {
    const irregular = (answers.income === "irregular" || answers.income === "mixed") || (answers.challenge === "inconsistent");
    const wantsAuto = answers.style === "automatic" || answers.challenge === "forget";
    const tight = answers.challenge === "tight";
    const emergency = answers.goal === "emergency";
    const rules = answers.style === "rules";
    const startingZero = answers.starting === "none";

    if (emergency) return STRATEGIES.emergency_first;
    if (irregular) return STRATEGIES.irregular_income;
    if (tight && startingZero) return STRATEGIES.micro_saving;
    if (wantsAuto) return STRATEGIES.autopilot;
    if (answers.goal === "short" || answers.goal === "mid") return STRATEGIES.sinking_funds;
    if (rules) return STRATEGIES.rule_50_30_20;

    return STRATEGIES.autopilot;
  };

  const handleSubmit = () => {
    if (!allAnswered) return;
    const chosen = chooseStrategy();
    setResult(chosen);
    
    setTimeout(() => {
      const resultElement = document.getElementById('result-section');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleReset = () => {
    setAnswers({
      income: '',
      goal: '',
      challenge: '',
      style: '',
      starting: ''
    });
    setResult(null);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-[#E5D7C4]">
      {/* Header */}
      <div className="sticky top-0 z-50 border-t-[16px] border-[#354024]">
        <header className="bg-[#889063] px-6 py-6 md:px-12">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <img src={lumiLogo} alt="lumi" className="h-8 -ml-7" style={{ mixBlendMode: 'multiply' }} />
            <nav className="flex gap-8">
              <Link to="/" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                home
              </Link>
              <Link to="/learn" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                learn
              </Link>
              <Link to="/resources" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                resources
              </Link>
              <Link to="/blog" className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity">
                blog
              </Link>
            </nav>
          </div>
        </header>
      </div>

      {/* Main Content */}
      <main className="px-6 py-12 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            to="/saving-strategies"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Saving Strategies
          </Link>

          {/* Header */}
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm mb-8">
            <h1 className="text-4xl md:text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
              Savings Strategy Selector
            </h1>
            <p className="text-xl text-[#1C1C1C] opacity-70 leading-relaxed">
              Answer 5 quick questions and we'll recommend a saving strategy that fits your life.
            </p>
          </div>

          {/* Questions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Q1: Income pattern */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
              <h3 className="text-lg text-[#354024] mb-4 font-semibold">1) Your income is mostly…</h3>
              <div className="space-y-3">
                {[
                  { value: 'steady', label: 'Steady (same-ish each paycheck)' },
                  { value: 'mixed', label: 'Mixed (some steady, some random)' },
                  { value: 'irregular', label: 'Irregular (changes a lot week to week)' }
                ].map(option => (
                  <label key={option.value} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    answers.income === option.value 
                      ? 'bg-[#FFCFD0] border-[#FFCFD0]' 
                      : 'border-[#354024]/10 hover:bg-[#CFBB99]/20'
                  }`}>
                    <input
                      type="radio"
                      name="income"
                      value={option.value}
                      checked={answers.income === option.value}
                      onChange={(e) => handleChange('income', e.target.value)}
                      className="mt-1 accent-[#354024]"
                    />
                    <span className="text-lg text-[#1C1C1C]">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q2: Goal timeframe */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
              <h3 className="text-lg text-[#354024] mb-4 font-semibold">2) You're saving for…</h3>
              <div className="space-y-3">
                {[
                  { value: 'emergency', label: 'An emergency fund (just-in-case money)' },
                  { value: 'short', label: 'A short-term goal (0–6 months)' },
                  { value: 'mid', label: 'A medium goal (6–24 months)' },
                  { value: 'long', label: 'Long-term future (2+ years)' }
                ].map(option => (
                  <label key={option.value} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    answers.goal === option.value 
                      ? 'bg-[#FFCFD0] border-[#FFCFD0]' 
                      : 'border-[#354024]/10 hover:bg-[#CFBB99]/20'
                  }`}>
                    <input
                      type="radio"
                      name="goal"
                      value={option.value}
                      checked={answers.goal === option.value}
                      onChange={(e) => handleChange('goal', e.target.value)}
                      className="mt-1 accent-[#354024]"
                    />
                    <span className="text-lg text-[#1C1C1C]">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q3: Biggest challenge */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
              <h3 className="text-lg text-[#354024] mb-4 font-semibold">3) Your biggest challenge is…</h3>
              <div className="space-y-3">
                {[
                  { value: 'forget', label: 'I forget to save' },
                  { value: 'spend', label: 'I end up spending it' },
                  { value: 'tight', label: 'My budget is tight, not much leftover' },
                  { value: 'inconsistent', label: 'My income is unpredictable' }
                ].map(option => (
                  <label key={option.value} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    answers.challenge === option.value 
                      ? 'bg-[#FFCFD0] border-[#FFCFD0]' 
                      : 'border-[#354024]/10 hover:bg-[#CFBB99]/20'
                  }`}>
                    <input
                      type="radio"
                      name="challenge"
                      value={option.value}
                      checked={answers.challenge === option.value}
                      onChange={(e) => handleChange('challenge', e.target.value)}
                      className="mt-1 accent-[#354024]"
                    />
                    <span className="text-lg text-[#1C1C1C]">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q4: Comfort level */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
              <h3 className="text-lg text-[#354024] mb-4 font-semibold">4) You want a plan that feels…</h3>
              <div className="space-y-3">
                {[
                  { value: 'automatic', label: 'Automatic (set it once, it happens)' },
                  { value: 'flexible', label: 'Flexible (adjust each week)' },
                  { value: 'rules', label: 'Rule-based (simple rules I follow)' }
                ].map(option => (
                  <label key={option.value} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    answers.style === option.value 
                      ? 'bg-[#FFCFD0] border-[#FFCFD0]' 
                      : 'border-[#354024]/10 hover:bg-[#CFBB99]/20'
                  }`}>
                    <input
                      type="radio"
                      name="style"
                      value={option.value}
                      checked={answers.style === option.value}
                      onChange={(e) => handleChange('style', e.target.value)}
                      className="mt-1 accent-[#354024]"
                    />
                    <span className="text-lg text-[#1C1C1C]">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Q5: Starting point */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
              <h3 className="text-lg text-[#354024] mb-4 font-semibold">5) Right now, your savings is…</h3>
              <div className="space-y-3">
                {[
                  { value: 'none', label: 'Basically $0' },
                  { value: 'some', label: 'Some, but not consistent' },
                  { value: 'consistent', label: 'Consistent already' }
                ].map(option => (
                  <label key={option.value} className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                    answers.starting === option.value 
                      ? 'bg-[#FFCFD0] border-[#FFCFD0]' 
                      : 'border-[#354024]/10 hover:bg-[#CFBB99]/20'
                  }`}>
                    <input
                      type="radio"
                      name="starting"
                      value={option.value}
                      checked={answers.starting === option.value}
                      onChange={(e) => handleChange('starting', e.target.value)}
                      className="mt-1 accent-[#354024]"
                    />
                    <span className="text-lg text-[#1C1C1C]">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tips panel */}
            <div className="bg-[#CFBB99]/30 rounded-lg p-6 shadow-sm border border-[#354024]/10">
              <h3 className="text-lg text-[#354024] mb-4 font-semibold">Quick tip</h3>
              <p className="text-lg text-[#1C1C1C] mb-4">
                You can retake this anytime. The "best" strategy is the one you can actually stick to.
              </p>
              <div className="bg-white rounded-lg p-4 border border-[#354024]/10">
                <p className="text-lg text-[#1C1C1C]">
                  <strong>Goal:</strong> build a system that makes saving happen even on busy weeks.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className="bg-[#354024] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Get my strategy
            </button>
            <button
              onClick={handleReset}
              className="bg-white text-[#354024] px-8 py-4 rounded-lg font-semibold text-lg border border-[#354024]/20 hover:bg-[#CFBB99]/20 transition-colors"
            >
              Reset
            </button>
            <p className="text-lg text-[#1C1C1C] opacity-60">
              {allAnswered ? 'Ready. Get your strategy.' : 'Answer all questions to unlock your result.'}
            </p>
          </div>

          {/* Result */}
          {result && (
            <div id="result-section" className="bg-white rounded-lg p-8 md:p-12 shadow-sm border border-[#354024]/10">
              {/* Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.entries(answers).map(([key, value]) => {
                  const label = LABEL_MAP[key as keyof typeof LABEL_MAP][value as keyof typeof LABEL_MAP[typeof key]];
                  return (
                    <span key={key} className="inline-block px-4 py-2 bg-[#CFBB99]/30 text-[#1C1C1C] rounded-full text-sm border border-[#354024]/10">
                      {label}
                    </span>
                  );
                })}
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                {result.title}
              </h2>

              {/* Summary */}
              <p className="text-xl text-[#1C1C1C] mb-6 leading-relaxed">
                {result.summary}
              </p>

              {/* Steps */}
              <ul className="space-y-3 mb-6 ml-6">
                {result.steps.map((step, index) => (
                  <li key={index} className="text-lg text-[#1C1C1C] list-disc">
                    {step}
                  </li>
                ))}
              </ul>

              {/* Next Step */}
              <div className="bg-[#889063]/20 rounded-lg p-6 border border-[#889063]/30">
                <p className="text-lg text-[#1C1C1C]">
                  {result.next}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}