export default function StatCard({ icon, label, value, detail }) {
  return (
    <article className="stat-card">
      <div className="stat-icon" aria-hidden="true">{icon}</div>
      <div className="stat-copy">
        <p className="stat-label">{label}</p>
        <p className="stat-value">{value}</p>
        <p className="stat-detail">{detail}</p>
      </div>
    </article>
  );
}
