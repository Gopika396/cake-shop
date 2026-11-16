import { FaFacebookF, FaInstagram, FaWhatsapp, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import Logo from './Logo';
import { SITE } from '../data/siteData';

const QUICK = ['Home', 'Shop', 'About Us', 'Contact Us', 'FAQs'];
const SERVICE = ['My Account', 'Track Order', 'Shipping Policy', 'Return & Refund', 'Terms & Conditions'];

export default function Footer({ onSubscribe }) {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <div className="footer-grid" id="about">
          <div>
            <Logo />
            <p className="footer-text">
              We bake more than cakes,<br />we bake happiness!<br />Thank you for choosing us.
            </p>
            <div className="socials">
              <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="fb"><FaFacebookF /></a>
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="ig"><FaInstagram /></a>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="wa"><FaWhatsapp /></a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>{QUICK.map((l) => <li key={l}><a href="#home">{l}</a></li>)}</ul>
          </div>

          <div>
            <h3>Customer Service</h3>
            <ul>{SERVICE.map((l) => <li key={l}><a href="#home">{l}</a></li>)}</ul>
          </div>

          <div>
            <h3>Newsletter</h3>
            <p className="footer-text">Subscribe to get updates on new cakes and offers.</p>
            <form className="newsletter" onSubmit={(e) => { e.preventDefault(); onSubscribe(); e.target.reset(); }}>
              <input type="email" placeholder="Enter your email" aria-label="Email" required />
              <button className="btn btn-primary" type="submit">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="copyright">
          <span>© {new Date().getFullYear()} {SITE.name}. All Rights Reserved.</span>
          <span className="pay"><FaCcVisa /> <FaCcMastercard /></span>
        </div>
      </div>
    </footer>
  );
}