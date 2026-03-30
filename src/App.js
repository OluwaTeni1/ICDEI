import { NavBar } from "./components/Navbar";
import { HeroSlider } from "./components/banner";
// import { HeroPage } from "./components/hero";
import { AboutUs } from "./components/about";
import { Crisis } from "./components/crisis";
import { OurProgress } from "./components/progress";
import { GallerySection } from "./components/gallery";
import { ContactPage } from "./components/contact";
import { Footer } from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSlider />
      {/* <HeroPage /> */}
      <AboutUs />
      <Crisis />
      <OurProgress />
      <GallerySection />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
