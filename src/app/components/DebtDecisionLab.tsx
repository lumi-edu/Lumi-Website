import { useState, useEffect } from 'react';

export default function DebtDecisionLab() {
  const [scenario, setScenario] = useState('card');
  const [activeStrat, setActiveStrat] = useState('minimum');
  const [balance, setBalance] = useState(2000);
  const [apr, setApr] = useState(24);
  const [payment, setPayment] = useState(80);
  const [minPct, setMinPct] = useState(3);

  // Apply scenario presets
  useEffect(() => {
    if (scenario === 'card') {
      setBalance(2000);
      setApr(24);
      setPayment(80);
      setMinPct(3);
    } else if (scenario === 'student') {
      setBalance(12000);
      setApr(5.5);
      setPayment(140);
      setMinPct(3);
    } else if (scenario === 'auto') {
      setBalance(15000);
      setApr(7.5);
      setPayment(320);
      setMinPct(3);
    } else if (scenario === 'personal') {
      setBalance(5000);
      setApr(14);
      setPayment(180);
      setMinPct(3);
    }
  }, [scenario]);

  const money = (n: number) => {
    const x = Math.round(n);
    return x.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  };

  const money2 = (n: number) => {
    return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 2 });
  };

  const monthsToText = (m: number) => {
    if (!isFinite(m) || m > 9999) return "Too long";
    const years = Math.floor(m / 12);
    const rem = m % 12;
    if (years <= 0) return `${rem} months`;
    if (rem === 0) return `${years} years`;
    return `${years} years ${rem} months`;
  };

  // Simulation functions
  const simulateSingleDebt = (balance: number, aprPct: number, monthlyPayment: number, mode: string, minPctRule: number) => {
    const r = (aprPct / 100) / 12;
    let b = balance;
    let month = 0;
    let totalInterest = 0;
    let totalPaid = 0;
    const series = [b];
    const MAX_MONTHS = 1200;

    const paymentForMonth = (currBalance: number) => {
      if (mode === "minimum") {
        const pctPay = (minPctRule / 100) * currBalance;
        return Math.max(25, pctPay);
      }
      return monthlyPayment;
    };

    const firstMonthInterest = r * b;

    while (b > 0.01 && month < MAX_MONTHS) {
      const interest = r * b;
      let pmt = paymentForMonth(b);
      pmt = Math.max(10, pmt);
      totalInterest += interest;

      let principal = pmt - interest;

      if (principal <= 0) {
        b = b + (interest - pmt);
        totalPaid += pmt;
        month++;
        series.push(b);
        continue;
      }

      if (principal > b) principal = b;
      b -= principal;
      totalPaid += (principal + interest);
      month++;
      series.push(Math.max(0, b));
    }

    return { months: month, totalInterest, totalPaid, firstMonthInterest, series };
  };

  const simulateMultiDebtDemo = (totalBalance: number, aprPct: number, monthlyPayment: number, method: string) => {
    const debts = [
      { name: "Debt A", bal: totalBalance * 0.25, apr: aprPct + 8 },
      { name: "Debt B", bal: totalBalance * 0.35, apr: aprPct },
      { name: "Debt C", bal: totalBalance * 0.40, apr: Math.max(0, aprPct - 6) }
    ];

    const minPay = (d: any) => Math.max(25, d.bal * 0.02);

    let order = [...debts];
    if (method === "avalanche") order.sort((a, b) => b.apr - a.apr);
    if (method === "snowball") order.sort((a, b) => a.bal - b.bal);

    const MAX_MONTHS = 1200;
    let month = 0;
    let totalInterest = 0;
    let totalPaid = 0;
    const totalSeries = [debts.reduce((s, d) => s + d.bal, 0)];

    while (month < MAX_MONTHS) {
      const totalBal = debts.reduce((s, d) => s + d.bal, 0);
      if (totalBal <= 0.01) break;

      for (const d of debts) {
        if (d.bal <= 0.01) continue;
        const r = (d.apr / 100) / 12;
        const interest = r * d.bal;
        totalInterest += interest;
        d.bal += interest;
      }

      let remaining = monthlyPayment;
      for (const d of debts) {
        if (d.bal <= 0.01) continue;
        const p = Math.min(d.bal, minPay(d));
        d.bal -= p;
        totalPaid += p;
        remaining -= p;
      }

      if (remaining > 0) {
        const target = order.find(d => d.bal > 0.01);
        if (target) {
          const extra = Math.min(target.bal, remaining);
          target.bal -= extra;
          totalPaid += extra;
        }
      }

      month++;
      totalSeries.push(Math.max(0, debts.reduce((s, d) => s + d.bal, 0)));
    }

    const firstMonthInterest = (totalBalance * ((aprPct / 100) / 12));
    return { months: month, totalInterest, totalPaid, firstMonthInterest, series: totalSeries };
  };

  const getSimulation = () => {
    if (activeStrat === "avalanche" || activeStrat === "snowball") {
      return simulateMultiDebtDemo(balance, apr, payment, activeStrat);
    }
    const mode = (activeStrat === "minimum") ? "minimum" : "fixed";
    return simulateSingleDebt(balance, apr, payment, mode, minPct);
  };

  const sim = getSimulation();
  const r = (apr / 100) / 12;
  const monthlyInterestNow = r * balance;
  const showWarning = activeStrat !== "minimum" && activeStrat !== "avalanche" && activeStrat !== "snowball" && payment <= monthlyInterestNow;

  const getCoachText = () => {
    const msg = [];
    if (payment <= monthlyInterestNow && activeStrat !== "minimum") {
      msg.push("Your payment is close to (or below) your monthly interest right now, so payoff can stall or even grow. Try increasing your payment until it clearly beats the interest.");
    } else {
      if (activeStrat === "minimum") {
        msg.push("Minimum payments keep things flexible, but they usually maximize interest. Try sliding your payment up slightly and watch how the payoff time collapses.");
      } else if (activeStrat === "fixed") {
        msg.push("Fixed payoff is about consistency. If you can hold a steady payment, you reduce interest and finish faster.");
      } else if (activeStrat === "avalanche") {
        msg.push("Avalanche is the math-first strategy: extra money attacks the highest APR first, which usually saves the most interest.");
      } else if (activeStrat === "snowball") {
        msg.push("Snowball is the motivation-first strategy: extra money attacks the smallest balance first, which can create quick wins and keep you consistent.");
      }
    }

    if (apr >= 20) msg.push(" If your APR is high, paying down utilization fast is usually your biggest win.");
    else msg.push(" Keep your payment steady and avoid adding new balances while you're paying this down.");

    return msg.join("");
  };

  const getStrategyExplanation = () => {
    if (activeStrat === "minimum") {
      return [
        "Minimum payments keep cash flow easy, but usually maximize interest.",
        "On credit cards, minimum is often a % of balance, so payments shrink slowly.",
        "If APR is high, minimum payments can keep you in debt for years."
      ];
    } else if (activeStrat === "fixed") {
      return [
        "You choose a fixed monthly payment and stick to it.",
        "Even a small increase can massively reduce interest over time.",
        "Best when your income is stable and you want a predictable plan."
      ];
    } else if (activeStrat === "avalanche") {
      return [
        "If you have multiple debts: pay minimums on all, then attack the highest APR first.",
        "This usually minimizes total interest paid.",
        "It can feel slower emotionally, but it is mathematically efficient."
      ];
    } else {
      return [
        "If you have multiple debts: pay minimums on all, then attack the smallest balance first.",
        "This can build motivation quickly with early wins.",
        "It may cost more interest than avalanche, but it can be easier to stick with."
      ];
    }
  };

  const getSubtitle = () => {
    if (sim.months >= 240) return "Long payoff timeline. Try increasing payment even a little and watch the difference.";
    if (sim.months >= 60) return "Moderate timeline. Consistency matters here.";
    return "Shorter timeline. Keep the plan steady and avoid adding new balances.";
  };

  const handleCopy = async () => {
    const scenarioName = scenario === 'card' ? 'Credit card balance' :
                         scenario === 'student' ? 'Student loan' :
                         scenario === 'auto' ? 'Auto loan' : 'Personal loan';

    const text = `lumi Debt Decision Lab Results
Scenario: ${scenarioName}
Strategy: ${activeStrat}

Inputs:
- Balance: ${money(balance)}
- APR: ${apr.toFixed(1)}%
- Monthly payment: ${money(payment)}
- Minimum rule (if used): ${minPct.toFixed(1)}% or $25

Outputs:
- Time to debt-free: ${monthsToText(sim.months)}
- Total interest paid: ${money2(sim.totalInterest)}
- Total paid: ${money2(sim.totalPaid)}
- First-month interest (approx): ${money2(sim.firstMonthInterest)}

Note: Educational model only.`;

    try {
      await navigator.clipboard.writeText(text);
      alert('Results copied to clipboard!');
    } catch (e) {
      alert('Failed to copy results');
    }
  };

  const handleReset = () => {
    setScenario('card');
    setActiveStrat('minimum');
    setBalance(2000);
    setApr(24);
    setPayment(80);
    setMinPct(3);
  };

  const showMinBlock = scenario === 'card' || activeStrat === 'minimum';

  return (
    <div className="max-w-7xl mx-auto">
      <style>{`
        /* Custom slider styling for lumi colors */
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
          width: 100%;
          height: 20px;
        }

        /* Track styling */
        input[type="range"]::-webkit-slider-track {
          background: #E5D7C4;
          height: 10px;
          border-radius: 5px;
          border: 1px solid rgba(28, 28, 28, 0.08);
        }

        input[type="range"]::-moz-range-track {
          background: #E5D7C4;
          height: 10px;
          border-radius: 5px;
          border: 1px solid rgba(28, 28, 28, 0.08);
        }

        /* Filled portion (progress) - Firefox */
        input[type="range"]::-moz-range-progress {
          background: linear-gradient(90deg, #889063 0%, #354024 100%);
          height: 10px;
          border-radius: 5px 0 0 5px;
        }

        /* Thumb styling */
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #354024;
          border: 3px solid #889063;
          cursor: pointer;
          margin-top: -6px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
          transition: all 0.2s ease;
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #354024;
          border: 3px solid #889063;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }

        /* Hover and active states */
        input[type="range"]::-webkit-slider-thumb:hover {
          background: #889063;
          border-color: #354024;
          transform: scale(1.15);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        input[type="range"]::-moz-range-thumb:hover {
          background: #889063;
          border-color: #354024;
          transform: scale(1.15);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        input[type="range"]:active::-webkit-slider-thumb {
          background: #354024;
          border-color: #889063;
          transform: scale(1.1);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        input[type="range"]:active::-moz-range-thumb {
          background: #354024;
          border-color: #889063;
          transform: scale(1.1);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
        }

        /* Focus state */
        input[type="range"]:focus {
          outline: none;
        }

        input[type="range"]:focus::-webkit-slider-thumb {
          box-shadow: 0 0 0 3px rgba(136, 144, 99, 0.25), 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]:focus::-moz-range-thumb {
          box-shadow: 0 0 0 3px rgba(136, 144, 99, 0.25), 0 1px 4px rgba(0, 0, 0, 0.2);
        }

        /* Container for custom fill effect on webkit */
        .slider-container {
          position: relative;
          width: 100%;
        }

        .slider-fill {
          position: absolute;
          top: 50%;
          left: 0;
          height: 10px;
          background: linear-gradient(90deg, #889063 0%, #354024 100%);
          border-radius: 5px 0 0 5px;
          transform: translateY(-50%);
          pointer-events: none;
          border: 1px solid rgba(28, 28, 28, 0.08);
          border-right: none;
          transition: width 0.15s ease;
        }
      `}</style>
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-[#1C1C1C]/10">
        <div className="grid lg:grid-cols-[440px_1fr] gap-8">
          {/* Left Panel - Inputs */}
          <div className="bg-gradient-to-br from-[#E5D7C4] to-[#CFBB99] rounded-2xl p-6 space-y-4 shadow-lg">
            {/* Scenario */}
            <div className="bg-white rounded-2xl p-5 shadow-md border border-[#1C1C1C]/10">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="scenario" className="text-sm font-bold text-[#1C1C1C] opacity-85 uppercase tracking-wide">
                  Scenario
                </label>
                <div className="text-sm font-bold text-[#354024]">
                  {scenario === 'card' && 'Credit Card Balance'}
                  {scenario === 'student' && 'Student Loan'}
                  {scenario === 'auto' && 'Auto Loan'}
                  {scenario === 'personal' && 'Personal Loan'}
                </div>
              </div>
              <select
                id="scenario"
                value={scenario}
                onChange={(e) => setScenario(e.target.value)}
                className="w-full border-2 border-[#354024]/20 rounded-xl px-4 py-3 bg-white text-[#1C1C1C] text-lg focus:border-[#354024] focus:outline-none transition-colors"
                style={{ letterSpacing: '-0.89px' }}
              >
                <option value="card">Credit card balance</option>
                <option value="student">Student loan</option>
                <option value="auto">Auto loan</option>
                <option value="personal">Personal loan</option>
              </select>
              <p className="mt-3 text-sm text-[#1C1C1C] opacity-75">
                Scenarios pre-fill typical numbers. You can still customize everything.
              </p>

              {/* Strategy Tabs */}
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[#1C1C1C]/10">
                {['minimum', 'fixed', 'avalanche', 'snowball'].map((strat) => (
                  <button
                    key={strat}
                    onClick={() => setActiveStrat(strat)}
                    className={`border-2 rounded-full px-4 py-2 text-sm font-bold transition-all shadow-sm ${
                      activeStrat === strat
                        ? 'bg-[#354024] text-white border-[#354024] shadow-md scale-105'
                        : 'bg-white text-[#1C1C1C] border-[#889063] hover:border-[#354024] hover:scale-105'
                    }`}
                  >
                    {strat.charAt(0).toUpperCase() + strat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Balance */}
            <div className="bg-white border border-[#1C1C1C]/10 rounded-2xl p-4">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="balance" className="text-sm font-bold text-[#1C1C1C] opacity-85">
                  Starting balance
                </label>
                <div className="text-sm font-bold text-[#1C1C1C] opacity-90">
                  {money(balance)}
                </div>
              </div>
              <div className="slider-container">
                <input
                  id="balance"
                  type="range"
                  min="100"
                  max="25000"
                  step="50"
                  value={balance}
                  onChange={(e) => setBalance(Number(e.target.value))}
                  className="w-full"
                />
                <div className="slider-fill" style={{ width: `${((balance - 100) / (25000 - 100)) * 100}%` }}></div>
              </div>
              <p className="mt-3 text-sm text-[#1C1C1C] opacity-75">
                This is the amount you currently owe.
              </p>
            </div>

            {/* APR */}
            <div className="bg-white border border-[#1C1C1C]/10 rounded-2xl p-4">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="apr" className="text-sm font-bold text-[#1C1C1C] opacity-85">
                  APR (annual interest rate)
                </label>
                <div className="text-sm font-bold text-[#1C1C1C] opacity-90">
                  {apr.toFixed(1)}%
                </div>
              </div>
              <div className="slider-container">
                <input
                  id="apr"
                  type="range"
                  min="0"
                  max="35"
                  step="0.1"
                  value={apr}
                  onChange={(e) => setApr(Number(e.target.value))}
                  className="w-full"
                />
                <div className="slider-fill" style={{ width: `${(apr / 35) * 100}%` }}></div>
              </div>
              <p className="mt-3 text-sm text-[#1C1C1C] opacity-75">
                APR drives how fast interest stacks up, especially when balances are high.
              </p>
            </div>

            {/* Payment */}
            <div className="bg-white border border-[#1C1C1C]/10 rounded-2xl p-4">
              <div className="flex justify-between items-baseline mb-3">
                <label htmlFor="payment" className="text-sm font-bold text-[#1C1C1C] opacity-85">
                  Your monthly payment
                </label>
                <div className="text-sm font-bold text-[#1C1C1C] opacity-90">
                  {money(payment)}
                </div>
              </div>
              <div className="slider-container">
                <input
                  id="payment"
                  type="range"
                  min="10"
                  max="1500"
                  step="5"
                  value={payment}
                  onChange={(e) => setPayment(Number(e.target.value))}
                  className="w-full"
                />
                <div className="slider-fill" style={{ width: `${((payment - 10) / (1500 - 10)) * 100}%` }}></div>
              </div>
              <p className="mt-3 text-sm text-[#1C1C1C] opacity-75">
                Higher payments usually reduce interest and time dramatically.
              </p>
            </div>

            {/* Minimum Payment Rule */}
            {showMinBlock && (
              <div className="bg-white border border-[#1C1C1C]/10 rounded-2xl p-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="minPct" className="text-sm font-bold text-[#1C1C1C] opacity-85">
                    Minimum payment rule (credit cards)
                  </label>
                  <div className="text-sm font-bold text-[#1C1C1C] opacity-90">
                    {minPct.toFixed(1)}% (or $25)
                  </div>
                </div>
                <div className="slider-container">
                  <input
                    id="minPct"
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={minPct}
                    onChange={(e) => setMinPct(Number(e.target.value))}
                    className="w-full h-10"
                  />
                  <div className="slider-fill" style={{ width: `${(minPct - 1) / 4 * 100}%` }}></div>
                </div>
                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75">
                  Minimum is often a percentage of your balance, with a small floor amount.
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleReset}
                className="flex-1 border border-[#1C1C1C]/20 rounded-xl px-4 py-3 bg-white text-[#1C1C1C] font-bold text-lg hover:bg-[#E5D7C4] transition-colors"
                style={{ letterSpacing: '-0.89px' }}
              >
                Reset
              </button>
              <button
                onClick={handleCopy}
                className="flex-1 border border-[#354024] rounded-xl px-4 py-3 bg-[#354024] text-white font-bold text-lg hover:bg-[#889063] transition-colors"
                style={{ letterSpacing: '-0.89px' }}
              >
                Copy results
              </button>
            </div>

            {showWarning && (
              <div className="border border-[#FFCFD0] rounded-xl p-4 bg-[#FFCFD0]/20">
                <p className="text-sm text-[#1C1C1C] opacity-90">
                  Heads up: your monthly payment is close to or below monthly interest right now. Payoff may stall or grow. Increase your payment.
                </p>
              </div>
            )}

            <p className="text-sm text-[#1C1C1C] opacity-75 pt-2">
              Educational only. Real lenders can calculate payments and interest differently.
            </p>
          </div>

          {/* Right Panel - Results */}
          <div className="bg-white border border-[#1C1C1C]/10 rounded-2xl p-6">
            {/* Summary */}
            <div className="mb-6">
              {/* Hero Payoff Card */}
              <div className="bg-gradient-to-br from-[#354024] via-[#889063] to-[#CFBB99] rounded-3xl p-8 shadow-2xl mb-6 relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <div className="text-white/80 text-sm font-bold uppercase tracking-wider mb-3">
                    Estimated Payoff Timeline
                  </div>
                  <div className="text-5xl font-bold text-white mb-4" style={{ letterSpacing: '-0.89px' }}>
                    {monthsToText(sim.months)}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lg">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      {activeStrat === 'minimum' && 'Minimum payment style'}
                      {activeStrat === 'fixed' && 'Fixed payoff plan'}
                      {activeStrat === 'avalanche' && 'Avalanche demo (3 debts)'}
                      {activeStrat === 'snowball' && 'Snowball demo (3 debts)'}
                    </div>
                  </div>
                  <div className="text-white/90 text-lg font-medium bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    {getSubtitle()}
                  </div>
                </div>
              </div>

              {/* Decision Coach */}
              <div className="bg-[#E5D7C4] border-2 border-[#889063] rounded-2xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#354024] rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#354024] uppercase tracking-wide mb-2">
                      Decision Coach
                    </div>
                    <p className="text-lg text-[#1C1C1C] opacity-90 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                      {getCoachText()}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Key Outcomes */}
              <div className="bg-gradient-to-br from-[#889063] to-[#CFBB99] rounded-2xl p-6 shadow-lg">
                <h4 className="text-2xl font-bold text-white mb-5" style={{ letterSpacing: '-0.89px' }}>
                  Key outcomes
                </h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-xs text-[#1C1C1C] opacity-60 font-bold mb-2 uppercase tracking-wide">Time to debt-free</div>
                    <div className="text-2xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {monthsToText(sim.months)}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-xs text-[#1C1C1C] opacity-60 font-bold mb-2 uppercase tracking-wide">Total interest paid</div>
                    <div className="text-2xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {money2(sim.totalInterest)}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-xs text-[#1C1C1C] opacity-60 font-bold mb-2 uppercase tracking-wide">Total paid</div>
                    <div className="text-2xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {money2(sim.totalPaid)}
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-xs text-[#1C1C1C] opacity-60 font-bold mb-2 uppercase tracking-wide">First-month interest</div>
                    <div className="text-2xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {money2(sim.firstMonthInterest)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Strategy Explanation */}
              <div className="bg-[#E5D7C4] border border-[#1C1C1C]/10 rounded-2xl p-5">
                <h4 className="text-xl font-bold text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  Strategy explanation
                </h4>
                <ul className="space-y-2 text-lg text-[#1C1C1C] opacity-90">
                  {getStrategyExplanation().map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
