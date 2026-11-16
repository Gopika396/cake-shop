import { FaArrowRight } from 'react-icons/fa';
import { CUSTOM_CAKE_IMG } from '../data/siteData';

export default function CustomCake() {
  return (
    <section className="custom" id="custom">
      <div className="wrap custom-inner">
        <div data-aos="fade-right">
          <h2>
            Custom Cake for <br />
            <span>Your Special Moments</span>
          </h2>
          <p>Tell us your ideas, we'll bake your dreams!</p>
          <a href="#contact" className="btn btn-white">ORDER CUSTOM CAKE <FaArrowRight /></a>
        </div>
        <div className="custom-media" data-aos="fade-left">
          <img src={CUSTOM_CAKE_IMG} alt="Custom cake" />
        </div>
      </div>
    </section>
  );
}