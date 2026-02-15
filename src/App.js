import { NavBar } from "./components/Navbar";
import { HeroPage } from "./components/hero";
import { AboutUs } from "./components/about";
import { Crisis } from "./components/crisis";
import { OurProgress } from "./components/progress";
import { ContactPage } from "./components/contact";
import { Footer } from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroPage />
      <AboutUs />
      <Crisis />
      <OurProgress />
      <ContactPage />
      <Footer />
    </div>
  );
}

export default App;
