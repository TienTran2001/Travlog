import desitination from "../../assets/images/service/service1.png";
import booking from "../../assets/images/service/service2.png";
import weather from "../../assets/images/service/service3.png";

const serviceItems = [
  {
    img: desitination,
    title: "Best Tour Guide",
    desc: "What looked like a small patch of purple grass, above five feet.",
  },
  {
    img: booking,
    title: "Easy Booking",
    desc: "Square, was moving across the sand in their direction.",
  },
  {
    img: weather,
    title: "Weather Forecast",
    desc: "What looked like a small patch of purple grass, above five feet.",
  },
];

const Service = () => {
  return (
    <div className="container mt-16">
      <div className="flex flex-col items-center md:flex-row">
        <div className="pr-[5%] text-center md:w-[40%] md:text-start">
          <h3 className="title-heading">Services</h3>
          <h2 className="title-heading-2">Our top value categories for you</h2>
        </div>
        <div className="relative mr-[90%] mt-[50px] flex-1 md:mr-[-50%] md:mt-0">
          <div className="flex gap-x-[21px]">
            {serviceItems.length > 0 &&
              serviceItems.map((item, index) => (
                <div
                  key={index}
                  className="w-full max-w-[300px] flex-shrink-0 rounded-[32px] p-16 shadow-primary md:max-w-[350px]"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={item.img}
                      alt="img"
                      className="h-16 w-16 object-cover"
                    />
                  </div>
                  <div className="mt-16 text-center">
                    <h3 className="text-[22px] font-bold md:text-[28px]">
                      {item.title}
                    </h3>
                    <p className="mt-8 text-base text-secondary md:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
