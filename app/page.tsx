"use client";

import { useMemo, useState } from "react";
import TrendChart from "@/components/TrendChart";
import NormalizeToggle from "@/components/NormalizeToggle";
import trends from "@/data/mn_trends.json";
import ReportSection from "@/components/ReportSection";
import CurrentDevelopments from "@/components/CurrentDevelopments";

export default function HomePage() {
  const [normalize, setNormalize] = useState(true);

  const combined = useMemo(() => {
    return [
      { name: "Total Debt per Capita", points: (trends as any).debtPerCapita },
      { name: "Delinquency Rate (90+ days)", points: (trends as any).delinquency90 },
      { name: "Depression Rate", points: (trends as any).depressionPct },
      { name: "Suicide Rate", points: (trends as any).suicideRate },
    ];
  }, []);

  return (
    <main className="mx-auto max-w-6xl px-5 py-10 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">
          Minnesota’s Shifting Landscape (2011–2023)
        </h1>
        <p className="mt-3 max-w-3xl text-white/80">
          Interactive view of financial pressure signals and mental health indicators. Toggle normalized vs raw to compare trends.
        </p>

        <div className="mt-4">
          <NormalizeToggle value={normalize} onChange={setNormalize} />
        </div>
      </header>

      <TrendChart
        title="Normalized trends (compare direction + timing)"
        series={combined}
        normalize={normalize}
        yLabel={normalize ? "0 → 1 index" : "Raw values (mixed units)"}
        events={(eventData as any).events}
      />
      <ReportSection />
      <CurrentDevelopments />
    </main>
  );
}
