import { useState } from 'react';
import { FaHeart, FaRegHeart, FaStar, FaShoppingCart } from 'react-icons/fa';
import { PRODUCTS } from '../data/siteData';

export default function BestSellers({ onAdd }) {
  const [liked, setLiked] = useState({});

  return (
    <section className="section" id="best-sellers">
      <div className="wrap">
        <h2 className="section-title" data-aos="fade-up">Best Sellers</h2>
        <div className="prod-grid">
          {PRODUCTS.map((p, i) => (
            <article className="prod" key={p.name} data-aos="fade-up" data-aos-delay={i * 100}>
              <button
                className="heart"
                aria-label="Add to wishlist"
                onClick={() => setLiked((l) => ({ ...l, [i]: !l[i] }))}
              >
                {liked[i] ? <FaHeart /> : <FaRegHeart />}
              </button>
              <img src={p.img} alt={p.name} />
              <div className="prod-body">
                <h3>{p.name}</h3>
                <div className="stars">
                  {[...Array(5)].map((_, s) => <FaStar key={s} />)}
                  <small>({p.reviews})</small>
                </div>
                <div className="price">Rs. {p.price}</div>
                <button className="btn btn-primary btn-block" onClick={() => onAdd(p.name)}>
                  <FaShoppingCart /> ADD TO CART
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}