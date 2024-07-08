export const navRoutes = {
  HOME: "/",
  DISCOVER: "/discover",
  SPECIAL_DEALS: "/special_deals",
  CONTACT: "/contact",
};

export const nav = [
  {
    name: "Home",
    link: navRoutes.HOME,
  },
  {
    name: "Discover",
    link: navRoutes.DISCOVER,
  },
  {
    name: "Special Deals",
    link: navRoutes.SPECIAL_DEALS,
  },
  {
    name: "Contact",
    link: navRoutes.CONTACT,
  },
];

import paradiseBeach from "../assets/images/destination/pradiseBeach.png";
import oceanWithFull from "../assets/images/destination/oceanWithFull.png";
import mountainView from "../assets/images/destination/mountainView.png";

export const destinations = [
  {
    image: paradiseBeach,
    title: "Paradise Beach, Bantayan Island",
    price: "550.16",
    location: "Rome, Italy",
    rating: 4.5,
    link: "",
  },
  {
    image: oceanWithFull,
    title: "Ocean with full of Colors",
    price: "20.99",
    location: "Maldives",
    rating: 4.8,
    link: "",
  },
  {
    image: mountainView,
    title: "Mountain View, Above the cloud",
    price: "150.99",
    location: "United Arab Emeries ",
    rating: 5.0,
    link: "",
  },
];

import avatar from "../assets/images/testimonials/avatar.png";

export const sliderTestimonials = [
  {
    img: avatar,
    name: "Mark Smith",
    info: "Travel Enthusiast",
    rating: 5,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    img: "https://i.pinimg.com/564x/a1/71/8d/a1718d8e461bd030adaa35536ba22216.jpg",
    name: "Moka",
    info: "ILLIT",
    rating: 4,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
  {
    img: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Tien Tran",
    info: "Travel Enthusiast",
    rating: 5,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
  },
];

import destination from "../assets/images/service/service1.png";
import booking from "../assets/images/service/service2.png";
import weather from "../assets/images/service/service3.png";

export const serviceItems = [
  {
    img: destination,
    title: "Best Tour Guide",
    link: "",
    desc: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    img: booking,
    title: "Easy Booking",
    link: "",
    desc: "Square, was moving across the sand in their direction.",
  },
  {
    img: weather,
    title: "Weather Forecast",
    link: "",
    desc: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    img: destination,
    title: "Vietnam",
    link: "",
    desc: "What looked like a small patch of purple grass, above five feet.",
  },
];
