import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./Routes/Home/Home";
import About from "./components/About";
import Dev from "./components/Dev";
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
          <Router basename="portfolio">
          <Navbar />
          <Routes  >
            <Route path="/" element={<Home />} />
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/dev" element={<Dev />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
          <ScrollToTop smooth color="black" />
          </Router>
        </div>
      )}
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, [navigate]);
  return null;
}

export default App;
