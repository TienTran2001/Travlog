import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "./Contact";
import Destination from "./Destination";
import Explore from "./Explore";
import Features from "./Features";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import TravelPoint from "./TravelPoint";

const HomePage = () => {
  return (
    <>
      <div
        className="w-full overflow-hidden"
        style={{
          backgroundImage: "url('/Ellipse.png'), url('/Ellipse1.png')",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "top left, top 10% right",
        }}
      >
        <Header />
        <Explore />
        <Partners />
        <Destination />
        <TravelPoint />
        <Features />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
