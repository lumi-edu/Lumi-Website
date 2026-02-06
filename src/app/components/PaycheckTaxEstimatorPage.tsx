import { Link } from './RouterLink';
import Footer from './Footer';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import { useState, useEffect } from 'react';

export default function PaycheckTaxEstimatorPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State
  const [incomeType, setIncomeType] = useState<'hourly' | 'salary'>('hourly');
  const [hourlyWage, setHourlyWage] = useState(15.00);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [annualSalary, setAnnualSalary] = useState(50000);
  const [payFrequency, setPayFrequency] = useState(26);
  const [workerType, setWorkerType] = useState<'w2' | '1099'>('w2');
  const [stateRate, setStateRate] = useState(0.0);
  const [warning, setWarning] = useState('');

  // Constants
  const STANDARD_DEDUCTION = 14600;
  const SS_RATE = 0.062;
  const MED_RATE = 0.0145;
  const SE_TAX_RATE = 0.153;

  const FED_BRACKETS = [
    [11600, 0.10],
    [47150, 0.12],
    [100525, 0.22],
    [191950, 0.24],
    [243725, 0.32],
    [609350, 0.35],
    [Infinity, 0.37]
  ] as const;

  // Helper functions
  const money0 = (n: number) => {
    const x = Math.round(n);
    return x.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  };

  const money2 = (n: number) => {
    return n.toLocaleString(undefined, { style: 'currency', currency: 'USD', maximumFractionDigits: 2 });
  };

  const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

  // Calculations
  const annualGross = () => {
    if (incomeType === 'salary') {
      return Math.max(0, annualSalary);
    }
    const h = Math.max(0, hourlyWage);
    const hw = Math.max(0, hoursPerWeek);
    return h * hw * 52;
  };

  const calcFederalTax = (annualGrossPay: number) => {
    const taxable = Math.max(0, annualGrossPay - STANDARD_DEDUCTION);
    let tax = 0;
    let prevCap = 0;

    for (const [cap, rate] of FED_BRACKETS) {
      const amountInBracket = Math.max(0, Math.min(taxable, cap) - prevCap);
      tax += amountInBracket * rate;
      prevCap = cap;
      if (taxable <= cap) break;
    }

    return tax;
  };

  const calcFICA = (annualGrossPay: number) => {
    if (workerType === '1099') {
      return annualGrossPay * SE_TAX_RATE;
    }
    return annualGrossPay * (SS_RATE + MED_RATE);
  };

  // Main calculation
  const aGross = annualGross();
  const pGross = aGross / payFrequency;

  const aFed = calcFederalTax(aGross);
  const aFica = calcFICA(aGross);
  const aState = aGross * (Math.max(0, stateRate) / 100);

  const pFed = aFed / payFrequency;
  const pFica = aFica / payFrequency;
  const pState = aState / payFrequency;

  const pTax = pFed + pFica + pState;
  const pNet = Math.max(0, pGross - pTax);

  const aTax = aFed + aFica + aState;
  const aNet = Math.max(0, aGross - aTax);

  // Update warning
  useEffect(() => {
    if (aGross === 0) {
      setWarning('Enter your pay info to see results.');
    } else if (pNet < 0) {
      setWarning('Your estimated taxes are higher than gross pay. Check your inputs.');
    } else {
      setWarning('');
    }
  }, [aGross, pNet]);

  // Bar chart percentages
  const total = Math.max(1, pGross);
  const netPct = clamp((pNet / total) * 100, 0, 100);
  const fedPct = clamp((pFed / total) * 100, 0, 100);
  const ficaPct = clamp((pFica / total) * 100, 0, 100);
  const statePct = clamp((pState / total) * 100, 0, 100);

  const col = (p: number) => Math.max(0.0001, p);

  // Reset function
  const handleReset = () => {
    setIncomeType('hourly');
    setHourlyWage(15.00);
    setHoursPerWeek(20);
    setAnnualSalary(50000);
    setPayFrequency(26);
    setWorkerType('w2');
    setStateRate(0.0);
  };

  // Copy function
  const handleCopy = async () => {
    const freqText = payFrequency === 52 ? 'Weekly (52 paychecks)' :
                     payFrequency === 26 ? 'Biweekly (26 paychecks)' :
                     payFrequency === 24 ? 'Semimonthly (24 paychecks)' :
                     'Monthly (12 paychecks)';

    const text =
`lumi Paycheck Tax Estimator Summary
Income type: ${incomeType === 'hourly' ? 'Hourly' : 'Salary'}
Pay frequency: ${freqText}
Worker type: ${workerType === 'w2' ? 'W-2' : '1099'}
State rate used: ${stateRate.toFixed(1)}%

Per paycheck:
- Gross: ${money0(pGross)}
- Federal estimate: ${money0(pFed)}
- FICA estimate: ${money0(pFica)}
- State estimate: ${money0(pState)}
- Take-home (net): ${money0(pNet)}

Annual:
- Gross: ${money0(aGross)}
- Total taxes estimated: ${money0(aTax)}
- Take-home (net): ${money0(aNet)}

Note: Educational estimate. Real withholding varies by W-4, deductions, credits, and employer payroll rules.`;

    try {
      await navigator.clipboard.writeText(text);
      alert('Summary copied to clipboard!');
    } catch (e) {
      alert('Failed to copy summary.');
    }
  };

  const getFrequencyLabel = () => {
    if (payFrequency === 52) return 'Weekly (52)';
    if (payFrequency === 26) return 'Biweekly (26)';
    if (payFrequency === 24) return 'Semimonthly (24)';
    return 'Monthly (12)';
  };

  const getFrequencyHint = () => {
    if (payFrequency === 52) return 'Weekly means you get paid once per week.';
    if (payFrequency === 26) return 'Biweekly means every two weeks.';
    if (payFrequency === 24) return 'Semimonthly means twice per month (usually on the 1st and 15th).';
    return 'Monthly means you get paid once per month.';
  };

  const getWorkerTypeHint = () => {
    if (workerType === 'w2') return 'W-2 employees have taxes automatically withheld from each paycheck.';
    return '1099 means no automatic withholding, and you may owe self-employment tax.';
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

      {/* Hero Section */}
      <div className="bg-[#354024] text-white px-6 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl text-[#FFCFD0] mb-6" style={{ letterSpacing: '-0.89px' }}>
            Paycheck Tax Estimator
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
            Estimate your take-home pay with a clear breakdown of federal withholding, FICA, and state taxes
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-6">
            {/* Inputs Panel */}
            <div className="border-2 border-[#354024] rounded-2xl p-6 bg-white">
              {/* Income Type */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Income type
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    {incomeType === 'hourly' ? 'Hourly' : 'Salary'}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={() => setIncomeType('hourly')}
                    className={`border-2 rounded-full px-5 py-3 font-semibold text-base transition-all ${
                      incomeType === 'hourly'
                        ? 'bg-[#354024] border-[#354024] text-white'
                        : 'bg-white border-[#889063] text-[#1C1C1C] hover:bg-[#E5D7C4]'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    Hourly
                  </button>
                  <button
                    type="button"
                    onClick={() => setIncomeType('salary')}
                    className={`border-2 rounded-full px-5 py-3 font-semibold text-base transition-all ${
                      incomeType === 'salary'
                        ? 'bg-[#354024] border-[#354024] text-white'
                        : 'bg-white border-[#889063] text-[#1C1C1C] hover:bg-[#E5D7C4]'
                    }`}
                    style={{ letterSpacing: '-0.89px' }}
                  >
                    Salary
                  </button>
                </div>

                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  Use hourly if you are paid by the hour. Use salary if you have an annual amount.
                </p>
              </div>

              {/* Hourly Wage */}
              {incomeType === 'hourly' && (
                <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                  <div className="flex justify-between items-baseline mb-3">
                    <label htmlFor="hourlyWage" className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Hourly wage
                    </label>
                    <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {money2(hourlyWage)}
                    </div>
                  </div>
                  <input
                    id="hourlyWage"
                    type="number"
                    min="0"
                    step="0.01"
                    value={hourlyWage}
                    onChange={(e) => setHourlyWage(Number(e.target.value))}
                    className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                    style={{ letterSpacing: '-0.89px' }}
                  />
                  <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                    Example: $15.00/hour.
                  </p>
                </div>
              )}

              {/* Hours per Week */}
              {incomeType === 'hourly' && (
                <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                  <div className="flex justify-between items-baseline mb-3">
                    <label htmlFor="hoursPerWeek" className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Hours per week
                    </label>
                    <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {hoursPerWeek}
                    </div>
                  </div>
                  <input
                    id="hoursPerWeek"
                    type="number"
                    min="0"
                    step="0.5"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                    style={{ letterSpacing: '-0.89px' }}
                  />
                  <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                    If your hours vary, use a typical week.
                  </p>
                </div>
              )}

              {/* Annual Salary */}
              {incomeType === 'salary' && (
                <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                  <div className="flex justify-between items-baseline mb-3">
                    <label htmlFor="annualSalary" className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      Annual salary
                    </label>
                    <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                      {money0(annualSalary)}
                    </div>
                  </div>
                  <input
                    id="annualSalary"
                    type="number"
                    min="0"
                    step="100"
                    value={annualSalary}
                    onChange={(e) => setAnnualSalary(Number(e.target.value))}
                    className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                    style={{ letterSpacing: '-0.89px' }}
                  />
                  <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                    Example: $50,000/year.
                  </p>
                </div>
              )}

              {/* Pay Frequency */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="payFrequency" className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Pay frequency
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    {getFrequencyLabel()}
                  </div>
                </div>
                <select
                  id="payFrequency"
                  value={payFrequency}
                  onChange={(e) => setPayFrequency(Number(e.target.value))}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  <option value="52">Weekly (52 paychecks)</option>
                  <option value="26">Biweekly (26 paychecks)</option>
                  <option value="24">Semimonthly (24 paychecks)</option>
                  <option value="12">Monthly (12 paychecks)</option>
                </select>
                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  {getFrequencyHint()}
                </p>
              </div>

              {/* Worker Type */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="workerType" className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Worker type
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    {workerType === 'w2' ? 'W-2 employee' : '1099 contractor'}
                  </div>
                </div>
                <select
                  id="workerType"
                  value={workerType}
                  onChange={(e) => setWorkerType(e.target.value as 'w2' | '1099')}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  <option value="w2">W-2 employee (taxes withheld)</option>
                  <option value="1099">1099 contractor (you set aside taxes)</option>
                </select>
                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  {getWorkerTypeHint()}
                </p>
              </div>

              {/* State Tax Rate */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="stateRate" className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    State tax estimate (optional)
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    {stateRate.toFixed(1)}%
                  </div>
                </div>
                <input
                  id="stateRate"
                  type="number"
                  min="0"
                  step="0.1"
                  value={stateRate}
                  onChange={(e) => setStateRate(Number(e.target.value))}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                  style={{ letterSpacing: '-0.89px' }}
                />
                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  Enter a rough % if your state has income tax. If you are not sure, leave 0.
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 flex-wrap mt-4">
                <button
                  onClick={handleReset}
                  className="border-2 border-[#889063] rounded-xl px-5 py-3 bg-white font-semibold text-base text-[#1C1C1C] hover:bg-[#E5D7C4] transition-all"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  Reset
                </button>
                <button
                  onClick={handleCopy}
                  className="border-2 border-[#354024] rounded-xl px-5 py-3 bg-[#354024] font-semibold text-base text-white hover:opacity-90 transition-all"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  Copy summary
                </button>
              </div>

              {/* Warning */}
              {warning && (
                <div className="mt-4 border-2 border-[#FFCFD0] rounded-xl p-4 bg-[#FFCFD0] text-[#1C1C1C] text-base font-semibold" style={{ letterSpacing: '-0.89px' }}>
                  {warning}
                </div>
              )}

              <p className="mt-4 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                This is a learning tool. Real withholding depends on W-4 choices, deductions, credits, and employer payroll rules.
              </p>
            </div>

            {/* Output Panel */}
            <div className="border-2 border-[#354024] rounded-2xl p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#354024] mb-2" style={{ letterSpacing: '-0.89px' }}>
                    Gross pay: {money0(pGross)}
                  </h2>
                  <h2 className="text-3xl font-bold text-[#354024] mb-3" style={{ letterSpacing: '-0.89px' }}>
                    Estimated take-home: {money0(pNet)}
                  </h2>
                  <div className="inline-block px-4 py-2 rounded-full bg-[#FFCFD0] text-[#1C1C1C] text-sm font-semibold" style={{ letterSpacing: '-0.89px' }}>
                    {workerType === 'w2' ? 'W-2 estimate (with withholding)' : '1099 estimate (set aside taxes yourself)'}
                  </div>
                  <p className="mt-3 text-base text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                    per paycheck
                  </p>
                </div>

                <div className="border-2 border-[#889063] rounded-2xl p-5 bg-[#E5D7C4] text-base leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                  <strong className="text-[#354024]">How to read this:</strong> Gross pay is what you earned. Taxes and withholding are what gets taken out or what you should set aside. Take-home (net) is what lands in your account.
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Per Paycheck */}
                <div className="border-2 border-[#889063] rounded-2xl p-5 bg-[#E5D7C4]">
                  <h3 className="text-xl font-semibold text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    Per paycheck breakdown
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        Gross pay
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(pGross)}
                      </div>
                    </div>
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        Federal estimate
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(pFed)}
                      </div>
                    </div>
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        FICA estimate
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(pFica)}
                      </div>
                    </div>
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        State estimate
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(pState)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Annual */}
                <div className="border-2 border-[#889063] rounded-2xl p-5 bg-[#E5D7C4]">
                  <h3 className="text-xl font-semibold text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>
                    Annual snapshot
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        Annual gross
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(aGross)}
                      </div>
                    </div>
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        Annual taxes est.
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(aTax)}
                      </div>
                    </div>
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        Annual take-home
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {money0(aNet)}
                      </div>
                    </div>
                    <div className="border-2 border-[#889063] rounded-xl bg-white p-3">
                      <div className="text-xs text-[#1C1C1C] opacity-75 font-semibold mb-1" style={{ letterSpacing: '-0.89px' }}>
                        Suggested "set aside" (1099)
                      </div>
                      <div className="text-xl font-bold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                        {workerType === '1099' ? money0(pTax) + ' per paycheck' : '—'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bar Chart */}
              <div className="border-2 border-[#889063] rounded-2xl p-5 bg-[#E5D7C4]">
                <div className="h-5 rounded-full overflow-hidden border-2 border-[#354024] bg-[#CFBB99] grid"
                     style={{ gridTemplateColumns: `${col(netPct)}fr ${col(fedPct)}fr ${col(ficaPct)}fr ${col(statePct)}fr` }}>
                  <div className="h-full bg-[#354024]" title="Net"></div>
                  <div className="h-full bg-[#889063]" title="Federal"></div>
                  <div className="h-full bg-[#CFBB99]" title="FICA"></div>
                  <div className="h-full bg-[#FFCFD0]" title="State"></div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4 text-sm" style={{ letterSpacing: '-0.89px' }}>
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-[#1C1C1C] bg-[#354024] mr-2"></span>
                    Net
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-[#1C1C1C] bg-[#889063] mr-2"></span>
                    Federal
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-[#1C1C1C] bg-[#CFBB99] mr-2"></span>
                    FICA
                  </span>
                  <span className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full border-2 border-[#1C1C1C] bg-[#FFCFD0] mr-2"></span>
                    State
                  </span>
                </div>

                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75 leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                  {workerType === '1099' 
                    ? "1099 tip: since taxes are not withheld, a common move is to transfer your estimated tax set-aside into a separate savings account every payday."
                    : "W-2 tip: your actual withholding depends on your W-4. If you consistently owe money at tax time, you may need more withholding."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t-2 border-[#354024] bg-[#889063] px-6 py-8 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/resources"
            onClick={scrollToTop}
            className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity"
            style={{ letterSpacing: '-0.89px' }}
          >
            ← Back to Resources
          </Link>
          <Link
            to="/tax-essentials"
            onClick={scrollToTop}
            className="text-lg text-[#1C1C1C] hover:opacity-70 transition-opacity"
            style={{ letterSpacing: '-0.89px' }}
          >
            View Tax Essentials Module →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}