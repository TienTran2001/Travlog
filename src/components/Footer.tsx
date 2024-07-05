import { FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/logo/logo.svg";
import { AiFillInstagram } from "react-icons/ai";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";
import wareBg from "../assets/images/footer/ware.svg";

const Footer = () => {
  return (
    <footer className="container relative">
      <div className="absolute right-0 top-1/2 translate-x-1/2 md:top-0 lg:-right-[35%] lg:-top-[30%] lg:translate-x-0">
        <img src={wareBg} alt="ware background" />
      </div>
      <div className="flex flex-col justify-between gap-x-[153px] pb-[86px] pt-[128px] lg:flex-row">
        <div className="lg:w-[26%]">
          <div className="flex items-center gap-x-6">
            <img src={logo} alt="logo" />
            <span className="text-[24px] font-bold">Travlog</span>
          </div>
          <p className="mt-8 text-[23px] font-normal text-secondary">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className="flex mt-16 gap-x-8">
            <Button className="!p-4 text-white">
              <FaTwitter size={23} />
            </Button>
            <Button className="!p-4 text-white">
              <AiFillInstagram size={23} />
            </Button>
            <Button className="!p-4 text-white">
              <FaFacebookF size={23} />
            </Button>
          </div>
        </div>
        <div className="mt-[50px] flex flex-1 flex-col justify-between gap-y-12 md:flex-row lg:mt-0">
          <div className="">
            <h2 className="footer-heading">Company</h2>
            <ul className="flex flex-col mt-8 gap-y-8">
              <li className="footer-item-link">
                <Link to="/about">About</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/career">Career</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/mobile">Mobile</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="footer-heading">Contact</h2>
            <ul className="flex flex-col mt-8 gap-y-8">
              <li className="footer-item-link">
                <Link to="/why_travlog">Why Travlog?</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/partner_with_us">Partner with us</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/faqs">FAQ's</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="footer-heading">Meet Us</h2>
            <ul className="flex flex-col mt-8 gap-y-8">
              <li className="footer-item-link">
                <Link to="">+00 92 1234 56789</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/">info@travlog.com</Link>
              </li>
              <li className="footer-item-link">
                <Link to="/">205. R Street, New York</Link>
              </li>
            </ul>
            <p className="mt-2 text-lg text-dark-gray">BD23200</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
