import sources from "@/data/sources.json";

type Source = { label: string; href: string; note?: string };

function SourceLink({ s }: { s: Source }) {
  return (
    <li className="text-white/80">
      <a className="underline underline-offset-2 hover:text-white" href={s.href} target="_blank" rel="noreferrer">
        {s.label}
      </a>
      {s.note ? <span className="text-white/60"> — {s.note}</span> : null}
    </li>
  );
}

export default function CurrentDevelopments() {
  const s = sources as any;

  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">Current Developments in Minnesota (Costs + Fraud)</h2>
      <p className="mt-3 text-white/80">
        This section highlights recent reporting and official releases related to fraud enforcement and rising costs
        (insurance, tabs, and inflation). It’s meant as a “what’s changing now” companion to the 2011–2023 trends.
      </p>

      <h3 className="mt-6 text-lg font-semibold">Fraud enforcement + investigations</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        <li className="text-white/80">
          Minnesota fraud scrutiny has remained intense, with new timelines and summaries of investigations and policy
          responses appearing in recent coverage.
        </li>
        <li className="text-white/80">
          The Walz administration issued an executive-order style directive describing additional anti-fraud steps
          (cross-agency data-sharing, enforcement measures, etc.).
        </li>
      </ul>
      <ul className="mt-3 space-y-2">
        {s.fraud.map((x: Source) => (
          <SourceLink key={x.href} s={x} />
        ))}
      </ul>

      <h3 className="mt-8 text-lg font-semibold">Auto insurance costs</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
        <li>
          Recent reporting noted big prior-year jumps and continued uncertainty in 2025–2026, with factors like repair
          costs and supply-chain inputs often cited.
        </li>
      </ul>
      <ul className="mt-3 space-y-2">
        {s.autoInsurance.map((x: Source) => (
          <SourceLink key={x.href} s={x} />
        ))}
      </ul>

      <h3 className="mt-8 text-lg font-semibold">Tabs / vehicle registration taxes</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
        <li>
          Reporting has focused on how newer tax/fee structures changed the way registration taxes depreciate, which can
          keep tab fees higher for longer for some vehicles.
        </li>
      </ul>
      <ul className="mt-3 space-y-2">
        {s.tabs.map((x: Source) => (
          <SourceLink key={x.href} s={x} />
        ))}
      </ul>

      <h3 className="mt-8 text-lg font-semibold">Rising costs in general (inflation)</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
        <li>
          The Minneapolis–St. Paul CPI-U provides the official regional inflation benchmark.
        </li>
      </ul>
      <ul className="mt-3 space-y-2">
        {s.inflation.map((x: Source) => (
          <SourceLink key={x.href} s={x} />
        ))}
      </ul>
    </section>
  );
}
