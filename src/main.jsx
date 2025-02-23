import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projcets from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <About />
    <Projcets />
    <Contact />
    <Footer />
  </StrictMode>
);
