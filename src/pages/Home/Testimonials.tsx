import { FaStar } from "react-icons/fa";
import avatar from "../../assets/images/testimonials/avatar.png";
import Button from "../../components/Buttons/Button";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const Testimonials = () => {
  return (
    <div className="bg-testimonials bg-po relative z-10 overflow-hidden bg-opacity-50 bg-no-repeat pt-[128px]">
      <div className="container flex flex-col gap-y-16 text-center">
        <div>
          <h3 className="title-heading">Testimonials</h3>
          <h2 className="title-heading-2 mt-4">Trust our clients</h2>
        </div>
        <div className="flex items-center">
          <div className="-translate-y-1/2">
            <Button
              variant="OUTLINED"
              className="hidden !p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current md:block"
            >
              <LuMoveLeft size={24} />
            </Button>
          </div>
          <div className="flex flex-col gap-y-16">
            <div className="mx-auto flex h-[128px] w-[128px]">
              <img
                src={avatar}
                alt="avatar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col items-center gap-y-8">
              <p className="text-[23px] font-bold">
                <span className="text-[28px] text-orange-custom">
                  Mark Smith
                </span>{" "}
                / Travel Enthusiast
              </p>
              <div className="flex gap-x-4">
                <FaStar size={32} className="text-yellow-custom" />
                <FaStar size={32} className="text-yellow-custom" />
                <FaStar size={32} className="text-yellow-custom" />
                <FaStar size={32} className="text-yellow-custom" />
                <FaStar size={32} className="text-yellow-custom" />
              </div>
              <p className="text-dark-gray text-base font-medium md:text-[23px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
              <div className="mt-8 flex gap-x-6">
                <div className="h-6 w-6 rounded-full bg-gray-light hover:bg-pink-light"></div>
                <div className="h-6 w-6 rounded-full bg-pink-light hover:bg-pink-light"></div>
                <div className="h-6 w-6 rounded-full bg-gray-light hover:bg-pink-light"></div>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2">
            <Button
              variant="OUTLINED"
              className="hidden !p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current md:block"
            >
              <LuMoveRight size={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
