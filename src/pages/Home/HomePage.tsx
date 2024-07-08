import MainLayout from "../../Layouts/MainLayout";
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
        <MainLayout>
          <Explore />
          <Partners />
          <Service />
          <Destination />
          <TravelPoint />
          <Features />
          <Testimonials />
          <Contact />
        </MainLayout>
      </div>
    </>
  );
};

export default HomePage;
