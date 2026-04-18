import { useState } from "react";
import { NavBar } from "./components/Navbar";
import { HeroSlider } from "./components/banner";
import { AboutUs } from "./components/about";
import { Crisis } from "./components/crisis";
import { OurProgress } from "./components/progress";
import { GallerySection } from "./components/gallery";
import { ContactPage } from "./components/contact";
import { Footer } from "./components/footer";
import { Support } from "./components/support";
import { Join } from "./components/join";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page) => {
    console.log("App.js received navigation to:", page);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      <NavBar onNavigate={handleNavigate} />

      {currentPage === "support" && <Support />}

      {currentPage === "join" && <Join />}

      {currentPage === "home" && (
        <>
          <HeroSlider onNavigate={handleNavigate} />
          <AboutUs />
          <Crisis onNavigate={handleNavigate} />
          <OurProgress onNavigate={handleNavigate} />
          <GallerySection />
          <ContactPage />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
