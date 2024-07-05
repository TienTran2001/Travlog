import { HiLocationMarker } from "react-icons/hi";
import date from "../../assets/images/icons/date.svg";
import ticket from "../../assets/images/icons/ticket.svg";
import imageLocation from "../../assets/images/icons/image-location.svg";
import feature1 from "../../assets/images/features/feature1.jpg";
import feature2 from "../../assets/images/features/feature2.jpg";
import bgFeature from "../../assets/images/features/feature-bg.svg";
import Ticket from "../../components/Ticket/Ticket";

const servicesDes = [
  {
    title: "We offer best services",
    desc: "Lorem Ipsum is not simply random text",
    icon: <HiLocationMarker color="#FFFFFF" size={48} />,
    bgColor: "bg-orange-custom",
  },
  {
    title: "Schedule your trip",
    desc: "It has roots in a piece of classical",
    icon: (
      <img src={date} alt="date" className="h-[48px] w-[48px] object-contain" />
    ),
    bgColor: "bg-yellow-custom",
  },
  {
    title: "Get discounted coupons",
    desc: "Lorem Ipsum is not simply random text",
    icon: (
      <img
        src={ticket}
        alt="ticket"
        className="h-[48px] w-[48px] object-contain"
      />
    ),
    bgColor: "bg-pink-light",
  },
];
const Features = () => {
  return (
    <div className="container mt-[64px]">
      <div className="flex flex-col text-center lg:flex-row lg:gap-x-[42px] lg:text-start">
        {/* div left */}
        <div className="lg:w-1/2">
          <h3 className="title-heading">Key features</h3>
          <h2 className="mt-4 title-heading-2">We offer best services</h2>
          <p className="mt-8 text-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="mt-[64px]">
            {servicesDes.length > 0 &&
              servicesDes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-8 rounded-[32px] border border-white p-8 transition-all hover:border hover:border-gray-light"
                >
                  <div
                    className={`rounded-[32px] ${item.bgColor} flex-shrink-0 p-[26px]`}
                  >
                    {item.icon}
                  </div>
                  <div className="">
                    <p className="text-lg font-bold lg:text-[23px]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-base text-secondary lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* div right */}
        <div className="relative mt-[50px] flex flex-col items-center lg:mt-0 lg:w-1/2 lg:flex-row">
          <div className="absolute top-0 hidden -right-1/3 lg:block">
            <img
              src={bgFeature}
              alt="feature background"
              className="object-cover"
            />
          </div>

          <Ticket className="right-0 top-[20%] z-10 w-full lg:absolute lg:w-auto">
            <img
              src={imageLocation}
              alt="image location"
              className="bound-animation"
            />
            Paradise on Earth
          </Ticket>

          <div className="relative mt-[50px] w-full lg:mt-0">
            <div className="height-[665px] lg:w-[443px]">
              <img
                src={feature1}
                alt="feature1"
                className="h-[350px] w-full rounded-[32px] object-cover md:h-[650px] lg:h-full lg:rounded-full"
              />
            </div>
            <div className="absolute -right-[10%] top-[37%] hidden h-[496px] w-[351px] rounded-full border-[24px] border-white md:right-0 md:top-[45%] md:block">
              <img
                src={feature2}
                alt="feature2"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
