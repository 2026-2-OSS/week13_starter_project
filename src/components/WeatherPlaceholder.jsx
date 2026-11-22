// LAB 7: Create WeatherCard.jsx and replace this placeholder in App.jsx.
export default function WeatherPlaceholder() {
  return (
    <aside className="panel" aria-labelledby="weather-placeholder-title">
      <div className="panel-header">
        <div>
          <p className="section-eyebrow">LAB 7</p>
          <h2 id="weather-placeholder-title">Weather API</h2>
          <p className="subdued">Public API integration practice</p>
        </div>
        <span className="status-pill todo">To do</span>
      </div>
      <div className="weather-empty-icon" aria-hidden="true">☁️</div>
      <p className="placeholder-title">Ready to connect?</p>
      <p className="placeholder-desc">
        In LAB 7, call Open-Meteo with Axios and show current weather information.
      </p>
      <span className="code-chip">src/components/WeatherCard.jsx</span>
    </aside>
  );
}
