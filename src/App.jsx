import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components
import Header from "./components/Header.Components";
import Home from "./components/Home.Components";
import About from "./components/About.Components";
import Events from "./components/Events.Components";
import Committee from "./components/Committee.Components";
import Gallery from "./components/Gallery.Components";
import Footer from "./components/Footer.Components";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
