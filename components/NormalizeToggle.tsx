"use client";

export default function NormalizeToggle({
  value,
  onChange
}: {
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm hover:bg-white/10"
    >
      {value ? "Showing: Normalized" : "Showing: Raw Values"}
    </button>
  );
}
