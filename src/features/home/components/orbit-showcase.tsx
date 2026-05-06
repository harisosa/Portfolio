import { motion, useReducedMotion } from "framer-motion";
import {
  barLoop,
  blinkLoop,
  cardReveal,
  chipLoop,
  floatingGlow,
  floatingGlowAlt,
  hoverLift,
  panelHover,
  panelReveal,
  sheenLoop,
} from "../../../lib/hero-motion";

const signalCards = [
  {
    value: "10+",
    suffix: "YR",
    title: "Product Delivery",
    chips: ["Frontend", "Enterprise", "Delivery"],
    target: "#journey",
    tone: "cyan" as const,
    className: "sm:col-span-2 lg:col-span-5",
    valueClassName:
      "text-[clamp(3.3rem,7.6vw,5.2rem)] tracking-[-0.08em] sm:text-[5rem]",
  },
  {
    value: "3",
    suffix: "Brands",
    title: "Microsoft · Amazon · Allianz",
    chips: ["Cross-team", "Enterprise"],
    target: "#experience",
    tone: "blue" as const,
    className: "lg:col-span-3",
    valueClassName:
      "text-[clamp(2.9rem,6.8vw,4.5rem)] tracking-[-0.08em] sm:text-[4.2rem]",
  },
  {
    value: "UI + API",
    suffix: "",
    title: "React · .NET · Auth",
    chips: ["React", ".NET", "MSAL"],
    target: "#stack",
    tone: "violet" as const,
    className: "lg:col-span-4",
    valueClassName:
      "text-[clamp(2rem,5vw,3.1rem)] tracking-[-0.06em] leading-[0.92] sm:text-[3rem]",
  },
];

const coreTools = [
  "React",
  "TypeScript",
  ".NET Core",
  "Azure",
  "Angular",
  "Docker",
  "CI/CD",
  "MSAL",
  "TanStack",
];

const toneMap = {
  cyan: {
    ring: "border-cyan-300/18",
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.24),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.12),transparent_42%)]",
    dot: "bg-cyan-300",
    chip:
      "border-cyan-300/18 bg-cyan-300/10 text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    edge: "from-cyan-300/22 via-cyan-200/0 to-cyan-300/0",
    bar: "from-cyan-300/88 via-sky-300/55 to-white/10",
    hoverShadow: "0 18px 52px rgba(56, 189, 248, 0.14)",
  },
  blue: {
    ring: "border-sky-300/16",
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.2),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_42%)]",
    dot: "bg-sky-300",
    chip:
      "border-sky-300/16 bg-sky-300/10 text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    edge: "from-sky-300/18 via-sky-200/0 to-sky-300/0",
    bar: "from-sky-300/82 via-blue-300/55 to-white/10",
    hoverShadow: "0 18px 52px rgba(96, 165, 250, 0.12)",
  },
  violet: {
    ring: "border-violet-300/16",
    glow:
      "bg-[radial-gradient(circle_at_top_left,rgba(167,139,250,0.22),transparent_52%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.12),transparent_42%)]",
    dot: "bg-violet-300",
    chip:
      "border-violet-300/16 bg-violet-300/10 text-violet-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    edge: "from-violet-300/18 via-violet-200/0 to-violet-300/0",
    bar: "from-violet-300/84 via-fuchsia-300/52 to-white/10",
    hoverShadow: "0 18px 52px rgba(167, 139, 250, 0.12)",
  },
};

function goToSection(selector: string) {
  if (typeof document === "undefined") return;
  const element = document.querySelector(selector);
  if (element instanceof HTMLElement) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function OrbitShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={panelReveal}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "show"}
      whileHover={reduceMotion ? undefined : panelHover}
      className="relative w-full lg:mt-1 lg:justify-self-end lg:max-w-[810px] xl:max-w-[830px]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[8%] -z-10 h-40 w-40 rounded-full bg-cyan-400/12 blur-3xl sm:h-48 sm:w-48"
        {...(!reduceMotion ? floatingGlow(0.2, 7.4) : {})}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[6%] right-[4%] -z-10 h-44 w-44 rounded-full bg-violet-400/10 blur-3xl sm:h-56 sm:w-56"
        {...(!reduceMotion ? floatingGlowAlt(0.8, 8.8) : {})}
      />

      <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,18,34,0.92)_0%,rgba(8,13,25,0.97)_100%)] p-4 shadow-[0_24px_80px_rgba(2,8,23,0.34),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.06),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.07),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-y-8 left-0 w-px bg-gradient-to-b from-transparent via-white/9 to-transparent" />
        <div className="pointer-events-none absolute inset-y-8 right-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

        <div className="pointer-events-none absolute left-4 top-4 h-12 w-12 rounded-tl-[20px] border-l border-t border-white/10" />
        <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 rounded-tr-[20px] border-r border-t border-white/10" />
        <div className="pointer-events-none absolute bottom-4 left-4 h-12 w-12 rounded-bl-[20px] border-b border-l border-white/8" />
        <div className="pointer-events-none absolute bottom-4 right-4 h-12 w-12 rounded-br-[20px] border-b border-r border-white/8" />

        <motion.div
          variants={panelReveal}
          className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12"
        >
          {signalCards.map((card, index) => {
            const tone = toneMap[card.tone];

            return (
              <motion.button
                key={card.title}
                type="button"
                variants={cardReveal}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        ...hoverLift,
                        boxShadow: tone.hoverShadow,
                      }
                }
                whileTap={reduceMotion ? undefined : { scale: 0.988 }}
                onClick={() => goToSection(card.target)}
                className={`group relative overflow-hidden rounded-[24px] border bg-[linear-gradient(180deg,rgba(255,255,255,0.045)_0%,rgba(255,255,255,0.02)_100%)] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_14px_42px_rgba(2,8,23,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-300/40 sm:p-5 ${tone.ring} ${card.className}`}
              >
                <div className={`pointer-events-none absolute inset-0 ${tone.glow}`} />

                {!reduceMotion ? (
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-[-25%] w-[34%] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    {...sheenLoop(index * 0.9, 6.8)}
                  />
                ) : null}

                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r ${tone.edge}`}
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.24em] text-slate-200/58">
                      <motion.span
                        className={`h-1.5 w-1.5 rounded-full ${tone.dot}`}
                        {...(!reduceMotion ? blinkLoop(index * 0.18) : {})}
                      />
                    </div>

                    <div className="hidden gap-1.5 sm:flex">
                      <span className="h-1.5 w-7 rounded-full bg-white/14" />
                      <motion.span
                        className={`h-1.5 w-5 rounded-full ${tone.dot}`}
                        style={{ transformOrigin: "left center" }}
                        {...(!reduceMotion ? barLoop(index * 0.22, 5.1) : {})}
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex items-end gap-2 leading-none">
                    <span
                      className={`font-hero bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(226,232,240,0.12)] ${card.valueClassName}`}
                    >
                      {card.value}
                    </span>

                    {card.suffix ? (
                      <span className="mb-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-300/72 sm:text-[11px]">
                        {card.suffix}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-auto pt-6">
                    <p className="text-sm font-medium text-slate-100 sm:text-[0.95rem]">
                      {card.title}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {card.chips.map((chip, chipIndex) => (
                        <motion.span
                          key={chip}
                          className={`rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${tone.chip}`}
                          {...(!reduceMotion
                            ? chipLoop(index * 0.2 + chipIndex * 0.22, 4.8)
                            : {})}
                        >
                          {chip}
                        </motion.span>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-6 gap-1.5">
                      {[46, 74, 30, 62, 86, 40].map((width, barIndex) => (
                        <motion.span
                          key={`${card.title}-${barIndex}`}
                          className={`h-1.5 rounded-full bg-gradient-to-r ${tone.bar}`}
                          style={{
                            width: `${width}%`,
                            transformOrigin: "left center",
                          }}
                          {...(!reduceMotion
                            ? barLoop(index * 0.15 + barIndex * 0.18, 5.2)
                            : {})}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          variants={cardReveal}
          className="relative z-10 mt-3 overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035)_0%,rgba(255,255,255,0.018)_100%)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-5"
        >
          {!reduceMotion ? (
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-[-25%] w-[34%] bg-gradient-to-r from-transparent via-white/8 to-transparent"
              {...sheenLoop(0.8, 7.2)}
            />
          ) : null}

          <div className="relative z-10 flex flex-wrap gap-2.5">
            {coreTools.map((tool, index) => (
              <motion.span
                key={tool}
                whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
                className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-100/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                {...(!reduceMotion ? chipLoop(index * 0.12, 5) : {})}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
