import { useEffect, useState } from 'react';
import AOS from 'aos';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Categories from './components/Categories';
import BestSellers from './components/BestSellers';
import CustomCake from './components/CustomCake';
import Footer from './components/Footer';

export default function App() {
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState('');

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 1800);
  };

  const addToCart = (name) => {
    setCartCount((c) => c + 1);
    showToast(`${name} added to cart`);
  };

  return (
    <>
      <Topbar />
      <Navbar cartCount={cartCount} />
      <Hero />
      <Features />
      <Categories />
      <BestSellers onAdd={addToCart} />
      <CustomCake />
      <Footer onSubscribe={() => showToast('Thanks for subscribing!')} />
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}