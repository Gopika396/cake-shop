import { FEATURES } from '../data/siteData';

export default function Features() {
  return (
    <section className="features">
      <div className="wrap">
        <div className="features-box" data-aos="fade-up">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div className="feature" key={title}>
              <Icon className="feature-icon" />
              <div>
                <b>{title}</b>
                <small>{text}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}