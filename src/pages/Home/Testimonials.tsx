import { FaStar } from "react-icons/fa";
import Button from "../../components/Buttons/Button";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { useRef } from "react";
import { sliderTestimonials } from "../../utils/containts";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export function PrevArrow({ onClick = () => {}, className = "" }) {
  return (
    <div className={className}>
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
export function NextArrow({ onClick = () => {}, className = "" }) {
  return (
    <div className={className}>
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
  // <div className="w-6 h-6 -translate-y-full rounded-full custom-dot bg-gray-light hover:bg-pink-light"></div>

  const swiperRef = useRef<SwiperRef>(null);
  return (
    <div className="bg-testimonials relative z-10 mx-auto w-full max-w-[1536px] overflow-hidden bg-opacity-50 pt-16 lg:pt-[128px]">
      <div className="container flex flex-col text-center gap-y-8 md:gap-y-16">
        <div>
          <h3 className="title-heading">Testimonials</h3>
          <h2 className="mt-4 title-heading-2">Trust our clients</h2>
        </div>
        <div className="slider-testimonials relative mx-auto w-full md:max-w-[920px]">
          <div className="absolute top-[20%] z-10 -translate-x-full"></div>

          <NextArrow
            onClick={() => swiperRef?.current?.swiper.slideNext()}
            className="absolute right-0 top-[20%] z-10 translate-x-full"
          />
          <PrevArrow
            onClick={() => swiperRef?.current?.swiper.slidePrev()}
            className="absolute left-0 top-[20%] z-10 -translate-x-full"
          />
          <div className="flex flex-col-reverse gap-y-8 md:gap-y-16">
            <div id="containerForBullets" className="translate-y-full"></div>
            <div>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  el: "#containerForBullets",
                  type: "bullets",
                  bulletClass: "swiper-custom-bullet",
                  bulletActiveClass: "swiper-custom-bullet-active",
                  clickable: true,
                }}
                navigation={true}
              >
                {sliderTestimonials?.length > 0 &&
                  sliderTestimonials.map((item, index) => (
                    <SwiperSlide>
                      <div
                        key={index}
                        className="flex flex-col w-full mx-auto gap-y-8 md:gap-y-16"
                      >
                        <div className="mx-auto flex h-[128px] w-[128px]">
                          <img
                            src={item.img}
                            alt="avatar"
                            className="object-cover w-full h-full rounded-full"
                          />
                        </div>
                        <div className="flex flex-col items-center gap-y-4 md:gap-y-8">
                          <p className="text-[23px] font-bold">
                            <span className="text-[28px] text-orange-custom">
                              {item.name}
                            </span>
                            / {item.info}
                          </p>
                          <div className="flex gap-x-4">
                            {Array.from({ length: item.rating }, (_, i) => (
                              <FaStar
                                key={i}
                                className="text-2xl text-yellow-custom md:text-[32px]"
                              />
                            ))}
                          </div>
                          <p className="text-base font-medium text-dark-gray md:text-[23px] md:leading-[40px]">
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
      </div>
    </div>
  );
};

export default Testimonials;
