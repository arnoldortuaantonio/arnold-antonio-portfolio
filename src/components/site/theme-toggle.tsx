import { useCallback, useEffect, useState } from "react";

type Theme = "dark" | "light";

function apply(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("light", theme === "light");
  root.classList.toggle("dark", theme === "dark");
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("aoa-theme") as Theme | null;
    const initial: Theme = stored === "light" || stored === "dark" ? stored : "dark";
    setTheme(initial);
    apply(initial);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem("aoa-theme", next);
      apply(next);
      return next;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-white/12 bg-white/5 transition-colors duration-300 hover:border-champagne/50"
    >
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(214,190,140,0.25), transparent 70%)",
          opacity: isDark ? 0 : 1,
        }}
      />
      <svg
        viewBox="0 0 24 24"
        className="relative h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden
      >
        {/* sun core / moon disc */}
        <circle
          cx="12"
          cy="12"
          r={isDark ? 8.6 : 4.6}
          className="text-white transition-all duration-500"
          style={{ transformOrigin: "center" }}
        />
        {/* moon cutout */}
        <circle
          cx={isDark ? 16.5 : 24}
          cy={isDark ? 8 : 0}
          r="7.5"
          fill="var(--cutout)"
          stroke="none"
          className="transition-all duration-500"
        />
        {/* sun rays */}
        <g
          className="origin-center transition-all duration-500"
          style={{
            opacity: isDark ? 0 : 1,
            transform: isDark ? "rotate(-90deg) scale(0.4)" : "rotate(0deg) scale(1)",
          }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={deg}
              x1="12"
              y1="1.6"
              x2="12"
              y2="4"
              transform={`rotate(${deg} 12 12)`}
            />
          ))}
        </g>
      </svg>
    </button>
  );
}
