import { SITE } from '../data/siteData';

export default function Logo() {
  return (
    <a className="logo" href="#home">
      {SITE.name}
      <small>{SITE.tagline}</small>
    </a>
  );
}