/* eslint-disable no-unused-vars */
import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";

//pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hakkimizda" element={<About />} />
      <Route path="/hizmetlerimiz" element={<Services />} />
      <Route path="/iletisim" element={<Contact />} />
    </Routes>
  );
}

export default RoutesComponent;
