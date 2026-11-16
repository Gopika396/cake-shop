import { CATEGORIES } from '../data/siteData';

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="wrap">
        <h2 className="section-title" data-aos="fade-up">Shop by Category</h2>
        <div className="cat-grid">
          {CATEGORIES.map((c, i) => (
            <a href="#best-sellers" className="cat" key={c.name} data-aos="zoom-in" data-aos-delay={i * 100}>
              <img src={c.img} alt={c.name} />
              <span>{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}