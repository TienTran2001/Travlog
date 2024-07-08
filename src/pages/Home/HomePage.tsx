import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Contact from "./Contact";
import Destination from "./Destination";
import Explore from "./Explore";
import Features from "./Features";
import Partners from "./Partners";
import Service from "./Service";
import Testimonials from "./Testimonials";
import TravelPoint from "./TravelPoint";

const HomePage = () => {
  return (
    <>
      <div className="bg-homepage w-full overflow-hidden">
        <Header />
        <Explore />
        <Partners />
        <Service />
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
