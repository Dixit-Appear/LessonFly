import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Share your knowledge , Learn from others!"],
    typeSpeed: 60,
    loop: true
  });
}

export { loadDynamicBannerText };
