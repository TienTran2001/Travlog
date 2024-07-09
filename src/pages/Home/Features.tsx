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
    icon: (
      <HiLocationMarker
        color="#FFFFFF"
        className="text-[24px] md:text-[32px] lg:text-[48px]"
      />
    ),
    bgColor: "bg-orange-custom",
  },
  {
    title: "Schedule your trip",
    desc: "It has roots in a piece of classical",
    icon: (
      <img
        src={date}
        alt="date"
        className="object-contain w-6 h-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
      />
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
        className="object-contain w-6 h-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
      />
    ),
    bgColor: "bg-pink-light",
  },
];
const Features = () => {
  return (
    <div className="container mt-[64px]">
      <div className="flex flex-col-reverse gap-y-10 lg:flex-row lg:gap-x-[42px]">
        {/* div left */}
        <div className="lg:w-1/2">
          <h3 className="text-center title-heading lg:text-start">
            Key features
          </h3>
          <h2 className="mt-4 text-center title-heading-2 lg:text-start">
            We offer best services
          </h2>
          <p className="mt-8 text-center text-desc lg:text-start">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="mt-8 md:mt-16">
            {servicesDes.length > 0 &&
              servicesDes.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-x-4 rounded-[32px] border border-white p-4 transition-all hover:border hover:border-gray-light md:gap-x-8 md:p-8"
                >
                  <div
                    className={`rounded-[24px] md:rounded-[32px] ${item.bgColor} flex-shrink-0 p-5 md:p-[26px]`}
                  >
                    {item.icon}
                  </div>
                  <div className="">
                    <p className="text-16 font-bold sm:text-[23px]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-14 sm:text-18 text-secondary">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* div right */}
        <div className="relative flex flex-col items-center lg:w-1/2 lg:flex-row">
          <div className="absolute top-0 hidden -right-1/3 lg:block">
            <img
              src={bgFeature}
              alt="feature background"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col w-full">
            <Ticket className="z-10 lg:absolute lg:right-0 lg:top-[20%] lg:w-auto">
              <img
                src={imageLocation}
                alt="image location"
                className="bound-animation"
              />
              Paradise on Earth
            </Ticket>
          </div>

          <div className="relative mt-[50px] hidden w-full lg:mt-0 lg:block">
            <div className="height-[665px] w-[443px]">
              <img
                src={feature1}
                alt="feature1"
                className="object-cover w-full h-full rounded-full"
              />
            </div>
            <div className="absolute -right-[25%] top-[40%] h-[496px] w-[351px] rounded-full border-[24px] border-white">
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
