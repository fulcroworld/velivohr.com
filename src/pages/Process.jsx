import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import { processSchema } from '../lib/schema'

export default function Process() {
  const ref = useReveal()
  return (
    <div ref={ref}>
      <Seo
        title="Our Recruitment Process & Methodology — VelivoHR"
        description="5-step marcom recruitment process: intake, sourcing, structured interviews, offer management, and onboarding support — built for speed without compromising quality."
        canonical="https://www.velivohr.ai/process/"
        schema={processSchema}
      />

      <PageHero
        eyebrow="How We Work"
        breadcrumb="How We Work"
        label="PROCESS"
        title="Where process ends and judgment begins."
        subtitle="A structured blend of process and hands-on human expertise, built to move fast without cutting corners on quality."
      />

      <section className="how">
        <div className="wrap">
          <div className="how-grid">
            <div className="how-method reveal">
              <p className="intro">Our process handles the repetitive parts of hiring, so our team can spend its time on the part that actually needs a human: judgment.</p>
              <div className="method-item"><div className="dot"></div><div><h4>Structured workflow</h4><p>Handles the full lifecycle from job posting to candidate evaluation, running continuously.</p></div></div>
              <div className="method-item"><div className="dot"></div><div><h4>Real-time processing</h4><p>Shortlists stream in as applications arrive — qualified candidates delivered within the hour for active roles.</p></div></div>
              <div className="method-item"><div className="dot"></div><div><h4>Structured matching</h4><p>Calibrated scoring aligns candidate profiles to JD requirements, skills, and contextual fit — reviewed by our recruiters at every step.</p></div></div>
              <div className="method-item"><div className="dot"></div><div><h4>Structured interviews</h4><p>Calibrated rubrics surface deeper signal on soft skills and communication ability.</p></div></div>
            </div>
            <div className="steps">
              <div className="step reveal"><div className="sdot">01</div><h4>Intake &amp; Setup</h4><p>Confirm the SOW, finalize the JD, salary bands, and evaluation rubric.</p></div>
              <div className="step reveal d1"><div className="sdot">02</div><h4>Sourcing</h4><p>Structured parsing and scoring deliver the first shortlist in under an hour.</p></div>
              <div className="step reveal d2"><div className="sdot">03</div><h4>Interviews</h4><p>We coordinate scheduling, run interviews, and facilitate feedback.</p></div>
              <div className="step reveal d3"><div className="sdot">04</div><h4>Offers</h4><p>Negotiation support through to offer rollout and acceptance.</p></div>
              <div className="step reveal d4"><div className="sdot">05</div><h4>Engagement</h4><p>Pre-joining engagement and onboarding support to close the loop.</p></div>
            </div>
          </div>
          <p style={{ marginTop: '60px' }}><Link to="/pricing" className="btn btn-line">See pricing for every level →</Link></p>
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
