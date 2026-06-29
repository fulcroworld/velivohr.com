import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { aboutSchema } from '../lib/schema'

export default function About() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <Seo
        title="About VelivoHR — Marcom Recruitment Specialists with Insider Experience"
        description="VelivoHR is founded by two leaders with decades inside advertising, media, marketing and communications. Deep domain knowledge — not keyword matching — is how we recruit."
        canonical="https://www.velivohr.ai/about/"
        schema={aboutSchema}
      />

      <PageHero
        eyebrow="Our Story"
        breadcrumb="About"
        label="ABOUT"
        title="Built by people who've sat on both sides of the table."
        subtitle="One spent decades working across advertising, media and communications. The other ran HR inside marcom organizations. Together, that's the perspective VelivoHR recruits with."
      />

      <section className="why">
        <div className="wrap">
          <div className="section-head reveal" style={{ position: 'relative' }}>
            <span className="kicker-num">01</span>
            <span className="eyebrow">Why Marcom Teams Choose Us</span>
            <h2>Generalist recruiting wasn't built for marcom culture.</h2>
            <p>Marcom organizations run on creative culture, tight timelines and client pressure that a keyword search will never capture. We work differently.</p>
          </div>
          <div className="why-grid">
            <div className="why-points">
              <div className="point reveal"><h3>We've lived inside the industry</h3><p>Decades spent working inside — and engaging closely with — the advertising, media and communications landscape mean we read a brief the way a marcom insider would, not by matching keywords against a database.</p></div>
              <div className="point reveal d1"><h3>We optimize for fit, not folder size</h3><p>We'd rather hand you three right candidates than thirty maybes. Our networks run deep enough to find people who match your specific operational and creative standards.</p></div>
              <div className="point reveal d2"><h3>We stay invested after the offer</h3><p>We understand what life inside a marcom organization actually involves — client demands, pitch cycles, deadline pressure. So we go beyond sourcing, into the organizational health that makes a hire stick.</p></div>
            </div>
            <div className="compare reveal">
              <div className="compare-head"><h3>At a Glance</h3></div>
              <div className="compare-cols"><span>Feature</span><span>Generalist</span><span>VelivoHR</span></div>
              <div className="compare-rows">
                <div className="crow"><span className="lbl">Industry knowledge</span><span className="gen">Broad, transactional</span><span className="vel">Deep, insider-led</span></div>
                <div className="crow"><span className="lbl">Culture fit</span><span className="gen">An afterthought</span><span className="vel">The starting point</span></div>
                <div className="crow"><span className="lbl">Search method</span><span className="gen">Keywords &amp; databases</span><span className="vel">Networks &amp; strategic mapping</span></div>
                <div className="crow"><span className="lbl">Where we come from</span><span className="gen">Outside looking in</span><span className="vel">Former marcom &amp; HR leadership</span></div>
                <div className="crow"><span className="lbl">What we optimize for</span><span className="gen">Volume of resumes</span><span className="vel">Precision of match</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="wrap">
          <div className="section-head reveal" style={{ position: 'relative' }}>
            <span className="kicker-num">02</span>
            <span className="eyebrow">Leadership</span>
            <h2>The people behind VelivoHR.</h2>
          </div>
          <div className="team-grid">
            <div className="team-card reveal">
              <div className="avatar"><img src="/assets/Gokul_sq.jpg" alt="Gokul Krishnamurthy, Director, VelivoHR" /></div>
              <h3>Gokul Krishnamurthy</h3>
              <div className="role">Director, VelivoHR</div>
              <p>Gokul brings over two decades of insider experience across advertising, media and marcom — including editorial leadership roles at Campaign India, Campaign Middle East, The Times Group, and The Hindu BusinessLine, where he spent his career closely analyzing and consulting for the very organizations he now recruits for.</p>
              <p>That immersion — in creative culture and the complexities of brand-custodian mandates — lets him identify talent that goes beyond a technical skill set, placing leaders who are genuinely aligned with the high-stakes environment of today's marcom organizations.</p>
            </div>
            <div className="team-card reveal d1">
              <div className="avatar"><img src="/assets/Debolina_sq.jpg" alt="Debolina Das, Director, VelivoHR" /></div>
              <h3>Debolina Das</h3>
              <div className="role">Director, VelivoHR</div>
              <p>Debolina is an HR leader turned entrepreneur with over a decade of experience driving organizational strategy and human capital development — including roles as Head of HR and Chief Recruiter at leading digital and marketing organizations, among them a tenure as Head of HR at ibs Fulcro.</p>
              <p>That practical, on-the-ground understanding of marcom talent bottlenecks now shapes how VelivoHR runs: a high-touch hiring experience aligned to the pulse and performance requirements of each organization we work with.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="next" style={{ padding: '0 0 110px' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </div>
  )
}
