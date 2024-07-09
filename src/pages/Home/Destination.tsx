import { destinations } from "../../utils/containts";
import { FaStar } from "react-icons/fa";
import obj from "../../assets/images/destination/OBJECTS.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { NextArrow, PrevArrow } from "./Testimonials";

const Destination = () => {
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-between p-8 sm:py-16 md:flex-row">
        <div className="text-center md:text-start">
          <h3 className="title-heading">Top Destination</h3>
          <h2 className="title-heading-2">Explore top destination</h2>
        </div>
        <div className="hidden mt-6 gap-x-8 md:mt-0 md:flex">
          <PrevArrow onClick={() => swiperRef?.current?.swiper.slidePrev()} />
          <NextArrow onClick={() => swiperRef?.current?.swiper.slideNext()} />
        </div>
      </div>
      {/* slide item */}

      <div className="relative">
        <div className="absolute right-0 top-0 hidden -translate-y-10 translate-x-[120%] md:block">
          <img src={obj} alt="obj" />
        </div>

        <div className="w-full slider-destination lg:mt-0">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="slider-destination"
          >
            {destinations.length > 0 &&
              destinations.map((item, index) => (
                <SwiperSlide>
                  <div
                    key={index}
                    className="w-full rounded-[30px] bg-white shadow-md"
                  >
                    <Link to={item.link}>
                      <div className="flex flex-col h-full">
                        <div className="h-[250px] w-full flex-shrink-0 md:h-[350px]">
                          <img
                            src={item.image}
                            alt={item.location}
                            className="h-full w-full rounded-t-[30px] object-cover"
                          />
                        </div>
                        {/* content */}
                        <div className="flex flex-col justify-between flex-1 p-6 font-bold text-18 md:text-23 gap-y-4 sm:p-8">
                          <div className="flex justify-between gap-x-4">
                            <h3 className="text-truncate-2-lines">
                              {item.title}
                            </h3>
                            <span className="text-pink-light">
                              ${item.price}
                            </span>
                          </div>
                          <p className="font-medium text-16 md:text-18 text-secondary">
                            {item.location}
                          </p>
                          <span className="flex items-center mt-auto gap-x-2 text-orange-custom">
                            <span>{item.rating}</span>
                            <FaStar size={20} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Destination;
