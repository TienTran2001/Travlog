import bagIcon from "../../assets/images/explore/Vector.png";
import Button from "../../components/Buttons/Button";
import playIcon from "../../assets/images/explore/play.png";
import explore1 from "../../assets/images/explore/Rectangle1.png";
import explore2 from "../../assets/images/explore/Rectangle2.png";
import explore3 from "../../assets/images/explore/Rectangle3.png";
import send from "../../assets/images/explore/send1.png";
import addUser from "../../assets/images/explore/add-user.png";
import { HiLocationMarker } from "react-icons/hi";

const Explore = () => {
  return (
    <div className="container mt-[100px] flex flex-col items-center overflow-hidden px-[15px] md:mt-16 md:flex-row md:overflow-visible">
      {/* div left */}
      <div className="flex flex-col gap-y-[43px] md:w-1/2 md:pr-[90px]">
        <div className="shadow-primary flex items-center justify-center gap-x-4 rounded-full bg-white px-8 py-4 md:self-start">
          <span className="font-bold text-pink-light">Explore the world!</span>
          <img src={bagIcon} alt="" />
        </div>
        <h2 className="text-center text-4xl font-bold md:text-start md:text-[69px] md:leading-[100px]">
          Travel <span className="text-pink-light">top destination</span> of the
          world
        </h2>
        <p className="text-desc">
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className="flex flex-col gap-4 md:flex-row">
          <Button variant="PRIMARY" className="shadow-primary">
            Get Started
          </Button>
          <Button
            variant="OUTLINED"
            className="flex items-center justify-center gap-x-4"
          >
            <div>
              <img src={playIcon} alt="" className="bound-animation" />
            </div>
            <span>Watch Demo</span>
          </Button>
        </div>
      </div>
      {/* div right */}
      <div className="bg-custom-explore mt-[50px] flex w-full flex-col items-center gap-[32px] pt-[83px] md:mt-0 md:w-1/2 md:flex-row">
        <div className="">
          <div className="relative">
            <img src={explore1} alt="explore1" className="rounded-[32px]" />
            <div className="jump-animation absolute -bottom-[10%] -left-[13%] rounded-full bg-pink-light p-4 shadow-lg">
              <img src={send} alt="send" className="" />
            </div>
          </div>
          <img
            src={explore2}
            alt="explore2"
            className="mt-[32px] rounded-[32px]"
          />
        </div>
        <div className="relative">
          <img
            src={explore3}
            alt="explore3"
            className="md:full h-[300px] w-[272px] rounded-[32px] object-cover md:h-full md:w-full"
          />
          <div className="jump-animation bg-orange-custom absolute -left-[13%] bottom-full rounded-full p-4 shadow-lg md:-bottom-[30%] md:left-[30%]">
            <img className="" src={addUser} alt="add-user" />
          </div>
          <div className="shadow-primary jump-animation absolute -right-[10%] top-2/3 flex items-center gap-x-2 rounded-full bg-white px-8 py-4 md:-right-[40%]">
            <HiLocationMarker color="#FACD49" size={30} />
            <span className="text-sm font-bold">Top Places</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
