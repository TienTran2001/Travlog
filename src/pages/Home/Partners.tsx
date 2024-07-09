import tripadvisor from "../../assets/images/logo/tripadvisor.svg";
import expedia from "../../assets/images/logo/expedia.svg";
import booking from "../../assets/images/logo/booking.svg";
import airbnb from "../../assets/images/logo/airbnb.svg";
import orbiz from "../../assets/images/logo/orbitz.svg";
import obj from "../../assets/images/logo/OBJECTS.svg";
import React, { useRef } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

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
  {
    name: "airbnb",
    url: airbnb,
  },
];

const Partners = () => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="container relative">
      <div className="absolute -left-[100px] top-0 hidden lg:block">
        <img src={obj} alt="" />
      </div>

      <div className="slider-partners mt-[50px] gap-10 !py-[64px] lg:flex-row lg:items-center lg:justify-between">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          navigation={false}
          speed={3000}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {partners.length > 0 &&
            partners.map((item, index) => (
              <SwiperSlide>
                <div
                  key={index}
                  className="flex items-center justify-center px-10"
                >
                  <img src={item.url} alt={item.name} className="" />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partners;
