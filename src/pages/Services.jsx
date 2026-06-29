import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'

export default function Services() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <Helmet>
        <title>Recruitment Services for Marcom Organizations — VelivoHR</title>
        <meta name="description" content="From sourcing and screening to offer management, VelivoHR runs the full recruitment cycle for advertising, media, marketing and communications organizations — end to end." />
        <link rel="canonical" href="https://www.velivohr.ai/services/" />
      </Helmet>

      <PageHero
        eyebrow="What We Handle"
        breadcrumb="Services"
        label="SERVICES"
        title="One mandate. A complete recruitment cycle."
        subtitle="Once a mandate is confirmed, VelivoHR runs the full cycle end to end for advertising, media, marketing and communications organizations — built for speed and efficiency."
      />

      <section className="capabilities">
        <div className="wrap">
          <div className="section-head reveal" style={{ position: 'relative' }}>
            <span className="eyebrow">What We Handle</span>
            <h2>The full scope of work, start to finish.</h2>
            <p>Our team manages every stage of the hiring cycle, so your hiring managers can stay focused on the work in front of them.</p>
          </div>
          <div className="cap-list reveal">
            <div className="cap-row"><span className="ci">01</span><h3>Sourcing &amp; Screening</h3><p>Structured identification of candidates, drawing on networks built across the marcom industry, followed by preliminary screening to check alignment with the job description and culture fit.</p></div>
            <div className="cap-row"><span className="ci">02</span><h3>Verification Checks</h3><p>Preliminary background verification on request. Third-party checks may carry an additional cost.</p></div>
            <div className="cap-row"><span className="ci">03</span><h3>Coordination</h3><p>End-to-end management of interview scheduling, logistics, and feedback loops between every stakeholder.</p></div>
            <div className="cap-row"><span className="ci">04</span><h3>Offer Management</h3><p>Support through salary negotiation, offer rollout, and closing — built to improve offer acceptance rates.</p></div>
          </div>
          <div className="cap-foot reveal">
            <div className="foot-note"><b>Communication Protocol</b>All candidate communication is routed through VelivoHR to keep the process intact.</div>
            <div className="foot-note"><b>Service Limitations</b>VelivoHR does not guarantee specific candidate performance or business outcomes post-engagement.</div>
          </div>
          <p style={{ marginTop: '46px' }}><Link to="/process" className="btn btn-line">See how the process actually runs →</Link></p>
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
