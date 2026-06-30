import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import Accordion from "../components/Accordion";
import { guaranteeSchema } from "../lib/schema";

const ACCORDION_ITEMS = [
  {
    title: "Guarantee Exclusions",
    content: (
      <ul>
        <li>
          Exit arising from misrepresentation of role details, compensation,
          location, or substantial changes to terms post-offer.
        </li>
        <li>
          Exits caused by delayed onboarding, salary payment delays, or abrupt
          policy changes attributable to the client.
        </li>
        <li>
          Departures due to workplace disputes, harassment, or conduct directly
          attributable to the client organization.
        </li>
        <li>
          Terminations resulting from redundancy, restructuring, business
          closure, layoffs, or force majeure events.
        </li>
        <li>
          The placement fee must be settled in full prior to initiating any
          replacement. The guarantee is void where VelivoHR's process guidelines
          have not been observed by the client.
        </li>
      </ul>
    ),
  },
  {
    title: "Client Obligations",
    content: (
      <ul>
        <li>
          A finalized job description, compensation bands, and clearly defined
          selection criteria must be provided before sourcing commences.
        </li>
        <li>
          Candidate feedback must be shared within 3 business days to maintain
          engagement throughout the process.
        </li>
        <li>
          Timely access to relevant hiring managers is required for assessment
          scheduling and offer closure.
        </li>
        <li>
          Core role requirements must remain stable throughout the engagement.
          Significant mid-process changes may necessitate a revision to the
          Statement of Work.
        </li>
      </ul>
    ),
  },
  {
    title: "Scope of Services",
    content: (
      <ul>
        <li>
          Reference and background verification checks are available as an
          optional add-on service, billed separately upon request.
        </li>
        <li>
          Services are applicable to roles based in India. International
          placements are subject to a separate engagement addendum.
        </li>
        <li>
          All candidate interactions, resume submissions, and interview
          coordination are managed exclusively through VelivoHR.
        </li>
      </ul>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <ul>
        <li>
          VelivoHR's total liability is strictly limited to the placement fee
          received in respect of the relevant candidate.
        </li>
        <li>
          VelivoHR shall not be liable for indirect, consequential, or punitive
          damages of any nature.
        </li>
        <li>
          VelivoHR does not warrant specific performance outcomes or business
          results in respect of placed candidates.
        </li>
      </ul>
    ),
  },
];

export default function Guarantee() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <Seo
        title="Placement Guarantee & Terms — VelivoHR"
        description="90-day guarantee on every marcom placement — one free replacement, clearly defined exclusions, and client obligations. Read the full terms."
        canonical="https://www.velivohr.ai/guarantee/"
        schema={guaranteeSchema}
      />

      <PageHero
        eyebrow="Our Commitment"
        breadcrumb="Guarantee"
        label="GUARANTEE"
        title="Every placement is guaranteed — under clearly defined terms."
        subtitle="A 90-day protection window and one free replacement per role, subject to the terms and obligations outlined below."
      />

      <div className="dark-zone">
        <div className="mesh">
          <div className="blob b1"></div>
          <div className="blob b2"></div>
        </div>
        <section className="assurance">
          <div className="wrap">
            <div className="assure-band reveal">
              <div className="assure-cell">
                <div className="num grad-text">90 days</div>
                <div className="label">
                  Protection window from the candidate's joining date
                </div>
              </div>
              <div className="assure-cell">
                <div className="num grad-text">1 free</div>
                <div className="label">
                  Replacement for the same role, at no additional cost
                </div>
              </div>
              <div className="assure-cell">
                <div className="num grad-text">7 days</div>
                <div className="label">
                  Window to notify VelivoHR of an exit
                </div>
              </div>
              <div className="assure-cell">
                <div className="num grad-text">60 days</div>
                <div className="label">
                  Search window for the replacement placement
                </div>
              </div>
            </div>
            <Accordion items={ACCORDION_ITEMS} />
            <p className="reveal" style={{ marginTop: "56px" }}>
              <Link to="/contact" className="btn btn-primary">
                Start a Conversation
              </Link>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
