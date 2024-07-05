import bagIcon from "../../assets/images/icons/bag.svg";
import Button from "../../components/Buttons/Button";
import playIcon from "../../assets/images/icons/play.svg";
import explore1 from "../../assets/images/explore/Rectangle1.png";
import explore2 from "../../assets/images/explore/Rectangle2.png";
import explore3 from "../../assets/images/explore/Rectangle3.png";
import send from "../../assets/images/icons/send1.svg";
import addUser from "../../assets/images/icons/add-user.svg";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const Explore = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <Modal open={open} handleClose={() => setOpen(false)}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/wO5hfqSUocE?si=JGIhE5n0qNERcUVD&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Modal>
      )}

      <div className="container mt-[100px] flex flex-col items-center overflow-hidden px-[15px] lg:mt-16 lg:flex-row lg:overflow-visible">
        {/* div left */}
        <div className="flex w-full flex-col gap-y-[43px] lg:w-1/2 lg:pr-[90px]">
          <div className="flex items-center justify-center px-8 py-4 bg-white rounded-full gap-x-4 shadow-primary lg:self-start">
            <span className="font-bold text-pink-light">
              Explore the world!
            </span>
            <img src={bagIcon} alt="" className="bound-animation" />
          </div>
          <h2 className="text-center text-4xl font-bold lg:text-start lg:text-[69px] lg:leading-[100px]">
            Travel <span className="text-pink-light">top destination</span> of
            the world
          </h2>
          <p className="text-desc">
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div className="flex flex-col gap-4 lg:flex-row">
            <Button variant="PRIMARY" className="shadow-primary">
              Get Started
            </Button>
            <Button
              variant="OUTLINED"
              className="flex items-center justify-center gap-x-4"
              onClick={() => setOpen(true)}
            >
              <div className="relative">
                <div className="absolute right-[1px] top-[1px] h-[18px] w-[18px] animate-ping rounded-full border-[4px] border-main"></div>
                <img src={playIcon} alt="" className="" />
              </div>
              <span>Watch Demo</span>
            </Button>
          </div>
        </div>
        {/* div right */}
        <div className="bg-custom-explore mt-[50px] flex w-full flex-col items-center gap-[32px] pt-[83px] md:flex-row md:justify-center lg:mt-0 lg:w-1/2">
          <div className="">
            <div className="relative">
              <img
                src={explore1}
                alt="explore1"
                className="jump-animation rounded-[32px]"
              />
              <div className="jump-animation-1 absolute -bottom-[10%] -left-[13%] rounded-full bg-pink-light p-4 shadow-lg">
                <img src={send} alt="send" className="" />
              </div>
            </div>
            <img
              src={explore2}
              alt="explore2"
              className="jump-animation mt-[32px] rounded-[32px]"
            />
          </div>
          <div className="relative">
            <img
              src={explore3}
              alt="explore3"
              className="lg:full jump-animation-2 h-[300px] w-[272px] rounded-[32px] object-cover lg:h-full lg:w-full"
            />
            <div className="jump-animation absolute -left-[13%] bottom-full rounded-full bg-orange-custom p-4 shadow-lg lg:-bottom-[30%] lg:left-[30%]">
              <img className="" src={addUser} alt="add-user" />
            </div>
            <div className="jump-animation absolute -right-[10%] top-2/3 flex items-center gap-x-2 rounded-full bg-white px-8 py-4 shadow-primary lg:-right-[40%]">
              <HiLocationMarker color="#FACD49" size={30} />
              <span className="text-sm font-bold">Top Places</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
