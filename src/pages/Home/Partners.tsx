import tripadvisor from "../../assets/images/logo/tripadvisor.svg";
import expedia from "../../assets/images/logo/expedia.svg";
import booking from "../../assets/images/logo/booking.svg";
import airbnb from "../../assets/images/logo/airbnb.svg";
import orbiz from "../../assets/images/logo/orbitz.svg";
import obj from "../../assets/images/logo/OBJECTS.svg";

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
];

const Partners = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[50px] left-[38px] hidden lg:block">
        <img src={obj} alt="" />
      </div>
      <div className="container mt-[50px] flex flex-wrap items-center justify-center gap-10 !py-[64px] lg:flex-row lg:items-center lg:justify-between">
        {partners.length > 0 &&
          partners.map((item, index) => (
            <div key={index}>
              <img src={item.url} alt={item.name} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Partners;
