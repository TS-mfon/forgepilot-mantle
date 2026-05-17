import { useMemo } from "react";

import { getJson } from "../api";
import { useApi } from "../hooks/useApi";
import type { Signal } from "../types";

export function HomePage() {
  const { data, error, isLoading } = useApi(() => getJson<Signal[]>("/signals"));

  const signals = useMemo(() => data ?? [], [data]);
  const featured = signals[0];

  if (isLoading) {
    return <main className="panel">Loading repository intelligence...</main>;
  }

  if (error) {
    return <main className="panel">Failed to load signals: {error}</main>;
  }

  return (
    <main>
      <section className="hero">
        <div className="panel">
          <div className="eyebrow">Builder intelligence</div>
          <h1 className="headline">Paste a Mantle repo, surface the integration risks, and ship safer contracts.</h1>
          <p className="copy">
            ForgePilot Mantle scans repos for yield-asset accounting issues, risky permissions, missing pause paths, and Mantle integration gotchas.
          </p>
        </div>
        <div className="panel signal-card">
          <span className="chip">Latest critical finding</span>
          <h2 style={{ margin: 0 }}>{featured?.headline}</h2>
          <p className="muted" style={{ margin: 0 }}>
            AI explanation: {featured?.summary}
          </p>
        </div>
      </section>

      <section className="grid" style={{ marginBottom: 28 }}>
        <div className="panel">
          <div className="metric">{signals.length}</div>
          <div className="metric-label">Active scan findings</div>
        </div>
        <div className="panel">
          <div className="metric">6</div>
          <div className="metric-label">Rulepack checks</div>
        </div>
        <div className="panel">
          <div className="metric">38</div>
          <div className="metric-label">Simulated user flows</div>
        </div>
      </section>

      <section className="panel">
        <div className="eyebrow">Finding board</div>
        <h2>Audit results judges can understand in 10 seconds</h2>
        <div className="table">
          {signals.map((signal) => (
            <div key={signal.id} className="row">
              <div>{signal.headline}</div>
              <div className="muted">
                {signal.sourceAsset} -&gt; {signal.destinationAsset}
              </div>
              <div className="muted">
                {signal.sourceProtocol} / {signal.destinationProtocol}
              </div>
              <div>{signal.confidence}%</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
