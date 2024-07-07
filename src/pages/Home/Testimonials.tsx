import { FaStar } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import Slider from "react-slick";
import React from "react";
import { sliderTestimonials } from "../../utils/containts";

function PrevArrow({ onClick = () => {} }) {
  return (
    <div className="absolute left-0 top-[20%] z-10 -translate-x-full">
      <Button
        variant="OUTLINED"
        className="hidden !p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current md:block"
        onClick={onClick}
      >
        <LuMoveLeft size={24} />
      </Button>
    </div>
  );
}
function NextArrow({ onClick = () => {} }) {
  return (
    <div className="absolute right-0 top-[20%] z-10 translate-x-full">
      <Button
        variant="OUTLINED"
        className="hidden !p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current md:block"
        onClick={onClick}
      >
        <LuMoveRight size={24} />
      </Button>
    </div>
  );
}

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: () => (
      <div className="custom-dot h-6 w-6 -translate-y-full rounded-full bg-gray-light hover:bg-pink-light"></div>
    ),
    dotsClass: "slick-dots custom-dots",
  };

  const slider = React.useRef(null);

  return (
    <div className="relative z-10 overflow-hidden bg-opacity-50 bg-testimonials bg-no-repeat pt-[128px]">
      <div className="container flex flex-col gap-y-16 text-center">
        <div>
          <h3 className="title-heading">Testimonials</h3>
          <h2 className="title-heading-2 mt-4">Trust our clients</h2>
        </div>
        <div className="relative mx-auto w-full md:max-w-[920px]">
          <div className="absolute top-[20%] z-10 -translate-x-full"></div>
          <Slider ref={slider} {...settings}>
            {sliderTestimonials?.length > 0 &&
              sliderTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="mx-auto flex w-full flex-col gap-y-16 py-[88px]"
                >
                  <div className="mx-auto flex h-[128px] w-[128px]">
                    <img
                      src={item.img}
                      alt="avatar"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-y-8">
                    <p className="text-[23px] font-bold">
                      <span className="text-[28px] text-orange-custom">
                        {item.name}
                      </span>{" "}
                      / {item.info}
                    </p>
                    <div className="flex gap-x-4">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <FaStar
                          key={i}
                          size={32}
                          className="text-yellow-custom"
                        />
                      ))}
                    </div>
                    <p className="text-base font-medium text-dark-gray md:text-[23px] md:leading-[40px]">
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

export default Testimonials;
