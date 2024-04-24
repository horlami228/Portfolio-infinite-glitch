import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Certifications />
      <Contact />
      <Footer />
      <Social />
    </div>
  );
}

export default App;
