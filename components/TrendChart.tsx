"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";
import type { Layout, Data } from "plotly.js";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

type SeriesPoint = { year: number; value: number };
type ChartEvent = { label: string; x: number; source?: string };

type Props = {
  title: string;
  series: { name: string; points: SeriesPoint[] }[];
  normalize?: boolean;
  yLabel?: string;
  events?: ChartEvent[];
};

function normalizeTo01(points: SeriesPoint[]) {
  const vals = points.map((p) => p.value);
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  const denom = max - min || 1;
  return points.map((p) => ({ ...p, value: (p.value - min) / denom }));
}

export default function TrendChart({
  title,
  series,
  normalize = false,
  yLabel,
  events = [],
}: Props) {
  const traces: Partial<Data>[] = useMemo(() => {
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

  // Vertical timeline markers (fraud / policy / investigations)
  const eventShapes = events.map((e) => ({
    type: "line" as const,
    xref: "x" as const,
    yref: "paper" as const,
    x0: e.x,
    x1: e.x,
    y0: 0,
    y1: 1,
    line: { width: 1, dash: "dot", color: "rgba(255,255,255,0.25)" },
  }));

  const eventAnnotations = events.map((e, i) => ({
    x: e.x,
    y: 1,
    xref: "x" as const,
    yref: "paper" as const,
    xanchor: "left" as const,
    yanchor: "top" as const,
    text: e.source
      ? `<a href="${e.source}" target="_blank">${e.label}</a>`
      : e.label,
    showarrow: false,
    font: { size: 11, color: "rgba(255,255,255,0.75)" },
    bgcolor: "rgba(0,0,0,0.35)",
    bordercolor: "rgba(255,255,255,0.12)",
    borderwidth: 1,
    borderpad: 3,
    // stagger to reduce overlap
    ay: -(8 + (i % 3) * 18),
  }));

  const layout: Partial<Layout> = {
    paper_bgcolor: "rgba(0,0,0,0)",
    plot_bgcolor: "rgba(0,0,0,0)",
    font: { color: "white" },
    margin: { l: 52, r: 18, t: 20, b: 42 },
    legend: { orientation: "h" },
    xaxis: { title: "Year", gridcolor: "rgba(255,255,255,0.08)" },
    yaxis: { title: yLabel, gridcolor: "rgba(255,255,255,0.08)" },
    shapes: eventShapes as any,
    annotations: eventAnnotations as any,
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <Plot
        data={traces as any}
        layout={layout as any}
        config={{ responsive: true, displaylogo: false }}
        style={{ width: "100%", height: 420 }}
      />
    </div>
  );
}
