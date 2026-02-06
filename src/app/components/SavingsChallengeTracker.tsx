import { useEffect, useMemo, useState } from "react";

type Difficulty = "lite" | "standard" | "boost";

type Challenge = {
  day: number;
  title: string;
  prompt: string;
  lite?: string;
  boost?: string;
};

const STORAGE_KEY = "lumifinance_savings_challenge_v1";

const CHALLENGES: Challenge[] = [
  { day: 1, title: "Start small", prompt: "Save $1 today.", lite: "Save $0.50 today.", boost: "Save $2 today." },
  { day: 2, title: "No-spend swap", prompt: "Skip one unnecessary purchase and move that money to savings.", lite: "Skip one small treat and save $1.", boost: "Skip one purchase and save $5." },
  { day: 3, title: "Round-up jar", prompt: "Round up what you spend today and save the difference.", lite: "Round up one purchase and save the difference.", boost: "Round up every purchase today and save the difference." },
  { day: 4, title: "Food save", prompt: "Bring food or a snack from home instead of buying.", lite: "Skip one snack purchase and save that amount.", boost: "Skip eating out today and save what you would have spent." },
  { day: 5, title: "Quick save", prompt: "Save $3 today.", lite: "Save $1 today.", boost: "Save $6 today." },
  { day: 6, title: "No-spend day", prompt: "Do a no-spend day if possible.", lite: "Avoid one non-essential purchase today.", boost: "No-spend day + transfer $5 to savings." },
  { day: 7, title: "Weekly check-in", prompt: "Look at your spending from the last 7 days and write one pattern you notice.", lite: "Write one thing you spent money on most this week.", boost: "Write one pattern + one change you will try next week." },
  { day: 8, title: "Auto-save setup", prompt: "Set up an automatic transfer, even if it is small.", lite: "Set a reminder to save weekly.", boost: "Set auto-transfer + increase it slightly if you can." },
  { day: 9, title: "Cancel or pause", prompt: "Pause or cancel one subscription you do not use.", lite: "Check your subscriptions and list them.", boost: "Cancel one subscription and save that amount." },
  { day: 10, title: "Save a bill", prompt: "Save $5 today.", lite: "Save $2 today.", boost: "Save $10 today." },
  { day: 11, title: "Cashback check", prompt: "If you have cashback rewards, redeem and move it to savings.", lite: "Check if you have any rewards.", boost: "Redeem rewards + save an extra $5." },
  { day: 12, title: "Sell something", prompt: "List one item you do not use to sell or donate.", lite: "Pick one item to set aside.", boost: "List two items and save any earnings." },
  { day: 13, title: "Spend with a cap", prompt: "Set a small spending limit for today and stick to it.", lite: "Pick one category to limit today.", boost: "Limit spending + move $5 to savings." },
  { day: 14, title: "Mid-month reset", prompt: "Check your savings goal and adjust your plan if needed.", lite: "Check your savings balance.", boost: "Check balance + set a new milestone for Day 30." },
  { day: 15, title: "Save $7", prompt: "Save $7 today.", lite: "Save $3 today.", boost: "Save $15 today." },
  { day: 16, title: "Free fun", prompt: "Choose a free activity today instead of spending for entertainment.", lite: "Replace one paid activity with a free one.", boost: "Free fun + save what you would have spent." },
  { day: 17, title: "Unplanned spending pause", prompt: "Before any purchase today, wait 10 minutes and decide again.", lite: "Wait 5 minutes before one purchase.", boost: "Do the 10-minute rule for every non-essential purchase." },
  { day: 18, title: "Save your change", prompt: "Move leftover cash or spare change into savings.", lite: "Move any loose change you find to savings.", boost: "Move change + save an extra $5." },
  { day: 19, title: "Meal plan mini", prompt: "Plan one meal or snack for tomorrow to avoid impulse spending.", lite: "Plan one snack.", boost: "Plan a full day of meals and estimate what you save." },
  { day: 20, title: "Save $10", prompt: "Save $10 today.", lite: "Save $5 today.", boost: "Save $20 today." },
  { day: 21, title: "Reflect and reward", prompt: "Write one thing saving has helped you feel or do so far.", lite: "Write one sentence reflection.", boost: "Write 3 sentences + set a reward that costs $0." },
  { day: 22, title: "Emergency fund check", prompt: "Label your savings account as 'Emergency Fund' or create a savings bucket.", lite: "Create a note: Emergency Fund goal.", boost: "Create a separate bucket + add $5." },
  { day: 23, title: "One category cut", prompt: "Pick one spending category and cut it in half today.", lite: "Reduce one category slightly today.", boost: "Cut one category and save $10." },
  { day: 24, title: "Pack it", prompt: "Bring what you need today so you do not buy it later.", lite: "Bring a water bottle.", boost: "Bring a snack, water, and anything you might buy." },
  { day: 25, title: "Save $5", prompt: "Save $5 today.", lite: "Save $2 today.", boost: "Save $12 today." },
  { day: 26, title: "Find a fee", prompt: "Identify one fee you can avoid going forward (late fees, delivery fees, etc.).", lite: "Name one fee you want to avoid.", boost: "Make a plan to avoid it and save that amount today." },
  { day: 27, title: "Spend intentionally", prompt: "Only buy things you planned today. No impulse purchases.", lite: "Avoid one impulse purchase today.", boost: "Planned purchases only + save $5." },
  { day: 28, title: "Progress photo", prompt: "Write down your total saved so far and celebrate the progress.", lite: "Write down one win from this month.", boost: "Write total + set next month's savings target." },
  { day: 29, title: "Final push", prompt: "Save one extra small amount today (even $1).", lite: "Save $0.50 today.", boost: "Save $10 today." },
  { day: 30, title: "Finish strong", prompt: "Choose a saving habit to keep and write your plan for next month.", lite: "Choose one habit to keep.", boost: "Choose one habit + set an auto-transfer amount." },
];

function getChallengeText(c: Challenge, difficulty: Difficulty) {
  if (difficulty === "lite" && c.lite) return c.lite;
  if (difficulty === "boost" && c.boost) return c.boost;
  return c.prompt;
}

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function computeStreak(completedDays: Set<number>, lastCompletedAt: Record<number, string>) {
  const completed = Array.from(completedDays).sort((a, b) => a - b);
  if (completed.length === 0) return { streak: 0, activeToday: false, lastDay: 0 };

  let streak = 1;
  for (let i = completed.length - 1; i > 0; i--) {
    if (completed[i] === completed[i - 1] + 1) streak++;
    else break;
  }

  const lastDay = completed[completed.length - 1];
  const lastDate = lastCompletedAt[lastDay];
  const activeToday = lastDate === todayISO();

  return { streak, activeToday, lastDay };
}

function pct(part: number, whole: number) {
  if (whole <= 0) return 0;
  return Math.round((part / whole) * 100);
}

export default function SavingsChallengeTracker() {
  const [difficulty, setDifficulty] = useState<Difficulty>("standard");
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [lastCompletedAt, setLastCompletedAt] = useState<Record<number, string>>({});
  const [toast, setToast] = useState<string>("");

  // Load saved progress
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        difficulty?: Difficulty;
        completed?: number[];
        lastCompletedAt?: Record<number, string>;
      };

      if (parsed.difficulty) setDifficulty(parsed.difficulty);
      if (Array.isArray(parsed.completed)) setCompletedDays(new Set(parsed.completed));
      if (parsed.lastCompletedAt && typeof parsed.lastCompletedAt === "object") {
        setLastCompletedAt(parsed.lastCompletedAt);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save progress
  useEffect(() => {
    try {
      const payload = {
        difficulty,
        completed: Array.from(completedDays),
        lastCompletedAt,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore
    }
  }, [difficulty, completedDays, lastCompletedAt]);

  const totalDays = CHALLENGES.length;
  const completedCount = completedDays.size;
  const percentComplete = pct(completedCount, totalDays);

  const streakInfo = useMemo(() => computeStreak(completedDays, lastCompletedAt), [completedDays, lastCompletedAt]);
  const streak = streakInfo.streak;
  const activeToday = streakInfo.activeToday;

  const milestoneMessage = useMemo(() => {
    if (completedCount === 0) return "";
    if (completedCount === 1) return "Nice start. Momentum matters.";
    if (completedCount === 7) return "One week in. That is real consistency.";
    if (completedCount === 15) return "Halfway. Keep it simple and keep going.";
    if (completedCount === 21) return "Three weeks. Habits are forming.";
    if (completedCount === 30) return "You finished the challenge. That is huge.";
    return "";
  }, [completedCount]);

  useEffect(() => {
    if (!milestoneMessage) return;
    setToast(milestoneMessage);
    const t = setTimeout(() => setToast(""), 15000);
    return () => clearTimeout(t);
  }, [milestoneMessage]);

  function toggleDay(day: number) {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
        setLastCompletedAt((prevDates) => {
          const copy = { ...prevDates };
          delete copy[day];
          return copy;
        });
      } else {
        next.add(day);
        setLastCompletedAt((prevDates) => ({ ...prevDates, [day]: todayISO() }));
      }
      return next;
    });
  }

  function resetAll() {
    setCompletedDays(new Set());
    setLastCompletedAt({});
    setToast("Progress reset. Fresh start.");
    setTimeout(() => setToast(""), 2500);
  }

  return (
    <section className="relative rounded-3xl border border-[#464A39]/20 bg-white p-6 md:p-8">
      {toast ? (
        <div className="pointer-events-none absolute left-1/2 top-4 z-10 w-[92%] max-w-xl -translate-x-1/2 rounded-2xl border border-[#1BB3D1] bg-[#1BB3D1]/10 px-4 py-3 text-sm text-[#464A39] shadow-sm">
          {toast}
        </div>
      ) : null}

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-[#464A39]">Your challenge dashboard</h2>
          <p className="mt-1 text-sm text-[#464A39] opacity-70">
            Tap a day to mark it complete. You can change difficulty anytime.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <DifficultyPill label="Lite" active={difficulty === "lite"} onClick={() => setDifficulty("lite")} />
          <DifficultyPill label="Standard" active={difficulty === "standard"} onClick={() => setDifficulty("standard")} />
          <DifficultyPill label="Boost" active={difficulty === "boost"} onClick={() => setDifficulty("boost")} />
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <StatCard title="Completed" value={`${completedCount}/${totalDays}`} sub={`${percentComplete}% complete`} />
        <StatCard
          title="Streak"
          value={`${streak}`}
          sub={activeToday ? "Active today" : "Complete consecutive days to grow it"}
        />
        <div className="rounded-3xl border border-[#464A39]/20 bg-[#C2CBB2]/20 p-5">
          <p className="text-sm font-semibold tracking-tight text-[#464A39]">Quick tip</p>
          <p className="mt-2 text-sm text-[#464A39] opacity-80">
            If you miss a day, do not restart. Just continue. Consistency over perfection.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-[#464A39]/20 bg-white p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-[#464A39]">Progress</p>
          <p className="text-sm font-semibold text-[#464A39]">{percentComplete}%</p>
        </div>
        <div className="mt-3 h-3 w-full rounded-full bg-[#f1f0e2]">
          <div
            className="h-3 rounded-full bg-[#464A39] transition-all"
            style={{ width: `${percentComplete}%` }}
            aria-label="Progress bar"
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#464A39]">
          <div className="flex gap-2">
            <Badge text="7 days" active={completedCount >= 7} />
            <Badge text="15 days" active={completedCount >= 15} />
            <Badge text="21 days" active={completedCount >= 21} />
            <Badge text="30 days" active={completedCount >= 30} />
          </div>

          <button
            type="button"
            onClick={resetAll}
            className="rounded-full border border-[#464A39]/20 bg-white px-3 py-2 font-medium text-[#464A39] hover:bg-[#f1f0e2]"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold tracking-tight text-[#464A39]">Daily challenges</h3>
        <p className="mt-1 text-sm text-[#464A39] opacity-70">
          Keep it simple. Completing the action matters more than the amount.
        </p>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CHALLENGES.map((c) => {
            const done = completedDays.has(c.day);
            const text = getChallengeText(c, difficulty);
            return (
              <button
                key={c.day}
                type="button"
                onClick={() => toggleDay(c.day)}
                className={`text-left rounded-3xl border p-5 transition ${
                  done
                    ? "border-[#464A39] bg-[#464A39] text-white"
                    : "border-[#464A39]/20 bg-white hover:bg-[#f1f0e2]"
                }`}
                aria-pressed={done}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-wide ${done ? "text-white/80" : "text-[#464A39] opacity-60"}`}>
                      Day {c.day}
                    </p>
                    <p className={`mt-1 text-sm font-semibold ${done ? "text-white" : "text-[#464A39]"}`}>
                      {c.title}
                    </p>
                  </div>
                  <div
                    className={`mt-1 h-6 w-6 rounded-full border flex items-center justify-center text-xs font-bold ${
                      done ? "border-white/30 bg-white/15 text-white" : "border-[#464A39]/30 text-[#464A39]"
                    }`}
                    aria-hidden="true"
                  >
                    {done ? "✓" : ""}
                  </div>
                </div>

                <p className={`mt-3 text-sm ${done ? "text-white/90" : "text-[#464A39] opacity-80"}`}>
                  {text}
                </p>

                <p className={`mt-3 text-xs ${done ? "text-white/70" : "text-[#464A39] opacity-50"}`}>
                  Tap to {done ? "undo" : "mark complete"}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-[#464A39]/20 bg-[#C2CBB2]/20 p-6">
        <h3 className="text-base font-semibold tracking-tight text-[#464A39]">Make it yours</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#464A39] opacity-80">
          <li>Pick Lite if you want to build the habit with minimal pressure.</li>
          <li>Pick Boost if you want bigger savings actions and faster progress.</li>
          <li>If you use savings for something important, keep going. That is real life.</li>
        </ul>
      </div>
    </section>
  );
}

function DifficultyPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${
        active
          ? "bg-[#464A39] text-white ring-[#464A39]"
          : "bg-white text-[#464A39] ring-[#464A39]/20 hover:bg-[#f1f0e2]"
      }`}
    >
      {label}
    </button>
  );
}

function StatCard({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="rounded-3xl border border-[#464A39]/20 bg-white p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#464A39] opacity-70">{title}</p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-[#464A39]">{value}</p>
      <p className="mt-1 text-sm text-[#464A39] opacity-70">{sub}</p>
    </div>
  );
}

function Badge({ text, active }: { text: string; active: boolean }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${
        active ? "bg-[#464A39] text-white ring-[#464A39]" : "bg-white text-[#464A39] ring-[#464A39]/20"
      }`}
    >
      {text}
    </span>
  );
}