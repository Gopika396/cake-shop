import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SITE } from '../data/siteData';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrap topbar-inner">
        <span><FaMapMarkerAlt /> Delivering happiness to your doorsteps!</span>
        <span className="topbar-right">
          <span><FaPhoneAlt /> {SITE.phone}</span>
          <span><FaEnvelope /> {SITE.email}</span>
          <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
        </span>
      </div>
    </div>
  );
}