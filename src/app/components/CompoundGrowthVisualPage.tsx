import { Link } from './RouterLink';
import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import lumiLogo from 'figma:asset/6faa24b9b39bf1a060318155560616649c074cb5.png';
import Footer from './Footer';

interface SimulationConfig {
  years: number;
  ppy: number;
  startAge: number;
  contribPerPeriod: number;
  muLog: number;
  sigmaLog: number;
}

interface BandData {
  p10: number[];
  p50: number[];
  p90: number[];
}

interface ScenarioData extends BandData {
  contribTotal: number;
  endAge: number;
}

interface ChartData {
  labelsA: string[];
  labelsB: string[];
  a: ScenarioData;
  b: ScenarioData;
  meta: {
    years: number;
    ppy: number;
    freq: string;
    annualReturn: number;
    annualVol: number;
    annualInfl: number;
    trials: number;
    showReal: boolean;
  };
}

const COLOR_A = "#354024";
const COLOR_B = "#889063";
const BAND_A = "rgba(53, 64, 36, 0.15)";
const BAND_B = "rgba(136, 144, 99, 0.15)";

export default function CompoundGrowthVisualPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [years, setYears] = useState(30);
  const [freq, setFreq] = useState<'monthly' | 'weekly' | 'yearly'>('monthly');
  const [annualReturn, setAnnualReturn] = useState(8);
  const [annualVol, setAnnualVol] = useState(16);
  const [annualInfl, setAnnualInfl] = useState(2.5);
  const [trials, setTrials] = useState(500);
  
  const [aStart, setAStart] = useState(18);
  const [aContrib, setAContrib] = useState(50);
  const [bStart, setBStart] = useState(28);
  const [bContrib, setBContrib] = useState(100);
  
  const [showReal, setShowReal] = useState(false);
  const [showBands, setShowBands] = useState(true);
  const [lastData, setLastData] = useState<ChartData | null>(null);
  const [crossIdx, setCrossIdx] = useState<number | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));
  
  const fmtMoney = (n: number) => {
    if (!isFinite(n)) return "$0";
    return n.toLocaleString(undefined, { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  };

  const periodsPerYear = (frequency: string) => {
    if (frequency === "weekly") return 52;
    if (frequency === "yearly") return 1;
    return 12;
  };

  const randn = () => {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
  };

  const perPeriodParams = (annualRet: number, annualVolatility: number, ppy: number) => {
    const mu = annualRet / 100;
    const sigma = annualVolatility / 100;
    const dt = 1 / ppy;
    const muLog = (Math.log(1 + mu) - 0.5 * sigma * sigma) * dt;
    const sigmaLog = sigma * Math.sqrt(dt);
    return { muLog, sigmaLog };
  };

  const simulatePath = (config: SimulationConfig): number[] => {
    const n = Math.round(config.years * config.ppy);
    let w = 0;
    const path = new Array(n + 1);
    path[0] = 0;

    for (let t = 1; t <= n; t++) {
      w += config.contribPerPeriod;
      const r = Math.exp(config.muLog + config.sigmaLog * randn());
      w *= r;
      path[t] = w;
    }
    return path;
  };

  const deterministicPath = (years: number, ppy: number, contribPerPeriod: number, annualReturnPct: number): number[] => {
    const n = Math.round(years * ppy);
    const rAnnual = annualReturnPct / 100;
    const rPer = Math.pow(1 + rAnnual, 1 / ppy) - 1;
    let w = 0;
    const path = new Array(n + 1);
    path[0] = 0;
    for (let t = 1; t <= n; t++) {
      w += contribPerPeriod;
      w *= (1 + rPer);
      path[t] = w;
    }
    return path;
  };

  const computeBands = (config: SimulationConfig, numTrials: number): BandData => {
    const n = Math.round(config.years * config.ppy);
    const paths: number[][] = [];
    for (let i = 0; i < numTrials; i++) {
      paths.push(simulatePath(config));
    }

    const p10 = new Array(n + 1);
    const p50 = new Array(n + 1);
    const p90 = new Array(n + 1);
    const temp = new Array(numTrials);

    for (let t = 0; t <= n; t++) {
      for (let i = 0; i < numTrials; i++) temp[i] = paths[i][t];
      temp.sort((a, b) => a - b);
      const i10 = Math.floor(0.10 * (numTrials - 1));
      const i50 = Math.floor(0.50 * (numTrials - 1));
      const i90 = Math.floor(0.90 * (numTrials - 1));
      p10[t] = temp[i10];
      p50[t] = temp[i50];
      p90[t] = temp[i90];
    }
    return { p10, p50, p90 };
  };

  const inflationAdjustSeries = (series: number[], annualInflPct: number, ppy: number): number[] => {
    const infl = annualInflPct / 100;
    const inflPer = Math.pow(1 + infl, 1 / ppy) - 1;
    const out = new Array(series.length);
    let deflator = 1;
    out[0] = series[0];
    for (let t = 1; t < series.length; t++) {
      deflator *= (1 + inflPer);
      out[t] = series[t] / deflator;
    }
    return out;
  };

  const buildLabels = (yrs: number, ppy: number, startAge: number): string[] => {
    const n = Math.round(yrs * ppy);
    const labels = new Array(n + 1);
    labels[0] = `Age ${startAge}`;
    for (let t = 1; t <= n; t++) {
      const yr = t / ppy;
      const age = Math.round((startAge + yr) * 10) / 10;
      labels[t] = `Age ${age}`;
    }
    return labels;
  };

  const computeAll = (): ChartData => {
    const yrs = clamp(years, 1, 60);
    const ppy = periodsPerYear(freq);
    const ret = clamp(annualReturn, 0, 50);
    const vol = clamp(annualVol, 0, 80);
    const infl = clamp(annualInfl, 0, 30);
    const numTrials = clamp(trials, 0, 5000);

    const startA = clamp(aStart, 10, 70);
    const startB = clamp(bStart, 10, 70);
    const contribA = Math.max(0, aContrib);
    const contribB = Math.max(0, bContrib);

    const params = perPeriodParams(ret, vol, ppy);

    const baseA: SimulationConfig = {
      years: yrs,
      ppy,
      startAge: startA,
      contribPerPeriod: contribA,
      muLog: params.muLog,
      sigmaLog: params.sigmaLog
    };

    const baseB: SimulationConfig = {
      years: yrs,
      ppy,
      startAge: startB,
      contribPerPeriod: contribB,
      muLog: params.muLog,
      sigmaLog: params.sigmaLog
    };

    let aBands: BandData, bBands: BandData;
    
    if (numTrials > 0 && vol > 0) {
      aBands = computeBands(baseA, numTrials);
      bBands = computeBands(baseB, numTrials);
    } else {
      const aDet = deterministicPath(yrs, ppy, contribA, ret);
      const bDet = deterministicPath(yrs, ppy, contribB, ret);
      aBands = { p10: aDet, p50: aDet, p90: aDet };
      bBands = { p10: bDet, p50: bDet, p90: bDet };
    }

    let aOut = aBands;
    let bOut = bBands;

    if (showReal && infl > 0) {
      aOut = {
        p10: inflationAdjustSeries(aBands.p10, infl, ppy),
        p50: inflationAdjustSeries(aBands.p50, infl, ppy),
        p90: inflationAdjustSeries(aBands.p90, infl, ppy),
      };
      bOut = {
        p10: inflationAdjustSeries(bBands.p10, infl, ppy),
        p50: inflationAdjustSeries(bBands.p50, infl, ppy),
        p90: inflationAdjustSeries(bBands.p90, infl, ppy),
      };
    }

    const labelsA = buildLabels(yrs, ppy, startA);
    const labelsB = buildLabels(yrs, ppy, startB);

    const n = Math.round(yrs * ppy);
    const aContribTotal = contribA * n;
    const bContribTotal = contribB * n;

    return {
      labelsA,
      labelsB,
      a: { ...aOut, contribTotal: aContribTotal, endAge: startA + yrs },
      b: { ...bOut, contribTotal: bContribTotal, endAge: startB + yrs },
      meta: { years: yrs, ppy, freq, annualReturn: ret, annualVol: vol, annualInfl: infl, trials: numTrials, showReal }
    };
  };

  const drawChart = (data: ChartData, hoverIdx: number | null) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);

    const pad = { l: 70, r: 20, t: 20, b: 40 };
    const x0 = pad.l;
    const y0 = pad.t;
    const w = rect.width - pad.l - pad.r;
    const h = rect.height - pad.t - pad.b;

    ctx.clearRect(0, 0, rect.width, rect.height);

    const maxA = Math.max(...data.a.p90);
    const maxB = Math.max(...data.b.p90);
    let yMax = Math.max(maxA, maxB, 1) * 1.08;

    // Helper function to draw text with letter spacing
    const drawTextWithSpacing = (text: string, x: number, y: number, letterSpacing: number = 1.5) => {
      const chars = text.split('');
      let currentX = x;
      
      if (ctx.textAlign === 'right') {
        const totalWidth = chars.reduce((acc, char, i) => {
          const charWidth = ctx.measureText(char).width;
          return acc + charWidth + (i < chars.length - 1 ? letterSpacing : 0);
        }, 0);
        currentX = x - totalWidth;
      }
      
      if (ctx.textAlign === 'center') {
        const totalWidth = chars.reduce((acc, char, i) => {
          const charWidth = ctx.measureText(char).width;
          return acc + charWidth + (i < chars.length - 1 ? letterSpacing : 0);
        }, 0);
        currentX = x - totalWidth / 2;
      }
      
      const originalAlign = ctx.textAlign;
      ctx.textAlign = 'left';
      chars.forEach((char, i) => {
        ctx.fillText(char, currentX, y);
        currentX += ctx.measureText(char).width + letterSpacing;
      });
      ctx.textAlign = originalAlign;
    };

    // Grid
    ctx.strokeStyle = "rgba(0,0,0,0.07)";
    ctx.lineWidth = 1;
    for (let i = 1; i <= 5; i++) {
      const y = y0 + (h * i / 6);
      ctx.beginPath();
      ctx.moveTo(x0, y);
      ctx.lineTo(x0 + w, y);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = "rgba(0,0,0,0.18)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x0, y0);
    ctx.lineTo(x0, y0 + h);
    ctx.lineTo(x0 + w, y0 + h);
    ctx.stroke();

    // Y labels
    ctx.fillStyle = "#1C1C1C";
    ctx.font = "12px 'Libra Sans', ui-sans-serif, system-ui, -apple-system";
    for (let i = 0; i <= 4; i++) {
      const val = yMax * (i / 4);
      const y = y0 + h - (h * (i / 4));
      const label = fmtMoney(val);
      ctx.textAlign = 'right';
      drawTextWithSpacing(label, x0 - 8, y + (i === 0 ? 12 : 4), 1.5);
    }

    const n = data.a.p50.length - 1;

    // Draw bands
    if (showBands) {
      const drawBand = (p10: number[], p90: number[], fill: string) => {
        ctx.fillStyle = fill;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const x = x0 + (w * i / n);
          const y = y0 + h - (h * (p90[i] / yMax));
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        for (let i = n; i >= 0; i--) {
          const x = x0 + (w * i / n);
          const y = y0 + h - (h * (p10[i] / yMax));
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();
      };

      drawBand(data.a.p10, data.a.p90, BAND_A);
      drawBand(data.b.p10, data.b.p90, BAND_B);
    }

    // Draw lines
    const drawLine = (series: number[], color: string) => {
      ctx.strokeStyle = color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const x = x0 + (w * i / n);
        const yVal = series[i];
        const y = y0 + h - (h * (yVal / yMax));
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    drawLine(data.a.p50, COLOR_A);
    drawLine(data.b.p50, COLOR_B);

    // Crosshair
    if (hoverIdx !== null) {
      const x = x0 + (w * hoverIdx / n);
      ctx.strokeStyle = "rgba(0,0,0,0.20)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y0);
      ctx.lineTo(x, y0 + h);
      ctx.stroke();

      const yA = y0 + h - (h * (data.a.p50[hoverIdx] / yMax));
      const yB = y0 + h - (h * (data.b.p50[hoverIdx] / yMax));
      
      ctx.fillStyle = COLOR_A;
      ctx.beginPath();
      ctx.arc(x, yA, 5, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = COLOR_B;
      ctx.beginPath();
      ctx.arc(x, yB, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // X labels
    ctx.fillStyle = "#1C1C1C";
    ctx.font = "12px 'Libra Sans', ui-sans-serif, system-ui, -apple-system";
    ctx.textAlign = 'center';
    const mid = Math.floor(n / 2);
    drawTextWithSpacing(data.labelsA[0], x0, y0 + h + 25, 1.5);
    drawTextWithSpacing(data.labelsA[mid], x0 + w * 0.5, y0 + h + 25, 1.5);
    drawTextWithSpacing(data.labelsA[n], x0 + w, y0 + h + 25, 1.5);
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!lastData || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const pad = { l: 70, r: 20, t: 20, b: 40 };
    const x0 = pad.l;
    const w = rect.width - pad.l - pad.r;
    
    const mx = e.clientX - rect.left;
    const x = clamp(mx - x0, 0, w);
    const n = lastData.a.p50.length - 1;
    const idx = Math.round((x / w) * n);
    const clampedIdx = clamp(idx, 0, n);

    setCrossIdx(clampedIdx);

    const aVal = lastData.a.p50[clampedIdx];
    const bVal = lastData.b.p50[clampedIdx];
    const a10 = lastData.a.p10[clampedIdx];
    const a90 = lastData.a.p90[clampedIdx];
    const b10 = lastData.b.p10[clampedIdx];
    const b90 = lastData.b.p90[clampedIdx];
    const ageA = lastData.labelsA[clampedIdx];
    const ageB = lastData.labelsB[clampedIdx];
    const unit = lastData.meta.showReal ? " (real)" : " (nominal)";

    let content = `${ageA} vs ${ageB}\nScenario A median: ${fmtMoney(aVal)}${unit}\nScenario B median: ${fmtMoney(bVal)}${unit}`;
    if (showBands && lastData.meta.trials > 0 && lastData.meta.annualVol > 0) {
      content += `\n\nA range: ${fmtMoney(a10)} to ${fmtMoney(a90)}\nB range: ${fmtMoney(b10)} to ${fmtMoney(b90)}`;
    }

    setTooltip({ x: e.clientX, y: e.clientY, content });
  };

  const handleCanvasMouseLeave = () => {
    setCrossIdx(null);
    setTooltip(null);
  };

  const runSimulation = () => {
    const data = computeAll();
    setLastData(data);
  };

  const reset = () => {
    setYears(30);
    setFreq('monthly');
    setAnnualReturn(8);
    setAnnualVol(16);
    setAnnualInfl(2.5);
    setTrials(500);
    setAStart(18);
    setAContrib(50);
    setBStart(28);
    setBContrib(100);
    setShowReal(false);
    setShowBands(true);
    setCrossIdx(null);
    setTooltip(null);
  };

  const exportCSV = () => {
    if (!lastData) return;

    const n = lastData.a.p50.length;
    const lines: string[] = [];
    const unit = lastData.meta.showReal ? "real" : "nominal";
    
    lines.push([
      "step",
      "labelA",
      "labelB",
      `A_p10_${unit}`, `A_p50_${unit}`, `A_p90_${unit}`,
      `B_p10_${unit}`, `B_p50_${unit}`, `B_p90_${unit}`
    ].join(","));

    for (let i = 0; i < n; i++) {
      const row = [
        i,
        `"${lastData.labelsA[i] || ""}"`,
        `"${lastData.labelsB[i] || ""}"`,
        Math.round(lastData.a.p10[i]),
        Math.round(lastData.a.p50[i]),
        Math.round(lastData.a.p90[i]),
        Math.round(lastData.b.p10[i]),
        Math.round(lastData.b.p50[i]),
        Math.round(lastData.b.p90[i]),
      ];
      lines.push(row.join(","));
    }

    const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lumi_compound_growth_${unit}.csv`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    runSimulation();
  }, []);

  useEffect(() => {
    if (lastData) {
      drawChart(lastData, crossIdx);
    }
  }, [lastData, crossIdx, showBands, showReal]);

  const freqLabel = freq === 'weekly' ? 'Weekly' : freq === 'yearly' ? 'Yearly' : 'Monthly';

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
        <div className="max-w-[1600px] mx-auto">
          {/* Back Button */}
          <Link
            to="/investing-101"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-[#354024] hover:opacity-70 transition-opacity mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Investing 101
          </Link>

          {/* Header */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm mb-6">
            <h1 className="text-3xl md:text-4xl text-[#1C1C1C] mb-2" style={{ letterSpacing: '-0.89px' }}>
              Compound Growth Visual
            </h1>
            <p className="text-lg text-[#1C1C1C] opacity-70">
              Compare "start early" vs "start later" and see how time, consistency, and market uncertainty change the outcome.
            </p>
          </div>

          {/* How to Use Dropdown */}
          <div className="bg-white rounded-lg shadow-sm mb-6 border border-[#354024]/10">
            <button
              onClick={() => setShowInstructions(!showInstructions)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E5D7C4]/20 transition-colors rounded-lg"
            >
              <h2 className="text-xl font-semibold text-[#354024]" style={{ letterSpacing: '-0.89px' }}>
                How to Use This Tool
              </h2>
              {showInstructions ? (
                <ChevronUp className="w-5 h-5 text-[#354024]" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#354024]" />
              )}
            </button>
            
            {showInstructions && (
              <div className="px-6 pb-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-[#354024] mb-2">Adjust the timeline</h3>
                  <p className="text-sm text-[#1C1C1C] opacity-80 mb-2">
                    <span className="font-semibold">Years to invest:</span> How long the money stays invested before you stop contributing.
                  </p>
                  <p className="text-sm text-[#1C1C1C] opacity-80">
                    <span className="font-semibold">Contribution frequency:</span> How often money is added (monthly, weekly, or yearly).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#354024] mb-2">Set market assumptions</h3>
                  <p className="text-sm text-[#1C1C1C] opacity-80 mb-2">
                    <span className="font-semibold">Expected annual return:</span> The average yearly growth rate you're assuming.
                  </p>
                  <p className="text-sm text-[#1C1C1C] opacity-80 mb-2">
                    <span className="font-semibold">Annual volatility:</span> How much returns typically fluctuate. Higher values mean a wider range of possible outcomes.
                  </p>
                  <p className="text-sm text-[#1C1C1C] opacity-80">
                    <span className="font-semibold">Inflation:</span> Used only when viewing inflation-adjusted results.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#354024] mb-2">Scenario inputs</h3>
                  <p className="text-sm text-[#1C1C1C] opacity-80">
                    <span className="font-semibold">Scenario A and B:</span> Compare two different strategies, such as starting earlier with less money versus starting later with more.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#354024] mb-2">Buttons and Toggles</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Nominal dollars:</span> Shows future values in regular dollars, without adjusting for inflation.
                    </p>
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Inflation-adjusted:</span> Shows values in today's dollars to reflect real purchasing power.
                    </p>
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Show uncertainty bands:</span> Displays a realistic range of outcomes based on market volatility.
                    </p>
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Monte Carlo trials:</span> Runs many simulated market paths to show how outcomes can vary over time. More trials increase accuracy but take longer.
                    </p>
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Run simulation:</span> Updates the chart using your current settings.
                    </p>
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Export CSV:</span> Downloads the data so you can analyze or graph it separately.
                    </p>
                    <p className="text-sm text-[#1C1C1C] opacity-80">
                      <span className="font-semibold">Reset:</span> Returns all settings to their default values.
                    </p>
                  </div>
                </div>

                <div className="bg-[#889063]/20 rounded-lg p-4 border border-[#889063]/30">
                  <p className="text-sm text-[#354024] font-semibold mb-1">Tip:</p>
                  <p className="text-sm text-[#1C1C1C] opacity-80">
                    Try changing only one variable at a time to clearly see how time, contributions, and market behavior affect long-term growth.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Compact Controls */}
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6 border border-[#354024]/10">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {/* Scenarios Column */}
              <div>
                <h3 className="text-sm font-semibold text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>Scenarios</h3>
                <div className="space-y-3">
                  <div className="bg-[#E5D7C4]/40 rounded p-3 border border-[#354024]/10">
                    <div className="text-xs font-semibold text-[#354024] mb-2">Scenario A (Start early)</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-[#1C1C1C] opacity-70">Start age</label>
                        <input
                          type="number"
                          min="10"
                          max="70"
                          value={aStart}
                          onChange={(e) => setAStart(Number(e.target.value))}
                          className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#1C1C1C] opacity-70">Amount</label>
                        <input
                          type="number"
                          min="0"
                          max="100000"
                          step="5"
                          value={aContrib}
                          onChange={(e) => setAContrib(Number(e.target.value))}
                          className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#E5D7C4]/40 rounded p-3 border border-[#354024]/10">
                    <div className="text-xs font-semibold text-[#354024] mb-2">Scenario B (Start later)</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-[#1C1C1C] opacity-70">Start age</label>
                        <input
                          type="number"
                          min="10"
                          max="70"
                          value={bStart}
                          onChange={(e) => setBStart(Number(e.target.value))}
                          className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#1C1C1C] opacity-70">Amount</label>
                        <input
                          type="number"
                          min="0"
                          max="100000"
                          step="5"
                          value={bContrib}
                          onChange={(e) => setBContrib(Number(e.target.value))}
                          className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Parameters Column */}
              <div>
                <h3 className="text-sm font-semibold text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>Market Parameters</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-[#354024] block mb-1">Years</label>
                      <input
                        type="number"
                        min="1"
                        max="60"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-[#354024] block mb-1">Frequency</label>
                      <select
                        value={freq}
                        onChange={(e) => setFreq(e.target.value as typeof freq)}
                        className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                      >
                        <option value="monthly">Monthly</option>
                        <option value="weekly">Weekly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-[#354024]">Return (%)</label>
                      <span className="text-xs text-[#1C1C1C] opacity-70">{annualReturn.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="15"
                      step="0.1"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      className="w-full accent-[#354024]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-[#354024]">Volatility (%)</label>
                      <span className="text-xs text-[#1C1C1C] opacity-70">{annualVol.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="30"
                      step="0.5"
                      value={annualVol}
                      onChange={(e) => setAnnualVol(Number(e.target.value))}
                      className="w-full accent-[#354024]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="text-xs font-semibold text-[#354024]">Inflation (%)</label>
                      <span className="text-xs text-[#1C1C1C] opacity-70">{annualInfl.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="8"
                      step="0.1"
                      value={annualInfl}
                      onChange={(e) => setAnnualInfl(Number(e.target.value))}
                      className="w-full accent-[#354024]"
                    />
                  </div>
                </div>
              </div>

              {/* View Options & Actions Column */}
              <div>
                <h3 className="text-sm font-semibold text-[#354024] mb-4" style={{ letterSpacing: '-0.89px' }}>View Options</h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-[#354024] block mb-2">Monte Carlo trials</label>
                    <select
                      value={trials}
                      onChange={(e) => setTrials(Number(e.target.value))}
                      className="w-full px-2 py-1 border border-[#354024]/20 rounded text-sm"
                    >
                      <option value="0">Off (fast)</option>
                      <option value="200">200 (quick)</option>
                      <option value="500">500 (recommended)</option>
                      <option value="1000">1000 (heavy)</option>
                    </select>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setShowReal(!showReal)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        showReal
                          ? 'bg-[#FFCFD0] border-[#FFCFD0] text-[#1C1C1C]'
                          : 'bg-white border-[#354024]/20 text-[#1C1C1C]'
                      } border`}
                    >
                      {showReal ? 'Real $' : 'Nominal $'}
                    </button>
                    <button
                      onClick={() => setShowBands(!showBands)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                        showBands
                          ? 'bg-[#FFCFD0] border-[#FFCFD0] text-[#1C1C1C]'
                          : 'bg-white border-[#354024]/20 text-[#1C1C1C]'
                      } border`}
                    >
                      {showBands ? 'Bands ON' : 'Bands OFF'}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <button
                      onClick={runSimulation}
                      className="px-4 py-2 bg-[#354024] text-white rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                    >
                      Run
                    </button>
                    <button
                      onClick={exportCSV}
                      className="px-4 py-2 bg-white text-[#354024] border border-[#354024]/20 rounded-lg font-semibold text-sm hover:bg-[#CFBB99]/20 transition-colors"
                    >
                      Export CSV
                    </button>
                    <button
                      onClick={reset}
                      className="px-4 py-2 bg-white text-[#354024] border border-[#354024]/20 rounded-lg font-semibold text-sm hover:bg-[#CFBB99]/20 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Large Chart */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10 mb-6">
            <canvas
              ref={canvasRef}
              onMouseMove={handleCanvasMouseMove}
              onMouseLeave={handleCanvasMouseLeave}
              className="w-full"
              style={{ height: '600px' }}
            />
            
            {/* Tooltip */}
            {tooltip && (
              <div
                className="fixed z-50 bg-[#1C1C1C] text-white px-4 py-3 rounded-lg text-sm shadow-lg pointer-events-none"
                style={{
                  left: `${tooltip.x + 10}px`,
                  top: `${tooltip.y - 10}px`,
                  transform: 'translateY(-100%)',
                  maxWidth: '280px',
                  whiteSpace: 'pre-line'
                }}
              >
                {tooltip.content}
              </div>
            )}

            {/* Legend */}
            <div className="flex flex-wrap gap-6 mt-4 text-sm text-[#1C1C1C]">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#354024]/20" style={{ backgroundColor: COLOR_A }}></div>
                <span>Scenario A</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#889063]/20" style={{ backgroundColor: COLOR_B }}></div>
                <span>Scenario B</span>
              </div>
              <span className="opacity-70 text-xs">Bands show 10th–90th percentile (if enabled)</span>
            </div>
          </div>

          {/* Results */}
          {lastData && (
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
                <h4 className="text-sm font-semibold text-[#354024] mb-2">Scenario A result</h4>
                <p className="text-3xl font-bold text-[#1C1C1C] mb-2">
                  {fmtMoney(lastData.a.p50[lastData.a.p50.length - 1])}
                </p>
                <p className="text-xs text-[#1C1C1C] opacity-70">
                  Contributions: {fmtMoney(lastData.a.contribTotal)} | End age: {Math.round(lastData.a.endAge * 10) / 10}
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-[#354024]/10">
                <h4 className="text-sm font-semibold text-[#354024] mb-2">Scenario B result</h4>
                <p className="text-3xl font-bold text-[#1C1C1C] mb-2">
                  {fmtMoney(lastData.b.p50[lastData.b.p50.length - 1])}
                </p>
                <p className="text-xs text-[#1C1C1C] opacity-70">
                  Contributions: {fmtMoney(lastData.b.contribTotal)} | End age: {Math.round(lastData.b.endAge * 10) / 10}
                </p>
              </div>

              <div className="bg-[#889063]/20 rounded-lg p-6 border border-[#889063]/30">
                <p className="text-sm text-[#1C1C1C]">
                  {(() => {
                    const aEnd = lastData.a.p50[lastData.a.p50.length - 1];
                    const bEnd = lastData.b.p50[lastData.b.p50.length - 1];
                    const diff = aEnd - bEnd;
                    const unit = lastData.meta.showReal ? "real dollars" : "nominal dollars";
                    const lead = diff >= 0 ? "Scenario A leads by" : "Scenario B leads by";
                    return `${lead} ${fmtMoney(Math.abs(diff))} (${unit}). This is the "time advantage" effect.`;
                  })()}
                </p>
              </div>
            </div>
          )}

          {/* Note */}
          <div className="bg-[#CFBB99]/30 rounded-lg p-4 border border-[#354024]/10 mt-6">
            <p className="text-sm text-[#1C1C1C] opacity-70">
              Education-only. This visual explains compounding, time horizon, and volatility. It is not personalized financial advice.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}