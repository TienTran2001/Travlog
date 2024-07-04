import discount from "../../assets/images/travelPoint/discount.svg";
import CountUp from "react-countup";
import ticketStar from "../../assets/images/icons/ticket-star.svg";
import Ticket from "../../components/Ticket/Ticket";

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
  return (
    <div className="">
      <div className="container mt-[128px]">
        <div className="flex flex-col md:flex-row">
          <div className="bg-travel-point md:w-1/2">
            <Ticket className="md:absolute md:right-0 md:top-1/4">
              <img src={discount} alt="discount" className="bound-animation" />
              Discounted Price
            </Ticket>
          </div>
          <div className="relative mt-[50px] text-center md:mt-0 md:w-1/2 md:pl-[90px] md:text-start">
            <div className="bg-yellow-custom absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 rounded-full px-[36px] py-[38px] md:block">
              <img src={ticketStar} alt="ticket start" />
            </div>
            <h3 className="title-heading">Travel Point</h3>
            <h2 className="title-heading-2">
              We helping you find your dream location
            </h2>
            <p className="text-desc mt-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="mt-[64px] grid grid-cols-12 gap-8 md:px-0">
              {travelPoints.length > 0 &&
                travelPoints.map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 rounded-[32px] border border-gray-light p-8 text-center md:col-span-6"
                  >
                    <span className="text-[35px] font-bold text-orange-custom">
                      <CountUp end={item.numbers} />
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
  );
};

export default TravelPoint;
