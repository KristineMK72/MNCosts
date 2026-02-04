"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

type SeriesPoint = { year: number; value: number };
type Props = {
  title: string;
  series: { name: string; points: SeriesPoint[] }[];
  normalize?: boolean;
  yLabel?: string;
};

function normalizeTo01(points: SeriesPoint[]) {
  const vals = points.map((p) => p.value);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const denom = max - min || 1;
  return points.map((p) => ({ ...p, value: (p.value - min) / denom }));
}

export default function TrendChart({ title, series, normalize = false, yLabel }: Props) {
  const traces = useMemo(() => {
    return series.map((s) => {
      const pts = normalize ? normalizeTo01(s.points) : s.points;
      return {
        type: "scatter",
        mode: "lines+markers",
        name: s.name,
        x: pts.map((p) => p.year),
        y: pts.map((p) => p.value),
        hovertemplate: normalize
          ? "%{x}<br>%{y:.2f} (normalized)<extra></extra>"
          : "%{x}<br>%{y}<extra></extra>",
      };
    });
  }, [series, normalize]);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <Plot
        data={traces as any}
        layout={{
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          font: { color: "white" },
          margin: { l: 52, r: 18, t: 20, b: 42 },
          legend: { orientation: "h" },
          xaxis: { title: "Year", gridcolor: "rgba(255,255,255,0.08)" },
          yaxis: { title: yLabel, gridcolor: "rgba(255,255,255,0.08)" },
        }}
        config={{ responsive: true, displaylogo: false }}
        style={{ width: "100%", height: 420 }}
      />
    </div>
  );
}
