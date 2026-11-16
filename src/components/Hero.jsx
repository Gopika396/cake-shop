import { useEffect, useState } from 'react';
import { FaShoppingBag, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { HERO_SLIDES } from '../data/siteData';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 10000);
    return () => clearInterval(t);
  }, [total]);

  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);

  return (
    <header className="hero" id="home">
      <div className="wrap hero-inner">
        <div className="hero-text" data-aos="fade-right">
          <h1>
            Delicious Cakes <br /> for <span>Every Occasion</span>
          </h1>
          <p>
            Handmade with love using the finest ingredients. Order online and get your
            favorite cakes delivered to your doorstep.
          </p>
          <div className="hero-btns">
            <a href="#best-sellers" className="btn btn-primary">SHOP NOW</a>
            <a href="#custom" className="btn btn-outline"><FaShoppingBag /> CUSTOM CAKE</a>
          </div>
        </div>

        <div className="hero-media" data-aos="fade-left">
          <img key={index} src={HERO_SLIDES[index]} alt="Delicious cake" className="hero-img" />
        </div>
      </div>

      <button className="arrow arrow-left" onClick={prev} aria-label="Previous"><FaChevronLeft /></button>
      <button className="arrow arrow-right" onClick={next} aria-label="Next"><FaChevronRight /></button>

      <div className="dots">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'on' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}