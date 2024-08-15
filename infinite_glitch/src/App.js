import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certification";
import ProjectDetail from "./components/ProjectDetail";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Added import statement for BrowserRouter, Route, and Routes


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Page - Single Page Application */}
        <Route
          path="/"
          element={
            <>
              <Home />            {/* Hero section */}
              <Portfolio />      {/* Showcase your best work */}
              <Experience />     {/* Professional experience */}
              <About />          {/* Background and personal info */}
              <Certifications />{/* Add credibility */}
              <Blog />           {/* Share your thoughts */}
              <Contact />        {/* Contact details */}
              <Footer />         {/* Additional navigation and social links */}
              <Social />         {/* Optional: Ensure it's not distracting */}
            </>

          }
        />

        {/* Separate Route for Project Details */}
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}


export default App;
