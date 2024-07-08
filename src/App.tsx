import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Discover from "./pages/Discover/Discover";
import SpecialDeals from "./pages/SpecialDeals/SpecialDeals";
import Contact from "./pages/Contact/Contact";
import { navRoutes } from "./utils/containts";

function App() {
  return (
    <>
      <div className="font-ibm">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          <Route path={navRoutes.HOME} element={<HomePage />} />
          <Route path={navRoutes.DISCOVER} element={<Discover />} />
          <Route path={navRoutes.SPECIAL_DEALS} element={<SpecialDeals />} />
          <Route path={navRoutes.CONTACT} element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
