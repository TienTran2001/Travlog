import tripadvisor from "../../assets/images/logo/tripadvisor.svg";
import expedia from "../../assets/images/logo/expedia.svg";
import booking from "../../assets/images/logo/booking.svg";
import airbnb from "../../assets/images/logo/airbnb.svg";
import orbiz from "../../assets/images/logo/orbitz.svg";
import obj from "../../assets/images/logo/OBJECTS.svg";
import Slider from "react-slick";
import React from "react";

const partners = [
  {
    name: "tripadvisor",
    url: tripadvisor,
  },
  {
    name: "expedia",
    url: expedia,
  },
  {
    name: "booking",
    url: booking,
  },
  {
    name: "airbnb",
    url: airbnb,
  },
  {
    name: "orbiz",
    url: orbiz,
  },
];

const Partners = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = React.useRef<Slider>(null);
  return (
    <div className="relative">
      <div className="absolute -top-[50px] left-[38px] hidden lg:block">
        <img src={obj} alt="" />
      </div>
      <div className="slider-partners container mt-[50px] gap-10 !py-[64px] lg:flex-row lg:items-center lg:justify-between">
        <Slider ref={slider} {...settings}>
          {partners.length > 0 &&
            partners.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-[40px]"
              >
                <img src={item.url} alt={item.name} className="" />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Partners;
