import discount from "../../assets/images/travelPoint/discount.svg";
import CountUp from "react-countup";

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
          <div className="bg-travel-point relative md:w-1/2">
            <div className="flex items-center justify-center gap-x-[20px] rounded-full bg-white px-8 py-4 text-[23px] font-bold shadow-primary md:absolute md:right-0 md:top-1/4">
              <img src={discount} alt="discount" className="bound-animation" />
              Discounted Price
            </div>
          </div>
          <div className="mt-[50px] text-center md:mt-0 md:w-1/2 md:pl-[90px] md:text-start">
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
