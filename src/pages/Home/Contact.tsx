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
      <div className="relative rounded-[32px] bg-yellow-light px-[15px] py-[128px] text-center md:px-16">
        <div className="absolute top-0 left-0 -translate-x-4 -translate-y-4 md:-translate-x-1/4 md:-translate-y-1/4">
          <img src={caroLayer} alt="caro layer" className="" />
        </div>
        <h3 className="title-heading">subscribe to our newsletter</h3>
        <h2 className="title-heading-2 md:px-8">
          Prepare yourself & let’s explore the beauty of the world
        </h2>
        <div className="mt-16">
          <div className="flex flex-col items-center justify-between gap-x-16 gap-y-4 md:flex-row">
            <div className="flex w-full flex-1 items-center gap-x-4 rounded-[32px] bg-white px-8 md:w-auto">
              <div className="">
                <img src={emailIcon} alt="email icon" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-[32px] py-4 text-lg font-bold placeholder-black outline-none md:py-8 md:text-[23px]"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full md:w-auto">
              <Button
                className="w-full !rounded-[32px] text-lg md:px-[64px] md:py-[34px] md:text-[23px]"
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
