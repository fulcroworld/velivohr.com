import { Link } from "react-router-dom";

export default function PageHero({
  eyebrow,
  breadcrumb,
  title,
  subtitle,
  label,
}) {
  return (
    <section className="page-hero">
      <div className="ph-mesh">
        <div className="ph-b1"></div>
        <div className="ph-b2"></div>
      </div>
      <div className="ph-label">{label}</div>
      <div className="wrap">
        <span className="ph-eyebrow">{eyebrow}</span>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{breadcrumb}</span>
        </div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
