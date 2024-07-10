import caroLayer from "../../assets/images/contact/caro_layer.svg";
import Button from "../../components/Buttons/Button";
import emailIcon from "../../assets/images/icons/mail.svg";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [email, setEmail] = useState("");

  const handleSendEmail = () => {
    if (email.trim() === "") {
      toast("Vui lòng nhập email!");
    } else toast(`📧 ${email}`);
  };

  return (
    <div className="container mt-[128px]">
      <div className="relative rounded-[32px] bg-yellow-light px-[15px] py-16 text-center lg:px-16 lg:py-[128px]">
        <div className="absolute left-0 top-0 -translate-x-[86px] -translate-y-4 lg:-translate-x-1/4 lg:-translate-y-1/4">
          <img src={caroLayer} alt="caro layer" className="" />
        </div>
        <h3 className="title-heading !text-16 uppercase">
          subscribe to our newsletter
        </h3>
        <h2 className="title-heading-2 lg:px-8">
          Prepare yourself & let’s explore the beauty of the world
        </h2>
        <div className="mt-8 sm:mt-16">
          <div className="flex flex-col items-center justify-between gap-x-4 gap-y-4 sm:flex-row md:gap-x-8 lg:gap-x-16">
            <div className="flex w-full flex-1 items-center gap-x-4 rounded-[32px] bg-white px-8 lg:w-auto">
              <div className="">
                <img src={emailIcon} alt="email icon" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[32px] py-4 text-lg font-bold placeholder-black outline-none lg:py-8 lg:text-[23px]"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full sm:w-auto">
              <Button
                className="w-full !rounded-[32px] text-lg lg:px-[64px] lg:py-[34px] lg:text-[23px]"
                onClick={handleSendEmail}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
