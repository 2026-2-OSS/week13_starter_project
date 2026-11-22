export default function Header({ title, subtitle }) {
  return (
    <header className="site-header">
      <div className="brand-mark" aria-hidden="true">OS</div>
      <div className="brand-text">
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
      <span className="header-chip">React + Vite</span>
    </header>
  );
}
