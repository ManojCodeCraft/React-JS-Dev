import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Footer from "../common/Footer";
import Register from "../components/Register";
function RoutesApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index Component={Home} />
        <Route  path="/about-us" Component={AboutUs} />
        <Route  path="/contact-us" Component={Contact} />
        <Route   path="/services" Component={Services} />
        <Route path="/register" Component={Register}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default RoutesApp;
