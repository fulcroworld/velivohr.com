import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import Seo from "../components/Seo";
import PageHero from "../components/PageHero";
import { contactSchema } from "../lib/schema";

function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim(),
    };
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/submit-contact-form`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else
        throw new Error(
          data.message || "Something went wrong. Please try again.",
        );
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err.message ||
          "We couldn't send that. Please try again or email us directly.",
      );
    }
  };

  return (
    <div className="form-card reveal">
      <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>
        Send us a message
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="form-grid-2">
          <div className="form-row">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Work email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-grid-2">
          <div className="form-row">
            <label htmlFor="company">Company</label>
            <input type="text" id="company" name="company" />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone (optional)</label>
            <input type="tel" id="phone" name="phone" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="message">Tell us about the role</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Role, seniority, timeline — whatever you have."
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ width: "100%", justifyContent: "center" }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
        {status === "ok" && (
          <p className="form-msg show ok">
            Thanks — your message is on its way. We'll get back to you shortly.
          </p>
        )}
        {status === "error" && <p className="form-msg show err">{errorMsg}</p>}
      </form>
    </div>
  );
}

export default function Contact() {
  const ref = useReveal();
  return (
    <div ref={ref}>
      <Seo
        title="Contact VelivoHR — Hire for Your Marcom Team"
        description="Share your open role with VelivoHR — advertising, media, marketing or communications. We respond within one business day with a plan tailored to your brief."
        canonical="https://www.velivohr.com/contact/"
        schema={contactSchema}
      />

      <PageHero
        eyebrow="Get In Touch"
        breadcrumb="Contact"
        label="CONTACT"
        title="Tell us about your next hire."
        subtitle="Share the role, seniority, and timeline — we'll respond within one business day with a plan, not a pitch."
      />

      <section className="contact-page">
        <div className="wrap">
          <div className="contact-page-grid">
            <div className="reveal">
              <div className="contact-info-card">
                <div className="k">Contact Person</div>
                <div className="v">Debolina Das</div>
                <div className="k">Designation</div>
                <div className="v">Co-Founder &amp; MD</div>
                <div className="k">Email</div>
                <div className="v">
                  <a href="mailto:debolina@velivohr.com">
                    debolina@velivohr.com
                  </a>
                </div>
              </div>
              <div className="section-head" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Getting Started</span>
                <h2 style={{ fontSize: "26px" }}>
                  Four steps to your next hire
                </h2>
              </div>
              <div className="mini-steps" style={{ marginTop: "18px" }}>
                <div
                  className="mini-step"
                  style={{
                    background: "var(--paper-2)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div className="si" style={{ color: "var(--blue)" }}>
                    01
                  </div>
                  <h4 style={{ color: "var(--ink)" }}>
                    Confirm Scope &amp; Commercials
                  </h4>
                  <p style={{ color: "var(--muted)" }}>
                    Review and approve the scope, roles, and fee tiers.
                  </p>
                </div>
                <div
                  className="mini-step"
                  style={{
                    background: "var(--paper-2)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div className="si" style={{ color: "var(--blue)" }}>
                    02
                  </div>
                  <h4 style={{ color: "var(--ink)" }}>Nominate SPOCs</h4>
                  <p style={{ color: "var(--muted)" }}>
                    Identify single points of contact for HR and coordination.
                  </p>
                </div>
                <div
                  className="mini-step"
                  style={{
                    background: "var(--paper-2)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div className="si" style={{ color: "var(--blue)" }}>
                    03
                  </div>
                  <h4 style={{ color: "var(--ink)" }}>Sign Agreement</h4>
                  <p style={{ color: "var(--muted)" }}>
                    Execute the Recruitment Services Agreement and Schedules.
                  </p>
                </div>
                <div
                  className="mini-step"
                  style={{
                    background: "var(--paper-2)",
                    borderColor: "var(--line)",
                  }}
                >
                  <div className="si" style={{ color: "var(--blue)" }}>
                    04
                  </div>
                  <h4 style={{ color: "var(--ink)" }}>Project Kickoff</h4>
                  <p style={{ color: "var(--muted)" }}>
                    An intake workshop (Day 0) to finalize JD nuances and the
                    evaluation rubric.
                  </p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
