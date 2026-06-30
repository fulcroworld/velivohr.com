import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { pricingSchema } from "../lib/schema";

export default function Pricing() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <Seo
        title="Recruitment Pricing — VelivoHR Marcom Hiring Fees"
        description="Transparent success-fee pricing: 5% for entry and mid-level, 8.33% for senior leadership. No retainer, no hidden charges — you pay only when we deliver."
        canonical="https://www.velivohr.ai/pricing/"
        schema={pricingSchema}
      />

      <PageHero
        eyebrow="Fee Structure"
        breadcrumb="Pricing"
        label="PRICING"
        title="Pricing that scales with the role, not the runaround."
        subtitle="One transparent, success-fee structure calibrated to seniority. No retainers, no hidden charges — you pay only when we deliver."
      />

      <section className="pricing">
        <div className="wrap">
          <div className="price-grid">
            <div className="price-card reveal">
              <div className="tier">Entry-Level</div>
              <div className="fee">5%</div>
              <div className="fee-label">of Gross Annual CTC</div>
              <div className="range">
                <span>CTC Range</span>Up to INR 6 Lakhs
              </div>
            </div>
            <div className="price-card reveal d1">
              <div className="tier">Mid-Level</div>
              <div className="fee">5%</div>
              <div className="fee-label">of Gross Annual CTC</div>
              <div className="range">
                <span>CTC Range</span>INR 6 – 18 Lakhs
              </div>
            </div>
            <div className="price-card featured reveal d2">
              <div className="price-badge">Senior Leadership</div>
              <div className="tier">Senior-Level</div>
              <div className="fee grad-text">8.33%</div>
              <div className="fee-label">of Gross Annual CTC</div>
              <div className="range">
                <span>CTC Range</span>Above INR 18 Lakhs
              </div>
            </div>
          </div>
          <div className="price-foot reveal">
            <div className="foot-note">
              <b>Billing &amp; Taxes</b>Fees are calculated on Gross Annual CTC,
              including fixed and guaranteed bonuses — exclusive of 18% GST and
              other applicable taxes.
            </div>
            <div className="foot-note">
              <b>Introduction Protection</b>If a candidate we introduce is
              engaged by the client or an affiliate within 12 months of
              introduction, the full placement fee remains payable.
            </div>
          </div>
          <p style={{ marginTop: "46px" }}>
            <Link to="/guarantee" className="btn btn-line">
              See what's covered by our guarantee →
            </Link>
          </p>
        </div>
      </section>

      <section className="next" style={{ padding: "0 0 110px" }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <Link to="/contact" className="btn btn-primary">
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
