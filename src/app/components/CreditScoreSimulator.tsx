import { useState, useEffect } from 'react';

interface SimulatorState {
  payment: number;
  utilization: number;
  age: number;
  inquiries: number;
  mix: 'basic' | 'some' | 'strong';
}

interface ComputeResult {
  raw: number;
  lo: number;
  hi: number;
  subs: {
    sp: number;
    su: number;
    sa: number;
    si: number;
    sm: number;
  };
  inputs: {
    onTime: number;
    u: number;
    a: number;
    q: number;
    m: string;
  };
}

export default function CreditScoreSimulator() {
  const [state, setState] = useState<SimulatorState>({
    payment: 100,
    utilization: 10,
    age: 3,
    inquiries: 0,
    mix: 'basic'
  });

  const [result, setResult] = useState<ComputeResult | null>(null);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

  const scorePayment = (onTimePct: number) => {
    const x = clamp(onTimePct, 70, 100);
    const t = (x - 70) / 30;
    const curved = Math.pow(t, 2.2);
    return clamp(0.05 + 0.95 * curved, 0, 1);
  };

  const scoreUtilization = (utilPct: number) => {
    const u = clamp(utilPct, 0, 100);
    if (u <= 9) return 1.0;
    if (u <= 29) return 0.90 - ((u - 10) / 19) * 0.20;
    if (u <= 49) return 0.68 - ((u - 30) / 19) * 0.28;
    if (u <= 74) return 0.38 - ((u - 50) / 24) * 0.23;
    return 0.10;
  };

  const scoreAge = (avgYears: number) => {
    const a = clamp(avgYears, 0, 15);
    const t = a / 15;
    const curved = Math.pow(t, 0.75);
    return clamp(0.10 + 0.90 * curved, 0, 1);
  };

  const scoreInquiries = (num: number) => {
    const n = clamp(num, 0, 10);
    const penalty = (n === 0) ? 0 : (0.08 + 0.05 * (n - 1));
    const raw = 1.0 - penalty;
    return clamp(raw, 0.35, 1.0);
  };

  const scoreMix = (val: string) => {
    if (val === 'strong') return 1.0;
    if (val === 'some') return 0.82;
    return 0.65;
  };

  const compute = (): ComputeResult => {
    const sp = scorePayment(state.payment);
    const su = scoreUtilization(state.utilization);
    const sa = scoreAge(state.age);
    const si = scoreInquiries(state.inquiries);
    const sm = scoreMix(state.mix);

    const weights = { pay: 0.35, util: 0.30, age: 0.15, inq: 0.10, mix: 0.10 };
    const raw = sp * weights.pay + su * weights.util + sa * weights.age + si * weights.inq + sm * weights.mix;

    const center = 300 + raw * (850 - 300);
    const spread = 40 + (1 - raw) * 70;
    const lo = clamp(center - spread, 300, 850);
    const hi = clamp(center + spread, 300, 850);

    return {
      raw,
      lo,
      hi,
      subs: { sp, su, sa, si, sm },
      inputs: { onTime: state.payment, u: state.utilization, a: state.age, q: state.inquiries, m: state.mix }
    };
  };

  const tierFromCenter = (c: number) => {
    if (c >= 800) return 'Excellent';
    if (c >= 740) return 'Very good';
    if (c >= 670) return 'Good';
    if (c >= 580) return 'Fair';
    return 'Needs work';
  };

  const getMixLabel = () => {
    if (state.mix === 'strong') return 'Strong';
    if (state.mix === 'some') return 'Some';
    return 'Basic';
  };

  const buildGuidance = (model: ComputeResult) => {
    const { inputs, subs } = model;
    const factors = [
      {
        key: 'Payment history',
        score: subs.sp,
        weight: 0.35,
        tipFast: 'Set autopay for minimum due so you never miss a payment.',
        tipLong: 'Keep every account current for months. Late marks fade with time.'
      },
      {
        key: 'Utilization',
        score: subs.su,
        weight: 0.30,
        tipFast: 'Pay your balance earlier in the month so reported utilization stays low.',
        tipLong: 'Increase credit limits slowly over time while keeping spending stable.'
      },
      {
        key: 'Credit age',
        score: subs.sa,
        weight: 0.15,
        tipFast: 'Avoid closing your oldest account unless you must.',
        tipLong: 'Time helps here. Keep accounts open and active with small usage.'
      },
      {
        key: 'New credit',
        score: subs.si,
        weight: 0.10,
        tipFast: 'Pause applications for a bit to let inquiries cool off.',
        tipLong: 'Space applications out and only apply when you actually need it.'
      },
      {
        key: 'Credit mix',
        score: subs.sm,
        weight: 0.10,
        tipFast: 'Do not open new debt just for "mix". Focus on the big factors first.',
        tipLong: 'A healthy mix can happen naturally over time (card + installment loan) if it fits your life.'
      }
    ];

    factors.sort((a, b) => ((1 - b.score) * b.weight) - ((1 - a.score) * a.weight));

    const priority = [
      `Top priority: ${factors[0].key}. This has the biggest impact right now.`,
      `Second: ${factors[1].key}. Fixing this can move your score meaningfully.`,
      `Third: ${factors[2].key}. Smaller impact, but still worth improving.`
    ];

    const fastWins = [];
    if (inputs.u >= 30) fastWins.push('Lower utilization: aim under 30% first, then under 10% if possible.');
    else fastWins.push('Keep utilization low: staying under 10–30% helps a lot.');

    if (inputs.onTime < 100) fastWins.push('Protect payment history: set reminders or autopay. One late payment can drop scores hard.');
    else fastWins.push('Keep payment history perfect: on-time payments are the strongest signal.');

    if (inputs.q >= 2) fastWins.push('Slow down new applications: too many inquiries can hurt temporarily.');
    else fastWins.push('Avoid unnecessary applications: fewer inquiries helps maintain stability.');

    fastWins.push(factors[0].tipFast);
    fastWins.push(factors[1].tipFast);

    const longGame = [
      factors[0].tipLong,
      'Let accounts age. Credit improves when responsible habits stay consistent over time.',
      'Diversify only when it naturally fits your life, not just to boost a number.'
    ];

    return { priority, fastWins, longGame };
  };

  const applyPreset = (preset: string) => {
    const presets: { [key: string]: SimulatorState } = {
      excellent: { payment: 100, utilization: 8, age: 6, inquiries: 0, mix: 'some' },
      good: { payment: 99, utilization: 20, age: 3, inquiries: 1, mix: 'basic' },
      risky: { payment: 95, utilization: 75, age: 1, inquiries: 5, mix: 'basic' },
      new: { payment: 100, utilization: 15, age: 0.5, inquiries: 1, mix: 'basic' }
    };
    if (presets[preset]) {
      setState(presets[preset]);
      setActivePreset(preset);
    }
  };

  const handleReset = () => {
    setState({
      payment: 100,
      utilization: 10,
      age: 3,
      inquiries: 0,
      mix: 'basic'
    });
    setActivePreset(null);
  };

  useEffect(() => {
    setResult(compute());
  }, [state]);

  if (!result) return null;

  const center = (result.lo + result.hi) / 2;
  const tier = tierFromCenter(center);
  const guidance = buildGuidance(result);
  const pctWidth = clamp(result.raw * 100, 0, 100);

  const isRealisticBand = result.inputs.onTime < 98 || result.inputs.u > 30 || result.inputs.q > 2;
  const explanation = isRealisticBand
    ? 'This range assumes your habits could swing the score depending on consistency. Improve the biggest factor first.'
    : 'With strong habits, the model shows a tighter range. Keep doing the basics consistently.';

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
          Credit Score Factor Simulator
        </h2>
        <p className="text-lg text-[#1C1C1C] opacity-80" style={{ letterSpacing: '-0.89px' }}>
          Move the sliders to see what helps or hurts a credit score. This is an educational model, not your actual score.
        </p>
      </div>

      <div className="grid lg:grid-cols-[450px_1fr] gap-8">
        {/* Controls Panel */}
        <div className="bg-[#E5D7C4] rounded-2xl p-6 space-y-5">
          {/* Payment History */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[#1C1C1C] text-base" style={{ letterSpacing: '-0.89px' }}>
                Payment history (on-time rate)
              </label>
              <span className="text-[#1C1C1C] text-lg font-bold" style={{ letterSpacing: '-0.89px' }}>
                {state.payment}%
              </span>
            </div>
            <input
              type="range"
              min="70"
              max="100"
              step="1"
              value={state.payment}
              onChange={(e) => setState({ ...state, payment: Number(e.target.value) })}
              className="w-full h-3 bg-[#354024]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#354024] [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#354024] [&::-moz-range-thumb]:border-0"
            />
            <p className="text-sm text-[#1C1C1C] opacity-70 mt-2" style={{ letterSpacing: '-0.89px' }}>
              Most important factor. Even a few late payments can hurt a lot.
            </p>
          </div>

          {/* Credit Utilization */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[#1C1C1C] text-base" style={{ letterSpacing: '-0.89px' }}>
                Credit utilization (percent used)
              </label>
              <span className="text-[#1C1C1C] text-lg font-bold" style={{ letterSpacing: '-0.89px' }}>
                {state.utilization}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={state.utilization}
              onChange={(e) => setState({ ...state, utilization: Number(e.target.value) })}
              className="w-full h-3 bg-[#354024]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#354024] [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#354024] [&::-moz-range-thumb]:border-0"
            />
            <p className="text-sm text-[#1C1C1C] opacity-70 mt-2" style={{ letterSpacing: '-0.89px' }}>
              Lower is better. Under 30% is a common rule, under 10% is excellent.
            </p>
          </div>

          {/* Credit Age */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[#1C1C1C] text-base" style={{ letterSpacing: '-0.89px' }}>
                Credit age (average age of accounts)
              </label>
              <span className="text-[#1C1C1C] text-lg font-bold" style={{ letterSpacing: '-0.89px' }}>
                {state.age % 1 === 0 ? state.age : state.age.toFixed(1)} years
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="15"
              step="0.5"
              value={state.age}
              onChange={(e) => setState({ ...state, age: Number(e.target.value) })}
              className="w-full h-3 bg-[#354024]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#354024] [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#354024] [&::-moz-range-thumb]:border-0"
            />
            <p className="text-sm text-[#1C1C1C] opacity-70 mt-2" style={{ letterSpacing: '-0.89px' }}>
              Longer history helps because it shows consistency over time.
            </p>
          </div>

          {/* Hard Inquiries */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[#1C1C1C] text-base" style={{ letterSpacing: '-0.89px' }}>
                Hard inquiries (last 12 months)
              </label>
              <span className="text-[#1C1C1C] text-lg font-bold" style={{ letterSpacing: '-0.89px' }}>
                {state.inquiries}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={state.inquiries}
              onChange={(e) => setState({ ...state, inquiries: Number(e.target.value) })}
              className="w-full h-3 bg-[#354024]/20 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#354024] [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#354024] [&::-moz-range-thumb]:border-0"
            />
            <p className="text-sm text-[#1C1C1C] opacity-70 mt-2" style={{ letterSpacing: '-0.89px' }}>
              Lots of new applications at once can lower scores temporarily.
            </p>
          </div>

          {/* Credit Mix */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <label className="text-[#1C1C1C] text-base" style={{ letterSpacing: '-0.89px' }}>
                Credit mix
              </label>
              <span className="text-[#1C1C1C] text-lg font-bold" style={{ letterSpacing: '-0.89px' }}>
                {getMixLabel()}
              </span>
            </div>
            <select
              value={state.mix}
              onChange={(e) => setState({ ...state, mix: e.target.value as 'basic' | 'some' | 'strong' })}
              className="w-full p-3 border-2 border-[#354024]/20 rounded-xl bg-white text-[#1C1C1C] text-base cursor-pointer"
              style={{ letterSpacing: '-0.89px' }}
            >
              <option value="basic">Basic (one type)</option>
              <option value="some">Some variety (2 types)</option>
              <option value="strong">Strong mix (3+ types)</option>
            </select>
            <p className="text-sm text-[#1C1C1C] opacity-70 mt-2" style={{ letterSpacing: '-0.89px' }}>
              Not required, but a healthy mix can help slightly.
            </p>
          </div>

          {/* Presets */}
          <div className="pt-4">
            <p className="text-sm text-[#1C1C1C] opacity-70 mb-3" style={{ letterSpacing: '-0.89px' }}>
              Quick presets:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { id: 'excellent', label: 'Excellent habits' },
                { id: 'good', label: 'Pretty good' },
                { id: 'risky', label: 'Risky' },
                { id: 'new', label: 'New to credit' }
              ].map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.id)}
                  className={`px-4 py-2 rounded-full text-sm border-2 transition-all ${
                    activePreset === preset.id
                      ? 'bg-[#354024] text-white border-[#354024]'
                      : 'bg-white text-[#1C1C1C] border-[#354024]/20 hover:border-[#354024]/40'
                  }`}
                  style={{ letterSpacing: '-0.89px' }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="w-full bg-[#889063] text-white py-3 rounded-xl text-base hover:opacity-90 transition-opacity"
            style={{ letterSpacing: '-0.89px' }}
          >
            Reset to defaults
          </button>

          <p className="text-xs text-[#1C1C1C] opacity-60 mt-4" style={{ letterSpacing: '-0.89px' }}>
            This tool approximates common scoring ideas: payment history and utilization matter most. Results are ranges, not exact numbers.
          </p>
        </div>

        {/* Results Panel */}
        <div className="space-y-6">
          {/* Score Display */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#354024]/10">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <p className="text-5xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                  {Math.round(result.lo)}–{Math.round(result.hi)}
                </p>
                <div className="inline-block px-4 py-2 bg-[#889063] text-white rounded-full text-base mb-4" style={{ letterSpacing: '-0.89px' }}>
                  {tier}
                </div>
                <div className="w-full h-4 bg-[#E5D7C4] rounded-full overflow-hidden border-2 border-[#354024]/20">
                  <div
                    className="h-full bg-gradient-to-r from-[#354024] to-[#889063] transition-all duration-500"
                    style={{ width: `${pctWidth}%` }}
                  />
                </div>
                <p className="text-sm text-[#1C1C1C] opacity-70 mt-3" style={{ letterSpacing: '-0.89px' }}>
                  {explanation}
                </p>
              </div>

              <div className="bg-[#FFCFD0]/30 rounded-xl p-6 border-2 border-[#FFCFD0]/50">
                <h3 className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  What to fix first
                </h3>
                <ul className="space-y-2">
                  {guidance.priority.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1C1C1C] opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fast Wins & Long Game */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#889063]/10 rounded-xl p-6 border-2 border-[#889063]/20">
                <h3 className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  Fast wins (usually easiest)
                </h3>
                <ul className="space-y-2">
                  {guidance.fastWins.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1C1C1C] opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#CFBB99]/30 rounded-xl p-6 border-2 border-[#CFBB99]/50">
                <h3 className="text-lg text-[#1C1C1C] mb-3" style={{ letterSpacing: '-0.89px' }}>
                  Long game (takes time)
                </h3>
                <ul className="space-y-2">
                  {guidance.longGame.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#1C1C1C] opacity-90" style={{ letterSpacing: '-0.89px' }}>
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Factor Breakdown */}
            <div className="pt-6 border-t-2 border-[#354024]/10">
              <h3 className="text-xl text-[#1C1C1C] mb-4" style={{ letterSpacing: '-0.89px' }}>
                Factor breakdown
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Payment history', weight: '35%', score: Math.round(result.subs.sp * 100) },
                  { label: 'Utilization', weight: '30%', score: Math.round(result.subs.su * 100) },
                  { label: 'Credit age', weight: '15%', score: Math.round(result.subs.sa * 100) },
                  { label: 'New credit', weight: '10%', score: Math.round(result.subs.si * 100) },
                  { label: 'Credit mix', weight: '10%', score: Math.round(result.subs.sm * 100) }
                ].map((factor, idx) => (
                  <div key={idx} className="grid grid-cols-[140px_1fr_70px] gap-4 items-center bg-[#E5D7C4]/40 p-4 rounded-xl">
                    <div className="text-sm text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      <span className="font-bold">{factor.label}</span>
                      <span className="opacity-60 ml-1">({factor.weight})</span>
                    </div>
                    <div className="h-3 bg-[#E5D7C4] rounded-full overflow-hidden border border-[#354024]/20">
                      <div
                        className="h-full bg-gradient-to-r from-[#354024] to-[#889063] transition-all duration-500"
                        style={{ width: `${factor.score}%` }}
                      />
                    </div>
                    <div className="text-sm text-[#1C1C1C] text-right" style={{ letterSpacing: '-0.89px' }}>
                      {factor.score}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
