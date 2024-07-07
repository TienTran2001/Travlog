import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import Button from "../../components/Buttons/Button";
import { destinations } from "../../utils/containts";
import { FaStar } from "react-icons/fa";
import obj from "../../assets/images/destination/OBJECTS.svg";
import Slider from "react-slick";
import React from "react";

const Destination = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const slider = React.useRef<Slider>(null);
  return (
    <div className="container mt-[128px]">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-start">
          <h3 className="title-heading">Top Destination</h3>
          <h2 className="title-heading-2">Explore top destination</h2>
        </div>
        <div className="mt-6 flex gap-x-8 md:mt-0">
          <Button
            variant="OUTLINED"
            className="!p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current"
            onClick={() => slider?.current?.slickPrev()}
          >
            <LuMoveLeft size={24} />
          </Button>
          <Button
            variant="OUTLINED"
            className="!p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current"
            onClick={() => slider?.current?.slickNext()}
          >
            <LuMoveRight size={24} />
          </Button>
        </div>
      </div>
      {/* slide item */}

      <div className="relative">
        <div className="absolute right-0 top-0 hidden -translate-y-10 translate-x-[120%] md:block">
          <img src={obj} alt="obj" />
        </div>
        <div className="slider-destination w-full">
          <Slider ref={slider} {...settings}>
            {destinations.length > 0 &&
              destinations.map((item, index) => (
                <div
                  key={index}
                  className="col-span-full rounded-[30px] bg-white shadow-md md:col-span-6 lg:col-span-4"
                >
                  <div className="h-[350px] w-full">
                    <img
                      src={item.image}
                      alt={item.location}
                      className="h-full w-full rounded-t-[30px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col p-8 text-[23px] font-bold">
                    <div className="flex justify-between">
                      <h3 className="">{item.title}</h3>
                      <span className="text-pink-light">${item.price}</span>
                    </div>
                    <p className="mt-4 text-lg font-medium text-secondary">
                      {item.location}
                    </p>
                    <span className="mt-8 flex flex-1 items-center gap-x-2 text-orange-custom">
                      <span>{item.rating}</span>
                      <FaStar size={20} />
                    </span>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Destination;
