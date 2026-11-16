import { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { NAV_LINKS } from '../data/siteData';

export default function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="wrap nav-inner">
        <Logo />

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map((l, i) => (
            <li key={l.label}>
              <a href={l.href} className={i === 0 ? 'active' : ''} onClick={() => setOpen(false)}>
                {l.label} {l.dropdown && <FaChevronDown size={10} />}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-icons">
          <button aria-label="Search"><FaSearch /></button>
          <button aria-label="Account"><FaUser /></button>
          <button aria-label="Cart" className="cart-btn">
            <FaShoppingCart />
            <span className="badge">{cartCount}</span>
          </button>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}