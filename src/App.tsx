import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <>
      <div className="font-ibm">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
