import categoryImageOne from "./assets/banner-01.jpg";
import categoryImageTwo from "./assets/banner-02.jpg";
import categoryImageThree from "./assets/banner-03.jpg";

import productImageOne from "./assets/slide-01.jpg";
import productImageTwo from "./assets/slide-02.jpg";
import productImageThree from "./assets/slide-03.jpg";

export const heroImages = [
  {
    image: productImageOne,
    desc: "Men New-Season",
    title: "Jackets & Coats"
  },
  {
    image: productImageTwo,
    desc: "Men Collection 2018",
    title: "New Arrivals"
  },
  {
    image: productImageThree,
    desc: "Women Collection 2018",
    title: "New Season"
  }
];

export const drawerWidth = 240;

export const navItems = [
  { title: "Home", path: "/" },
  { title: "Products", path: "/products" }
];

export const featureCategory = [
  {
    image: categoryImageOne,
    desc: "Women",
    title: "Lorem Ipsum"
  },
  {
    image: categoryImageTwo,
    desc: "Men",
    title: "Lorem Ipsum"
  },
  {
    image: categoryImageThree,
    desc: "Accessories",
    title: "Lorem Ipsum"
  }
];

export const slickSetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear"
};

export const TrandingProducts = [
  {
    image: productImageOne,
    sub: "Men New-Season",
    main: "Jackets & Coats"
  },
  {
    image: productImageOne,
    sub: "Men Collection 2018",
    main: "New Arrivals"
  },
  {
    image: productImageOne,
    sub: "Women Collection 2018",
    main: "New Season"
  }
];
