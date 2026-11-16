import { FaMotorcycle, FaAward, FaBirthdayCake, FaLock } from 'react-icons/fa';

// Loads an image by file name. If the file is missing, the page still runs
// and the <Img> component shows a pink placeholder instead.
const img = (name) => new URL(`../assets/images/${name}`, import.meta.url).href;

const hero1 = img('hero-1.jpg');
const hero2 = img('hero-2.jpg');
const hero3 = img('hero-3.jpg');

const catBirthday = img('cat-birthday.jpg');
const catWedding = img('cat-wedding.jpg');
const catAnniversary = img('cat-anniversary.jpg');
const catPhoto = img('cat-photo.jpg');
const catCupcakes = img('cat-cupcakes.jpg');

const prodChocolate = img('prod-chocolate.jpg');
const prodRedVelvet = img('prod-redvelvet.jpg');
const prodBlackForest = img('prod-blackforest.jpg');
const prodMango = img('prod-mango.jpg');

const customCake = img('custom-cake.png');

// Change the website name / contact details / social links here
export const SITE = {
  name: 'Sugar Bloom',
  tagline: 'Baked with Love',
  phone: '11111 00000',
  email: 'hello@sugarbloom.com',
  whatsapp: 'https://wa.me/923001234567',
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Shop', href: '#best-sellers' },
  { label: 'Cakes', href: '#categories', dropdown: true },
  { label: 'Occasions', href: '#categories', dropdown: true },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_SLIDES = [hero1, hero2, hero3];

export const FEATURES = [
  { icon: FaMotorcycle, title: 'Fast Delivery', text: 'On time, every time' },
  { icon: FaAward, title: 'Best Quality', text: 'We use premium ingredients' },
  { icon: FaBirthdayCake, title: '100% Fresh', text: 'Baked fresh for you' },
  { icon: FaLock, title: 'Secure Payments', text: '100% secure checkout' },
];

export const CATEGORIES = [
  { name: 'Birthday Cakes', img: catBirthday },
  { name: 'Wedding Cakes', img: catWedding },
  { name: 'Anniversary Cakes', img: catAnniversary },
  { name: 'Photo Cakes', img: catPhoto },
  { name: 'Cupcakes', img: catCupcakes },
];

export const PRODUCTS = [
  { name: 'Chocolate Delight', price: '2,499', reviews: 120, img: prodChocolate },
  { name: 'Red Velvet Cake', price: '2,699', reviews: 98, img: prodRedVelvet },
  { name: 'Black Forest Cake', price: '2,399', reviews: 110, img: prodBlackForest },
  { name: 'Mango Cake', price: '2,299', reviews: 85, img: prodMango },
];

export const CUSTOM_CAKE_IMG = customCake;