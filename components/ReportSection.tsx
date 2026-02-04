export default function ReportSection() {
  return (
    <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">Minnesota’s Shifting Landscape (2011–2023)</h2>
      <p className="mt-3 text-white/80">
        Minnesota, often lauded for its quality of life, has experienced significant shifts in both the
        financial well-being and mental health of its residents over the past decade. A look at data from
        2011 to 2023 reveals evolving trends in household debt, loan delinquencies, and the prevalence of
        depression and suicide rates.
      </p>

      <h3 className="mt-6 text-lg font-semibold">The Financial Picture: Rising Debt and Emerging Credit Challenges</h3>
      <p className="mt-2 text-white/80">
        Household debt (mortgages, auto loans, credit cards, student loans, etc.) increased substantially.
      </p>

      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
        <li>
          <span className="font-semibold text-white">Total Debt per Capita:</span> In 2011, the average
          debt per Minnesotan was approximately <span className="font-semibold text-white">$43,820</span>.
          By the end of 2023, it rose to about <span className="font-semibold text-white">$65,020</span>,
          with acceleration after 2020.
        </li>
        <li>
          <span className="font-semibold text-white">Loan Delinquency Rate (90+ days):</span> Delinquencies
          fell from <span className="font-semibold text-white">3.13%</span> (2011) to a low of{" "}
          <span className="font-semibold text-white">0.88%</span> (2021), then climbed back to{" "}
          <span className="font-semibold text-white">1.24%</span> by 2023 — suggesting rising strain for
          some households.
        </li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold">Mental Health Trends: A Growing Concern</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
        <li>
          <span className="font-semibold text-white">Prevalence of Depression:</span> Adults diagnosed with a
          depressive disorder increased from <span className="font-semibold text-white">15.1%</span> (2011)
          to <span className="font-semibold text-white">23.5%</span> (2022), with a slight dip to{" "}
          <span className="font-semibold text-white">23.0%</span> (2023).
        </li>
        <li>
          <span className="font-semibold text-white">Suicide Rates:</span> Suicide per 100,000 increased from{" "}
          <span className="font-semibold text-white">12.3</span> (2011) to{" "}
          <span className="font-semibold text-white">14.8</span> (2022), with an overall upward direction.
        </li>
      </ul>

      <h3 className="mt-6 text-lg font-semibold">Understanding the Interplay</h3>
      <p className="mt-2 text-white/80">
        Correlation does not imply causation. Financial stability and mental health are shaped by many factors:
        economic conditions, social support, access to care, policy changes, and broader societal stressors.
        Still, the co-occurrence of rising debt, a recent uptick in delinquencies, and increasing depression
        and suicide rates warrants continued, careful investigation and thoughtful public strategies.
      </p>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/80">
        If you or someone you know is struggling or in crisis in the U.S., call or text{" "}
        <span className="font-semibold text-white">988</span> for the Suicide &amp; Crisis Lifeline.
      </div>
    </section>
  );
}
