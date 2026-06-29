import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import Seo from '../components/Seo'
import { homeSchema } from '../lib/schema'

export default function Home() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <Seo
        title="VelivoHR — Specialist Recruitment for the Marcom Industry"
        description="VelivoHR pairs a structured hiring process with decades of insider experience across advertising, media, marketing and communications — hire faster, hire better, spend less."
        canonical="https://www.velivohr.ai/"
        schema={homeSchema}
      />

      {/* HERO */}
      <section className="hero">
        <div className="mesh"><div className="blob b1"></div><div className="blob b2"></div><div className="blob b3"></div></div>
        <div className="wrap hero-inner">
          <div className="reveal">
            <h1>Recruitment, the way a <span className="grad-text">marcom insider</span> would do it.</h1>
            <p className="lede">VelivoHR pairs a structured, real-time hiring process with decades of hands-on experience inside advertising, media, marketing and communications — so you hire faster, hire better, and spend less than you would with a generalist recruiter.</p>
            <div className="hero-cta-row">
              <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
              <Link to="/process" className="btn btn-line">See How We Work</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>Faster shortlists</span><span>Domain-led screening</span><span>90-day guarantee</span><span>Senior marcom leadership</span><span>Transparent pricing</span>
          <span>Faster shortlists</span><span>Domain-led screening</span><span>90-day guarantee</span><span>Senior marcom leadership</span><span>Transparent pricing</span>
        </div>
      </div>

      {/* STATS */}
      <section className="stats">
        <div className="wrap">
          <div className="stats-top reveal">
            <span className="eyebrow">Partnership Overview</span>
            <p>VelivoHR combines a structured hiring process with on-the-ground marcom industry expertise to deliver real-time, high-quality hiring outcomes — closing the gaps that slow traditional recruitment down.</p>
          </div>
          <div className="stat-row reveal">
            <div className="stat-cell"><div className="num grad-text">50%</div><div className="title">Faster hiring</div><div className="desc">Shortlists ready within the hour for active roles, powered by our real-time sourcing process.</div></div>
            <div className="stat-cell"><div className="num grad-text">40%</div><div className="title">Lower cost</div><div className="desc">A meaningful saving against typical agency fee structures.</div></div>
            <div className="stat-cell"><div className="num grad-text">50%</div><div className="title">Better quality</div><div className="desc">Fewer bad hires, thanks to structured matching and calibrated video assessments.</div></div>
            <div className="stat-cell"><div className="num grad-text">95%+</div><div className="title">Client satisfaction</div><div className="desc">The trust we've earned on compliance, transparency and results.</div></div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="why is-teaser">
        <div className="wrap">
          <div className="section-head reveal" style={{ position: 'relative' }}>
            <span className="eyebrow">Why Marcom Teams Choose Us</span>
            <h2>Generalist recruiting wasn't built for marcom culture.</h2>
            <p>Marcom organizations run on creative culture, tight timelines and client pressure that a keyword search will never capture. We work differently — and we explain how on our About page.</p>
          </div>
          <div className="why-grid">
            <div className="why-points">
              <div className="point reveal"><h3>We've lived inside the industry</h3><p>Decades spent working inside advertising, media and communications mean we read a brief the way an insider would, not by matching keywords against a database.</p></div>
              <div className="point reveal d1"><h3>We optimize for fit, not folder size</h3><p>We'd rather hand you three right candidates than thirty maybes — networks deep enough to find people who match your specific standards.</p></div>
            </div>
            <div className="compare reveal">
              <div className="compare-head"><h3>At a Glance</h3></div>
              <div className="compare-cols"><span>Feature</span><span>Generalist</span><span>VelivoHR</span></div>
              <div className="compare-rows">
                <div className="crow"><span className="lbl">Industry knowledge</span><span className="gen">Broad, transactional</span><span className="vel">Deep, insider-led</span></div>
                <div className="crow"><span className="lbl">Search method</span><span className="gen">Keywords &amp; databases</span><span className="vel">Networks &amp; strategic mapping</span></div>
                <div className="crow"><span className="lbl">Where we come from</span><span className="gen">Outside looking in</span><span className="vel">Former marcom &amp; HR leadership</span></div>
              </div>
            </div>
          </div>
          <p style={{ marginTop: '36px' }}><Link to="/about" className="btn btn-line">Meet the team &amp; our full story →</Link></p>
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="capabilities is-teaser">
        <div className="wrap">
          <div className="section-head reveal" style={{ position: 'relative' }}>
            <span className="eyebrow">What We Handle</span>
            <h2>One mandate. A complete recruitment cycle.</h2>
            <p>Once a mandate is confirmed, VelivoHR runs the full cycle end to end — built for speed and efficiency.</p>
          </div>
          <div className="cap-list reveal">
            <div className="cap-row"><span className="ci">01</span><h3>Sourcing &amp; Screening</h3><p>Structured identification of candidates, followed by preliminary screening to check alignment with the job description and culture fit.</p></div>
            <div className="cap-row"><span className="ci">02</span><h3>Coordination</h3><p>End-to-end management of interview scheduling, logistics, and feedback loops between every stakeholder.</p></div>
            <div className="cap-row"><span className="ci">03</span><h3>Offer Management</h3><p>Support through salary negotiation, offer rollout, and closing — built to improve offer acceptance rates.</p></div>
          </div>
          <p style={{ marginTop: '36px' }}><Link to="/services" className="btn btn-line">See the full scope of work →</Link></p>
        </div>
      </section>

      {/* GUARANTEE + CTA — dark zone */}
      <div className="dark-zone">
        <div className="mesh"><div className="blob b1"></div><div className="blob b2"></div></div>
        <section className="assurance is-teaser">
          <div className="wrap">
            <div className="section-head on-dark reveal" style={{ position: 'relative' }}>
              <span className="eyebrow">Our Commitment</span>
              <h2>Every placement is guaranteed — on clearly defined terms.</h2>
              <p>A 90-day protection window and one free replacement per role, subject to the terms outlined on our Guarantee page.</p>
            </div>
            <div className="assure-band reveal">
              <div className="assure-cell"><div className="num grad-text">90 days</div><div className="label">Protection window from the candidate's joining date</div></div>
              <div className="assure-cell"><div className="num grad-text">1 free</div><div className="label">Replacement for the same role, no added cost</div></div>
              <div className="assure-cell"><div className="num grad-text">7 days</div><div className="label">Window to notify VelivoHR of an exit</div></div>
              <div className="assure-cell"><div className="num grad-text">60 days</div><div className="label">Search window for the replacement</div></div>
            </div>
            <p className="reveal"><Link to="/guarantee" className="btn btn-on-dark btn-line">Read the full guarantee terms →</Link></p>
          </div>
        </section>

        <section className="next">
          <div className="wrap">
            <div className="section-head on-dark reveal" style={{ position: 'relative', marginBottom: '30px' }}>
              <span className="eyebrow">Get Started</span>
              <h2>Let's talk about your next great hire.</h2>
              <p>Tell us about the role — we'll come back with a plan, not a pitch.</p>
            </div>
            <p className="reveal"><Link to="/contact" className="btn btn-primary">Start a Conversation</Link></p>
          </div>
        </section>
      </div>
    </div>
  )
}
