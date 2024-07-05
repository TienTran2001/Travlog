import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import Button from "../../components/Buttons/Button";
import { destinations } from "../../utils/containts";
import { FaStar } from "react-icons/fa";
import obj from "../../assets/images/destination/OBJECTS.svg";

const Destination = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-between py-[64px] md:flex-row">
        <div className="text-center md:text-start">
          <h3 className="title-heading">Top Destination</h3>
          <h2 className="title-heading-2">Explore top destination</h2>
        </div>
        <div className="flex mt-6 gap-x-8 md:mt-0">
          <Button
            variant="OUTLINED"
            className="!p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current"
          >
            <LuMoveLeft size={24} />
          </Button>
          <Button
            variant="OUTLINED"
            className="!p-[38px] text-black transition-all hover:bg-main hover:text-white hover:shadow-current"
          >
            <LuMoveRight size={24} />
          </Button>
        </div>
      </div>
      {/* slide item */}
      <div className="relative grid grid-cols-12 gap-8">
        <div className="absolute right-0 top-0 hidden -translate-y-10 translate-x-[120%] md:block">
          <img src={obj} alt="obj" />
        </div>
        {destinations.length > 0 &&
          destinations.map((item, index) => (
            <div
              key={index}
              className="col-span-full rounded-[30px] bg-white shadow-primary md:col-span-6 lg:col-span-4"
            >
              <div className="h-[350px] w-full">
                <img
                  src={item.image}
                  alt={item.location}
                  className="h-full w-full rounded-t-[30px] object-cover"
                />
              </div>
              <div className="flex flex-col p-8 text-[23px] font-bold">
                <div className="flex items-center justify-between">
                  <h3 className="">{item.title}</h3>
                  <span className="text-pink-light">${item.price}</span>
                </div>
                <p className="mt-4 text-lg font-medium text-secondary">
                  {item.location}
                </p>
                <span className="flex items-center flex-1 mt-8 gap-x-2 text-orange-custom">
                  <span>{item.rating}</span>
                  <FaStar size={20} />
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Destination;
