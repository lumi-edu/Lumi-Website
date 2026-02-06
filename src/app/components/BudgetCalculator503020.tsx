import { useMemo, useState } from "react";

type Frequency = "monthly" | "weekly";

function clampNumber(n: number) {
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}

function formatMoney(n: number) {
  const v = clampNumber(n);
  return v.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
}

function parseAmount(input: string) {
  // Allow commas and $ while typing
  const cleaned = input.replace(/[$, ]/g, "");
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : NaN;
}

export default function BudgetCalculator503020() {
  const [frequency, setFrequency] = useState<Frequency>("monthly");
  const [incomeInput, setIncomeInput] = useState<string>("");

  const income = useMemo(() => parseAmount(incomeInput), [incomeInput]);

  const isValid = Number.isFinite(income) && income > 0;

  const breakdown = useMemo(() => {
    const base = clampNumber(isValid ? (income as number) : 0);

    const needs = base * 0.5;
    const wants = base * 0.3;
    const saving = base * 0.2;

    // Helpful conversions: if user enters monthly, show weekly estimate; if weekly, show monthly estimate
    // Using 4.33 weeks/month average
    const weeksPerMonth = 4.33;
    const toWeekly = (m: number) => m / weeksPerMonth;
    const toMonthly = (w: number) => w * weeksPerMonth;

    const alt = frequency === "monthly"
      ? {
          label: "Weekly estimate",
          needs: toWeekly(needs),
          wants: toWeekly(wants),
          saving: toWeekly(saving),
          total: toWeekly(base),
        }
      : {
          label: "Monthly estimate",
          needs: toMonthly(needs),
          wants: toMonthly(wants),
          saving: toMonthly(saving),
          total: toMonthly(base),
        };

    return {
      total: base,
      needs,
      wants,
      saving,
      alt,
    };
  }, [income, isValid, frequency]);

  return (
    <section className="rounded-3xl border border-[#354024]/20 bg-white p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl text-[#354024]">50/30/20 Breakdown</h2>
          <p className="mt-1 text-lg text-[#1C1C1C] opacity-70">
            50% essentials, 30% spending, 20% saving.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setFrequency("weekly")}
            className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-all ${
              frequency === "weekly"
                ? "bg-[#354024] text-[#FFCFD0] ring-[#354024]"
                : "bg-white text-[#354024] ring-[#354024]/20 hover:bg-[#889063]/20"
            }`}
          >
            Weekly
          </button>
          <button
            type="button"
            onClick={() => setFrequency("monthly")}
            className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-all ${
              frequency === "monthly"
                ? "bg-[#354024] text-[#FFCFD0] ring-[#354024]"
                : "bg-white text-[#354024] ring-[#354024]/20 hover:bg-[#889063]/20"
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-[#354024]/20 p-5">
          <label className="text-lg font-medium text-[#354024]">
            Enter your {frequency} income
          </label>
          <input
            inputMode="decimal"
            value={incomeInput}
            onChange={(e) => setIncomeInput(e.target.value)}
            placeholder={frequency === "monthly" ? "Example: 800" : "Example: 200"}
            className="mt-2 w-full rounded-2xl border border-[#354024]/30 px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-[#889063]/30 text-[#1C1C1C]"
            aria-label="Income amount"
          />

          {!incomeInput ? (
            <p className="mt-2 text-sm text-[#1C1C1C] opacity-60">
              Tip: you can type with commas or a dollar sign.
            </p>
          ) : !isValid ? (
            <p className="mt-2 text-sm text-red-600">
              Enter a valid number greater than 0.
            </p>
          ) : (
            <p className="mt-2 text-sm text-[#1C1C1C] opacity-60">
              Calculating from {formatMoney(breakdown.total)} {frequency} income.
            </p>
          )}

          <div className="mt-5 rounded-2xl bg-[#CFBB99]/30 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#354024]">
              {breakdown.alt.label}
            </p>
            <p className="mt-2 text-lg text-[#1C1C1C]">
              Total: <span className="font-semibold">{formatMoney(breakdown.alt.total)}</span>
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#354024]/20 p-5">
          <p className="text-lg font-medium text-[#354024]">Your breakdown</p>

          <div className="mt-4 space-y-3">
            <ResultRow
              label="Essentials (50%)"
              value={breakdown.needs}
              sub={`${breakdown.alt.label}: ${formatMoney(breakdown.alt.needs)}`}
            />
            <ResultRow
              label="Spending (30%)"
              value={breakdown.wants}
              sub={`${breakdown.alt.label}: ${formatMoney(breakdown.alt.wants)}`}
            />
            <ResultRow
              label="Saving (20%)"
              value={breakdown.saving}
              sub={`${breakdown.alt.label}: ${formatMoney(breakdown.alt.saving)}`}
            />
          </div>

          <div className="mt-5 border-t border-[#354024]/20 pt-4 text-lg text-[#1C1C1C] opacity-70">
            <p>
              If your essentials take more than 50%, that is normal. Start by tracking spending and
              slowly adjust the percentages so your budget matches reality.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <TipCard
          title="Essentials"
          body="Things you need to cover first. Transport, food basics, required bills."
        />
        <TipCard
          title="Spending"
          body="Fun and optional stuff. Eating out, shopping, entertainment."
        />
        <TipCard
          title="Saving"
          body="Emergency fund and goals. Even small amounts consistently add up."
        />
      </div>
    </section>
  );
}

function ResultRow({
  label,
  value,
  sub,
}: {
  label: string;
  value: number;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-[#354024]/20 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg font-medium text-[#354024]">{label}</p>
        <p className="text-lg font-semibold text-[#1C1C1C]">{formatMoney(value)}</p>
      </div>
      <p className="mt-1 text-sm text-[#1C1C1C] opacity-60">{sub}</p>
    </div>
  );
}

function TipCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-[#354024]/20 bg-white p-5">
      <p className="text-lg font-semibold text-[#354024]">{title}</p>
      <p className="mt-2 text-lg text-[#1C1C1C] opacity-70">{body}</p>
    </div>
  );
}