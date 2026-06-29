import { Link } from 'react-router-dom'

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/process', label: 'How We Work' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/guarantee', label: 'Guarantee' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-row">
          <Link to="/"><img src="/assets/VelioHRlogoW.png" alt="VelivoHR" /></Link>
          <div className="footer-links">
            {LINKS.map(({ to, label }) => (
              <Link key={to} to={to}>{label}</Link>
            ))}
          </div>
        </div>
        <div className="footer-copy">© 2026 VelivoHR. Efficient manpower planning, powered by marcom domain experts.</div>
      </div>
    </footer>
  )
}
