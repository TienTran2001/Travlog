import { useRef } from "react";
import { Link } from "react-router-dom";
import { serviceItems } from "../../utils/containts";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";

const Service = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <div className="container sm:mt-16">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="pr-[5%] text-center lg:w-[40%] lg:text-start">
          <h3 className="title-heading">Services</h3>
          <h2 className="title-heading-2">Our top value categories for you</h2>
        </div>

        <div className="slider-service ld:mr-0 relative mr-0 mt-[30px] w-full max-w-[1120px] flex-1 lg:mr-[-50%] lg:mt-0">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={21}
            loop={true}
            navigation={true}
            centeredSlides={true}
            speed={1000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="slider-service"
          >
            {serviceItems.length > 0 &&
              serviceItems.map((item, index) => (
                <SwiperSlide>
                  <div
                    key={index}
                    className="flex w-full flex-shrink-0 flex-col gap-y-8 rounded-[32px] bg-white px-8 pb-20 pt-16 md:h-[443px] md:gap-y-16 md:px-14 md:py-16 lg:max-w-[350px]"
                  >
                    <div className="flex items-center justify-center flex-shrink-0">
                      <img
                        src={item.img}
                        alt="img"
                        className="object-cover w-16 h-16"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-4 md:gap-y-8">
                      <h3 className="text-truncate-2-lines text-center text-[22px] font-bold lg:text-[28px]">
                        <Link to={item.link}>{item.title}</Link>
                      </h3>
                      <p className="flex-1 text-base text-center text-truncate-3-lines text-secondary lg:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Service;
