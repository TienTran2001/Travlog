import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import Button from "./Buttons/Button";
import { nav } from "../utils/containts";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);
  return (
    <header className="container relative flex items-center justify-between px-[15px] py-5 md:py-9">
      <div className="flex items-center text-2xl font-bold">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="ml-4">Travlog</div>
      </div>

      <ul className="hidden items-center gap-x-16 text-sm font-bold text-secondary md:flex">
        {nav?.length > 0 &&
          nav.map((item, index) => (
            <li key={index} className="hover:text-black">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
      </ul>

      <div className="hidden md:block">
        <Button variant="NONE" className="text-sm">
          Log In
        </Button>
        <Button variant="PRIMARY" className="text-sm">
          Sign Up
        </Button>
      </div>

      {/* mobile */}
      <ul
        className={`fixed inset-0 z-50 flex flex-col items-center gap-y-16 bg-white px-[15px] py-16 text-sm font-bold text-secondary transition-all md:hidden ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        {nav?.length > 0 &&
          nav.map((item, index) => (
            <li key={index} className="hover:text-black">
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}

        <div
          className="absolute right-0 top-0 cursor-pointer p-6 text-black"
          onClick={() => setOpenMenu(false)}
        >
          <IoClose size={24} />
        </div>
        <div className="w-full">
          <Button variant="OUTLINED" className="w-full text-sm">
            Log In
          </Button>
          <Button variant="PRIMARY" className="mt-4 w-full text-sm">
            Sign Up
          </Button>
        </div>
      </ul>
      <div
        className="cursor-pointer md:hidden"
        onClick={() => {
          console.log("open menu");
          setOpenMenu(true);
        }}
      >
        <IoMdMenu size={24} />
      </div>
    </header>
  );
};

export default Header;
