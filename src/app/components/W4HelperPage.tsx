import { Link } from './RouterLink';
import Footer from './Footer';
import lumiLogo from '../assets/lumilogo.png';
import { useState, useEffect } from 'react';

export default function W4HelperPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // State
  const [name, setName] = useState('');
  const [filingStatus, setFilingStatus] = useState<'single' | 'married' | 'hoh'>('single');
  const [multipleJobs, setMultipleJobs] = useState(false);
  const [spouseWorks, setSpouseWorks] = useState(false);
  const [dependents, setDependents] = useState(0);
  const [extraWithholding, setExtraWithholding] = useState(0);
  const [sideIncome, setSideIncome] = useState(false);
  const [notes, setNotes] = useState('');
  const [warning, setWarning] = useState('');

  // Helper functions
  const getFilingStatusText = (status: string) => {
    if (status === 'married') return 'Married filing jointly';
    if (status === 'hoh') return 'Head of household';
    return 'Single or Married filing separately';
  };

  const buildSummary = () => {
    const lines: string[] = [];

    lines.push('W-4 HELPER SUMMARY');
    lines.push('----------------------------------------');
    lines.push(`Step 1 (Filing status): ${getFilingStatusText(filingStatus)}`);

    if (name) lines.push(`Name (optional): ${name}`);

    lines.push('');
    lines.push('Step 2 (Multiple jobs):');
    if (multipleJobs || (filingStatus === 'married' && spouseWorks)) {
      const parts: string[] = [];
      if (multipleJobs) parts.push('I have multiple jobs.');
      if (filingStatus === 'married' && spouseWorks) parts.push('My spouse works.');
      lines.push(`- Check Step 2 because: ${parts.join(' ')}`);
      lines.push('- If your employer asks which option: use the multiple jobs/worksheet approach or the online estimator approach (ask HR which they prefer).');
    } else {
      lines.push('- Leave Step 2 unchecked (single job situation).');
    }

    lines.push('');
    lines.push('Step 3 (Dependents):');
    if (dependents > 0) {
      lines.push(`- You said you claim ${dependents} dependent(s). Only include dependents if you legally claim them.`);
    } else {
      lines.push('- Most students: leave dependents at 0.');
    }

    lines.push('');
    lines.push('Step 4 (Adjustments):');
    if (extraWithholding > 0) {
      lines.push(`- Extra withholding: add $${extraWithholding} per paycheck (this can help avoid owing later).`);
    } else {
      lines.push('- Extra withholding: $0 (default).');
    }
    if (sideIncome) {
      lines.push('- Side income: you said you have income without withholding. Consider adding a small extra withholding amount or setting aside money separately.');
    } else {
      lines.push('- Side income: none selected.');
    }

    lines.push('');
    lines.push('Step 5 (Signature):');
    lines.push('- Sign and date the form before submitting to your employer.');

    if (notes) {
      lines.push('');
      lines.push('Your notes:');
      lines.push(notes);
    }

    // Generate warnings
    const warnings: string[] = [];
    if (multipleJobs && extraWithholding === 0) warnings.push('You selected multiple jobs. If withholding feels low, consider extra withholding.');
    if (sideIncome && extraWithholding === 0) warnings.push('You selected side income. Consider setting aside money or adding extra withholding.');
    if (dependents > 0) warnings.push('Double-check that you legally claim dependents before entering this.');

    if (warnings.length) {
      lines.push('');
      lines.push('Quick heads-up:');
      warnings.forEach(w => lines.push(`- ${w}`));
    }

    return lines.join('\n');
  };

  // Update warning
  useEffect(() => {
    const warnings: string[] = [];
    if (multipleJobs && extraWithholding === 0) warnings.push('multiple jobs');
    if (sideIncome && extraWithholding === 0) warnings.push('side income');

    if (warnings.length > 0) {
      setWarning(`Reminder: ${warnings.join(' and ')} often require adjustments to avoid owing later.`);
    } else {
      setWarning('');
    }
  }, [multipleJobs, sideIncome, extraWithholding]);

  const summary = buildSummary();

  // Reset function
  const handleReset = () => {
    setName('');
    setFilingStatus('single');
    setMultipleJobs(false);
    setSpouseWorks(false);
    setDependents(0);
    setExtraWithholding(0);
    setSideIncome(false);
    setNotes('');
  };

  // Copy function
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      alert('Summary copied to clipboard!');
    } catch (e) {
      alert('Failed to copy summary.');
    }
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
            W-4 Helper
          </h1>
          <p className="text-xl md:text-2xl text-white opacity-90 max-w-3xl mx-auto" style={{ letterSpacing: '-0.89px' }}>
            Answer a few questions and get a simple "what to put on your W-4" summary you can copy or print
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-16 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-6">
            {/* Inputs Panel */}
            <div className="border-2 border-[#354024] rounded-2xl p-6 bg-white">
              {/* Step 1: Basic Info */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Step 1: Basic info
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    W-4 Step 1
                  </div>
                </div>

                <label htmlFor="w4Name" className="block text-sm font-semibold text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>
                  Full name (optional)
                </label>
                <input
                  id="w4Name"
                  type="text"
                  placeholder="Example: Alex Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024] mb-3"
                  style={{ letterSpacing: '-0.89px' }}
                />

                <label htmlFor="w4Status" className="block text-sm font-semibold text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>
                  Filing status
                </label>
                <select
                  id="w4Status"
                  value={filingStatus}
                  onChange={(e) => setFilingStatus(e.target.value as 'single' | 'married' | 'hoh')}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                  style={{ letterSpacing: '-0.89px' }}
                >
                  <option value="single">Single or Married filing separately</option>
                  <option value="married">Married filing jointly</option>
                  <option value="hoh">Head of household</option>
                </select>

                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  If you are not sure, many first jobs use "Single" as the default. If your family files differently, ask a parent or guardian.
                </p>
              </div>

              {/* Step 2: Multiple Jobs */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Step 2: Do you have multiple jobs?
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    W-4 Step 2
                  </div>
                </div>

                <label className="flex gap-3 p-4 border-2 border-[#889063] rounded-xl bg-white cursor-pointer hover:bg-[#E5D7C4] transition-colors mb-3">
                  <input
                    type="checkbox"
                    checked={multipleJobs}
                    onChange={(e) => setMultipleJobs(e.target.checked)}
                    className="w-5 h-5 mt-0.5 accent-[#354024]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      I have more than one job at the same time
                    </div>
                    <div className="text-sm text-[#1C1C1C] opacity-75 mt-1" style={{ letterSpacing: '-0.89px' }}>
                      Or I have two jobs total, and both incomes matter for withholding.
                    </div>
                  </div>
                </label>

                <label className="flex gap-3 p-4 border-2 border-[#889063] rounded-xl bg-white cursor-pointer hover:bg-[#E5D7C4] transition-colors">
                  <input
                    type="checkbox"
                    checked={spouseWorks}
                    onChange={(e) => setSpouseWorks(e.target.checked)}
                    className="w-5 h-5 mt-0.5 accent-[#354024]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      My spouse also works
                    </div>
                    <div className="text-sm text-[#1C1C1C] opacity-75 mt-1" style={{ letterSpacing: '-0.89px' }}>
                      This matters only if you selected a married filing status.
                    </div>
                  </div>
                </label>

                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  If you have multiple jobs and do not adjust Step 2, you might have too little withheld and owe later.
                </p>
              </div>

              {/* Step 3: Dependents */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Step 3: Dependents
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    W-4 Step 3
                  </div>
                </div>

                <label htmlFor="w4Dependents" className="block text-sm font-semibold text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>
                  Do you claim dependents? (most students: 0)
                </label>
                <input
                  id="w4Dependents"
                  type="number"
                  min="0"
                  step="1"
                  value={dependents}
                  onChange={(e) => setDependents(Number(e.target.value))}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024]"
                  style={{ letterSpacing: '-0.89px' }}
                />

                <p className="mt-3 text-sm text-[#1C1C1C] opacity-75" style={{ letterSpacing: '-0.89px' }}>
                  Only enter a number if someone is legally your dependent and you claim them. If you are a dependent on your parent's taxes, leave this at 0.
                </p>
              </div>

              {/* Step 4: Other Adjustments */}
              <div className="border border-[#889063] rounded-2xl bg-[#E5D7C4] p-5 mb-4">
                <div className="flex justify-between items-baseline mb-3">
                  <label className="text-base font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    Step 4: Other adjustments (optional)
                  </label>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    W-4 Step 4
                  </div>
                </div>

                <label htmlFor="w4ExtraWithholding" className="block text-sm font-semibold text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>
                  Extra withholding per paycheck (optional)
                </label>
                <input
                  id="w4ExtraWithholding"
                  type="number"
                  min="0"
                  step="1"
                  value={extraWithholding}
                  onChange={(e) => setExtraWithholding(Number(e.target.value))}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024] mb-3"
                  style={{ letterSpacing: '-0.89px' }}
                />
                <p className="text-sm text-[#1C1C1C] opacity-75 mb-3" style={{ letterSpacing: '-0.89px' }}>
                  If you owed money last year or want a bigger refund, you can add a small extra amount per paycheck.
                </p>

                <label className="flex gap-3 p-4 border-2 border-[#889063] rounded-xl bg-white cursor-pointer hover:bg-[#E5D7C4] transition-colors mb-3">
                  <input
                    type="checkbox"
                    checked={sideIncome}
                    onChange={(e) => setSideIncome(e.target.checked)}
                    className="w-5 h-5 mt-0.5 accent-[#354024]"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                      I have side income without withholding
                    </div>
                    <div className="text-sm text-[#1C1C1C] opacity-75 mt-1" style={{ letterSpacing: '-0.89px' }}>
                      Examples: freelance work, tips that are not withheld, selling items online, small gigs.
                    </div>
                  </div>
                </label>

                <label htmlFor="w4Notes" className="block text-sm font-semibold text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>
                  Notes for you (optional)
                </label>
                <textarea
                  id="w4Notes"
                  placeholder="Example: I work 2 jobs during summer. I want to withhold an extra $10 each paycheck."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full border-2 border-[#889063] rounded-xl px-4 py-3 bg-white text-base text-[#1C1C1C] focus:outline-none focus:border-[#354024] min-h-[100px] resize-vertical"
                  style={{ letterSpacing: '-0.89px' }}
                />
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
                Educational only. For official instructions, use the IRS W-4 form directions.
              </p>
            </div>

            {/* Output Panel */}
            <div className="border-2 border-[#354024] rounded-2xl p-6 bg-white">
              <h2 className="text-3xl font-bold text-[#354024] mb-3" style={{ letterSpacing: '-0.89px' }}>
                Your W-4 summary
              </h2>
              <div className="inline-block px-4 py-2 rounded-full bg-[#FFCFD0] text-[#1C1C1C] text-sm font-semibold mb-5" style={{ letterSpacing: '-0.89px' }}>
                Fill this out, then hand it to your employer
              </div>

              <div className="border-2 border-[#889063] rounded-2xl p-5 bg-[#E5D7C4] mb-6">
                <pre className="text-base text-[#1C1C1C] whitespace-pre-wrap font-sans leading-relaxed" style={{ letterSpacing: '-0.89px' }}>
                  {summary}
                </pre>
              </div>

              {/* Common Mistakes */}
              <div className="border-2 border-[#889063] rounded-2xl p-5 bg-[#E5D7C4]">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-xl font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    Common mistakes to avoid
                  </h3>
                  <div className="text-base font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                    Quick check
                  </div>
                </div>

                <ul className="space-y-3 pl-5 list-disc marker:text-[#354024]">
                  <li className="text-base text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Multiple jobs:</strong> forgetting Step 2 can lead to too little withholding.
                  </li>
                  <li className="text-base text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Dependents:</strong> claiming dependents when you do not legally claim them can reduce withholding too much.
                  </li>
                  <li className="text-base text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Not updating:</strong> new job, second job, or big income change means your W-4 should change too.
                  </li>
                  <li className="text-base text-[#1C1C1C]" style={{ letterSpacing: '-0.89px' }}>
                    <strong>Expecting "perfect":</strong> W-4 helps estimate withholding, but refunds and amounts owed still vary year to year.
                  </li>
                </ul>
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
