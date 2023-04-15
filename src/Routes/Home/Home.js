import React, { useEffect } from "react";

import HeroSection from "../../components/HeroSection";
import DevProjects from "../../components/Dev";


import ContactSection from "../../components/Contact";

import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";


function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location?.state?.scrollToContact) {
      scroller.scrollTo("contact", {
        delay: 150,
        smooth: true,
      });
    }
  });
  return (
    <div id="home">
      <HeroSection />
      
      <DevProjects />
     
      <ContactSection />
    </div>
  );
}

export default Home;
