import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.svg";
import Button from "./Buttons/Button";
import { nav, navRoutes } from "../utils/containts";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // console.log(openMenu);
  return (
    <header className="container relative flex items-center justify-between px-[15px] py-5 md:py-9">
      <Link to={navRoutes.HOME}>
        <div className="flex items-center text-2xl font-bold">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="ml-4">Travlog</div>
        </div>{" "}
      </Link>

      <ul className="items-center hidden text-sm font-bold gap-x-16 text-secondary lg:flex">
        {nav?.length > 0 &&
          nav.map((item, index) => (
            <li key={index} className="hover:text-black">
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "text-black" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
      </ul>

      <div className="hidden lg:block">
        <Button variant="NONE" className="text-sm">
          <Link to="/login">Log In</Link>
        </Button>
        <Button variant="PRIMARY" className="ml-4 text-sm">
          <Link to="/register">Sign Up</Link>
        </Button>
      </div>

      {/* mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-70 lg:hidden ${openMenu ? "block" : "hidden"}`}
        onClick={() => setOpenMenu(false)}
      ></div>
      <ul
        className={`fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-[450px] flex-col items-center gap-y-16 bg-white px-[15px] py-16 text-sm font-bold text-secondary transition-all lg:hidden ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        {nav?.length > 0 &&
          nav.map((item, index) => (
            <li key={index} className="hover:text-black">
              <NavLink
                to={item.link}
                className={({ isActive }) => (isActive ? "text-black" : "")}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

        <div
          className="absolute top-0 right-0 p-6 text-black cursor-pointer"
          onClick={() => setOpenMenu(false)}
        >
          <IoClose size={24} />
        </div>
        <div className="w-full">
          <Button variant="OUTLINED" className="w-full text-sm">
            <Link to="/login">Log In</Link>
          </Button>
          <Button variant="PRIMARY" className="w-full mt-4 text-sm">
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </ul>
      <div
        className="cursor-pointer lg:hidden"
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
