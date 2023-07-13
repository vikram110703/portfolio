/* MODULES */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

/* STYLING */
import "./App.css";

/* COMPONENTS */

import Navbar from "./components/Navbar";
import Home from "./Routes/Home/Home";
import About from "./components/About";
import Dev from "./components/Dev";

/* LOWER ORDER */
import CustomLoader from "./components/CustomLoader";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <CustomLoader />
      ) : (
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dev" element={<Dev/>} />
            <Route path="*" element={<Home/>} />
          </Routes>
          <Footer />
          <ScrollToTop smooth color="black" />
        </div>
      )}
    </div>
  );
}

export default App;
