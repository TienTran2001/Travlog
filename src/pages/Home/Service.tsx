import Slider from "react-slick";
import React from "react";
import { Link } from "react-router-dom";
import { serviceItems } from "../../utils/containts";

const Service = () => {
  const settings = {
    className: "center",
    dots: false,
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slider = React.useRef<Slider>(null);
  return (
    <div className="container mt-16">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="pr-[5%] text-center lg:w-[40%] lg:text-start">
          <h3 className="title-heading">Services</h3>
          <h2 className="title-heading-2">Our top value categories for you</h2>
        </div>
        <div className="slider-service ld:mr-0 relative mr-0 mt-[30px] w-full max-w-[1120px] flex-1 lg:mr-[-50%] lg:mt-0">
          {/* <div className="flex gap-x-[21px]"> */}
          <Slider ref={slider} {...settings}>
            {serviceItems.length > 0 &&
              serviceItems.map((item, index) => (
                <div
                  key={index}
                  className="h-[450px] w-full flex-shrink-0 rounded-[32px] p-8 md:px-14 md:py-16 lg:max-w-[350px]"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="img"
                      className="h-16 w-16 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3 className="mt-16 text-center text-[22px] font-bold lg:text-[28px]">
                      <Link to={item.link}>{item.title}</Link>
                    </h3>
                    <p className="mt-8 flex-1 text-center text-base text-secondary lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Service;
