import discount from "../../assets/images/travelPoint/discount.svg";
import CountUp from "react-countup";
import ticketStar from "../../assets/images/icons/ticket-star.svg";
import Ticket from "../../components/Ticket/Ticket";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

const travelPoints = [
  {
    numbers: 500,
    characters: "+",
    name: "Holiday Package",
  },
  {
    numbers: 100,
    characters: "",
    name: "Luxury Hotel",
  },
  {
    numbers: 7,
    characters: "",
    name: "Premium Airlines",
  },
  {
    numbers: 2,
    characters: "k+",
    name: "Happy Customer",
  },
];

const TravelPoint = () => {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className="">
        <div className="container mt-[128px]">
          <div className="flex flex-col lg:flex-row">
            <div className="bg-travel-point lg:w-1/2">
              <Ticket className="lg:absolute lg:right-0 lg:top-1/4">
                <img
                  src={discount}
                  alt="discount"
                  className="bound-animation"
                />
                Discounted Price
              </Ticket>
            </div>
            <div className="relative mt-[50px] text-center lg:mt-0 lg:w-1/2 lg:pl-[90px] lg:text-start">
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 rounded-full bg-yellow-custom px-[36px] py-[38px] lg:block">
                <img src={ticketStar} alt="ticket start" />
              </div>
              <h3 className="title-heading">Travel Point</h3>
              <h2 className="title-heading-2">
                We helping you find your dream location
              </h2>
              <p className="mt-8 text-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC.
              </p>
              <div className="mt-[64px] grid grid-cols-12 gap-8 lg:px-0">
                {travelPoints.length > 0 &&
                  travelPoints.map((item, index) => (
                    <div
                      key={index}
                      className="col-span-12 rounded-[32px] border border-gray-light p-8 text-center md:col-span-6"
                    >
                      <span className="text-[35px] font-bold text-orange-custom">
                        {counter && <CountUp end={item.numbers} />}

                        <span>{item.characters}</span>
                      </span>
                      <p className="mt-4 text-lg">{item.name}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default TravelPoint;
